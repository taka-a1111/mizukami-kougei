"use client";

import { useState } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { jobs, interviews } from "@/lib/recruit";

export default function RecruitPage() {
  const [activeJob, setActiveJob] = useState(jobs[0].id);
  const currentJob = jobs.find((j) => j.id === activeJob)!;

  return (
    <>
      <PageHero
        label="RECRUIT"
        title="採用情報"
        breadcrumb={[
          { label: "TOP", href: "/" },
          { label: "採用情報" },
        ]}
      />

      {/* セクション内ナビ */}
      <section className="bg-white border-b border-border-light">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <nav className="flex justify-center gap-8 md:gap-12 py-6 text-sm tracking-wider">
            <a href="#message" className="hover:text-ink-mid transition-colors">
              採用メッセージ
            </a>
            <a href="#jobs" className="hover:text-ink-mid transition-colors">
              募集職種
            </a>
            <a
              href="#interview"
              className="hover:text-ink-mid transition-colors"
            >
              社員インタビュー
            </a>
            <a href="#entry" className="hover:text-ink-mid transition-colors">
              エントリー
            </a>
          </nav>
        </div>
      </section>

      {/* 採用メッセージ */}
      <section id="message" className="py-24 bg-white">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <ScrollReveal className="text-center mb-12">
            <p className="section-label mb-3">MESSAGE</p>
            <h2 className="section-title">採用メッセージ</h2>
          </ScrollReveal>

          <ScrollReveal className="max-w-2xl mx-auto text-center">
            <p className="text-2xl md:text-3xl font-serif leading-loose mb-10">
              空間に想いを込める仕事、
              <br />
              一緒にやりませんか。
            </p>
            <div className="space-y-4 text-sm text-ink-mid leading-loose text-left">
              <p>
                水上工芸は、店舗やオフィスの内装施工を手がける会社です。私たちが大切にしているのは「誠実なものづくり」。お客様の想いに寄り添い、一つひとつの現場に真摯に向き合う姿勢を何より重視しています。
              </p>
              <p>
                経験の有無は問いません。「ものづくりが好き」「手に職をつけたい」「人の役に立つ仕事がしたい」――そんな想いを持った方を、私たちは歓迎します。
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 募集職種 */}
      <section id="jobs" className="py-24 bg-[#fafafa]">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <ScrollReveal className="text-center mb-12">
            <p className="section-label mb-3">JOBS</p>
            <h2 className="section-title">募集職種</h2>
          </ScrollReveal>

          {/* タブ */}
          <ScrollReveal className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 mb-0">
              {jobs.map((job) => (
                <button
                  key={job.id}
                  onClick={() => setActiveJob(job.id)}
                  className={`py-5 text-sm tracking-wider transition-colors border-b-2 ${
                    activeJob === job.id
                      ? "bg-white border-ink"
                      : "bg-[#f0f0f0] border-transparent hover:bg-white/50"
                  }`}
                >
                  <div>{job.title}</div>
                  <div className="text-[10px] text-ink-mid mt-1">
                    {job.type}
                  </div>
                </button>
              ))}
            </div>

            <div className="bg-white p-10 md:p-12">
              <h3 className="text-xl font-serif mb-4">{currentJob.title}</h3>
              <span className="inline-block px-3 py-1 bg-ink text-white text-[10px] tracking-wider mb-6">
                {currentJob.type}
              </span>
              <p className="text-sm text-ink-mid leading-loose mb-8">
                {currentJob.description}
              </p>

              <table className="w-full text-sm">
                <tbody>
                  {currentJob.details.map((row, i) => (
                    <tr key={i} className="border-b border-border-light">
                      <th className="text-left text-ink-mid font-normal w-1/4 py-4 pr-4 align-top">
                        {row.label}
                      </th>
                      <td className="py-4 leading-relaxed">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="text-center mt-8">
                <a
                  href="#entry"
                  className="inline-block bg-ink text-white px-12 py-4 text-sm tracking-wider hover:bg-ink-mid transition-colors"
                >
                  この職種にエントリーする →
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 社員インタビュー */}
      <section id="interview" className="py-24 bg-white">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <ScrollReveal className="text-center mb-12">
            <p className="section-label mb-3">INTERVIEW</p>
            <h2 className="section-title">社員インタビュー</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {interviews.map((person) => (
              <ScrollReveal key={person.id}>
                <Link
                  href={`/recruit/interview/${person.id}`}
                  className="block bg-white border border-border-light hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-[4/3] bg-border-gray flex items-center justify-center">
                    <span className="text-xs text-ink-mid">スタッフ写真</span>
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-ink-mid mb-2">
                      {person.department} / {person.years}
                    </p>
                    <h3 className="text-lg font-serif mb-3">{person.name}</h3>
                    <p className="text-sm text-ink-mid leading-relaxed mb-4">
                      {person.catchphrase.replace(/「|」/g, "")}
                    </p>
                    <span className="inline-block text-sm border-b border-ink pb-1">
                      インタビューを読む →
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* エントリーフォーム */}
      <section id="entry" className="py-24 bg-[#fafafa]">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <ScrollReveal className="text-center mb-12">
            <p className="section-label mb-3">ENTRY</p>
            <h2 className="section-title">エントリーフォーム</h2>
          </ScrollReveal>

          <ScrollReveal className="max-w-2xl mx-auto bg-white p-10">
            <p className="text-sm text-ink-mid text-center mb-8 leading-loose">
              下記フォームに必要事項をご入力の上、送信してください。
              <br />
              3営業日以内にご担当者よりご連絡いたします。
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2">
                    お名前（姓）
                    <span className="text-red-500 ml-1">必須</span>
                  </label>
                  <input
                    type="text"
                    placeholder="水上"
                    className="w-full px-4 py-3 border border-border-light text-sm focus:outline-none focus:border-ink"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">
                    お名前（名）
                    <span className="text-red-500 ml-1">必須</span>
                  </label>
                  <input
                    type="text"
                    placeholder="太郎"
                    className="w-full px-4 py-3 border border-border-light text-sm focus:outline-none focus:border-ink"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">
                    フリガナ（セイ）
                    <span className="text-red-500 ml-1">必須</span>
                  </label>
                  <input
                    type="text"
                    placeholder="ミズカミ"
                    className="w-full px-4 py-3 border border-border-light text-sm focus:outline-none focus:border-ink"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">
                    フリガナ（メイ）
                    <span className="text-red-500 ml-1">必須</span>
                  </label>
                  <input
                    type="text"
                    placeholder="タロウ"
                    className="w-full px-4 py-3 border border-border-light text-sm focus:outline-none focus:border-ink"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2">
                  メールアドレス
                  <span className="text-red-500 ml-1">必須</span>
                </label>
                <input
                  type="email"
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
                  placeholder="090-0000-0000"
                  className="w-full px-4 py-3 border border-border-light text-sm focus:outline-none focus:border-ink"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">
                  希望職種
                  <span className="text-red-500 ml-1">必須</span>
                </label>
                <select className="w-full px-4 py-3 border border-border-light text-sm focus:outline-none focus:border-ink">
                  <option>選択してください</option>
                  {jobs.map((job) => (
                    <option key={job.id}>{job.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm mb-2">
                  志望動機
                  <span className="text-red-500 ml-1">必須</span>
                </label>
                <textarea
                  rows={5}
                  placeholder="志望動機をご記入ください"
                  className="w-full px-4 py-3 border border-border-light text-sm focus:outline-none focus:border-ink resize-none"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">
                  履歴書<span className="text-red-500 ml-1">必須</span>
                </label>
                <div className="border-2 border-dashed border-border-light p-8 text-center hover:border-ink transition-colors cursor-pointer">
                  <p className="text-sm text-ink-mid mb-1">
                    クリックしてファイルを選択
                  </p>
                  <p className="text-xs text-ink-light">
                    PDF・Word形式（10MB以内）
                  </p>
                </div>
              </div>

              <div className="bg-[#fafafa] p-4">
                <p className="text-xs font-medium mb-2">
                  個人情報の取り扱いについて
                </p>
                <p className="text-xs text-ink-mid leading-relaxed mb-3">
                  ご記入いただいた個人情報は、採用業務の目的にのみ使用し、第三者への提供はいたしません。
                </p>
                <label className="flex items-center gap-2 text-xs">
                  <input type="checkbox" className="w-4 h-4" />
                  個人情報の取り扱いに同意する
                </label>
              </div>

              <div className="text-center">
                <button
                  type="button"
                  className="inline-block bg-ink text-white px-12 py-4 text-sm tracking-wider hover:bg-ink-mid transition-colors"
                >
                  入力内容を確認する →
                </button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
