import Link from 'next/link';

export default function NotFound() {
  return <main className="grid min-h-screen place-items-center px-5 text-center"><div><p className="section-kicker">404 · Opportunity moved</p><h1 className="mt-4 font-display text-4xl font-semibold">This guide is not in the directory.</h1><p className="mt-4 text-slate-400">Return to the complete platform database and try another category.</p><Link href="/" className="hero-primary mt-8">Back to directory</Link></div></main>;
}
