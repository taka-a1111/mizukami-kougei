import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { newsList } from "@/lib/news";

export default function HomePage() {
  return (
    <>
      {/* ===== ヒーロー ===== */}
      <section className="hero-bg h-[600px] flex items-center justify-center relative">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-serif tracking-widest mb-6 text-ink leading-relaxed">
            建具業界の次の100年を作る。
          </h1>
          <p className="text-sm md:text-base text-ink-mid tracking-wider">
            建具の全てを水上工芸で
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
                desc: "私たちは、建具工事を通して現場の課題を解決し、職人の技術と誇りを未来へ継承します。",
              },
              {
                en: "MISSION",
                jp: "ミッション",
                desc: "職人不足や高齢化といった課題が進む建具業界において、私たちは“次世代型の工務店”として、技術・組織力・人材育成を強みに業界を支える存在を目指します。",
              },
              {
                en: "VALUE",
                jp: "バリュー",
                desc: "現場・職人・お客様、すべてを一つのチームとして考えます。自分の役割だけに留まらず、仲間や現場の課題に主体的に向き合います。",
              },
            ].map((item) => (
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
                <p className="text-sm text-ink-mid leading-loose text-left">
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
            <h2 className="section-title leading-relaxed">
              チーム力と最適な選択で現場課題に向き合い、効率性と働きやすさを両立します
            </h2>
          </ScrollReveal>

          <ScrollReveal className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] bg-border-gray flex items-center justify-center">
              <span className="text-xs text-ink-mid">
                道具・作業風景の写真
              </span>
            </div>
            <div>
              <div className="space-y-4 text-sm text-ink-mid leading-loose">
                <p>
                  最新の道具を積極的に取り入れ、施工の効率化と品質向上を追求しています。職人の技術に加え、最適なツールを活用することで、より高い完成度の施工を実現しています。
                </p>
                <p>
                  また、個々の力に依存するのではなく、チームとして現場の課題に向き合い、状況に応じた最善の判断を重ねることを大切にしています。多様な選択肢の中から最適解を導き出すことで、安定した品質と柔軟な対応力を両立しています。
                </p>
                <p>
                  さらに、現場への直行直帰を基本とし、業務効率の向上だけでなく、メンバー一人ひとりの働きやすさにも配慮しています。仕事とプライベートのバランスを尊重し、持続可能な働き方を実現しています。
                </p>
              </div>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "薮下 敬介", years: "入社1年目" },
              { name: "神戸 啓宏", years: "入社1年目" },
              { name: "恒石 誠", years: "入社2年目" },
              { name: "小坂 佳大", years: "入社1年目" },
            ].map((staff, i) => (
              <ScrollReveal key={i} className="bg-white">
                <div className="aspect-[4/3] bg-border-gray flex items-center justify-center">
                  <span className="text-xs text-ink-mid">
                    スタッフ写真{i + 1}
                  </span>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-base font-serif mb-2">{staff.name}</h3>
                  <p className="text-xs text-ink-mid">{staff.years}</p>
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
                num: "①",
                title: "内装建具工事",
                desc: "住宅・店舗・オフィスの内装建具工事を一貫対応。年間25,000枚の施工実績に基づくノウハウで、大規模工事から戸建てまで、スピーディーかつ安定した品質の空間づくりを実現します。",
              },
              {
                num: "②",
                title: "キズ補修工事",
                desc: "建具・床・壁などのキズやへこみを、部分補修で美しく復元。また、張替えや交換にも対応し、状況に応じた最適なご提案であらゆる局面に対応します。",
              },
              {
                num: "③",
                title: "アフターメンテナンス",
                desc: "建具工事と補修工事のノウハウを活かし、不具合や経年劣化にも柔軟に対応。窓口を一本化することで、手間を軽減し、スピーディーかつ低コストでの対応を実現します。",
              },
            ].map((service, i) => (
              <ScrollReveal
                key={i}
                className="bg-[#fafafa] p-10 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-border-gray flex items-center justify-center">
                  <span className="text-[10px] tracking-widest text-ink-mid">
                    {service.num}
                  </span>
                </div>
                <h3 className="text-lg font-serif mb-4">{service.title}</h3>
                <p className="text-sm text-ink-mid leading-loose text-left">
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
                  <span className="px-3 py-1 text-[10px] tracking-wider w-20 text-center shrink-0 bg-ink text-white">
                    {news.category}
                  </span>
                  <span className="flex-1">{news.title}</span>
                </li>
              ))}
            </ul>
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
              建具製作・補修・お見積りに関するご相談など、
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
