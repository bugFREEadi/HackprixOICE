import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Coins, GitBranch, IdCard, Bot, Gauge, ArrowUpRight } from 'lucide-react';
import { TID } from '@/constants/testIds';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const dimensions = [
  { label: 'Originality', value: 92, color: '#ee692e' },
  { label: 'Effort',      value: 78, color: '#f08a5d' },
  { label: 'Complexity',  value: 86, color: '#eb8299' },
  { label: 'Usefulness',  value: 95, color: '#85be9d' },
  { label: 'Impact',      value: 89, color: '#ded2c4' },
];
const Evaluator = () => (
  <div className="rounded-2xl border border-white/[0.08] bg-ink/60 p-5">
    <div className="flex items-center justify-between mb-5">
      <div className="flex items-center gap-2">
        <div className="h-7 w-7 grid place-items-center rounded-lg bg-pink/15 border border-pink/30">
          <Brain size={14} className="text-pink" />
        </div>
        <span className="text-[11px] uppercase tracking-[0.18em] text-bone/40 font-mono">contribution #c-094</span>
      </div>
      <div className="text-right">
        <div className="text-[10px] uppercase tracking-[0.2em] text-bone/40">overall</div>
        <div className="font-display text-2xl font-semibold text-accent-warm">88</div>
      </div>
    </div>
    <div className="space-y-3">
      {dimensions.map((d, i) => (
        <motion.div key={d.label}
          initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}>
          <div className="flex items-center justify-between text-[11px] mb-1">
            <span className="text-bone/55">{d.label}</span>
            <span className="font-mono text-white">{d.value}</span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-white/[0.05] overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${d.value}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.15 + i * 0.08, ease: 'easeOut' }}
              className="h-full rounded-full"
              style={{ background: d.color }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const escrow = [
  { name: 'Maya R.', role: 'Smart contract', share: 38, color: '#ee692e' },
  { name: 'Jules K.', role: 'Researcher',    share: 27, color: '#eb8299' },
  { name: 'Theo S.', role: 'Designer',       share: 21, color: '#85be9d' },
  { name: 'Iva N.',  role: 'Growth',         share: 14, color: '#ded2c4' },
];
const EscrowPreview = () => (
  <div className="rounded-2xl border border-white/[0.08] bg-ink/60 p-5">
    <div className="flex items-center justify-between">
      <div>
        <div className="text-[10px] uppercase tracking-[0.2em] text-bone/40">Locked in escrow</div>
        <div className="font-display text-3xl font-semibold mt-1 text-white">12.4 <span className="text-bone/40 text-xl font-normal">ETH</span></div>
      </div>
      <div className="text-right">
        <div className="text-[10px] uppercase tracking-[0.2em] text-bone/40">Milestone</div>
        <div className="font-mono text-sm text-green mt-1">2 / 4 approved</div>
      </div>
    </div>
    <div className="mt-5 h-2 rounded-full bg-white/[0.05] overflow-hidden flex">
      {escrow.map((e) => (
        <motion.div key={e.name}
          initial={{ width: 0 }} whileInView={{ width: `${e.share}%` }} viewport={{ once: true }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          style={{ background: e.color }} />
      ))}
    </div>
    <div className="mt-5 space-y-2.5">
      {escrow.map((e, i) => (
        <motion.div key={e.name}
          initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: i * 0.07 }} className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-3">
            <span className="h-7 w-7 rounded-full text-[11px] font-medium grid place-items-center"
                  style={{ background: `${e.color}22`, color: e.color, border: `1px solid ${e.color}55` }}>
              {e.name.split(' ').map(n => n[0]).join('')}
            </span>
            <div>
              <div className="text-white text-[13px]">{e.name}</div>
              <div className="text-bone/40 text-[11px]">{e.role}</div>
            </div>
          </div>
          <span className="font-mono text-[12px] text-bone/70">{e.share}% · {(12.4 * e.share / 100).toFixed(2)} ETH</span>
        </motion.div>
      ))}
    </div>
    <div className="mt-5 text-[11px] font-mono text-bone/40 bg-white/[0.02] rounded-lg border border-white/[0.05] p-2.5">
      <span className="text-orange">ContributionScore</span> / TotalScore = <span className="text-pink">Your Share</span>
    </div>
  </div>
);

const DnaPreview = () => (
  <div className="rounded-2xl border border-white/[0.08] bg-ink/60 p-5 h-full flex flex-col">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <GitBranch size={14} className="text-green" />
        <span className="text-[11px] uppercase tracking-[0.18em] text-bone/40 font-mono">lifecycle.dna</span>
      </div>
      <span className="text-[10px] font-mono text-bone/35">v0.4.1</span>
    </div>
    <div className="relative flex-1 min-h-[200px]">
      <svg viewBox="0 0 320 200" className="w-full h-full">
        <motion.path d="M 30 100 C 110 30, 180 30, 290 60"  stroke="#ee692e" strokeWidth="1.4" fill="none"
                     initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.6 }} />
        <motion.path d="M 30 100 C 110 100, 180 100, 290 100" stroke="#eb8299" strokeWidth="1.4" fill="none"
                     initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.6, delay: 0.15 }} />
        <motion.path d="M 30 100 C 110 170, 180 170, 290 140" stroke="#85be9d" strokeWidth="1.4" fill="none"
                     initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.6, delay: 0.3 }} />
        {[
          { cx: 30, cy: 100, c: '#ded2c4' },
          { cx: 290, cy: 60, c: '#ee692e' },
          { cx: 290, cy: 100, c: '#eb8299' },
          { cx: 290, cy: 140, c: '#85be9d' },
        ].map((n, i) => (
          <motion.circle key={i} cx={n.cx} cy={n.cy} r="6" fill={n.c}
            initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} />
        ))}
      </svg>
    </div>
    <div className="flex items-center justify-between text-[11px] mt-3 pt-3 border-t border-white/[0.06]">
      <span className="text-bone/40 font-mono">7 nodes · 9 edges</span>
      <span className="text-green font-mono">+2 today</span>
    </div>
  </div>
);

