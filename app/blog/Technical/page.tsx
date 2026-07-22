// Suggested location: app/blog/why-i-started-building-carbonsetux/page.tsx
// Next.js App Router, Server Component (no "use client" needed — no browser JS is used).

import { Fraunces, Public_Sans, IBM_Plex_Mono } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-public-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata = {
  title: "Why I Started Building CarbonsetuX",
  description:
    "Notes on climate anxiety, information gaps, and why I think software has a small but real part to play.",
};

const CABLE_POINTS: [number, number][] = [
  [110, 48.7],
  [200, 38.8],
  [290, 34.3],
  [350, 34.3],
  [440, 38.8],
  [530, 48.7],
];

function SectionDivider() {
  return (
    <svg
      className="arc arc-section"
      viewBox="0 0 220 30"
      role="presentation"
      aria-hidden="true"
    >
      <path
        d="M6,24 Q110,2 214,24"
        fill="none"
        stroke="url(#bridgeGradHero)"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}

export default function Page() {
  return (
    <div
      className={`csx-post ${fraunces.variable} ${publicSans.variable} ${plexMono.variable}`}
    >
      <div className="csx-wrap">
        <p className="eyebrow">Personal essay</p>
        <h1>
          Why I started building <em>CarbonsetuX</em>
        </h1>
        <p className="subtitle">
          Notes on climate anxiety, information gaps, and why I think
          software has a small but real part to play.
        </p>
        <div className="meta">
          <span>6 min read</span>
          <span className="dot">·</span>
          <span>Field notes from a CS student</span>
        </div>

        <svg
          className="arc arc-hero"
          viewBox="0 0 640 80"
          role="img"
          aria-label="Illustration of a suspension bridge cable, symbolizing a bridge between people and their environmental impact"
        >
          <defs>
            <linearGradient id="bridgeGradHero" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#AE6A2E" />
              <stop offset="100%" stopColor="#274F49" />
            </linearGradient>
          </defs>
          <line
            x1="20"
            y1="64"
            x2="620"
            y2="64"
            stroke="var(--rule)"
            strokeWidth="1"
          />
          <path
            d="M20,64 Q320,4 620,64"
            fill="none"
            stroke="url(#bridgeGradHero)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {CABLE_POINTS.map(([x, y]) => (
            <line
              key={x}
              x1={x}
              y1={y}
              x2={x}
              y2={64}
              stroke="var(--ink-soft)"
              strokeWidth="1"
              opacity="0.55"
            />
          ))}
        </svg>

        <article>
          <section>
            <p>
              I don&apos;t remember the exact moment climate change stopped
              being an abstract topic for me and became something I actually
              thought about before falling asleep. It probably wasn&apos;t
              one moment at all. It was a slow accumulation of headlines
              about record-breaking heat, cities running out of water, and
              scientists sounding more and more tired of repeating
              themselves. Somewhere in that accumulation, a question started
              forming in my head that I couldn&apos;t quite shake: what am I
              actually doing about any of this?
            </p>
            <p>
              I&apos;m a computer science student. Most of my days are spent
              writing code, debugging things that shouldn&apos;t be broken,
              and learning how systems talk to each other. None of that felt
              directly connected to something as enormous as climate change.
              Climate change is the kind of problem that gets discussed in
              terms of gigatons and global treaties and decades-long
              timelines. It&apos;s hard to see where a single person, let
              alone a single line of code, fits into that picture.
            </p>
            <p>
              But the more I read about it, the more I realized that this
              disconnect — between caring about the problem and knowing how
              to act on it — isn&apos;t just my problem. It&apos;s almost
              everyone&apos;s.
            </p>
          </section>

          <SectionDivider />

          <section>
            <h2>The gap between caring and doing</h2>
            <p>
              I&apos;ve talked to a lot of people who genuinely want to live
              more sustainably. They recycle, they think twice about
              flights, they feel a small pang of guilt when they leave the AC
              running. But when you ask them how much carbon their household
              actually produces in a year, or which of their habits matter
              most, almost nobody knows. The information exists somewhere —
              in research papers, government reports, sustainability
              frameworks — but it&apos;s scattered, dense, and not built for
              a regular person trying to make better decisions on an
              ordinary Tuesday.
            </p>
            <p>
              This is what struck me most: climate change isn&apos;t only a
              science problem or a policy problem. It&apos;s also an
              information problem. People are willing to act, but
              they&apos;re missing the tools to understand their own impact
              and to know what would actually move the needle. Without that,
              sustainability turns into guesswork, or worse, guilt without
              direction. That gap is where I started thinking, as a
              developer, that I might actually have something to
              contribute.
            </p>
          </section>

          <SectionDivider />

          <section>
            <h2>Why data and AI, and not just awareness</h2>
            <p>
              There&apos;s no shortage of content telling people that the
              planet is in trouble. Documentaries, articles, infographics —
              most of it is well-intentioned, and some of it is genuinely
              important. But I&apos;ve noticed that a constant stream of
              alarming statistics tends to produce one of two reactions:
              anxiety or numbness. Neither of those helps someone actually
              reduce their emissions.
            </p>
            <p>
              What I kept coming back to was a simpler idea: if people had a
              clear, personalized picture of their own carbon footprint —
              not global numbers, but numbers about their own home, their
              own commute, their own habits — they could make decisions
              instead of just absorbing dread. This is also where I think AI
              can be genuinely useful, not as a buzzword, but as a practical
              layer between raw data and everyday decisions: helping
              translate a spreadsheet of emissions factors into something
              closer to, here&apos;s where most of your footprint is coming
              from, and here are a few realistic ways to bring it down.
            </p>
          </section>

          <SectionDivider />

          <section>
            <h2>Where CarbonsetuX comes from</h2>
            <p>
              CarbonsetuX started as an idea I kept sketching out in
              notebooks and half-finished repositories before it had a name.
              The word &quot;setu&quot; means &quot;bridge&quot; in Hindi,
              and that&apos;s really the core of what I wanted to build: a
              bridge between wanting to help the environment and knowing how
              to do it. Not a lecture. Not another dashboard full of numbers
              nobody has time to decode. A bridge.
            </p>
            <p>
              My vision for CarbonsetuX is to build a platform that helps
              people — and eventually organizations and even governments —
              understand, track, and gradually reduce their carbon
              footprint. At the individual level, it&apos;s about helping
              someone see the real shape of their own emissions. At the
              organizational level, it&apos;s about giving companies a
              clearer, more continuous way to track their environmental
              impact instead of relying on once-a-year sustainability
              reports. And at the government level, I imagine a future where
              policymakers have better, more granular data to understand how
              communities are actually doing.
            </p>
            <p>
              I want to be honest about where this stands today. CarbonsetuX
              is still very much a vision I&apos;m building toward, not a
              finished product. The core features I&apos;m designing around
              are carbon footprint estimation grounded in someone&apos;s
              actual lifestyle, personalized recommendations instead of
              generic advice, AI-driven insights that surface patterns
              people wouldn&apos;t notice on their own, sustainability
              tracking that measures progress over months rather than
              guesses, and environmental analytics that reveal trends over
              time. None of these are meant to be flashy. They&apos;re meant
              to be useful.
            </p>
          </section>

          <SectionDivider />

          <section>
            <h2>Empowering people, not overwhelming them</h2>
            <p>
              If there&apos;s one principle I keep returning to while
              designing this, it&apos;s that technology built for
              sustainability should make people feel more capable, not more
              anxious. It&apos;s easy to build something that just throws
              statistics at users. It&apos;s harder, and more valuable, to
              build something that says: here&apos;s where you stand, and
              here&apos;s a reasonable next step you can actually take.
            </p>
            <p>
              Fear can get someone&apos;s attention for a moment, but it
              rarely sustains behavior change. Clarity and agency do. My
              goal with CarbonsetuX isn&apos;t to make people feel bad about
              their footprint. It&apos;s to give them enough understanding
              that reducing it starts to feel achievable, one decision at a
              time.
            </p>
          </section>

          <SectionDivider />

          <section className="closing">
            <h2>Why I&apos;m doing this</h2>
            <p>
              I keep coming back to something fairly simple. I&apos;m a
              software developer, and the thing I know how to do is build
              systems that turn complicated information into something
              usable. Climate change is complicated. Individual action often
              feels powerless against something so large. But I don&apos;t
              think that means software has no role to play — only that the
              role has to be thoughtful, honest about its limits, and
              genuinely useful rather than performative.
            </p>
            <p>
              Building CarbonsetuX is my attempt at that. I don&apos;t
              expect it to solve climate change on its own — no single
              platform will. But I do believe that if enough people have
              clearer visibility into their own impact, the collective
              effect of many small, informed decisions can add up to
              something real.
            </p>
            <p>
              At the end of the day, I think building software is really
              about solving problems that matter to people. CarbonsetuX is
              my way of bringing that belief and this problem together —
              using what I know how to build, in service of a challenge I
              don&apos;t think I can ignore.
            </p>
          </section>
        </article>

        <footer>
          <span>Written while building CarbonsetuX</span>
          <span>setu · noun · bridge</span>
        </footer>
      </div>

      <style>{`
        .csx-post {
          --paper: #ECE7DA;
          --ink: #1E241F;
          --ink-soft: #585F51;
          --amber: #AE6A2E;
          --teal: #274F49;
          --rule: rgba(30, 36, 32, 0.16);
          background: var(--paper);
          color: var(--ink);
          font-family: var(--font-public-sans), sans-serif;
          -webkit-font-smoothing: antialiased;
          min-height: 100vh;
        }
        .csx-post * { box-sizing: border-box; }
        .csx-post ::selection { background: var(--amber); color: var(--paper); }

        .csx-post .csx-wrap {
          max-width: 700px;
          margin: 0 auto;
          padding: 5rem 1.5rem 6rem;
        }

        .csx-post .eyebrow {
          font-family: var(--font-plex-mono), monospace;
          font-size: 0.72rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--teal);
          margin: 0 0 1.4rem;
        }

        .csx-post h1 {
          font-family: var(--font-fraunces), serif;
          font-weight: 600;
          font-size: clamp(2.2rem, 6vw, 3.6rem);
          line-height: 1.06;
          letter-spacing: -0.01em;
          margin: 0 0 1.4rem;
          max-width: 14ch;
        }
        .csx-post h1 em {
          font-style: italic;
          font-weight: 500;
          color: var(--teal);
        }

        .csx-post .subtitle {
          font-size: 1.12rem;
          line-height: 1.6;
          color: var(--ink-soft);
          max-width: 42ch;
          margin: 0 0 1.8rem;
        }

        .csx-post .meta {
          font-family: var(--font-plex-mono), monospace;
          font-size: 0.8rem;
          color: var(--ink-soft);
          display: flex;
          gap: 0.6rem;
          align-items: center;
          margin-bottom: 2.6rem;
        }
        .csx-post .meta .dot { opacity: 0.5; }

        .csx-post .arc { display: block; width: 100%; height: auto; overflow: visible; }
        .csx-post .arc-hero { margin: 0 0 3rem; }
        .csx-post .arc-section { margin: 3.4rem 0 2.2rem; max-width: 220px; }

        .csx-post .arc path {
          stroke-dasharray: 900;
          stroke-dashoffset: 900;
          animation: csx-draw 1.6s ease forwards 0.15s;
        }
        @keyframes csx-draw {
          to { stroke-dashoffset: 0; }
        }

        .csx-post article p {
          font-size: 1.14rem;
          line-height: 1.78;
          margin: 0 0 1.3rem;
          max-width: 64ch;
        }

        .csx-post article > section:first-of-type p:first-of-type::first-letter {
          font-family: var(--font-fraunces), serif;
          font-weight: 600;
          font-size: 3.4rem;
          line-height: 0.78;
          float: left;
          padding: 0.1rem 0.35rem 0 0;
          color: var(--amber);
        }

        .csx-post h2 {
          font-family: var(--font-fraunces), serif;
          font-style: italic;
          font-weight: 500;
          font-size: 1.55rem;
          color: var(--teal);
          margin: 0 0 1.1rem;
          letter-spacing: -0.005em;
        }

        .csx-post .closing p {
          font-family: var(--font-fraunces), serif;
          font-size: 1.28rem;
          line-height: 1.68;
          font-weight: 400;
          color: var(--ink);
        }

        .csx-post footer {
          margin-top: 4rem;
          padding-top: 1.8rem;
          border-top: 1px solid var(--rule);
          font-family: var(--font-plex-mono), monospace;
          font-size: 0.78rem;
          color: var(--ink-soft);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        @media (max-width: 560px) {
          .csx-post .csx-wrap { padding: 3.4rem 1.25rem 4rem; }
          .csx-post h1 { max-width: none; }
          .csx-post article p { font-size: 1.06rem; }
        }

        @media (prefers-reduced-motion: reduce) {
          .csx-post .arc path { animation: none; stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  );
}