import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        label="PRIVACY POLICY"
        title="プライバシーポリシー"
        breadcrumb={[
          { label: "TOP", href: "/" },
          { label: "プライバシーポリシー" },
        ]}
      />

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <ScrollReveal>
            <p className="text-sm text-ink-mid leading-loose mb-12">
              株式会社水上工芸（以下「当社」といいます）は、お客様の個人情報の保護を重要な責務と認識し、以下のとおりプライバシーポリシーを定め、個人情報の適切な取り扱いと保護に努めます。
            </p>

            {[
              {
                no: 1,
                title: "個人情報の定義",
                content: (
                  <p>
                    本プライバシーポリシーにおいて「個人情報」とは、個人情報保護法に定める個人情報を指し、生存する個人に関する情報であって、氏名、生年月日、住所、電話番号、メールアドレス、その他の記述等により特定の個人を識別できる情報をいいます。
                  </p>
                ),
              },
              {
                no: 2,
                title: "個人情報の収集",
                content: (
                  <>
                    <p className="mb-4">
                      当社は、以下の場合に個人情報を収集することがあります。
                    </p>
                    <ul className="space-y-2 pl-4">
                      <li>・お問い合わせフォームからのご連絡</li>
                      <li>・採用エントリーフォームからのご応募</li>
                      <li>・お見積もり・ご相談のお申し込み</li>
                      <li>・メールマガジンの登録</li>
                      <li>・その他、当社サービスのご利用</li>
                    </ul>
                  </>
                ),
              },
              {
                no: 3,
                title: "個人情報の利用目的",
                content: (
                  <>
                    <p className="mb-4">
                      当社は、収集した個人情報を以下の目的で利用いたします。
                    </p>
                    <ul className="space-y-2 pl-4">
                      <li>・お問い合わせへの回答、ご連絡</li>
                      <li>・採用選考の実施、採用に関するご連絡</li>
                      <li>・お見積もりの作成、サービスのご提供</li>
                      <li>・当社サービスに関するご案内</li>
                      <li>・サービス向上のための分析・調査</li>
                      <li>・法令に基づく対応</li>
                    </ul>
                  </>
                ),
              },
              {
                no: 4,
                title: "個人情報の第三者提供",
                content: (
                  <>
                    <p className="mb-4">
                      当社は、以下の場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
                    </p>
                    <ul className="space-y-2 pl-4">
                      <li>・法令に基づく場合</li>
                      <li>・人の生命、身体または財産の保護のために必要な場合</li>
                      <li>・公衆衛生の向上または児童の健全な育成の推進のために必要な場合</li>
                      <li>
                        ・国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合
                      </li>
                    </ul>
                  </>
                ),
              },
              {
                no: 5,
                title: "個人情報の安全管理",
                content: (
                  <p>
                    当社は、個人情報の漏えい、滅失、毀損の防止その他の個人情報の安全管理のために、必要かつ適切な措置を講じます。また、個人情報を取り扱う従業員に対して、必要かつ適切な監督を行います。
                  </p>
                ),
              },
              {
                no: 6,
                title: "個人情報の開示・訂正・削除",
                content: (
                  <>
                    <p className="mb-4">
                      お客様は、当社が保有するご自身の個人情報について、開示、訂正、追加、削除、利用停止を請求することができます。ご請求いただいた場合は、ご本人確認の上、合理的な期間内に対応いたします。
                    </p>
                    <div className="border-l-4 border-ink pl-4 mt-4">
                      <p className="font-medium mb-2">請求手続きについて</p>
                      <p>
                        開示等のご請求は、下記のお問い合わせ窓口までご連絡ください。所定の手続きをご案内いたします。なお、ご本人確認のため、運転免許証等の身分証明書の提示をお願いする場合があります。
                      </p>
                    </div>
                  </>
                ),
              },
              {
                no: 7,
                title: "Cookieの使用について",
                content: (
                  <>
                    <p className="mb-4">
                      当社ウェブサイトでは、サービス向上のためCookieを使用することがあります。Cookieはお客様のブラウザに保存される小さなテキストファイルであり、個人を特定する情報は含まれません。
                    </p>
                    <p>
                      お客様はブラウザの設定によりCookieの受け取りを拒否することができますが、その場合、当社ウェブサイトの一部機能がご利用いただけなくなることがあります。
                    </p>
                  </>
                ),
              },
              {
                no: 8,
                title: "プライバシーポリシーの変更",
                content: (
                  <p>
                    当社は、法令の変更や事業内容の変更等に伴い、本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当社ウェブサイトに掲載した時点から効力を生じるものとします。
                  </p>
                ),
              },
            ].map((section) => (
              <div key={section.no} className="mb-12">
                <h2 className="text-lg font-serif border-b border-ink pb-3 mb-6">
                  {section.no}. {section.title}
                </h2>
                <div className="text-sm text-ink-mid leading-loose">
                  {section.content}
                </div>
              </div>
            ))}

            {/* お問い合わせ窓口 */}
            <div className="bg-[#fafafa] p-8 mt-12">
              <h3 className="font-serif mb-4">個人情報に関するお問い合わせ窓口</h3>
              <div className="text-sm leading-loose">
                <p>株式会社水上工芸　個人情報保護担当</p>
                <p>〒000-0000　東京都〇〇区〇〇町0-0-0</p>
                <p>TEL: 03-XXXX-XXXX（受付時間：平日9:00〜18:00）</p>
                <p>
                  E-mail:{" "}
                  <a
                    href="mailto:privacy@mizukami-kougei.co.jp"
                    className="underline hover:text-ink-mid"
                  >
                    privacy@mizukami-kougei.co.jp
                  </a>
                </p>
              </div>
            </div>

            <div className="text-right mt-8 text-xs text-ink-mid space-y-1">
              <p>制定日：2020年4月1日</p>
              <p>最終改定日：2024年1月1日</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
