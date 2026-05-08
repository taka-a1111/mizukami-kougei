"use client";

import { useState } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { jobs, interviews } from "@/lib/recruit";

export default function RecruitPage() {
  const [activeJob, setActiveJob] = useState(jobs[0].id);
  const currentJob = jobs.find((j) => j.id === activeJob) || jobs[0];

  const people = [
    { name: "薮下 敬介", years: "入社1年目" },
    { name: "神戸 啓宏", years: "入社1年目" },
    { name: "恒石 誠", years: "入社2年目" },
    { name: "小坂 佳大", years: "入社1年目" },
  ];

  return (
    <main>
      <PageHero
        eyebrow="RECRUIT"
        title="採用情報"
        breadcrumb={[
          { label: "TOP", href: "/" },
          { label: "採用情報" },
        ]}
      />

      {/* セクションナビ */}
      <nav className="bg-white border-b border-neutral-200 sticky top-16 md:top-20 z-40">
        <div className="max-w-6xl mx-auto px-6">
          <ul className="flex flex-wrap gap-x-8 gap-y-2 py-4 text-sm">
            <li>
              <a href="#message" className="hover:text-neutral-900 text-neutral-600">
                採用メッセージ
              </a>
            </li>
            <li>
              <a href="#jobs" className="hover:text-neutral-900 text-neutral-600">
                募集職種
              </a>
            </li>
            <li>
              <a href="#people" className="hover:text-neutral-900 text-neutral-600">
                職人紹介
              </a>
            </li>
            <li>
              <a href="#interview" className="hover:text-neutral-900 text-neutral-600">
                社員インタビュー
              </a>
            </li>
            <li>
              <a href="#entry" className="hover:text-neutral-900 text-neutral-600">
                エントリー
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* MESSAGE */}
      <section id="message" className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-sm tracking-widest text-neutral-500 mb-4">MESSAGE</p>
            <h2 className="text-3xl md:text-4xl font-serif mb-12">採用メッセージ</h2>
            <div className="text-center mb-12">
              <p className="font-serif text-3xl md:text-5xl leading-relaxed">
                これからの時代に、
                <br />
                一生ものの技術を
              </p>
            </div>
            <div className="space-y-6 text-neutral-700 leading-loose">
              <p>
                これからの時代、多くの仕事がAIによって自動化されていきます。しかし、現場ごとに異なる建具を調整し、修繕し、美しく収める仕事は、単純な効率化では置き換えられない領域です。そこには、経験と感覚に裏打ちされた「個」の技術が求められます。
              </p>
              <p>
                こうした職人の仕事は、時代が変わっても価値を失うことのない、一生もののスキルだと私たちは考えています。
              </p>
              <p>
                水上工芸では、その価値ある技術を、できるだけ早く、そして楽しみながら身につけられる環境を整えています。未経験の方でも問題ありません。手に職をつけたい、ものづくりが好き—そんな想いがあれば、必ず成長し、活躍できるフィールドがあります。
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* JOBS */}
      <section id="jobs" className="py-20 md:py-28 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-sm tracking-widest text-neutral-500 mb-4">JOBS</p>
            <h2 className="text-3xl md:text-4xl font-serif mb-12">募集職種</h2>

            {/* 職種タブ */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {jobs.map((job) => (
                <button
                  key={job.id}
                  onClick={() => setActiveJob(job.id)}
                  className={`p-6 border text-left transition ${
                    activeJob === job.id
                      ? "bg-neutral-900 text-white border-neutral-900"
                      : "bg-white text-neutral-900 border-neutral-300 hover:border-neutral-900"
                  }`}
                >
                  <p className="text-lg md:text-xl font-serif">{job.title}</p>
                  <p className="text-xs mt-2 opacity-70">{job.type}</p>
                </button>
              ))}
            </div>

            {/* 選択中の職種詳細 */}
            <div className="bg-white p-8 md:p-12 border border-neutral-200">
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-serif mb-2">{currentJob.title}</h3>
                <p className="text-sm text-neutral-500">{currentJob.type}</p>
              </div>
              <p className="text-neutral-700 leading-relaxed mb-8">{currentJob.description}</p>

              <table className="w-full text-sm">
                <tbody className="divide-y divide-neutral-200">
                  <tr>
                    <th className="py-4 pr-6 text-left font-normal text-neutral-500 w-32 align-top">
                      応募条件
                    </th>
                    <td className="py-4 text-neutral-800">{currentJob.requirements}</td>
                  </tr>
                  <tr>
                    <th className="py-4 pr-6 text-left font-normal text-neutral-500 align-top">
                      求める人物像
                    </th>
                    <td className="py-4 text-neutral-800">{currentJob.idealCandidate}</td>
                  </tr>
                  <tr>
                    <th className="py-4 pr-6 text-left font-normal text-neutral-500 align-top">
                      給与・手当
                    </th>
                    <td className="py-4 text-neutral-800">{currentJob.salary}</td>
                  </tr>
                  <tr>
                    <th className="py-4 pr-6 text-left font-normal text-neutral-500 align-top">
                      勤務地
                    </th>
                    <td className="py-4 text-neutral-800">{currentJob.workLocation}</td>
                  </tr>
                  <tr>
                    <th className="py-4 pr-6 text-left font-normal text-neutral-500 align-top">
                      勤務時間
                    </th>
                    <td className="py-4 text-neutral-800">{currentJob.workHours}</td>
                  </tr>
                  <tr>
                    <th className="py-4 pr-6 text-left font-normal text-neutral-500 align-top">
                      休日
                    </th>
                    <td className="py-4 text-neutral-800">{currentJob.holidays}</td>
                  </tr>
                  <tr>
                    <th className="py-4 pr-6 text-left font-normal text-neutral-500 align-top">
                      入社後の流れ
                    </th>
                    <td className="py-4 text-neutral-800">{currentJob.flow}</td>
                  </tr>
                </tbody>
              </table>

              <div className="mt-10 text-center">
                <a
                  href="#entry"
                  className="inline-block px-8 py-3 bg-neutral-900 text-white text-sm hover:bg-neutral-700 transition"
                >
                  この職種にエントリーする →
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PEOPLE */}
      <section id="people" className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-sm tracking-widest text-neutral-500 mb-4">PEOPLE</p>
            <h2 className="text-3xl md:text-4xl font-serif mb-12">水上工芸の職人たち</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {people.map((p, i) => (
                <div key={i} className="text-center">
                  <div className="aspect-square bg-neutral-100 mb-4 flex items-center justify-center text-neutral-400 text-xs">
                    スタッフ写真{i + 1}
                  </div>
                  <p className="font-serif text-lg">{p.name}</p>
                  <p className="text-sm text-neutral-500 mt-1">{p.years}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* INTERVIEW */}
      <section id="interview" className="py-20 md:py-28 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-sm tracking-widest text-neutral-500 mb-4">INTERVIEW</p>
            <h2 className="text-3xl md:text-4xl font-serif mb-12">社員インタビュー</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {interviews.map((iv) => (
                <Link
                  key={iv.id}
                  href={`/recruit/interview/${iv.id}`}
                  className="block bg-white border border-neutral-200 hover:border-neutral-900 transition group"
                >
                  <div className="aspect-[4/3] bg-neutral-100 flex items-center justify-center text-neutral-400 text-xs">
                    スタッフ写真
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-neutral-500 mb-1">{iv.years}</p>
                    <p className="text-sm text-neutral-600 mb-1">{iv.name}</p>
                    <p className="text-xs text-neutral-500 mb-3">{iv.subtitle}</p>
                    <p className="font-serif text-lg leading-relaxed mb-4">「{iv.cardTitle}」</p>
                    <p className="text-sm text-neutral-600 group-hover:text-neutral-900">
                      インタビューを読む →
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ENTRY */}
      <section id="entry" className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-sm tracking-widest text-neutral-500 mb-4">ENTRY</p>
            <h2 className="text-3xl md:text-4xl font-serif mb-6">エントリーフォーム</h2>
            <p className="text-neutral-600 mb-10 text-sm leading-relaxed">
              下記フォームに必要事項をご入力の上、送信してください。
              <br />
              3営業日以内にご担当者よりご連絡いたします。
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2">
                    お名前(姓)<span className="text-red-600 ml-1">必須</span>
                  </label>
                  <input type="text" className="w-full border border-neutral-300 px-4 py-3" />
                </div>
                <div>
                  <label className="block text-sm mb-2">
                    お名前(名)<span className="text-red-600 ml-1">必須</span>
                  </label>
                  <input type="text" className="w-full border border-neutral-300 px-4 py-3" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2">
                    フリガナ(セイ)<span className="text-red-600 ml-1">必須</span>
                  </label>
                  <input type="text" className="w-full border border-neutral-300 px-4 py-3" />
                </div>
                <div>
                  <label className="block text-sm mb-2">
                    フリガナ(メイ)<span className="text-red-600 ml-1">必須</span>
                  </label>
                  <input type="text" className="w-full border border-neutral-300 px-4 py-3" />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-2">
                  メールアドレス<span className="text-red-600 ml-1">必須</span>
                </label>
                <input type="email" className="w-full border border-neutral-300 px-4 py-3" />
              </div>
              <div>
                <label className="block text-sm mb-2">
                  電話番号<span className="text-red-600 ml-1">必須</span>
                </label>
                <input type="tel" className="w-full border border-neutral-300 px-4 py-3" />
              </div>
              <div>
                <label className="block text-sm mb-2">
                  希望職種<span className="text-red-600 ml-1">必須</span>
                </label>
                <select className="w-full border border-neutral-300 px-4 py-3">
                  <option>選択してください</option>
                  <option>建具職人</option>
                  <option>補修職人</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-2">
                  志望動機<span className="text-red-600 ml-1">必須</span>
                </label>
                <textarea rows={6} className="w-full border border-neutral-300 px-4 py-3" />
              </div>
              <div>
                <label className="block text-sm mb-2">
                  履歴書<span className="text-red-600 ml-1">必須</span>
                </label>
                <div className="border border-dashed border-neutral-300 px-4 py-8 text-center text-sm text-neutral-500">
                  クリックしてファイルを選択
                  <br />
                  <span className="text-xs">PDF・Word形式(10MB以内)</span>
                </div>
              </div>
              <div className="bg-neutral-50 p-6 text-sm">
                <p className="font-bold mb-2">個人情報の取り扱いについて</p>
                <p className="text-neutral-700">
                  ご記入いただいた個人情報は、採用業務の目的にのみ使用し、第三者への提供はいたしません。
                </p>
                <label className="flex items-center mt-4">
                  <input type="checkbox" className="mr-2" />
                  個人情報の取り扱いに同意する
                </label>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-block px-12 py-4 bg-neutral-900 text-white hover:bg-neutral-700 transition"
                >
                  入力内容を確認する →
                </button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
