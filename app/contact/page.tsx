"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // デモのため、実際の送信処理は行わない
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <PageHero
        label="CONTACT"
        title="お問い合わせ"
        breadcrumb={[
          { label: "TOP", href: "/" },
          { label: "お問い合わせ" },
        ]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <ScrollReveal className="text-center mb-12">
            <p className="text-sm text-ink-mid leading-loose">
              内装施工・リノベーション・お見積りに関するご相談など、
              <br />
              お気軽にお問い合わせください。
              <br />
              <br />
              下記フォームに必要事項をご入力の上、送信してください。
              <br />
              3営業日以内にご担当者よりご連絡いたします。
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-24 bg-[#fafafa]">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <ScrollReveal className="max-w-2xl mx-auto bg-white p-10">
            {submitted && (
              <div className="bg-beige-light/40 border border-beige-dark/30 p-4 mb-6 text-sm text-center">
                ※ デモサイトのため、実際の送信は行われません。
                <br />
                本番環境ではContact Form 7プラグインでメール送信が実装されます。
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm mb-2">
                  お名前
                  <span className="text-red-500 ml-1">必須</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="水上 太郎"
                  className="w-full px-4 py-3 border border-border-light text-sm focus:outline-none focus:border-ink"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">会社名</label>
                <input
                  type="text"
                  placeholder="株式会社○○"
                  className="w-full px-4 py-3 border border-border-light text-sm focus:outline-none focus:border-ink"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">
                  メールアドレス
                  <span className="text-red-500 ml-1">必須</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="example@email.com"
                  className="w-full px-4 py-3 border border-border-light text-sm focus:outline-none focus:border-ink"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">
                  電話番号
                  <span className="text-red-500 ml-1">必須</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="03-XXXX-XXXX"
                  className="w-full px-4 py-3 border border-border-light text-sm focus:outline-none focus:border-ink"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">
                  お問い合わせ内容
                  <span className="text-red-500 ml-1">必須</span>
                </label>
                <textarea
                  rows={6}
                  required
                  placeholder="お問い合わせ内容をご記入ください"
                  className="w-full px-4 py-3 border border-border-light text-sm focus:outline-none focus:border-ink resize-none"
                />
              </div>

              <div className="bg-[#fafafa] p-4">
                <p className="text-xs font-medium mb-2">
                  個人情報の取り扱いについて
                </p>
                <p className="text-xs text-ink-mid leading-relaxed mb-3">
                  ご記入いただいた個人情報は、お問い合わせへの回答およびご連絡の目的にのみ使用し、第三者への提供はいたしません。詳しくは
                  <a
                    href="/privacy"
                    className="underline hover:text-ink"
                    target="_blank"
                  >
                    プライバシーポリシー
                  </a>
                  をご確認ください。
                </p>
                <label className="flex items-center gap-2 text-xs">
                  <input type="checkbox" required className="w-4 h-4" />
                  個人情報の取り扱いに同意する
                </label>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-block bg-ink text-white px-12 py-4 text-sm tracking-wider hover:bg-ink-mid transition-colors"
                >
                  送信する →
                </button>
              </div>
            </form>
          </ScrollReveal>

          {/* 電話・メールでの問い合わせ */}
          <ScrollReveal className="max-w-2xl mx-auto mt-10 grid md:grid-cols-2 gap-4">
            <div className="bg-white p-6 text-center">
              <p className="text-xs tracking-widest text-ink-mid mb-2">TEL</p>
              <p className="text-2xl font-serif tracking-wider mb-1">
                03-XXXX-XXXX
              </p>
              <p className="text-xs text-ink-mid">
                受付時間：平日 9:00〜18:00
              </p>
            </div>
            <div className="bg-white p-6 text-center">
              <p className="text-xs tracking-widest text-ink-mid mb-2">EMAIL</p>
              <p className="text-base font-serif tracking-wider mb-1 break-all">
                info@mizukamikougei.com
              </p>
              <p className="text-xs text-ink-mid">24時間受付</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