const PassportPreview = () => (
  <div className="rounded-2xl border border-white/[0.08] bg-ink/60 p-5 h-full">
    <div className="flex items-start justify-between">
      <div>
        <div className="text-[10px] uppercase tracking-[0.2em] text-bone/40">Innovation Passport</div>
        <div className="font-display text-xl font-medium mt-1 text-white">OICE Protocol</div>
        <div className="text-[11px] font-mono text-bone/40 mt-0.5">#OICE-001 · created Jun 13</div>
      </div>
      <div className="relative h-14 w-14">
        <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
          <circle cx="18" cy="18" r="14" stroke="rgba(255,255,255,0.08)" strokeWidth="3" fill="none" />
          <motion.circle cx="18" cy="18" r="14" stroke="url(#pg)" strokeWidth="3" fill="none"
                         strokeDasharray="88" strokeDashoffset={88 - (82 * 88 / 100)} strokeLinecap="round"
                         initial={{ strokeDashoffset: 88 }} whileInView={{ strokeDashoffset: 88 - (82 * 88 / 100) }} viewport={{ once: true }} transition={{ duration: 1.3 }} />
          <defs>
            <linearGradient id="pg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ee692e" />
              <stop offset="100%" stopColor="#eb8299" />
            </linearGradient>
          </defs>
        </svg>
        <span className="absolute inset-0 grid place-items-center text-[12px] font-mono text-white">82</span>
      </div>
    </div>
    <div className="mt-5 grid grid-cols-3 gap-2">
      {[{ k: 'Contribs', v: '14' }, { k: 'Funding', v: '12.4Ξ' }, { k: 'Steps', v: '5/8' }].map((s) => (
        <div key={s.k} className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-2.5">
          <div className="text-[9px] uppercase tracking-[0.2em] text-bone/40">{s.k}</div>
          <div className="font-display text-lg mt-0.5 text-white">{s.v}</div>
        </div>
      ))}
    </div>
    <div className="mt-4 flex items-center gap-1.5 text-[11px] text-bone/55">
      <span className="inline-flex items-center gap-1 text-green"><span className="h-1.5 w-1.5 rounded-full bg-green" /> shippable</span>
      <span className="text-bone/25">·</span>
      <span>3 contributors verified</span>
    </div>
    <a className="mt-5 inline-flex items-center gap-1.5 text-[12px] text-orange hover:text-orange-soft transition-colors">
      View full passport <ArrowUpRight size={12} />
    </a>
  </div>
);

