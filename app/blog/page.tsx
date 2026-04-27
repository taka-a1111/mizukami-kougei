import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { blogPosts } from "@/lib/blog";

export default function BlogPage() {
  return (
    <>
      <PageHero
        label="BLOG"
        title="社長ブログ"
        breadcrumb={[
          { label: "TOP", href: "/" },
          { label: "社長ブログ" },
        ]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <ScrollReveal className="text-center mb-12">
            <p className="text-sm text-ink-mid leading-loose">
              代表の水上が、日々の現場のこと、ものづくりへの想い、会社のことなどを綴ります。
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-24 bg-[#fafafa]">
        <div className="max-w-3xl mx-auto px-6 md:px-10 space-y-8">
          {blogPosts.map((post) => (
            <ScrollReveal key={post.id}>
              <article className="bg-white p-10 md:p-12">
                <p className="text-sm text-ink-mid mb-3">{post.date}</p>
                <h2 className="text-2xl font-serif mb-6 pb-4 border-b border-border-light leading-relaxed">
                  {post.title}
                </h2>

                <div className="space-y-4 text-sm text-ink-mid leading-loose mb-8">
                  {post.content.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                {post.hasImage && (
                  <div className="aspect-video bg-border-gray flex items-center justify-center mb-8">
                    <span className="text-xs text-ink-mid">
                      {post.imageLabel}
                    </span>
                  </div>
                )}

                {/* シェア + 著者 */}
                <div className="pt-6 border-t border-border-light flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-ink-mid">シェアする：</span>
                    <button
                      className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs"
                      aria-label="X (Twitter)"
                    >
                      X
                    </button>
                    <button
                      className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]"
                      aria-label="Facebook"
                    >
                      FB
                    </button>
                    <button
                      className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-[10px]"
                      aria-label="LINE"
                    >
                      LINE
                    </button>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-border-gray flex items-center justify-center">
                      <span className="text-[8px] text-ink-mid">写真</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-serif">水上 太郎</p>
                      <p className="text-[10px] text-ink-mid">代表取締役</p>
                    </div>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}

          {/* ページネーション */}
          <div className="flex justify-center gap-2 pt-8">
            <button className="px-4 py-2 text-sm border border-border-light hover:border-ink transition-colors bg-white">
              ← 前へ
            </button>
            <button className="px-4 py-2 text-sm bg-ink text-white">1</button>
            <button className="px-4 py-2 text-sm border border-border-light hover:border-ink transition-colors bg-white">
              2
            </button>
            <button className="px-4 py-2 text-sm border border-border-light hover:border-ink transition-colors bg-white">
              3
            </button>
            <button className="px-4 py-2 text-sm border border-border-light hover:border-ink transition-colors bg-white">
              次へ →
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
