"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { works, Work, WorkCategory } from "@/lib/works";

const categories: ("すべて" | WorkCategory)[] = [
  "すべて",
  "飲食店",
  "物販店",
  "オフィス",
  "商業施設",
  "その他",
];

export default function WorksPage() {
  const [activeCategory, setActiveCategory] = useState<"すべて" | WorkCategory>(
    "すべて"
  );
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  const filteredWorks =
    activeCategory === "すべて"
      ? works
      : works.filter((w) => w.category === activeCategory);

  return (
    <>
      <PageHero
        label="WORKS"
        title="施工事例"
        breadcrumb={[
          { label: "TOP", href: "/" },
          { label: "施工事例" },
        ]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <ScrollReveal className="text-center mb-12">
            <p className="text-sm text-ink-mid leading-loose">
              店舗・オフィス・商業施設など、これまで手がけてきた施工事例をご紹介します。
              <br />
              お客様のご要望に寄り添い、理想の空間づくりをサポートしています。
            </p>
          </ScrollReveal>

          {/* カテゴリフィルター */}
          <ScrollReveal className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 text-sm tracking-wider border transition-all ${
                  activeCategory === cat
                    ? "bg-ink text-white border-ink"
                    : "bg-white text-ink border-border-light hover:border-ink"
                }`}
              >
                {cat}
              </button>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* 施工事例カード一覧 */}
      <section className="pb-24 bg-[#fafafa]">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-3 gap-6">
            {filteredWorks.map((work) => (
              <ScrollReveal key={work.id}>
                <button
                  onClick={() => setSelectedWork(work)}
                  className="bg-white text-left w-full hover:shadow-lg transition-shadow"
                >
                  <div className="relative aspect-[4/3] bg-border-gray flex items-center justify-center">
                    <span className="text-xs text-ink-mid">施工写真</span>
                    <span className="absolute top-3 left-3 px-3 py-1 bg-ink text-white text-[10px] tracking-wider">
                      {work.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-base font-serif mb-3 leading-relaxed">
                      {work.title}
                    </h3>
                    <p className="text-xs text-ink-mid mb-3">
                      {work.location} / {work.year}
                    </p>
                    <span className="inline-block text-sm border-b border-ink pb-1">
                      詳細を見る →
                    </span>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>

          {/* ページネーション（見た目のみ） */}
          <div className="flex justify-center gap-2 mt-16">
            <button className="px-4 py-2 text-sm border border-border-light hover:border-ink transition-colors">
              ← 前へ
            </button>
            <button className="px-4 py-2 text-sm bg-ink text-white">1</button>
            <button className="px-4 py-2 text-sm border border-border-light hover:border-ink transition-colors">
              2
            </button>
            <button className="px-4 py-2 text-sm border border-border-light hover:border-ink transition-colors">
              3
            </button>
            <button className="px-4 py-2 text-sm border border-border-light hover:border-ink transition-colors">
              4
            </button>
            <button className="px-4 py-2 text-sm border border-border-light hover:border-ink transition-colors">
              次へ →
            </button>
          </div>
        </div>
      </section>

      {/* モーダル */}
      {selectedWork && (
        <div
          className="fixed inset-0 z-50 bg-black/75 overflow-y-auto"
          onClick={() => setSelectedWork(null)}
        >
          <div className="min-h-screen py-10 px-4 flex items-start justify-center">
            <div
              className="relative bg-white max-w-4xl w-full rounded-sm border border-black/10"
              style={{ padding: "60px 40px" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* 閉じるボタン */}
              <button
                onClick={() => setSelectedWork(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white border border-border-light flex items-center justify-center hover:bg-ink hover:text-white hover:border-ink transition-colors"
                aria-label="閉じる"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              <span className="inline-block px-3 py-1 bg-ink text-white text-[10px] tracking-wider mb-6">
                {selectedWork.category}
              </span>

              {/* メイン施工写真 */}
              <div className="aspect-video bg-border-gray flex items-center justify-center mb-10">
                <span className="text-xs text-ink-mid">メイン施工写真</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-serif tracking-wider leading-relaxed mb-8">
                {selectedWork.title}
              </h2>

              {/* 物件情報 */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-6 border-b border-border-light mb-10">
                <div>
                  <p className="text-xs text-ink-mid mb-1">所在地</p>
                  <p className="text-sm">{selectedWork.location}</p>
                </div>
                <div>
                  <p className="text-xs text-ink-mid mb-1">カテゴリ</p>
                  <p className="text-sm">{selectedWork.category}</p>
                </div>
                <div>
                  <p className="text-xs text-ink-mid mb-1">竣工</p>
                  <p className="text-sm">{selectedWork.year}</p>
                </div>
                {selectedWork.area && (
                  <div>
                    <p className="text-xs text-ink-mid mb-1">面積</p>
                    <p className="text-sm">{selectedWork.area}</p>
                  </div>
                )}
              </div>

              {/* 施工概要 */}
              {selectedWork.overview && (
                <div className="mb-10">
                  <h3 className="text-base font-serif mb-4 pb-2 border-b border-ink inline-block pr-12">
                    施工概要
                  </h3>
                  <p className="text-sm text-ink-mid leading-loose">
                    {selectedWork.overview}
                  </p>
                </div>
              )}

              {/* メイン写真表示エリア + サブ写真 */}
              <div className="aspect-video bg-border-gray flex items-center justify-center mb-4">
                <span className="text-xs text-ink-mid">メイン写真表示エリア</span>
              </div>
              <div className="grid grid-cols-5 gap-3 mb-10">
                {[1, 2, 3, 4, 5].map((n) => (
                  <div
                    key={n}
                    className="aspect-square bg-border-gray flex items-center justify-center"
                  >
                    <span className="text-[10px] text-ink-mid">写真{n}</span>
                  </div>
                ))}
              </div>

              {/* CHALLENGE & SOLUTION */}
              {selectedWork.challenges && selectedWork.solutions && (
                <div className="grid md:grid-cols-2 gap-4 mb-10">
                  <div className="bg-[#fafafa] p-6">
                    <p className="section-label mb-2">CHALLENGE</p>
                    <h4 className="font-serif mb-4">課題</h4>
                    <ul className="space-y-2 text-sm text-ink-mid">
                      {selectedWork.challenges.map((c, i) => (
                        <li key={i}>・{c}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-beige-light/40 p-6">
                    <p className="section-label mb-2">SOLUTION</p>
                    <h4 className="font-serif mb-4">解決策</h4>
                    <ul className="space-y-2 text-sm text-ink-mid">
                      {selectedWork.solutions.map((s, i) => (
                        <li key={i}>・{s}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* プロジェクト情報 */}
              {selectedWork.client && (
                <div className="bg-[#fafafa] p-6">
                  <h3 className="font-serif mb-4">プロジェクト情報</h3>
                  <table className="w-full text-sm">
                    <tbody>
                      {[
                        { label: "クライアント", value: selectedWork.client },
                        { label: "施工期間", value: selectedWork.period },
                        { label: "施工内容", value: selectedWork.scope },
                        { label: "使用素材", value: selectedWork.materials },
                      ]
                        .filter((row) => row.value)
                        .map((row, i) => (
                          <tr
                            key={i}
                            className="border-b border-border-light last:border-b-0"
                          >
                            <th className="text-left text-ink-mid font-normal w-32 py-3 align-top">
                              {row.label}
                            </th>
                            <td className="py-3">{row.value}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
