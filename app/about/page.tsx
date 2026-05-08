import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="ABOUT"
        title="会社情報"
        breadcrumb={[
          { label: "TOP", href: "/" },
          { label: "会社情報" },
        ]}
      />

      {/* 代表メッセージ */}
      <section className="py-24 bg-white">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <ScrollReveal className="text-center mb-12">
            <p className="section-label mb-3">MESSAGE</p>
            <h2 className="section-title">代表メッセージ</h2>
          </ScrollReveal>

          <ScrollReveal className="grid md:grid-cols-[300px_1fr] gap-12 items-start max-w-4xl mx-auto">
            <div className="aspect-[3/4] bg-border-gray flex items-center justify-center">
              <span className="text-xs text-ink-mid">代表者写真</span>
            </div>
            <div>
              <div className="space-y-4 text-sm text-ink-mid leading-loose">
                <p>
                  職人の世界では、それぞれが自身の仕事に集中するあまり、「チーム」として機能していない場面を数多く見てきました。だからこそ私は、ワンチームで現場に向き合うことができれば、より効率的で、より気持ちよく働ける環境が実現できるのではないかと考えています。
                </p>
                <p>
                  私たちが大切にしているのは、常に顧客目線を持ち続けることです。現場で起きるあらゆる困りごとを自分ごととして捉え、「どうすれば最も美しく仕上がるか」「どうすれば現場が円滑に進むか」を考え抜きながら、一つひとつの仕事に向き合っています。
                </p>
                <p>
                  水上工芸は、すべての現場に真摯に向き合い、最後まで責任を持ってやり遂げることを信条としています。予期せぬ課題が発生することも少なくありませんが、そのような場面にこそチームの力が発揮されます。個々が独立して動くのではなく、互いに連携しながら課題を解決し、完工へと導く。それが私たちの変わらない仕事のスタンスです。
                </p>
                <p>
                  今後も、技術とチームワークの両輪で、より良い施工と価値提供を追求してまいります。
                </p>
              </div>
              <p className="text-right mt-8">
                <span className="text-xs text-ink-mid">代表取締役</span>
                <br />
                <span className="text-lg font-serif tracking-wider">
                  水上 崇
                </span>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 会社概要 */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <ScrollReveal className="text-center mb-12">
            <p className="section-label mb-3">COMPANY</p>
            <h2 className="section-title">会社概要</h2>
          </ScrollReveal>

          <ScrollReveal className="max-w-3xl mx-auto bg-white">
            <table className="w-full text-sm">
              <tbody>
                {[
                  { label: "会社名", value: "水上工芸株式会社" },
                  { label: "代表者", value: "代表取締役 水上 崇" },
                  { label: "設立", value: "2023年6月" },
                  { label: "資本金", value: "1万円" },
                  { label: "従業員数", value: "8名" },
                  {
                    label: "事業内容",
                    value: "内装建具工事 / キズ補修工事 / 図面製作",
                  },
                  {
                    label: "所在地",
                    value: (
                      <>
                        〒516-0079
                        <br />
                        三重県伊勢市大世古1-9-1 CASA+α 外宮111
                      </>
                    ),
                  },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-[#DDDDDD]">
                    <th className="text-left text-ink-mid font-normal w-1/3 px-6 py-5 align-top bg-[#F0F0EE]">
                      {row.label}
                    </th>
                    <td className="px-6 py-5 leading-relaxed">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ScrollReveal>
        </div>
      </section>

      {/* 拠点情報 */}
      <section className="py-24 bg-[#F8F8F6]">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <ScrollReveal className="text-center mb-12">
            <p className="section-label mb-3">LOCATIONS</p>
            <h2 className="section-title">拠点情報</h2>
          </ScrollReveal>

          <ScrollReveal className="max-w-md mx-auto">
            <div className="bg-white p-8">
              <div className="border-b border-ink pb-4 mb-6">
                <h3 className="text-xl font-serif">本社</h3>
                <p className="text-[10px] tracking-widest text-ink-mid mt-1">
                  HEAD OFFICE
                </p>
              </div>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-xs text-ink-mid mb-1">住所</dt>
                  <dd>
                    〒516-0079
                    <br />
                    三重県伊勢市大世古1-9-1 CASA+α 外宮111
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-ink-mid mb-1">TEL</dt>
                  <dd>080-7935-4499</dd>
                </div>
              </dl>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* アクセスマップ */}
      <section className="py-24 bg-white">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <ScrollReveal className="text-center mb-12">
            <p className="section-label mb-3">ACCESS</p>
            <h2 className="section-title">アクセスマップ</h2>
          </ScrollReveal>

          <ScrollReveal className="max-w-4xl mx-auto">
            <div className="aspect-[16/9] bg-border-gray flex items-center justify-center">
              <span className="text-xs text-ink-mid">Google Maps 埋め込み</span>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
