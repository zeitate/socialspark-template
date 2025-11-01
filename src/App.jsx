import React from 'react'
import { motion } from 'framer-motion'
import { BarChart3, Users, Megaphone, Rocket, Star } from 'lucide-react'
import ThemeToggle from './components/ThemeToggle.jsx'

const fadeUp = { hidden:{opacity:0, y:20}, show:{opacity:1, y:0, transition:{duration:.6}} }
const stagger = { show:{ transition:{ staggerChildren:.12 } } }

const Navbar = () => (
  <header className="sticky top-0 z-40 bg-white/80 dark:bg-black/30 backdrop-blur border-b border-slate-200 dark:border-white/10">
    <div className="container-xl py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-brand-start to-brand-end"></div>
        <strong className="tracking-tight">Template Studio</strong>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600 dark:text-slate-300">
        <a href="#features" className="hover:opacity-80">Features</a>
        <a href="#creators" className="hover:opacity-80">Creators</a>
        <a href="#pricing" className="hover:opacity-80">Pricing</a>
      </nav>
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <a href="#cta" className="btn btn-primary">Try it free</a>
      </div>
    </div>
  </header>
)

const Hero = () => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-purple-100/60 to-transparent dark:from-purple-500/10"></div>
    <div className="relative container-xl py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
      <motion.div variants={fadeUp} initial="hidden" animate="show">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          <span className="bg-gradient-to-r from-brand-start to-brand-end bg-clip-text text-transparent">Spark your social growth</span>
        </h1>
        <p className="mt-5 text-slate-600 dark:text-slate-300 text-lg">Run creator campaigns, track analytics, and grow across platforms — all from a vibrant, modern landing.</p>
        <div className="mt-8 flex gap-3">
          <a href="#pricing" className="btn btn-primary">View Pricing</a>
          <a href="#features" className="btn btn-ghost">See Features</a>
        </div>
        <div className="mt-6 flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
          <div className="flex -space-x-3">
            {[21,22,23].map(n => <img key={n} src={`https://picsum.photos/seed/ss${n}/40`} className="h-8 w-8 rounded-full ring-2 ring-white dark:ring-brand-dark" />)}
          </div>
          <span>Loved by 4,000+ creators</span>
        </div>
      </motion.div>
      <motion.div variants={fadeUp} initial="hidden" animate="show">
        <img src="/images/hero.png" alt="Hero" className="w-full rounded-2xl border border-slate-200 dark:border-white/10 shadow-soft" />
      </motion.div>
    </div>
  </section>
)

const Features = () => (
  <section id="features" className="py-20">
    <div className="container-xl">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Everything for social growth</h2>
      <p className="mt-2 text-slate-600 dark:text-slate-300">Campaigns, analytics, and growth tools — in one place.</p>
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{once:true}} className="mt-10 grid md:grid-cols-3 gap-6">
        {[
          [<Megaphone key="m" />, 'Campaigns', 'Brief creators, track deliverables, and report results.'],
          [<BarChart3 key="b"/>, 'Analytics', 'Platform‑agnostic metrics and growth insights.'],
          [<Users key="u"/>, 'Creator CRM', 'Organize, shortlist, and collaborate with ease.'],
        ].map(([Icon,t,d],i)=>(
          <motion.div key={i} variants={fadeUp} className="card p-6">
            <div className="text-purple-600 dark:text-purple-300"><span className="inline-flex">{Icon}</span></div>
            <div className="mt-2 font-semibold">{t}</div>
            <p className="text-sm text-slate-600 dark:text-slate-300">{d}</p>
          </motion.div>
        ))}
      </motion.div>
      <img src="/images/analytics.png" className="w-full rounded-2xl border border-slate-200 dark:border-white/10 mt-10" />
    </div>
  </section>
)

const Creators = () => (
  <section id="creators" className="py-20 bg-slate-50 dark:bg-white/5 border-y border-slate-200 dark:border-white/10">
    <div className="container-xl">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Creator spotlight</h2>
      <p className="mt-2 text-slate-600 dark:text-slate-300">A diverse, global community ready to collaborate.</p>
      <div className="mt-10 grid sm:grid-cols-3 md:grid-cols-4 gap-6">
        {Array.from({length:8}).map((_,i)=> (
          <div key={i} className="card p-4 text-center">
            <img src={`https://picsum.photos/seed/c${i}/160`} className="w-full h-36 object-cover rounded-xl border border-slate-200 dark:border-white/10" />
            <div className="mt-2 font-semibold">Creator {i+1}</div>
            <div className="text-sm text-slate-500">Lifestyle · Tech</div>
            <div className="mt-2 text-yellow-500 flex items-center justify-center gap-1"><Star size={16}/><span className="text-sm">4.{(i%5)+4} rating</span></div>
          </div>
        ))}
      </div>
      <img src="/images/creators.png" className="w-full rounded-2xl border border-slate-200 dark:border-white/10 mt-10" />
    </div>
  </section>
)

const Pricing = () => (
  <section id="pricing" className="py-20">
    <div className="container-xl">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Flexible pricing</h2>
      <p className="mt-2 text-slate-600 dark:text-slate-300">Start small. Scale your reach.</p>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {[
          ['Starter','$19','Launch your first campaigns','Get Starter'],
          ['Growth','$49','For growing teams','Get Growth'],
          ['Agency','$99','Advanced analytics & SSO','Get Agency'],
        ].map(([tier,price,desc,cta],i)=>(
          <div key={i} className={`card p-6 ${i===1?'border-2 border-purple-500 dark:border-purple-400':''}`}>
            <div className={`text-sm font-semibold ${i===1?'text-purple-600 dark:text-purple-300':'text-slate-500 dark:text-slate-300'} uppercase`}>{tier}</div>
            <div className="mt-2 text-3xl font-extrabold">{price}<span className="text-base font-normal text-slate-500 dark:text-slate-400"> / mo</span></div>
            <div className="text-slate-600 dark:text-slate-300">{desc}</div>
            <a href="#cta" className={`btn mt-4 ${i===1?'btn-primary':'btn-ghost'}`}>{cta}</a>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const CTA = () => (
  <section id="cta" className="py-20 bg-gradient-to-r from-brand-start/15 to-brand-end/15 dark:from-brand-start/20 dark:to-brand-end/20">
    <div className="container-xl text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold">Ready to spark your next viral campaign?</h2>
      <p className="mt-2 text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">Connect with creators, run campaigns, and measure what matters.</p>
      <a href="#" className="btn btn-primary mt-6">Start free</a>
    </div>
  </section>
)

export default function App(){
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Creators />
      <Pricing />
      <CTA />
      <footer className="py-10 border-t border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400">
        <div className="container-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-brand-start to-brand-end"></div>
            <span className="text-sm">© 2025 Template Studio · Demo content</span>
          </div>
          <div className="text-sm">React · Tailwind · Framer Motion · Dark mode</div>
        </div>
      </footer>
    </>
  )
}
