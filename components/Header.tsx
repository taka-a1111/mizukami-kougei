"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "会社情報", href: "/about" },
  { label: "施工事例", href: "/works" },
  { label: "採用情報", href: "/recruit" },
  { label: "社長ブログ", href: "/blog" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border-light">
      <div className="max-w-content mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        {/* ロゴ */}
        <Link href="/" className="flex flex-col">
          <span className="font-serif text-xl tracking-wider text-ink">
            水上工芸
          </span>
          <span className="text-[10px] tracking-widest text-ink-mid">
            MIZUKAMI KOUGEI
          </span>
        </Link>

        {/* PCナビ */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-7">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm tracking-wider text-ink hover:text-ink-mid transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            className="bg-ink text-white px-6 py-3 text-sm tracking-wider hover:bg-ink-mid transition-colors"
          >
            お問い合わせ
          </Link>
        </div>

        {/* モバイルメニューボタン */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="メニュー"
        >
          <span
            className={`block w-6 h-0.5 bg-ink transition-transform ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-ink transition-opacity ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-ink transition-transform ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* モバイルメニュー */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-border-light bg-white">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.href} className="border-b border-border-light">
                <Link
                  href={item.href}
                  className="block px-6 py-4 text-sm tracking-wider"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="block px-6 py-4 text-sm tracking-wider bg-ink text-white text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                お問い合わせ →
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
