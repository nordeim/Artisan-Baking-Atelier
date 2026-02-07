import { ExperienceCard } from "./components/ExperienceCard";
import { InsightCard } from "./components/InsightCard";
import { JournalEntry } from "./components/JournalEntry";
import { SectionHeader } from "./components/SectionHeader";
import { StatCard } from "./components/StatCard";

const experiences = [
  {
    title: "Obsidian Croissant Atelier",
    subtitle: "Signature Masterclass",
    description:
      "Three-day immersion into laminated dough ritual, noir cocoa lamination, and the precise architecture of Singaporean heat.",
    meta: "12 Seats",
  },
  {
    title: "Heritage Fermentation Lab",
    subtitle: "Depth Studio",
    description:
      "Slow-bloom starters, tea-smoked grains, and heritage yeast cultures curated with Peranakan spice profiles.",
    meta: "8 Seats",
  },
  {
    title: "Midnight Plating Salon",
    subtitle: "Gallery Session",
    description:
      "A choreography of plated desserts with ink glaze, gold leaf tension, and dramatic mise-en-scène.",
    meta: "10 Seats",
  },
];

const insights = [
  {
    title: "Noir Ingredient Library",
    description:
      "A catalog of regional flours, fermented cacao, and night-bloom botanicals sourced across Southeast Asia.",
  },
  {
    title: "Cinematic Production",
    description:
      "Studio-grade photography, storyboarded plating, and editorial layout direction for each course.",
  },
  {
    title: "Bespoke Retail Touchpoints",
    description:
      "Packaging templates, experiential unboxing rituals, and sensory notes for boutique clientele.",
  },
];

const journalEntries = [
  {
    title: "The 7° Diagonal: Singapore Shophouse Geometry",
    date: "Atelier Journal · 02.24",
    excerpt:
      "We align every divider with the rooflines of Katong shophouses, so each scroll feels anchored to the city.",
  },
  {
    title: "Light as Ingredient",
    date: "Noir Notes · 02.18",
    excerpt:
      "Gold light is not decoration — it is a temperature, a finishing technique, and a sensory cue.",
  },
  {
    title: "Sourdough as Storytelling",
    date: "Fermentation Log · 02.10",
    excerpt:
      "Our starters inherit local humidity and sea air; each culture preserves a microclimate memory.",
  },
];

