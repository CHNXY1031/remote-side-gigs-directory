import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, BadgeDollarSign, CalendarDays, ChevronRight, Globe2, ShieldCheck } from 'lucide-react';
import { GigsDirectory } from '@/components/GigsDirectory';
import { GIG_CATEGORIES, SITE_URL, getCategoryPlatforms, seoCategories } from '@/lib/gigsData';

type PageProps = { params: { category: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return seoCategories.map((category) => ({ category: category.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const category = seoCategories.find((item) => item.slug === params.category);
  if (!category) return {};
  const headline = category.title.startsWith('Best ') ? category.title : 'Best ' + category.title;
  const title = headline + ' in 2026 (' + category.payRange + ')';
  const description = category.intro + ' Compare verified platforms, expected pay, payout methods, entry requirements and a practical application guide.';
  return {
    title,
    description,
    alternates: { canonical: '/gigs/' + category.slug },
    openGraph: { title, description, url: '/gigs/' + category.slug, images: [] },
    twitter: { card: 'summary', title, description, images: [] },
  };
}

export default function CategoryPage({ params }: PageProps) {
  const category = seoCategories.find((item) => item.slug === params.category);
  if (!category) notFound();
  const platforms = getCategoryPlatforms(category);
  const group = GIG_CATEGORIES.find((item) => item.id === category.category);
  const headline = category.title.startsWith('Best ') ? category.title : 'Best ' + category.title;
  const faqs = getFaqs(category.title, category.payRange);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })),
  };
  const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: category.title + ' Directory',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: SITE_URL + '/gigs/' + category.slug,
    description: category.intro,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', description: 'Free directory of ' + platforms.length + ' remote work platforms' },
  };

  return (
    <main className="guide-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema).replace(/</g, '\\u003c') }} />
      <header className="guide-hero">
        <div className="orb orb-one" /><div className="orb orb-two" />
        <div className="guide-wrap relative">
          <nav className="flex items-center justify-between">
            <Link href="/" className="brand"><span className="brand-mark"><Globe2 size={20} /></span><span>RemoteSide<span className="text-emerald-300">Gigs</span></span></Link>
            <Link href="/#directory" className="nav-cta"><ArrowLeft size={15} /> Full directory</Link>
          </nav>
          <div className="mt-16 max-w-4xl">
            <div className="breadcrumb"><Link href="/">Home</Link><ChevronRight size={13} /><Link href="/#categories">Gigs</Link><ChevronRight size={13} /><span>{category.navLabel}</span></div>
            <p className="section-kicker mt-8">{group?.label}</p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-[-.035em] text-white sm:text-6xl">{headline}<br /><span className="gradient-text">in 2026</span></h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">{category.intro} This guide compares official application paths, realistic compensation and payout options.</p>
            <div className="guide-meta"><span className="flex items-center gap-2"><BadgeDollarSign size={15} className="text-emerald-300" /> Typical pay {category.payRange}</span><span className="flex items-center gap-2"><ShieldCheck size={15} className="text-emerald-300" /> {platforms.length} verified links</span><span className="flex items-center gap-2"><CalendarDays size={15} className="text-violet-300" /> Updated 2026</span></div>
          </div>
        </div>
      </header>

      <section className="guide-wrap px-5 py-14 sm:px-8">
        <div className="guide-grid">
          <article className="guide-panel">
            <p className="section-kicker">Application playbook</p>
            <h2 className="mt-2">How to get started</h2>
            <ol>
              <li><strong className="text-slate-200">Shortlist three platforms.</strong> Choose a mix of one beginner-friendly marketplace, one specialist network and one backup source.</li>
              <li><strong className="text-slate-200">Prepare proof of skill.</strong> Tailor a compact profile, work sample or equipment list to the platform’s screening process.</li>
              <li><strong className="text-slate-200">Verify regional terms.</strong> Check country eligibility, fees, tax requirements and the current payout minimum before investing time.</li>
              <li><strong className="text-slate-200">Track effective hourly pay.</strong> Include screening, unpaid pitching and revision time when comparing opportunities.</li>
            </ol>
          </article>
          <aside className="guide-panel">
            <p className="section-kicker">Before you apply</p>
            <h2 className="mt-2">Stay safe and selective</h2>
            <p>Legitimate platforms do not guarantee work or income. Avoid recruiters who request upfront payments, crypto transfers, gift cards or sensitive identity documents outside the platform’s official verification flow.</p>
            <p>Use a dedicated work email, enable two-factor authentication and confirm the destination domain before sharing personal information.</p>
          </aside>
        </div>
      </section>

      <GigsDirectory platforms={platforms} initialCategory={category.category} compact />

      <section className="guide-wrap px-5 pb-20 sm:px-8">
        <article className="guide-panel">
          <p className="section-kicker">Common questions</p><h2 className="mt-2">Frequently asked questions</h2>
          {faqs.map((faq) => <div key={faq.question} className="faq-item"><h3>{faq.question}</h3><p>{faq.answer}</p></div>)}
        </article>
        <div className="mt-10 flex flex-wrap gap-2">{seoCategories.filter((item) => item.category === category.category && item.slug !== category.slug).map((item) => <Link key={item.slug} href={'/gigs/' + item.slug} className="filter-chip">{item.navLabel}</Link>)}</div>
      </section>
    </main>
  );
}

function getFaqs(title: string, payRange: string) {
  return [
    { question: 'How much can I earn with ' + title.toLowerCase() + '?', answer: 'Listed opportunities commonly advertise or produce estimated compensation around ' + payRange + ', but actual earnings depend on project availability, screening, location, skill and time spent on unpaid applications.' },
    { question: 'Are these platforms available worldwide?', answer: 'Many recruit internationally, but individual projects and payout methods can be country-specific. Check the official eligibility page before completing an application.' },
    { question: 'Do I need previous experience?', answer: 'Several platforms accept beginners after a sample task or assessment. Curated expert networks usually expect a portfolio, credentials or multiple years of relevant experience.' },
    { question: 'How does this directory verify platforms?', answer: 'Verified means the listing points to an identifiable official company domain and application route. It is not a guarantee of income, acceptance or continuous project availability.' },
  ];
}
