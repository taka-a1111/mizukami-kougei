import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-content mx-auto px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-2 gap-10">
          {/* 左カラム：ロゴ + 住所 */}
          <div>
            <div className="mb-6">
              <p className="font-serif text-xl tracking-wider mb-1">水上工芸</p>
              <p className="text-[10px] tracking-widest text-white/60">
                MIZUKAMI KOUGEI
              </p>
            </div>
            <address className="not-italic text-sm leading-relaxed text-white/80">
              〒000-0000
              <br />
              東京都〇〇区〇〇町0-0-0
              <br />
              TEL: 03-XXXX-XXXX
            </address>
          </div>

          {/* 右カラム：サイトマップ */}
          <div className="grid grid-cols-2 gap-6 md:justify-self-end">
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  会社情報
                </Link>
              </li>
              <li>
                <Link
                  href="/works"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  施工事例
                </Link>
              </li>
              <li>
                <Link
                  href="/recruit"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  採用情報
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  お問い合わせ
                </Link>
              </li>
            </ul>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/blog"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  社長ブログ
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* コピーライト */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-white/60">
            © 2025 Mizukami Kougei Co., Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