export default function Features() {
  return (
    <section id="features" data-testid={TID.featuresSection} className="relative py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                    className="inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.32em] text-bone font-medium mb-7">
            <span className="h-1.5 w-1.5 rounded-full bg-bone" /> Feature deep-dives · 04
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.03em] leading-[1.05] text-white"
          >
            Proof, not promises.
            <br /><span className="text-accent-warm font-semibold">Look closer.</span>
          </motion.h2>
        </div>

        <div className="mt-16 grid grid-cols-12 gap-5 lg:gap-6">
          {/* AI Evaluator big card */}
          <motion.div
            data-testid={TID.featureEvaluator}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 lg:col-span-7 relative overflow-hidden rounded-3xl border border-white/[0.08] bg-ink/70 backdrop-blur-xl p-6 lg:p-8"
          >
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-pink">
                  <Brain size={12} /> AI Contribution Evaluator
                </div>
                <h3 className="font-display mt-3 text-2xl lg:text-[32px] tracking-tight text-white leading-tight">
                  Every contribution gets a score.
                  <br /><span className="text-bone/50">Every score has a reason.</span>
                </h3>
                <p className="mt-5 text-bone/60 text-[15px] leading-relaxed">
                  Powered by Gemini, OICE evaluates work across <span className="text-white font-medium">five dimensions</span>.
                  No politics. No bias. Just structured, transparent evaluation.
                </p>
                <Tabs defaultValue="dimensions" className="mt-6">
                  <TabsList className="bg-white/[0.04] border border-white/[0.08]">
                    <TabsTrigger value="dimensions" className="text-xs">Dimensions</TabsTrigger>
                    <TabsTrigger value="types" className="text-xs">Contribution types</TabsTrigger>
                  </TabsList>
                  <TabsContent value="dimensions" className="mt-3">
                    <ul className="text-[13px] text-bone/60 space-y-1.5">
                      <li><span className="text-orange font-medium">Originality</span> — is this novel?</li>
                      <li><span className="text-orange-soft font-medium">Effort</span> — how much work went in?</li>
                      <li><span className="text-pink font-medium">Complexity</span> — how technically demanding?</li>
                      <li><span className="text-green font-medium">Usefulness</span> — does it move the needle?</li>
                      <li><span className="text-bone font-medium">Impact</span> — what is the downstream effect?</li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="types" className="mt-3">
                    <div className="flex flex-wrap gap-2 text-[12px]">
                      {['Engineering','Research','Design','Marketing','Community','Documentation'].map((t) => (
                        <span key={t} className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-bone/70">{t}</span>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              <div className="lg:w-1/2"><Evaluator /></div>
            </div>
            <div className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full blur-3xl bg-pink/[0.1]" />
          </motion.div>

          {/* Escrow & Rewards */}
          <motion.div
            data-testid={TID.featureEscrow}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="col-span-12 lg:col-span-5 relative overflow-hidden rounded-3xl border border-white/[0.08] bg-ink/70 backdrop-blur-xl p-6 lg:p-8"
          >
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-orange">
              <Coins size={12} /> Escrow & Rewards
            </div>
            <h3 className="font-display mt-3 text-2xl lg:text-[32px] tracking-tight text-white leading-tight">
              Fund innovation,
              <br /><span className="text-bone/50">not promises.</span>
            </h3>
            <p className="mt-5 text-bone/60 text-[15px] leading-relaxed">
              Sponsors deposit ETH into a <span className="text-white font-medium">per-innovation escrow</span>.
              Funds release only on milestone approval and route by AI-verified scores.
            </p>
            <div className="mt-6"><EscrowPreview /></div>
            <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full blur-3xl bg-orange/[0.1]" />
          </motion.div>

          {/* DNA Graph */}
          <motion.div
            data-testid={TID.featureDna}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.04 }}
            className="col-span-12 md:col-span-6 lg:col-span-4 relative overflow-hidden rounded-3xl border border-white/[0.08] bg-ink/70 backdrop-blur-xl p-6"
          >
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-green">
              <GitBranch size={12} /> Innovation DNA
            </div>
            <h3 className="font-display mt-3 text-2xl tracking-tight text-white leading-tight">Watch your innovation evolve — in real time.</h3>
            <p className="mt-3 text-bone/60 text-[14px] leading-relaxed">
              Nodes for innovations, contributions, funding and milestones. Edges that tell the story of how it all connects.
            </p>
            <div className="mt-5"><DnaPreview /></div>
          </motion.div>

          {/* Passport */}
          <motion.div
            data-testid={TID.featurePassport}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="col-span-12 md:col-span-6 lg:col-span-4 relative overflow-hidden rounded-3xl border border-white/[0.08] bg-ink/70 backdrop-blur-xl p-6"
          >
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-bone">
              <IdCard size={12} /> Innovation Passport · Flagship
            </div>
            <h3 className="font-display mt-3 text-2xl tracking-tight text-white leading-tight">The GitHub profile for innovation.</h3>
            <p className="mt-3 text-bone/60 text-[14px] leading-relaxed">
              One link. Contributions, funding, AI insights, readiness, timeline and the live DNA graph.
            </p>
            <div className="mt-5"><PassportPreview /></div>
          </motion.div>

          {/* Copilot */}
          <motion.div
            data-testid={TID.featureCopilot}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="col-span-12 lg:col-span-4 relative overflow-hidden rounded-3xl border border-white/[0.08] bg-ink/70 backdrop-blur-xl p-6"
          >
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-pink">
              <Bot size={12} /> AI Innovation Copilot
            </div>
            <h3 className="font-display mt-3 text-2xl tracking-tight text-white leading-tight">Your AI co-founder — without the equity split.</h3>
            <p className="mt-3 text-bone/60 text-[14px] leading-relaxed">
              Required roles. Milestones. Timeline. Budget. Risks. Even tells you who is missing.
            </p>
            <div className="mt-5 rounded-xl border border-white/[0.08] bg-ink/60 p-4 font-mono text-[12px] leading-relaxed">
              <div className="text-bone/40">{'>'} oice copilot analyze</div>
              <div className="text-white mt-1">Detected gaps in your team.</div>
              <div className="mt-2 space-y-1 text-bone/55">
                <div><span className="text-orange">!</span> No designer assigned</div>
                <div><span className="text-orange">!</span> No growth lead</div>
                <div><span className="text-green">✓</span> 3 engineers active</div>
              </div>
              <div className="mt-3 text-[11px] text-bone/40">Suggested budget · <span className="text-orange">14–22 ETH</span></div>
            </div>
          </motion.div>

          {/* Readiness */}
          <motion.div
            data-testid={TID.featureReadiness}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="col-span-12 lg:col-span-8 relative overflow-hidden rounded-3xl border border-white/[0.08] bg-ink/70 backdrop-blur-xl p-6 lg:p-8"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="md:max-w-md">
                <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-green">
                  <Gauge size={12} /> Readiness Score
                </div>
                <h3 className="font-display mt-3 text-2xl lg:text-[28px] tracking-tight text-white leading-tight">Are you actually ready to ship?</h3>
                <p className="mt-3 text-bone/60 text-[14px] leading-relaxed">
                  A 0–100 score from team completeness, funding, contributions, milestones and documentation.
                  <span className="text-white font-medium"> Stop guessing. Start measuring.</span>
                </p>
              </div>
              <div className="grid grid-cols-5 gap-2 md:gap-3 w-full md:w-auto">
                {['Team','Funding','Contribs','Milestones','Docs'].map((label, i) => {
                  const vals = [86, 72, 91, 64, 58];
                  const colors = ['#ee692e','#f08a5d','#eb8299','#85be9d','#ded2c4'];
                  return (
                    <div key={label} className="text-center">
                      <div className="relative h-24 w-10 mx-auto rounded-md bg-white/[0.02] border border-white/[0.05] overflow-hidden">
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: `${vals[i]}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
                          className="absolute bottom-0 left-0 right-0"
                          style={{ background: colors[i] }}
                        />
                      </div>
                      <div className="mt-2 text-[10px] uppercase tracking-[0.18em] text-bone/40">{label}</div>
                      <div className="text-[11px] font-mono text-bone/70">{vals[i]}</div>
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
