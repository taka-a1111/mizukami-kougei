import Link from "next/link";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import { interviews } from "@/lib/recruit";

export function generateStaticParams() {
  return interviews.map((person) => ({
    id: person.id,
  }));
}

export default function InterviewDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const person = interviews.find((p) => p.id === params.id);
  if (!person) notFound();

  const otherInterviews = interviews.filter((p) => p.id !== params.id);

  return (
    <>
      {/* パンくず */}
      <div className="bg-[#fafafa] border-b border-border-light">
        <div className="max-w-content mx-auto px-6 md:px-10 py-3">
          <nav className="text-xs text-ink-mid">
            <Link href="/" className="hover:text-ink">
              TOP
            </Link>
            <span className="mx-2">›</span>
            <Link href="/recruit" className="hover:text-ink">
              採用情報
            </Link>
            <span className="mx-2">›</span>
            <Link href="/recruit#interview" className="hover:text-ink">
              社員インタビュー
            </Link>
            <span className="mx-2">›</span>
            <span>{person.name}</span>
          </nav>
        </div>
      </div>

      {/* ヒーロー */}
      <section className="grid md:grid-cols-2 h-[500px]">
        <div className="bg-border-gray flex items-center justify-center">
          <span className="text-sm text-ink-mid">
            インタビュー写真（大）
          </span>
        </div>
        <div className="hero-bg p-12 md:p-16 flex flex-col justify-center">
          <p className="text-xs tracking-widest text-ink-mid mb-3">
            {person.department} / {person.years}
          </p>
          <h1 className="text-3xl md:text-4xl font-serif tracking-wider mb-8">
            {person.name}
          </h1>
          <p className="text-base md:text-lg font-serif leading-loose">
            {person.catchphrase}
          </p>
        </div>
      </section>

      {/* プロフィール */}
      <section className="py-16 bg-white">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <ScrollReveal className="grid md:grid-cols-[200px_1fr] gap-10 items-start max-w-3xl mx-auto">
            <div className="aspect-square rounded-full bg-border-gray flex items-center justify-center">
              <span className="text-xs text-ink-mid">プロフィール写真</span>
            </div>
            <table className="w-full text-sm">
              <tbody>
                <tr className="border-b border-border-light">
                  <th className="text-left text-ink-mid font-normal w-1/4 py-3">
                    氏名
                  </th>
                  <td className="py-3">
                    {person.name}（{person.nameKana}）
                  </td>
                </tr>
                <tr className="border-b border-border-light">
                  <th className="text-left text-ink-mid font-normal py-3">
                    所属
                  </th>
                  <td className="py-3">{person.department}</td>
                </tr>
                <tr className="border-b border-border-light">
                  <th className="text-left text-ink-mid font-normal py-3">
                    入社
                  </th>
                  <td className="py-3">{person.profile.joinedAs}</td>
                </tr>
                {person.profile.previousJob && (
                  <tr className="border-b border-border-light">
                    <th className="text-left text-ink-mid font-normal py-3">
                      前職
                    </th>
                    <td className="py-3">{person.profile.previousJob}</td>
                  </tr>
                )}
                {person.profile.hometown && (
                  <tr className="border-b border-border-light">
                    <th className="text-left text-ink-mid font-normal py-3">
                      出身地
                    </th>
                    <td className="py-3">{person.profile.hometown}</td>
                  </tr>
                )}
                {person.profile.hobby && (
                  <tr className="border-b border-border-light">
                    <th className="text-left text-ink-mid font-normal py-3">
                      趣味
                    </th>
                    <td className="py-3">{person.profile.hobby}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </ScrollReveal>
        </div>
      </section>

      {/* Q&A */}
      <section className="py-16 bg-white">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="max-w-3xl mx-auto space-y-12">
            {person.qa.map((item, i) => (
              <ScrollReveal key={i}>
                <div className="grid grid-cols-[40px_1fr] gap-4">
                  <span className="font-serif text-2xl text-ink-mid">Q</span>
                  <h3 className="text-lg font-serif">{item.q}</h3>
                </div>
                <div className="grid grid-cols-[40px_1fr] gap-4 mt-4">
                  <span></span>
                  <div className="space-y-3 text-sm text-ink-mid leading-loose">
                    {item.a.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </div>
                {i === 1 && (
                  <div className="mt-8 aspect-video bg-border-gray flex items-center justify-center ml-12">
                    <span className="text-xs text-ink-mid">作業風景の写真</span>
                  </div>
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 1日のスケジュール */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <ScrollReveal className="text-center mb-12">
            <p className="section-label mb-3">DAILY SCHEDULE</p>
            <h2 className="section-title">1日のスケジュール</h2>
          </ScrollReveal>

          <ScrollReveal className="max-w-2xl mx-auto">
            <ul className="space-y-0">
              {person.schedule.map((item, i) => (
                <li
                  key={i}
                  className="grid grid-cols-[80px_24px_1fr] gap-4 items-start py-5 border-b border-border-light"
                >
                  <span className="font-serif text-base">{item.time}</span>
                  <span className="w-3 h-3 rounded-full bg-ink mt-1.5"></span>
                  <div>
                    <h3 className="text-base font-serif mb-1">{item.title}</h3>
                    {item.description && (
                      <p className="text-xs text-ink-mid">
                        {item.description}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* メッセージ */}
      <section className="py-24 bg-white">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <ScrollReveal className="max-w-2xl mx-auto text-center">
            <p className="section-label mb-3">MESSAGE TO APPLICANTS</p>
            <p className="text-base md:text-lg font-serif leading-loose">
              {person.message.split("。").filter(Boolean).map((s, i, arr) => (
                <span key={i}>
                  {s}。{i < arr.length - 1 && <br />}
                </span>
              ))}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 他の社員インタビュー */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <ScrollReveal className="text-center mb-12">
            <p className="section-label mb-3">OTHER INTERVIEWS</p>
            <h2 className="section-title">他の社員インタビュー</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {otherInterviews.map((p) => (
              <ScrollReveal key={p.id}>
                <Link
                  href={`/recruit/interview/${p.id}`}
                  className="grid grid-cols-[120px_1fr] bg-white hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-square bg-border-gray flex items-center justify-center">
                    <span className="text-xs text-ink-mid">スタッフ写真</span>
                  </div>
                  <div className="p-4">
                    <p className="text-[10px] text-ink-mid mb-1">
                      {p.department} / {p.years}
                    </p>
                    <h3 className="font-serif mb-2">{p.name}</h3>
                    <p className="text-xs text-ink-mid mb-2 leading-relaxed line-clamp-2">
                      {p.catchphrase.replace(/「|」/g, "")}
                    </p>
                    <span className="inline-block text-xs border-b border-ink pb-0.5">
                      インタビューを読む →
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/recruit"
              className="inline-block border border-ink px-10 py-3 text-sm tracking-wider hover:bg-ink hover:text-white transition-colors"
            >
              ← 採用情報に戻る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
