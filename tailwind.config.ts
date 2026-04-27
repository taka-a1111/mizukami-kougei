import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ヒーローのベージュグラデーション
        beige: {
          light: "#D4CCC4",
          dark: "#B8AFA5",
        },
        // フッター・ダーク系
        dark: {
          DEFAULT: "#1A1A1A",
          gradient1: "#3D3D3D",
          gradient2: "#2A2A2A",
          gradient3: "#1A1A1A",
        },
        // ボーダー・サブ
        border: {
          light: "#E5E5E5",
          gray: "#E8E8E8",
        },
        // テキスト
        ink: {
          DEFAULT: "#1A1A1A",
          mid: "#555555",
          light: "#888888",
        },
      },
      fontFamily: {
        serif: ["var(--font-noto-serif-jp)", "serif"],
        sans: ["var(--font-noto-sans-jp)", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      letterSpacing: {
        wider: "0.1em",
        widest: "0.2em",
      },
    },
  },
  plugins: [],
};
export default config;
