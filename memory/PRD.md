# OICE Landing Page — PRD

## Original Problem Statement
Build a production-quality landing page for **OICE — Open Innovation Contribution Escrow**, a decentralized AI-powered innovation coordination platform (Gemini AI scoring, Ethereum escrow on Base Sepolia, Innovation Passports, DNA Graph lifecycle visualization, 90-second Simulation Engine). Reference: Fusion AI dark/premium landing page; target quality: Stripe/Linear/Vercel/Raycast/Arc/Perplexity. Must feel like a funded startup, not a hackathon project.

## User Choices
- Scope: Landing page + clickable "Launch App" / "Run Simulation" buttons routing to placeholder pages
- Theme: Dark with cyan/blue/violet accent (NOT lime/green) — differentiated from reference
- Animations: Maximalist (mouse-follow, magnetic buttons, animated DNA graph) + tasteful Framer Motion reveals

## Architecture
- **Frontend only**: React 19 + Tailwind + Framer Motion + React Flow + react-fast-marquee + react-icons + Shadcn UI
- **Routing**: react-router-dom v7 — `/`, `/app`, `/simulation`
- **Fonts**: Outfit (display), Manrope (body), JetBrains Mono (code)
- **Backend**: Unchanged FastAPI default (not used by landing)

## What's Been Implemented (2025-12)
- Sticky glass header with smooth-scroll nav + mobile drawer (`Header.jsx`)
- Hero with gradient headline, dual magnetic CTAs, **animated React Flow DNA graph** showing Innovation → 3 Contributions → Funding/Milestones → Rewards (7 nodes, 9 animated edges)
- Tech-stack marquee with `react-icons/si` logos
- Problem section ("$2.7T black hole") with 4 silo cards (GitHub/Notion/DAOs/AI tools)
- Solution section: 4 pillars bento (Gemini AI, Ethereum Escrow, Passports, DNA Graphs)
- "How It Works" 8-step alternating timeline with animated gradient line
- Feature bento grid: AI Evaluator with 5-dimension score bars, Escrow with locked-ETH allocation, mini DNA SVG graph, Passport circular gauge, Copilot terminal mock, Readiness bar chart
- "Why Now" 3-force grid
- Animated stat counters (6 metrics)
- Simulation CTA with mock player + animated progress bar
- Final CTA with massive gradient headline + magnetic dual-button row
- Footer with multi-column links + giant `OICE` wordmark
- Placeholder pages for `/app` and `/simulation` with "Back to landing"
- All 29+ interactive elements have kebab-case `data-testid` attributes (centralized in `testIds.js`)

## Test Results
- testing_agent_v3 iteration_1: **100% pass** after fixing DNA graph missing `<Handle>` (now renders 9 animated edges)
- All routes, scroll, mobile menu, counters, mock previews verified

## Prioritized Backlog (P0/P1/P2)
- **P1**: Replace placeholder `/app` and `/simulation` with real flows (innovation creation form, contribution submission, AI evaluation backend, wallet connection, actual 90-second simulation timeline player)
- **P1**: Wire Gemini AI for contribution scoring + readiness score
- **P1**: Deploy `InnovationEscrow.sol` to Base Sepolia + wagmi/viem integration
- **P2**: Real testimonials/social proof, FAQ accordion, blog/changelog pages
- **P2**: SEO meta tags, Open Graph share image, sitemap, analytics
- **P2**: Add light theme toggle (currently dark-only by design)

## Next Tasks
1. Implement `/app` dashboard with innovation creation flow
2. Integrate Gemini AI evaluator via `integration_playbook_expert_v2`
3. Build the actual Simulation Engine with Play/Pause/Speed controls
4. Add Stripe/Crypto sponsor deposit flow
