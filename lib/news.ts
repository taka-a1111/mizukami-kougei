export interface News {
  date: string;
  category: "お知らせ" | "施工事例" | "採用";
  title: string;
}

export const newsList: News[] = [
  { date: "2025.02.20", category: "お知らせ", title: "ホームページをリニューアルしました" },
  { date: "2025.02.15", category: "施工事例", title: "渋谷区カフェ「○○」様の施工事例を追加しました" },
  { date: "2025.02.01", category: "採用", title: "2025年度 新卒採用エントリー受付を開始しました" },
  { date: "2025.01.20", category: "お知らせ", title: "年末年始休業のお知らせ" },
];
