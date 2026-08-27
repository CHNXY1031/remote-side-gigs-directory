import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Bot, Globe2, GraduationCap, PenTool, SearchCheck, ShieldCheck, Sparkles, TestTube2, WalletCards } from 'lucide-react';
import { GigsDirectory } from '@/components/GigsDirectory';
import { GIG_CATEGORIES, directoryStats, seoCategories } from '@/lib/gigsData';

const icons = [Bot, TestTube2, WalletCards, GraduationCap, PenTool, SearchCheck];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <section className="relative border-b border-white/10 px-5 pb-16 pt-8 sm:px-8 lg:px-12">
        <div className="orb orb-one" /><div className="orb orb-two" />
        <nav className="relative mx-auto flex max-w-7xl items-center justify-between" aria-label="Main navigation">
          <Link href="/" className="brand"><span className="brand-mark"><Globe2 size={20} /></span><span>RemoteSide<span className="text-emerald-300">Gigs</span></span></Link>
          <div className="hidden items-center gap-7 text-sm text-slate-400 md:flex"><a href="#categories" className="nav-link">Categories</a><a href="#directory" className="nav-link">Directory</a><Link href="/gigs/ai-data-annotation" className="nav-link">Guides</Link></div>
          <a href="#directory" className="nav-cta">Explore directory <ArrowUpRight size={15} /></a>
        </nav>
        <div id="top" className="relative mx-auto max-w-5xl pb-8 pt-24 text-center sm:pt-28">
          <div className="eyebrow mx-auto"><Sparkles size={14} /> Curated for independent talent worldwide</div>
          <h1 className="mt-7 font-display text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-7xl lg:text-[5.35rem]">Earn from anywhere.<br /><span className="gradient-text">On your terms.</span></h1>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">A focused directory of trusted platforms for remote work, freelance projects and flexible side income — with transparent pay and payout details.</p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row"><a href="#directory" className="hero-primary">Browse all {directoryStats.platforms} platforms <ArrowRight size={17} /></a><Link href="/gigs/ai-data-annotation" className="hero-secondary">Start with AI gigs</Link></div>
          <div className="mt-10 flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm text-slate-400"><span className="flex items-center gap-2"><ShieldCheck size={16} className="text-emerald-300" /> {directoryStats.platforms} official platform links</span><span className="hidden sm:inline">•</span><span>{directoryStats.categories} opportunity types</span><span className="hidden sm:inline">•</span><span>{directoryStats.seoPages} practical guides</span></div>
        </div>
      </section>

      <section id="categories" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mb-9 max-w-2xl"><p className="section-kicker">Popular paths</p><h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">Choose work that fits your life</h2><p className="mt-4 leading-7 text-slate-400">From ten-minute studies to specialist consulting, compare realistic routes by skill level, pay structure and payout method.</p></div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {GIG_CATEGORIES.map((category, index) => {
            const Icon = icons[index];
            const target = seoCategories.find((item) => item.category === category.id);
            const count = Math.round(directoryStats.platforms / GIG_CATEGORIES.length);
            return <Link key={category.id} href={'/gigs/' + (target?.slug ?? category.id)} className="category-card group"><span className="category-icon"><Icon size={21} /></span><span className="ml-4"><strong className="block font-display text-lg text-white">{category.label}</strong><span className="mt-1.5 block text-sm leading-6 text-slate-500">{category.description}</span><span className="mt-4 flex items-center gap-1.5 text-xs font-bold text-emerald-300">Explore {count}+ platforms <ArrowUpRight size={13} /></span></span></Link>;
          })}
        </div>
      </section>

      <GigsDirectory />

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-12">
        <div className="disclaimer"><ShieldCheck size={22} className="shrink-0 text-emerald-300" /><p><strong>Independent directory.</strong> Pay figures are editorial estimates, not income guarantees. Availability, eligibility, fees and payout options vary by country and can change. Always review the platform’s current terms before applying.</p></div>
      </section>
      <footer className="border-t border-white/10 px-5 py-10 text-sm text-slate-500 sm:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><span>© 2026 Remote Side Gigs Directory</span><span>Built for flexible work, worldwide.</span><a href="https://uptime-pulse-saas.vercel.app/?utm_source=remote-side-gigs-directory&amp;utm_medium=referral&amp;utm_campaign=protected_by" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-600 underline decoration-slate-700 underline-offset-4 transition hover:text-emerald-300">Protected by UptimePulse — Free Website &amp; SSL Monitor</a></div></footer>
    </main>
  );
}
