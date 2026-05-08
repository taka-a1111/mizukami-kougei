import { notFound } from "next/navigation";
import Link from "next/link";
import { interviews } from "@/lib/recruit";
import ScrollReveal from "@/components/ScrollReveal";

export function generateStaticParams() {
  return interviews.map((iv) => ({ id: iv.id }));
}

export default function InterviewPage({ params }: { params: { id: string } }) {
  const interview = interviews.find((iv) => iv.id === params.id);
  if (!interview) return notFound();

  return (
    <main>
      {/* HERO */}
      <section className="bg-neutral-100 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm tracking-widest text-neutral-500 mb-4">INTERVIEW</p>
          <h1 className="text-3xl md:text-4xl font-serif mb-6">社員インタビュー</h1>
          <nav className="text-xs text-neutral-500">
            <Link href="/" className="hover:text-neutral-900">
              TOP
            </Link>
            <span className="mx-2">›</span>
            <Link href="/recruit" className="hover:text-neutral-900">
              採用情報
            </Link>
            <span className="mx-2">›</span>
            <span>{interview.name}</span>
          </nav>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-sm text-neutral-500 mb-2">{interview.years}</p>
            <p className="text-sm text-neutral-600 mb-6">{interview.subtitle}</p>
            <h2 className="text-3xl md:text-5xl font-serif leading-relaxed mb-8">
              「{interview.title}」
            </h2>
            <p className="text-lg text-neutral-700">{interview.name}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTIONS */}
      <article className="pb-20 md:pb-28 bg-white">
        <div className="max-w-3xl mx-auto px-6 space-y-12">
          {interview.sections.map((sec, i) => {
            if (sec.type === "intro" || sec.type === "closing") {
              return (
                <ScrollReveal key={i}>
                  <div className="text-neutral-800 leading-loose whitespace-pre-line">
                    {sec.content}
                  </div>
                </ScrollReveal>
              );
            }
            if (sec.type === "h2") {
              return (
                <ScrollReveal key={i}>
                  <h3 className="text-2xl md:text-3xl font-serif mb-6 leading-relaxed">
                    {sec.title}
                  </h3>
                  <div className="text-neutral-800 leading-loose whitespace-pre-line">
                    {sec.content}
                  </div>
                </ScrollReveal>
              );
            }
            if (sec.type === "photo") {
              // 写真は画像未設定時はグレーボックスのプレースホルダーを表示
              return (
                <ScrollReveal key={i}>
                  <figure className="my-8">
                    <div className="aspect-[16/9] bg-neutral-100 flex items-center justify-center text-neutral-400 text-xs">
                      写真エリア
                    </div>
                    {sec.caption && (
                      <figcaption className="text-xs text-neutral-500 mt-2 text-center">
                        {sec.caption}
                      </figcaption>
                    )}
                  </figure>
                </ScrollReveal>
              );
            }
            return null;
          })}
        </div>
      </article>

      {/* SHARE & BACK */}
      <section className="py-12 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-3xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="text-xs tracking-widest text-neutral-500">SHARE</span>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Share on X"
                className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-700 hover:border-neutral-900 hover:text-neutral-900 transition text-sm"
              >
                X
              </a>
              <a
                href="#"
                aria-label="Share on Facebook"
                className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-700 hover:border-neutral-900 hover:text-neutral-900 transition text-sm"
              >
                f
              </a>
              <a
                href="#"
                aria-label="Share on LINE"
                className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-700 hover:border-neutral-900 hover:text-neutral-900 transition text-sm"
              >
                L
              </a>
            </div>
          </div>
          <Link
            href="/recruit#interview"
            className="text-sm text-neutral-700 hover:text-neutral-900"
          >
            ← 採用ページへ戻る
          </Link>
        </div>
      </section>
    </main>
  );
}
