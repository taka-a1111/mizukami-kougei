export type WorkCategory = "飲食店" | "物販店" | "オフィス" | "商業施設" | "その他";

export interface Work {
  id: string;
  title: string;
  category: WorkCategory;
  location: string;
  year: string;
  area?: string;
  client?: string;
  period?: string;
  scope?: string;
  materials?: string;
  overview?: string;
  challenges?: string[];
  solutions?: string[];
}

export const works: Work[] = [
  {
    id: "shibuya-cafe",
    title: "渋谷区 カフェ「○○」様 新規出店内装工事",
    category: "飲食店",
    location: "東京都渋谷区",
    year: "2025年",
    area: "約45坪",
    client: "株式会社○○（カフェ「○○」運営）",
    period: "2024年11月〜2025年1月（約2ヶ月）",
    scope: "内装設計・施工一式、家具造作、照明計画",
    materials: "オーク突板、モルタル、真鍮、和紙",
    overview:
      "渋谷の裏通りに位置するカフェの新規出店工事を担当いたしました。オーナー様の「落ち着きながらも、どこか新しさを感じる空間」というご要望を形にするため、和モダンをベースにしたデザインをご提案。天然木を多用した温かみのある空間に、コンクリートの打ちっぱなしをアクセントとして取り入れました。",
    challenges: [
      "既存のスケルトン物件の天井高を活かしたい",
      "限られた予算内で高級感を演出したい",
      "厨房からホールへの動線を効率化したい",
      "周辺店舗との差別化を図りたい",
    ],
    solutions: [
      "天井をあえて張らずスケルトン仕上げに",
      "木材は無垢材ではなく突板を使用しコスト削減",
      "カウンター配置を工夫し回遊性を確保",
      "和のテイストを取り入れた独自の空間デザイン",
    ],
  },
  {
    id: "it-office",
    title: "IT企業 オフィス移転リノベーション",
    category: "オフィス",
    location: "東京都港区",
    year: "2024年",
    area: "約120坪",
  },
  {
    id: "apparel-shop",
    title: "アパレルショップ 新規出店",
    category: "物販店",
    location: "神奈川県横浜市",
    year: "2024年",
    area: "約30坪",
  },
  {
    id: "japanese-restaurant",
    title: "日本料理店「○○」様 改装工事",
    category: "飲食店",
    location: "東京都新宿区",
    year: "2024年",
    area: "約60坪",
  },
  {
    id: "shopping-mall",
    title: "ショッピングモール 共用部改修",
    category: "商業施設",
    location: "埼玉県さいたま市",
    year: "2024年",
    area: "約200坪",
  },
  {
    id: "italian-restaurant",
    title: "イタリアンレストラン 新規出店",
    category: "飲食店",
    location: "東京都目黒区",
    year: "2024年",
    area: "約50坪",
  },
  {
    id: "coworking",
    title: "コワーキングスペース 内装設計",
    category: "オフィス",
    location: "東京都千代田区",
    year: "2023年",
    area: "約80坪",
  },
  {
    id: "jewelry-shop",
    title: "ジュエリーショップ リニューアル",
    category: "物販店",
    location: "東京都中央区",
    year: "2023年",
    area: "約25坪",
  },
  {
    id: "clinic",
    title: "クリニック 内装工事",
    category: "その他",
    location: "東京都世田谷区",
    year: "2023年",
    area: "約40坪",
  },
];
