import Link from "next/link";

export default function PageHero({
  label,
  title,
  breadcrumb,
}: {
  label: string;
  title: string;
  breadcrumb: { label: string; href?: string }[];
}) {
  return (
    <>
      <section className="page-hero-bg h-[280px] flex items-center justify-center text-white">
        <div className="text-center">
          <p className="text-xs tracking-widest mb-3 text-white/80">{label}</p>
          <h1 className="text-3xl md:text-4xl font-serif tracking-wider">
            {title}
          </h1>
        </div>
      </section>
      <div className="bg-[#fafafa] border-b border-border-light">
        <div className="max-w-content mx-auto px-6 md:px-10 py-3">
          <nav className="text-xs text-ink-mid">
            {breadcrumb.map((item, i) => (
              <span key={i}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-ink transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span>{item.label}</span>
                )}
                {i < breadcrumb.length - 1 && (
                  <span className="mx-2">›</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
