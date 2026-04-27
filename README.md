# 水上工芸 デモサイト

株式会社水上工芸（MIZUKAMI KOUGEI）のホームページ デモサイトです。Figmaワイヤーフレームを基にNext.js + Tailwind CSSで構築されています。

## ページ構成

- `/` トップページ
- `/about` 会社情報
- `/works` 施工事例一覧（モーダル形式の詳細表示付き）
- `/blog` 社長ブログ
- `/recruit` 採用情報
- `/recruit/interview/[id]` 社員インタビュー詳細
- `/privacy` プライバシーポリシー

## 開発

```bash
npm install
npm run dev
```

http://localhost:3000 でローカル確認できます。

## デプロイ手順（GitHub + Vercel）

### 1. GitHubにリポジトリを作成

1. github.com で「New repository」を開く
2. リポジトリ名：`mizukami-kougei`
3. 「Create repository」

### 2. このプロジェクトをpush

```bash
cd mizukami-kougei
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/{ユーザー名}/mizukami-kougei.git
git push -u origin main
```

### 3. Vercelでデプロイ

1. vercel.com で「Add New → Project」
2. GitHubリポジトリ `mizukami-kougei` を選択
3. 「Deploy」をクリック（設定はデフォルトでOK）
4. 数十秒でURLが発行される（例：`mizukami-kougei.vercel.app`）

### 修正後の再デプロイ

`git push` するだけで、Vercelが自動で再デプロイします。

## 技術スタック

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Google Fonts (Noto Serif JP / Noto Sans JP)
