import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { newsList } from "@/lib/news";

export default function HomePage() {
  return (
    <>
      {/* ===== ヒーロー ===== */}
      <section className="hero-bg h-[600px] flex items-center justify-center relative">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-serif tracking-widest mb-6 text-ink">
            空間に、想いを刻む
          </h1>
          <p className="text-sm md:text-base text-ink-mid tracking-wider">
            内装施工のプロフェッショナル集団
          </p>
        </div>
        <p className="absolute bottom-6 right-6 text-[10px] text-ink-mid">
          ※実際の施工写真またはイメージ画像
        </p>
      </section>

      {/* ===== PHILOSOPHY ===== */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <ScrollReveal className="text-center mb-16">
            <p className="section-label mb-3">PHILOSOPHY</p>
            <h2 className="section-title">私たちの想い</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                en: "VISION",
                jp: "ビジョン",
                desc: "空間づくりを通じて、人々の暮らしと働く場所に感動を届ける",
              },
              {
                en: "MISSION",
                jp: "ミッション",
                desc: "確かな技術と誠実な姿勢で、お客様の理想を形にする",
              },
              {
                en: "VALUE",
                jp: "バリュー",
                desc: "妥協なき品質、真摯なコミュニケーション、継続的な成長",
              },
            ].map((item, i) => (
              <ScrollReveal
                key={item.en}
                className="bg-white p-10 text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-beige-light flex items-center justify-center">
                  <span className="text-[10px] tracking-widest text-ink-mid">
                    ICON
                  </span>
                </div>
                <p className="section-label mb-2">{item.en}</p>
                <h3 className="text-lg font-serif mb-4">{item.jp}</h3>
                <p className="text-sm text-ink-mid leading-relaxed">
                  {item.desc}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMMITMENT ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <ScrollReveal className="text-center mb-16">
            <p className="section-label mb-3">COMMITMENT</p>
            <h2 className="section-title">道具へのこだわり</h2>
          </ScrollReveal>

          <ScrollReveal className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] bg-border-gray flex items-center justify-center">
              <span className="text-xs text-ink-mid">
                道具・作業風景の写真
              </span>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-6">
                職人の手から生まれる品質
              </h3>
              <p className="text-sm text-ink-mid leading-loose mb-4">
                私たちは道具を単なる作業器具とは考えていません。職人の手の延長として、想いを形にするパートナーです。
              </p>
              <p className="text-sm text-ink-mid leading-loose">
                長年使い込んだ鉋、繊細な作業に欠かせない墨壺。一つひとつの道具に愛着を持ち、日々の手入れを欠かしません。この姿勢が、細部まで妥協のない仕上がりを生み出します。
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== PEOPLE ===== */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <ScrollReveal className="text-center mb-16">
            <p className="section-label mb-3">PEOPLE</p>
            <h2 className="section-title">水上工芸の職人たち</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "施工管理 / 入社12年目",
                name: "山田 太郎",
                quote: "お客様の「ありがとう」が何よりのやりがいです。",
              },
              {
                title: "内装職人 / 入社8年目",
                name: "佐藤 花子",
                quote: "一つひとつの現場に、全力で向き合っています。",
              },
              {
                title: "設計担当 / 入社5年目",
                name: "鈴木 一郎",
                quote: "お客様の想いを図面に落とし込む喜び。",
              },
            ].map((staff, i) => (
              <ScrollReveal key={i} className="bg-white">
                <div className="aspect-[4/3] bg-border-gray flex items-center justify-center">
                  <span className="text-xs text-ink-mid">
                    スタッフ写真{i + 1}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-ink-mid mb-2">{staff.title}</p>
                  <h3 className="text-lg font-serif mb-3">{staff.name}</h3>
                  <p className="text-sm text-ink-mid leading-relaxed">
                    {staff.quote}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICE ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <ScrollReveal className="text-center mb-16">
            <p className="section-label mb-3">SERVICE</p>
            <h2 className="section-title">事業内容</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "店舗内装",
                desc: "飲食店、物販店、サービス店舗など、業態に合わせた最適な空間をご提案",
              },
              {
                title: "オフィス内装",
                desc: "働きやすさと企業イメージを両立したオフィス空間を実現",
              },
              {
                title: "商業施設",
                desc: "大規模商業施設の内装工事にも豊富な実績",
              },
            ].map((service, i) => (
              <ScrollReveal
                key={i}
                className="bg-[#fafafa] p-10 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-border-gray flex items-center justify-center">
                  <span className="text-[10px] tracking-widest text-ink-mid">
                    ICON
                  </span>
                </div>
                <h3 className="text-lg font-serif mb-4">{service.title}</h3>
                <p className="text-sm text-ink-mid leading-relaxed">
                  {service.desc}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEWS ===== */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <ScrollReveal className="text-center mb-16">
            <p className="section-label mb-3">NEWS</p>
            <h2 className="section-title">お知らせ</h2>
          </ScrollReveal>

          <ScrollReveal className="max-w-3xl mx-auto">
            <ul className="bg-white">
              {newsList.map((news, i) => (
                <li
                  key={i}
                  className="border-b border-border-light last:border-b-0 px-6 py-5 flex items-center gap-6 text-sm"
                >
                  <span className="text-ink-mid w-24 shrink-0">
                    {news.date}
                  </span>
                  <span
                    className={`px-3 py-1 text-[10px] tracking-wider w-20 text-center shrink-0 ${
                      news.category === "施工事例"
                        ? "bg-ink text-white"
                        : news.category === "採用"
                        ? "bg-ink-mid text-white"
                        : "bg-ink text-white"
                    }`}
                  >
                    {news.category}
                  </span>
                  <span className="flex-1">{news.title}</span>
                </li>
              ))}
            </ul>
            <div className="text-center mt-10">
              <Link
                href="#"
                className="inline-block border border-ink px-10 py-3 text-sm tracking-wider hover:bg-ink hover:text-white transition-colors"
              >
                お知らせ一覧を見る
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CONTACT CTA ===== */}
      <section className="py-24 hero-bg">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <ScrollReveal className="text-center max-w-2xl mx-auto">
            <p className="section-label mb-3">CONTACT</p>
            <h2 className="section-title mb-6">お気軽にお問い合わせください</h2>
            <p className="text-sm text-ink-mid leading-loose mb-10">
              内装施工・リノベーション・お見積りに関するご相談など、
              <br />
              どんなことでもお気軽にお問い合わせください。
            </p>
            <Link
              href="/contact"
              className="inline-block bg-ink text-white px-12 py-4 text-sm tracking-wider hover:bg-ink-mid transition-colors"
            >
              お問い合わせはこちら →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
