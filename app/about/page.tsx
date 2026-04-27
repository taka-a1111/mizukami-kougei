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
              <p className="text-lg font-serif leading-loose mb-6">
                空間には、人の想いが宿る。
                <br />
                私たちは、その想いを形にする職人集団です。
              </p>
              <div className="space-y-4 text-sm text-ink-mid leading-loose">
                <p>
                  創業以来、私たちは「誠実なものづくり」を信条に、店舗やオフィス、商業施設の内装施工に携わってまいりました。
                </p>
                <p>
                  内装工事は、建物に命を吹き込む仕事です。壁一枚、床一面に至るまで、そこで過ごす人々の快適さを考え、施主様の想いを汲み取りながら、一つひとつ丁寧に仕上げていきます。
                </p>
                <p>
                  時代とともに求められる空間は変化しますが、「良い仕事をする」という基本姿勢は変わりません。これからも技術を磨き続け、お客様に感動していただける空間づくりに邁進してまいります。
                </p>
              </div>
              <p className="text-right mt-8">
                <span className="text-xs text-ink-mid">代表取締役</span>
                <br />
                <span className="text-lg font-serif tracking-wider">
                  水上 太郎
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
                  { label: "会社名", value: "株式会社水上工芸" },
                  { label: "代表者", value: "代表取締役 水上 太郎" },
                  { label: "設立", value: "1985年4月" },
                  { label: "資本金", value: "3,000万円" },
                  { label: "従業員数", value: "30名（2025年1月現在）" },
                  {
                    label: "事業内容",
                    value: (
                      <>
                        店舗・オフィス・商業施設の内装設計・施工
                        <br />
                        リノベーション工事
                        <br />
                        什器・家具製作
                      </>
                    ),
                  },
                  {
                    label: "許可・資格",
                    value: (
                      <>
                        建設業許可 東京都知事許可（般-00）第000000号
                        <br />
                        一級建築施工管理技士 在籍
                      </>
                    ),
                  },
                  {
                    label: "主要取引先",
                    value: "○○株式会社、株式会社○○、○○グループ 他",
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

      {/* 沿革 */}
      <section className="py-24 bg-white">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <ScrollReveal className="text-center mb-12">
            <p className="section-label mb-3">HISTORY</p>
            <h2 className="section-title">沿革</h2>
          </ScrollReveal>

          <ScrollReveal className="max-w-3xl mx-auto">
            <ul className="space-y-0">
              {[
                { year: "1985年", text: "東京都〇〇区にて水上工芸創業" },
                { year: "1990年", text: "法人化し、株式会社水上工芸を設立" },
                { year: "1998年", text: "本社を現所在地に移転" },
                { year: "2005年", text: "大型商業施設の内装工事に本格参入" },
                { year: "2010年", text: "設立25周年、従業員数20名に" },
                { year: "2018年", text: "自社工房を開設、什器製作部門を強化" },
                { year: "2023年", text: "横浜営業所を開設" },
              ].map((item, i) => (
                <li
                  key={i}
                  className="grid grid-cols-[120px_1fr] gap-6 py-5 border-b border-border-light"
                >
                  <span className="font-serif text-base tracking-wider">
                    {item.year}
                  </span>
                  <span className="text-sm text-ink-mid">{item.text}</span>
                </li>
              ))}
            </ul>
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

          <ScrollReveal className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                name: "本社",
                en: "HEAD OFFICE",
                zip: "〒000-0000",
                address: "東京都〇〇区〇〇町0-0-0 〇〇ビル3F",
                tel: "03-XXXX-XXXX",
                fax: "03-XXXX-XXXX",
                hours: "9:00〜18:00（土日祝休）",
              },
              {
                name: "横浜営業所",
                en: "YOKOHAMA OFFICE",
                zip: "〒000-0000",
                address: "神奈川県横浜市〇〇区〇〇町0-0-0",
                tel: "045-XXX-XXXX",
                fax: "045-XXX-XXXX",
                hours: "9:00〜18:00（土日祝休）",
              },
            ].map((loc, i) => (
              <div key={i} className="bg-white p-8">
                <div className="border-b border-ink pb-4 mb-6">
                  <h3 className="text-xl font-serif">{loc.name}</h3>
                  <p className="text-[10px] tracking-widest text-ink-mid mt-1">
                    {loc.en}
                  </p>
                </div>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-xs text-ink-mid mb-1">住所</dt>
                    <dd>
                      {loc.zip}
                      <br />
                      {loc.address}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-ink-mid mb-1">TEL</dt>
                    <dd>{loc.tel}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-ink-mid mb-1">FAX</dt>
                    <dd>{loc.fax}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-ink-mid mb-1">営業時間</dt>
                    <dd>{loc.hours}</dd>
                  </div>
                </dl>
              </div>
            ))}
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
            <div className="aspect-[16/9] bg-border-gray flex items-center justify-center mb-8">
              <span className="text-xs text-ink-mid">Google Maps 埋め込み</span>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-base font-serif mb-3">電車でお越しの場合</h3>
                <ul className="space-y-2 text-sm text-ink-mid">
                  <li>○○線「○○駅」徒歩5分</li>
                  <li>○○線「○○駅」徒歩8分</li>
                </ul>
              </div>
              <div>
                <h3 className="text-base font-serif mb-3">お車でお越しの場合</h3>
                <ul className="space-y-2 text-sm text-ink-mid">
                  <li>首都高速「○○出口」より約10分</li>
                  <li>※近隣にコインパーキングあり</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
