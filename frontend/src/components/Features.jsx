import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Coins, GitBranch, IdCard, Bot, Gauge, ArrowUpRight } from 'lucide-react';
import { TID } from '@/constants/testIds';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

/* ----- 1. AI Evaluator preview ----- */
const dimensions = [
  { label: 'Originality', value: 92, color: 'from-cyan-400 to-blue-500' },
  { label: 'Effort',      value: 78, color: 'from-blue-500 to-violet-500' },
  { label: 'Complexity',  value: 86, color: 'from-violet-500 to-fuchsia-500' },
  { label: 'Usefulness',  value: 95, color: 'from-fuchsia-500 to-pink-500' },
  { label: 'Impact',      value: 89, color: 'from-pink-500 to-amber-400' },
];
const Evaluator = () => (
  <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
    <div className="flex items-center justify-between mb-5">
      <div className="flex items-center gap-2">
        <div className="h-7 w-7 grid place-items-center rounded-lg bg-violet-500/15 border border-violet-500/30">
          <Brain size={14} className="text-violet-300" />
        </div>
        <span className="text-[11px] uppercase tracking-[0.18em] text-zinc-500 font-mono">contribution #c-094</span>
      </div>
      <div className="text-right">
        <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">overall</div>
        <div className="font-display text-2xl font-semibold text-gradient-accent">88</div>
      </div>
    </div>
    <div className="space-y-3">
      {dimensions.map((d, i) => (
        <motion.div
          key={d.label}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
        >
          <div className="flex items-center justify-between text-[11px] mb-1">
            <span className="text-zinc-400">{d.label}</span>
            <span className="font-mono text-white">{d.value}</span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${d.value}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.15 + i * 0.08, ease: 'easeOut' }}
              className={`h-full rounded-full bg-gradient-to-r ${d.color}`}
            />
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

/* ----- 2. Escrow & Rewards preview ----- */
const escrow = [
  { name: 'Maya R.', role: 'Smart contract', share: 38, color: '#22d3ee' },
  { name: 'Jules K.', role: 'Researcher',    share: 27, color: '#a78bfa' },
  { name: 'Theo S.', role: 'Designer',       share: 21, color: '#f472b6' },
  { name: 'Iva N.',  role: 'Growth',         share: 14, color: '#34d399' },
];
const EscrowPreview = () => (
  <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
    <div className="flex items-center justify-between">
      <div>
        <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">Locked in escrow</div>
        <div className="font-display text-3xl font-semibold mt-1">12.4 <span className="text-zinc-500 text-xl">ETH</span></div>
      </div>
      <div className="text-right">
        <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">Milestone</div>
        <div className="font-mono text-sm text-emerald-300 mt-1">2 / 4 approved</div>
      </div>
    </div>
    <div className="mt-5 h-2 rounded-full bg-white/5 overflow-hidden flex">
      {escrow.map((e) => (
        <motion.div
          key={e.name}
          initial={{ width: 0 }}
          whileInView={{ width: `${e.share}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          style={{ background: e.color }}
        />
      ))}
    </div>
    <div className="mt-5 space-y-2.5">
      {escrow.map((e, i) => (
        <motion.div
          key={e.name}
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.07 }}
          className="flex items-center justify-between text-sm"
        >
          <div className="flex items-center gap-3">
            <span className="h-7 w-7 rounded-full text-[11px] font-medium grid place-items-center" style={{ background: `${e.color}22`, color: e.color, border: `1px solid ${e.color}55` }}>
              {e.name.split(' ').map(n => n[0]).join('')}
            </span>
            <div>
              <div className="text-white text-[13px]">{e.name}</div>
              <div className="text-zinc-500 text-[11px]">{e.role}</div>
            </div>
          </div>
          <span className="font-mono text-[12px] text-zinc-300">{e.share}% · {(12.4 * e.share / 100).toFixed(2)} ETH</span>
        </motion.div>
      ))}
    </div>
    <div className="mt-5 text-[11px] font-mono text-zinc-500 bg-white/[0.03] rounded-lg border border-white/5 p-2.5">
      <span className="text-cyan-300">ContributionScore</span> / TotalScore = <span className="text-violet-300">Your Share</span>
    </div>
  </div>
);

/* ----- 3. DNA Graph preview (mini) ----- */
const DnaPreview = () => (
  <div className="rounded-2xl border border-white/10 bg-black/40 p-5 h-full flex flex-col">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <GitBranch size={14} className="text-emerald-300" />
        <span className="text-[11px] uppercase tracking-[0.18em] text-zinc-500 font-mono">lifecycle.dna</span>
      </div>
      <span className="text-[10px] font-mono text-zinc-500">v0.4.1</span>
    </div>
    <div className="relative flex-1 min-h-[200px]">
      <svg viewBox="0 0 320 200" className="w-full h-full">
        <defs>
          <linearGradient id="lg1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <linearGradient id="lg2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#facc15" />
          </linearGradient>
        </defs>
        {/* Lines */}
        <motion.path d="M 30 100 C 110 30, 180 30, 290 60"  stroke="url(#lg1)" strokeWidth="1.5" fill="none"
                     initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.6 }} />
        <motion.path d="M 30 100 C 110 100, 180 100, 290 100" stroke="url(#lg1)" strokeWidth="1.5" fill="none"
                     initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.6, delay: 0.15 }} />
        <motion.path d="M 30 100 C 110 170, 180 170, 290 140" stroke="url(#lg2)" strokeWidth="1.5" fill="none"
                     initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.6, delay: 0.3 }} />
        {/* Nodes */}
        {[
          { cx: 30, cy: 100, c: '#22d3ee' },
          { cx: 290, cy: 60, c: '#60a5fa' },
          { cx: 290, cy: 100, c: '#a78bfa' },
          { cx: 290, cy: 140, c: '#f472b6' },
        ].map((n, i) => (
          <motion.circle key={i} cx={n.cx} cy={n.cy} r="6" fill={n.c}
            initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} />
        ))}
      </svg>
    </div>
    <div className="flex items-center justify-between text-[11px] mt-3 pt-3 border-t border-white/5">
      <span className="text-zinc-500 font-mono">7 nodes · 9 edges</span>
      <span className="text-emerald-300 font-mono">+2 today</span>
    </div>
  </div>
);

/* ----- 4. Passport preview ----- */
const PassportPreview = () => (
  <div className="rounded-2xl border border-white/10 bg-black/40 p-5 h-full">
    <div className="flex items-start justify-between">
      <div>
        <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">Innovation Passport</div>
        <div className="font-display text-xl font-medium mt-1">OICE Protocol</div>
        <div className="text-[11px] font-mono text-zinc-500 mt-0.5">#OICE-001 · created Jun 13</div>
      </div>
      <div className="relative h-14 w-14">
        <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
          <circle cx="18" cy="18" r="14" stroke="rgba(255,255,255,0.08)" strokeWidth="3" fill="none" />
          <motion.circle cx="18" cy="18" r="14" stroke="url(#pg)" strokeWidth="3" fill="none"
                         strokeDasharray="88" strokeDashoffset={88 - (82 * 88 / 100)} strokeLinecap="round"
                         initial={{ strokeDashoffset: 88 }} whileInView={{ strokeDashoffset: 88 - (82 * 88 / 100) }} viewport={{ once: true }} transition={{ duration: 1.3 }} />
          <defs>
            <linearGradient id="pg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
        <span className="absolute inset-0 grid place-items-center text-[12px] font-mono text-white">82</span>
      </div>
    </div>
    <div className="mt-5 grid grid-cols-3 gap-2">
      {[
        { k: 'Contribs', v: '14' },
        { k: 'Funding', v: '12.4Ξ' },
        { k: 'Steps', v: '5/8' },
      ].map((s) => (
        <div key={s.k} className="rounded-lg border border-white/5 bg-white/[0.02] p-2.5">
          <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500">{s.k}</div>
          <div className="font-display text-lg mt-0.5">{s.v}</div>
        </div>
      ))}
    </div>
    <div className="mt-4 flex items-center gap-1.5 text-[11px] text-zinc-400">
      <span className="inline-flex items-center gap-1 text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> shippable</span>
      <span className="text-zinc-600">·</span>
      <span>3 contributors verified</span>
    </div>
    <a className="mt-5 inline-flex items-center gap-1.5 text-[12px] text-cyan-300 hover:text-cyan-200 transition-colors">
      View full passport <ArrowUpRight size={12} />
    </a>
  </div>
);

export default function Features() {
  return (
    <section id="features" data-testid={TID.featuresSection} className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-[11px] uppercase tracking-[0.32em] text-zinc-500 mb-6">
            Feature deep-dives
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.025em] leading-[1.05]"
          >
            Proof, not promises. <span className="text-gradient-accent">Look closer.</span>
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="mt-16 grid grid-cols-12 gap-5 lg:gap-6">
          {/* Big card — AI Evaluator with tabs */}
          <motion.div
            data-testid={TID.featureEvaluator}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 lg:col-span-7 relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-xl p-6 lg:p-8"
          >
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-violet-300/80">
                  <Brain size={12} /> AI Contribution Evaluator
                </div>
                <h3 className="font-display mt-3 text-2xl lg:text-3xl tracking-tight">
                  Every contribution gets a score.<br />
                  <span className="text-zinc-500">Every score has a reason.</span>
                </h3>
                <p className="mt-4 text-zinc-400 text-[15px] leading-relaxed">
                  Powered by Gemini, OICE evaluates work across five dimensions. No politics. No bias.
                  Just structured, transparent evaluation.
                </p>
                <Tabs defaultValue="dimensions" className="mt-6">
                  <TabsList className="bg-white/5 border border-white/10">
                    <TabsTrigger value="dimensions" className="text-xs">Dimensions</TabsTrigger>
                    <TabsTrigger value="types" className="text-xs">Contribution types</TabsTrigger>
                  </TabsList>
                  <TabsContent value="dimensions" className="mt-3">
                    <ul className="text-[13px] text-zinc-400 space-y-1.5">
                      <li><span className="text-cyan-300">Originality</span> — is this novel?</li>
                      <li><span className="text-blue-300">Effort</span> — how much work went in?</li>
                      <li><span className="text-violet-300">Complexity</span> — how technically demanding?</li>
                      <li><span className="text-fuchsia-300">Usefulness</span> — does it move the needle?</li>
                      <li><span className="text-pink-300">Impact</span> — what's the downstream effect?</li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="types" className="mt-3">
                    <div className="flex flex-wrap gap-2 text-[12px]">
                      {['Engineering','Research','Design','Marketing','Community','Documentation'].map((t) => (
                        <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-zinc-300">{t}</span>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              <div className="lg:w-1/2">
                <Evaluator />
              </div>
            </div>
            <div className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full blur-3xl bg-violet-500/15" />
          </motion.div>

          {/* Escrow & Rewards */}
          <motion.div
            data-testid={TID.featureEscrow}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="col-span-12 lg:col-span-5 relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-xl p-6 lg:p-8"
          >
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-cyan-300/80">
              <Coins size={12} /> Escrow & Rewards
            </div>
            <h3 className="font-display mt-3 text-2xl lg:text-3xl tracking-tight">
              Fund innovation, <span className="text-zinc-500">not promises.</span>
            </h3>
            <p className="mt-4 text-zinc-400 text-[15px] leading-relaxed">
              Sponsors deposit ETH into a per-innovation escrow. Funds are released only on
              milestone approval and routed by AI-verified contribution scores.
            </p>
            <div className="mt-6">
              <EscrowPreview />
            </div>
            <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full blur-3xl bg-cyan-500/15" />
          </motion.div>

          {/* DNA Graph */}
          <motion.div
            data-testid={TID.featureDna}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.04 }}
            className="col-span-12 md:col-span-6 lg:col-span-4 relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-xl p-6"
          >
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-emerald-300/80">
              <GitBranch size={12} /> Innovation DNA
            </div>
            <h3 className="font-display mt-3 text-2xl tracking-tight">Watch your innovation evolve — in real time.</h3>
            <p className="mt-3 text-zinc-400 text-[14px] leading-relaxed">
              Nodes for innovations, contributions, funding and milestones. Edges that tell the
              story of how it all connects.
            </p>
            <div className="mt-5">
              <DnaPreview />
            </div>
          </motion.div>

          {/* Passport (flagship) */}
          <motion.div
            data-testid={TID.featurePassport}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="col-span-12 md:col-span-6 lg:col-span-4 relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-xl p-6"
          >
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-amber-300/80">
              <IdCard size={12} /> Innovation Passport · Flagship
            </div>
            <h3 className="font-display mt-3 text-2xl tracking-tight">The GitHub profile for innovation.</h3>
            <p className="mt-3 text-zinc-400 text-[14px] leading-relaxed">
              One link. Contributions, funding, AI insights, readiness, timeline and the live DNA
              graph. Share it with investors, hiring managers, grant committees.
            </p>
            <div className="mt-5">
              <PassportPreview />
            </div>
          </motion.div>

          {/* Copilot */}
          <motion.div
            data-testid={TID.featureCopilot}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="col-span-12 lg:col-span-4 relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-xl p-6"
          >
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-fuchsia-300/80">
              <Bot size={12} /> AI Innovation Copilot
            </div>
            <h3 className="font-display mt-3 text-2xl tracking-tight">Your AI co-founder — without the equity split.</h3>
            <p className="mt-3 text-zinc-400 text-[14px] leading-relaxed">
              Required roles. Milestones. Timeline. Budget. Risks. Even tells you who's missing.
            </p>
            <div className="mt-5 rounded-xl border border-white/10 bg-black/40 p-4 font-mono text-[12px] leading-relaxed">
              <div className="text-zinc-500">{'>'} oice copilot analyze</div>
              <div className="text-white mt-1">Detected gaps in your team.</div>
              <div className="mt-2 space-y-1 text-zinc-400">
                <div><span className="text-amber-300">!</span> No designer assigned</div>
                <div><span className="text-amber-300">!</span> No growth lead</div>
                <div><span className="text-emerald-300">✓</span> 3 engineers active</div>
              </div>
              <div className="mt-3 text-[11px] text-zinc-500">Suggested budget · <span className="text-cyan-300">14–22 ETH</span></div>
            </div>
          </motion.div>

          {/* Readiness */}
          <motion.div
            data-testid={TID.featureReadiness}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="col-span-12 lg:col-span-8 relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-xl p-6 lg:p-8"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="md:max-w-md">
                <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-blue-300/80">
                  <Gauge size={12} /> Readiness Score
                </div>
                <h3 className="font-display mt-3 text-2xl lg:text-3xl tracking-tight">Are you actually ready to ship?</h3>
                <p className="mt-3 text-zinc-400 text-[14px] leading-relaxed">
                  A 0–100 score computed from team completeness, funding, contributions, milestones
                  and documentation quality. Stop guessing. Start measuring.
                </p>
              </div>
              <div className="grid grid-cols-5 gap-2 md:gap-3 w-full md:w-auto">
                {['Team','Funding','Contribs','Milestones','Docs'].map((label, i) => {
                  const vals = [86, 72, 91, 64, 58];
                  return (
                    <div key={label} className="text-center">
                      <div className="relative h-20 w-10 mx-auto rounded-md bg-white/[0.03] border border-white/5 overflow-hidden">
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: `${vals[i]}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
                          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-cyan-400 to-violet-500"
                        />
                      </div>
                      <div className="mt-2 text-[10px] uppercase tracking-[0.18em] text-zinc-500">{label}</div>
                      <div className="text-[11px] font-mono text-zinc-300">{vals[i]}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