export function App() {
  return (
    <main className="text-sm">
      <section className="relative overflow-hidden px-6 pb-24 pt-16 sm:px-12 lg:px-24">
        <div className="absolute inset-0">
          <div className="noise-layer" />
        </div>
        <div className="relative z-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <p className="text-xs uppercase tracking-[0.6em] text-amber-200/80">Singapore atelier</p>
            <h1 className="text-5xl font-[family-name:var(--font-display)] hero-title sm:text-6xl">
              L'Artisan Baking Atelier
            </h1>
            <p className="max-w-xl text-base text-neutral-200/90 sm:text-lg">
              A cinematic e-commerce experience for elite bakers. Noir craftsmanship, heritage rituals, and a
              meticulously curated curriculum designed for the luminous kitchens of Singapore.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button className="glass-panel px-6 py-3 text-xs uppercase tracking-[0.4em] text-amber-200 transition hover:border-amber-300 hover:text-amber-100">
                Reserve a seat
              </button>
              <button className="border border-neutral-800 px-6 py-3 text-xs uppercase tracking-[0.4em] text-neutral-300 transition hover:border-amber-200/70 hover:text-amber-200">
                View the codex
              </button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <StatCard value="09" label="Immersive studios" />
              <StatCard value="4.9" label="Global rating" />
              <StatCard value="72" label="Curated techniques" />
            </div>
          </div>
          <div className="glass-panel relative overflow-hidden p-8">
            <div className="absolute inset-0 opacity-60" />
            <div className="relative space-y-6">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.4em] text-amber-200/80">Next intake</p>
                <span className="text-xs text-neutral-400">Limited</span>
              </div>
              <div className="space-y-3">
                <h2 className="text-3xl font-[family-name:var(--font-display)] text-amber-100">
                  Noir Mastery Cohort
                </h2>
                <p className="text-sm text-neutral-300/90">
                  A 6-week hybrid residency that marries artisan technique with cinematic storytelling.
                </p>
              </div>
              <div className="divider-line" />
              <div className="space-y-4 text-sm text-neutral-300">
                <div className="flex items-center justify-between">
                  <span>Residency dates</span>
                  <span className="text-amber-200">May · Jul · Sep</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Private tasting</span>
                  <span className="text-amber-200">Skyline studio</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Membership</span>
                  <span className="text-amber-200">Invitation only</span>
                </div>
              </div>
              <button className="w-full border border-amber-300/40 px-6 py-3 text-xs uppercase tracking-[0.4em] text-amber-200 transition hover:border-amber-200 hover:text-amber-100">
                Apply for residency
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-12 lg:px-24">
        <SectionHeader
          label="Curriculum"
          title="Experiences sculpted for masterful hands"
          description="Each studio follows the Noir Artisanal Codex — a precise choreography of fermentation, lamination, and architectural plating."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.title} {...experience} />
          ))}
        </div>
      </section>

      <section className="px-6 py-16 sm:px-12 lg:px-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <SectionHeader
              label="The Codex"
              title="Design, culture, and culinary research"
              description="An immersive commerce narrative. Every course, product, and editorial is layered with provenance, craft, and ritual."
            />
            <button className="border border-neutral-800 px-5 py-3 text-xs uppercase tracking-[0.4em] text-neutral-300 transition hover:border-amber-200/70 hover:text-amber-200">
              Explore the system
            </button>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {insights.map((insight) => (
              <InsightCard key={insight.title} {...insight} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-12 lg:px-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <SectionHeader
              label="Journal"
              title="Notes from the atelier"
              description="Dispatches from our test kitchen: regional fermentation, shophouse geometry, and plating rituals."
            />
            <div className="space-y-6">
              {journalEntries.map((entry) => (
                <JournalEntry key={entry.title} {...entry} />
              ))}
            </div>
          </div>
          <div className="glass-panel p-8 space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-amber-200/80">Collectors' Dispatch</p>
            <h3 className="text-2xl font-[family-name:var(--font-display)] text-amber-100">
              Receive seasonal menus, masterclass drops, and atelier films.
            </h3>
            <p className="text-sm text-neutral-300/90">
              We write twice per season. Every email is composed in-house and includes tasting maps, mood boards, and
              a private viewing link.
            </p>
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-[0.3em] text-neutral-400">Email address</label>
              <input
                className="w-full border border-neutral-800 bg-[#0d0c0a] px-4 py-3 text-sm text-neutral-200 focus:border-amber-200 focus:outline-none"
                placeholder="you@atelier.sg"
              />
              <button className="w-full border border-amber-300/40 px-6 py-3 text-xs uppercase tracking-[0.4em] text-amber-200 transition hover:border-amber-200 hover:text-amber-100">
                Join the dispatch
              </button>
            </div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-neutral-500">
              Limited to 200 patrons per season
            </p>
          </div>
        </div>
      </section>

      <footer className="px-6 py-12 sm:px-12 lg:px-24">
        <div className="divider-line mb-8" />
        <div className="grid gap-10 text-xs uppercase tracking-[0.3em] text-neutral-400 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-2">
            <p className="text-neutral-200">L'Artisan Atelier</p>
            <p>Katong · Singapore</p>
            <p>By appointment only</p>
          </div>
          <div className="space-y-2">
            <p className="text-neutral-200">Programs</p>
            <p>Residencies</p>
            <p>Private salons</p>
          </div>
          <div className="space-y-2">
            <p className="text-neutral-200">Commerce</p>
            <p>Gift atelier</p>
            <p>Corporate commissions</p>
          </div>
          <div className="space-y-2">
            <p className="text-neutral-200">Connect</p>
            <p>atelier@noircodex.sg</p>
            <p>+65 6991 8201</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
