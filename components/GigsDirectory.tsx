'use client';

import { useEffect, useMemo, useState } from 'react';
import { ArrowUpRight, BadgeCheck, Banknote, Search, SlidersHorizontal, Sparkles, WalletCards } from 'lucide-react';
import { GIG_CATEGORIES, gigsData, type GigCategoryId, type GigPlatform } from '@/lib/gigsData';
import { cn } from '@/lib/utils';

type RateFilter = 'all' | '15' | '25' | '40';

interface GigsDirectoryProps {
  platforms?: GigPlatform[];
  initialCategory?: GigCategoryId;
  compact?: boolean;
}

export function GigsDirectory({ platforms = gigsData, initialCategory, compact = false }: GigsDirectoryProps) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<GigCategoryId | 'all'>(initialCategory ?? 'all');
  const [rate, setRate] = useState<RateFilter>('all');
  const [visible, setVisible] = useState(compact ? 12 : 18);

  useEffect(() => setVisible(compact ? 12 : 18), [query, category, rate, compact]);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return platforms.filter((gig) => {
      const matchesCategory = category === 'all' || gig.category === category;
      const matchesRate = rate === 'all' || gig.rateMax >= Number(rate);
      const haystack = [gig.name, gig.description, gig.payRate, gig.level, ...gig.payoutMethods, ...gig.tags].join(' ').toLowerCase();
      return matchesCategory && matchesRate && (!needle || haystack.includes(needle));
    });
  }, [platforms, query, category, rate]);

  const showCategoryFilters = !initialCategory && new Set(platforms.map((gig) => gig.category)).size > 1;

  return (
    <section id="directory" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      {!compact && (
        <aside className="sponsor-card mb-14" aria-label="Featured sponsor placement">
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-xl bg-amber-300/10 text-amber-200"><Sparkles size={20} /></span>
            <div><p className="text-[11px] font-extrabold uppercase tracking-[.16em] text-amber-200">Featured sponsor spot</p><h2 className="mt-1 font-display text-xl font-semibold text-white">Put your platform in front of global independent talent</h2></div>
          </div>
          <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-sm leading-6 text-slate-400">Premium placement, verified profile and a direct application link. Reserved for reputable remote-work platforms.</p>
            <a href="mailto:sponsor@remote-side-gigs-directory.vercel.app?subject=Featured%20Sponsor%20Spot" className="sponsor-cta">Reserve for $99/month <ArrowUpRight size={15} /></a>
          </div>
        </aside>
      )}

      <div className="mb-9 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="section-kicker">Opportunity database</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">{compact ? 'Compare the best platforms' : 'Find your next income stream'}</h2>
          <p className="mt-3 text-sm text-slate-400"><span className="font-semibold text-emerald-300">{filtered.length}</span> matching platforms · Compensation shown in USD estimates</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
          <label className="search-box sm:min-w-[320px]">
            <Search size={18} /><span className="sr-only">Search platforms</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500" placeholder="Search platforms, skills, payouts..." />
          </label>
          <label className="search-box sm:min-w-[170px]">
            <SlidersHorizontal size={17} /><span className="sr-only">Minimum earning potential</span>
            <select value={rate} onChange={(event) => setRate(event.target.value as RateFilter)} className="w-full cursor-pointer bg-[#11161c] text-sm text-slate-200 outline-none">
              <option value="all">Any pay range</option><option value="15">Potential $15+</option><option value="25">Potential $25+</option><option value="40">Potential $40+</option>
            </select>
          </label>
        </div>
      </div>

      {showCategoryFilters && (
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2" aria-label="Filter by category">
          <button onClick={() => setCategory('all')} className={cn('filter-chip', category === 'all' && 'active')}>All <span>{platforms.length}</span></button>
          {GIG_CATEGORIES.map((item) => {
            const count = platforms.filter((gig) => gig.category === item.id).length;
            return <button key={item.id} onClick={() => setCategory(item.id)} className={cn('filter-chip', category === item.id && 'active')}>{item.shortLabel} <span>{count}</span></button>;
          })}
        </div>
      )}

      {filtered.length ? (
        <>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filtered.slice(0, visible).map((gig) => <GigCard key={gig.id} gig={gig} />)}
          </div>
          {visible < filtered.length && <div className="mt-10 text-center"><button onClick={() => setVisible((value) => value + 18)} className="load-more">Load more platforms <span>{Math.min(18, filtered.length - visible)} next</span></button></div>}
        </>
      ) : (
        <div className="empty-state"><Search size={28} /><h3>No exact match yet</h3><p>Try a broader keyword, category or pay range.</p><button onClick={() => { setQuery(''); setCategory(initialCategory ?? 'all'); setRate('all'); }}>Reset filters</button></div>
      )}
    </section>
  );
}

function GigCard({ gig }: { gig: GigPlatform }) {
  const category = GIG_CATEGORIES.find((item) => item.id === gig.category);
  return (
    <article className="gig-card group">
      <div className="flex items-start justify-between gap-4">
        <span className="category-pill">{category?.shortLabel}</span>
        <span className="verified-badge"><BadgeCheck size={15} /> Verified</span>
      </div>
      <h3 className="mt-6 font-display text-xl font-semibold text-white">{gig.name}</h3>
      <p className="mt-3 min-h-[4.5rem] text-sm leading-6 text-slate-400">{gig.description}</p>
      <div className="mt-6 grid grid-cols-2 gap-3 border-y border-white/10 py-4 text-sm">
        <div><span className="label">Pay rate</span><strong className="flex items-center gap-1.5"><Banknote size={14} />{gig.payRate}</strong></div>
        <div><span className="label">Payout method</span><strong className="flex items-center gap-1.5 truncate"><WalletCards size={14} className="shrink-0" />{gig.payoutMethods.slice(0, 2).join(' / ')}</strong></div>
      </div>
      <div className="mt-4 flex items-center justify-between text-xs"><span className="text-slate-500">Experience level</span><span className={cn('level-badge', gig.level === 'Beginner' ? 'beginner' : 'advanced')}>{gig.level}</span></div>
      <a href={gig.applyUrl} target="_blank" rel="noopener noreferrer sponsored" className="apply-link" aria-label={'Apply on ' + gig.name}>🚀 Apply Now / Visit Platform <ArrowUpRight size={16} /></a>
    </article>
  );
}
