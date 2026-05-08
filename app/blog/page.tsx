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

      <section className="py-24 bg-white">
        <div className="max-w-content mx-auto px-6 md:px-10">
          {blogPosts.length === 0 ? (
            <ScrollReveal className="text-center py-16">
              <p className="text-sm text-ink-mid leading-loose">
                現在、記事はありません。
                <br />
                今後、随時更新してまいります。
              </p>
            </ScrollReveal>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <ScrollReveal
                  key={post.id}
                  className="bg-white border border-border-light"
                >
                  <div className="aspect-[16/10] bg-border-gray flex items-center justify-center">
                    <span className="text-xs text-ink-mid">サムネイル</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-ink-mid mb-3">
                      <span>{post.date}</span>
                      <span className="px-2 py-0.5 bg-ink text-white tracking-wider">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-base font-serif mb-3 leading-relaxed">
                      {post.title}
                    </h3>
                    <p className="text-xs text-ink-mid leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
