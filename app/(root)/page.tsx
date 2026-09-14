import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import profileImg from "@/public/profile-img.jpeg";

export const metadata: Metadata = {
  title: "Siddhanth Chapade | Marketing, Strategy & Creative",
  description:
    "Marketing, strategy, creative, analytics and digital experiences by Siddhanth Chapade.",
  alternates: {
    canonical: siteConfig.url,
  },
};

const proofStats = [
  { value: "3×", label: "National case study winner" },
  { value: "80+", label: "Paid registrations driven" },
  { value: "+50%", label: "Engagement growth" },
  { value: "+20%", label: "Lead generation lift" },
];

const selectedWork = [
  {
    name: "DJS Skylark",
    label: "Featured campaign",
    summary:
      "Turning an engineering team into a brand people wanted to engage with.",
    detail:
      "Head of Marketing · campaign strategy · social growth · sponsorship outreach · team leadership",
    outcome: "80+ paid registrations · multiple partnerships · managed 9 associates",
    accent: "rose",
  },
  {
    name: "Recruit CRM",
    label: "Content + distribution",
    summary: "Content that travels beyond owned channels.",
    detail:
      "Marketing Intern · LinkedIn design · YouTube Shorts · Reddit + Slack syndication",
    outcome: "+20% lead generation",
    accent: "amber",
  },
  {
    name: "Leverage Edu",
    label: "Short-form storytelling",
    summary: "From idea to edit to iteration.",
    detail:
      "Social Media & Video Editing Intern · 50+ videos · performance analysis · creative iteration",
    outcome: "+50% engagement",
    accent: "sky",
  },
];

const processSteps = [
  { number: "01", title: "Understand", text: "Audience, problem, context and opportunity." },
  { number: "02", title: "Find the insight", text: "What actually matters to the people we want to reach." },
  { number: "03", title: "Build the idea", text: "Strategy, creative, narrative, and experience." },
  { number: "04", title: "Put it into the world", text: "Campaigns, content, activations, and distribution." },
  { number: "05", title: "Measure", text: "Reach, engagement, leads, conversion and learning." },
  { number: "06", title: "Learn", text: "What worked, what didn’t, and what should happen next." },
];

const caseStudyWins = [
  "IIM Bangalore",
  "IIT Madras",
  "NIT Durgapur",
  "Top 5 finalist in national competitions",
];

const skylarkReels = [
  { id: "DHITvwASWku", label: "Launch reel" },
  { id: "DQsAnBcjkYe", label: "Workshop teaser" },
  { id: "DLUuZ8KCu1i", label: "Campus storytelling" },
  { id: "DHtmXQ4SQHr", label: "Registration push" },
  { id: "DL7to1vCuB1", label: "Final campaign" },
];

export default function IndexPage() {
  return (
    <ClientPageWrapper>
      <section className="marketing-shell pt-8 pb-14 md:pb-20">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div className="space-y-6">
            <AnimatedText as="p" className="eyebrow">
              Mumbai • Marketing & Growth • B.Tech AI/ML
            </AnimatedText>
            <AnimatedText as="h1" delay={0.1} className="hero-title">
              I build strategies people remember — and ideas that actually move things.
            </AnimatedText>
            <AnimatedText as="p" delay={0.2} className="hero-kicker">
              Marketing × Strategy × Creative × Analytics
            </AnimatedText>
            <AnimatedText as="p" delay={0.3} className="max-w-xl text-base text-muted-foreground md:text-lg">
              I&apos;m Siddhanth — a marketing strategist who turns messy problems into campaigns, content and digital experiences people actually respond to.
            </AnimatedText>
            <div className="flex flex-col gap-3 sm:flex-row">
              <AnimatedText delay={0.35}>
                <Link href="#work" className={cn(buttonVariants({ size: "lg" }), "rounded-full")}>View my work</Link>
              </AnimatedText>
              <AnimatedText delay={0.45}>
                <Link
                  href="mailto:student.siddhanthchapade@gmail.com"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "rounded-full"
                  )}
                >
                  Let&apos;s talk
                </Link>
              </AnimatedText>
            </div>
            <div className="flex flex-wrap gap-2 pt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {[
                "Brand",
                "Growth",
                "Content",
                "CRM",
                "Campaigns",
                "Web experiences",
              ].map((item) => (
                <span key={item} className="rounded-full border border-foreground/10 bg-background/60 px-3 py-2">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <AnimatedSection direction="right" className="relative">
            <div className="hero-visual">
              <div className="hero-visual-panel hero-panel-primary">
                <span>Campaign</span>
                <strong>Creative strategy</strong>
              </div>
              <div className="hero-visual-panel hero-panel-secondary">
                <span>Growth</span>
                <strong>Lead generation</strong>
              </div>
              <div className="hero-card">
                <Image
                  src={profileImg}
                  alt="Siddhanth Chapade"
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <AnimatedSection className="section-block mt-6" id="proof">
        <div className="section-heading center mb-8">
          <p className="eyebrow">Proof</p>
          <h2>Actual work. Measurable outcomes.</h2>
        </div>
        <div className="stats-grid">
          {proofStats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-block" id="work">
        <div className="section-heading mb-8">
          <p className="eyebrow">Selected Work</p>
          <h2>Campaigns, content, strategy and digital experiences.</h2>
        </div>

        <div className="space-y-8">
          {selectedWork.map((project, index) => (
            <article key={project.name} className={cn("work-card", `work-card-${project.accent}`)}>
              <div className="work-copy">
                <p className="eyebrow small">{project.label}</p>
                <h3>{project.name}</h3>
                <p className="summary">{project.summary}</p>
                <p className="muted-copy">{project.detail}</p>
                <div className="result-pill">{project.outcome}</div>
              </div>
              <div className="work-visual">
                <div className="mini-visual mini-visual-top" />
                <div className="mini-visual mini-visual-bottom" />
                <div className="mini-visual mini-visual-accent" />
                <div className="visual-number">{index + 1}</div>
              </div>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-block" id="case-study-story">
        <div className="section-heading mb-8">
          <p className="eyebrow">DJS Skylark</p>
          <h2>Zero paid registrations. Zero marketing budget. Just strategy, trust and campus activation.</h2>
        </div>

        <div className="skylark-summary-grid">
          <div className="story-card highlight">
            <span className="story-index">Role</span>
            <h3>Marketing Head</h3>
            <p>Led the campaign for an international aerodesign team from our college, with the goal of turning technical credibility into student demand.</p>
          </div>
          <div className="story-card">
            <span className="story-index">Context</span>
            <h3>International aerodesign team from our college</h3>
            <p>We were not selling a generic seminar. We were selling a high-trust experience built around aviation, making, competition, and community.</p>
          </div>
          <div className="story-card">
            <span className="story-index">The challenge</span>
            <h3>Sell a Rs. 4000+ workshop to students without paid media.</h3>
            <p>We had to make the audience care about the experience, not just the price. Every campaign had to build belief before it asked for a registration.</p>
          </div>
          <div className="story-card">
            <span className="story-index">The insight</span>
            <h3>Students don&apos;t buy the event first. They buy the identity.</h3>
            <p>They wanted access to a real aerodesign community, hands-on learning, and the chance to be part of something ambitious and exciting.</p>
          </div>
        </div>

        <div className="story-grid mt-6">
          <div className="story-card">
            <span className="story-index">Challenge</span>
            <h3>How do you sell a paid workshop when the audience is skeptical and the budget is almost zero?</h3>
            <p>We focused on trust, relevance and frictionless onboarding instead of broad awareness. The campaign had to feel personal, credible and worth belonging to.</p>
          </div>
          <div className="story-card">
            <span className="story-index">Insight</span>
            <h3>People care about opportunity before they care about technical detail.</h3>
            <p>We positioned the workshop as a chance to build, learn, fly, and be part of a high-performing engineering team — not a lecture in disguise.</p>
          </div>
          <div className="story-card">
            <span className="story-index">Strategy</span>
            <h3>Build visibility → create curiosity → communicate value → drive action.</h3>
            <p>That meant content, conversations, campus activations and community-first messaging designed around trust, not discounts.</p>
          </div>
          <div className="story-card">
            <span className="story-index">Execution</span>
            <h3>Campus-based marketing, WhatsApp community, student-led conversations and content designed to feel real.</h3>
            <p>Everything was built around offline word-of-mouth, peer trust and the feeling that this was a serious experience with real learning behind it.</p>
          </div>
          <div className="story-card highlight">
            <span className="story-index">Result</span>
            <h3>80+ paid registrations, multiple partnerships, and a team that became visible on campus.</h3>
            <p>We didn&apos;t just sell tickets — we built a movement. The strategy worked because it said: this is a real community, not just another workshop.</p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-block">
        <div className="section-heading mb-8">
          <p className="eyebrow">The strategy behind it</p>
          <h2>We marketed what students wanted to become, not just what the team built.</h2>
        </div>
        <div className="offline-grid">
          {[
            ["Target the right audience", "We focused on aviation enthusiasts, engineering students and people already interested in hands-on building — not a mass audience."],
            ["Offline word-of-mouth", "Campus conversations, direct activations and personal recommendations created trust faster than social reach alone."],
            ["Community before sales", "A WhatsApp community of 450+ students helped us nurture interest before registration even opened."],
            ["Sell the transformation", "We sold the experience of building an RC aircraft, understanding flight mechanics and being part of something bigger."],
          ].map(([title, text]) => (
            <div key={title} className="offline-card">
              <span>{title}</span>
              <strong>{text}</strong>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-block">
        <div className="section-heading mb-8">
          <p className="eyebrow">Campaigns in the wild</p>
          <h2>Instagram content built the story before the pitch.</h2>
        </div>
        <div className="reel-grid">
          {skylarkReels.map((reel) => (
            <div key={reel.id} className="reel-card">
              <iframe
                className="instagram-embed"
                src={`https://www.instagram.com/reel/${reel.id}/embed/`}
                title={reel.label}
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-block">
        <div className="section-heading mb-8">
          <p className="eyebrow">Marketing doesn&apos;t always happen on a screen.</p>
          <h2>Campus activations did the heavy lifting.</h2>
        </div>
        <div className="offline-grid">
          {[
            ["Idea", "Create curiosity where students already spend time."],
            ["Creative", "Poster messaging, visual hooks and direct storytelling."],
            ["Activation", "On-campus conversations, trust-building and instant engagement."],
            ["Response", "Students came in with questions, not skepticism."],
          ].map(([title, text]) => (
            <div key={title} className="offline-card">
              <span>{title}</span>
              <strong>{text}</strong>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-block">
        <div className="section-heading mb-8">
          <p className="eyebrow">What this taught me</p>
          <h2>Marketing is not just promotion — it is trust, timing and conviction.</h2>
        </div>
        <div className="showcase-grid">
          {[
            ["The lesson", "This wasn’t just about organizing a workshop. It was about understanding consumer psychology, building genuine connections and executing a sale that required trust."],
            ["The mindset", "The real skill was not pushing a product — it was making people feel like they were joining a movement and a genuine opportunity."],
            ["The takeaway", "Good marketing is less about volume and more about relevance, positioning and authentic execution in the right environment."],
          ].map(([title, text]) => (
            <div key={title} className="mini-showcase">
              <div className="mini-showcase-media alt-surface" />
              <div className="mini-showcase-copy">
                <strong>{title}</strong>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-block" id="case-studies">
        <div className="section-heading mb-8">
          <p className="eyebrow">Case studies</p>
          <h2>I don&apos;t just make things. I think through the problem first.</h2>
        </div>

        <div className="deck-grid">
          {caseStudyWins.map((item, index) => (
            <div key={item} className="deck-card">
              <div className="deck-meta">Case study {index + 1}</div>
              <h3>{item}</h3>
              <p>Problem → Insight → Strategy → Recommendation → Outcome</p>
              <Link href="/resume" className="inline-link">
                View case study
              </Link>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-block">
        <div className="section-heading mb-8">
          <p className="eyebrow">Analytics</p>
          <h2>I like knowing what worked.</h2>
        </div>
        <div className="analytics-panel">
          <div className="analytics-chart">
            <div className="chart-bars">
              {[42, 68, 54, 76, 88, 96].map((height, index) => (
                <span key={index} style={{ height: `${height}%` }} />
              ))}
            </div>
          </div>
          <div className="analytics-copy">
            <p>Campaign</p>
            <p>Reach</p>
            <p>Engagement</p>
            <p>Leads</p>
            <p>Conversion</p>
            <p>Learning</p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-block">
        <div className="section-heading mb-8">
          <p className="eyebrow">Product marketing</p>
          <h2>Percipere</h2>
        </div>
        <div className="feature-panel">
          <div>
            <p className="muted-copy">
              Product Marketing Intern — Percipere Consulting
            </p>
            <h3>Campaigns, CRM, lead pipelines, customer engagement and data-backed decisions.</h3>
          </div>
          <div className="tag-list">
            {['Product marketing', 'CRM', 'Lead flow', 'Content', 'Customer engagement', 'Insights'].map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-block" id="digital">
        <div className="section-heading mb-8">
          <p className="eyebrow">Digital experiences</p>
          <h2>Sometimes I don&apos;t just market the experience. I build it.</h2>
        </div>
        <div className="browser-panel">
          <div className="browser-header">
            <span />
            <span />
            <span />
          </div>
          <div className="browser-body">
            <div className="browser-body-copy">
              <p>Objective</p>
              <h3>Build a product story that feels as sharp as the experience itself.</h3>
              <ul>
                <li>Audience-first positioning</li>
                <li>Clear UX and conversion thinking</li>
                <li>Digital execution with technical fluency</li>
              </ul>
            </div>
            <div className="browser-body-visual" />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-block" id="about">
        <div className="about-grid">
          <div>
            <p className="eyebrow">About</p>
            <h2>Engineer by education. Marketer by obsession.</h2>
          </div>
          <div>
            <p>
              I have worked across content, social media, campaigns, product marketing, analytics, community, strategy and digital experiences. I enjoy the intersection between creative thinking and measurable outcomes.
            </p>
            <p>
              My engineering background helps me understand data, digital products and technical execution deeply. But the story here is clear: marketing is the primary lens.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-block">
        <div className="section-heading mb-8">
          <p className="eyebrow">How I think</p>
          <h2>Strategy is a process, not a buzzword.</h2>
        </div>
        <div className="process-grid">
          {processSteps.map((step) => (
            <div key={step.number} className="process-card">
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-block technical-band">
        <div className="section-heading mb-6">
          <p className="eyebrow">The technical side</p>
          <h2>Analytical thinking, digital fluency and execution support.</h2>
        </div>
        <p className="technical-copy">
          My AI/ML engineering foundation gives me the ability to work closely with technical teams, build digital experiences, and understand product data with more clarity. It supports my marketing work — it does not define it.
        </p>
      </AnimatedSection>

      <AnimatedSection className="section-block final-cta-block">
        <p className="eyebrow">Want the full picture?</p>
        <h2>Have a marketing problem worth solving?</h2>
        <p>
          I&apos;m always interested in interesting brands, ambitious ideas and problems that need both creative thinking and structured execution.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="mailto:student.siddhanthchapade@gmail.com" className={cn(buttonVariants({ size: "lg" }), "rounded-full")}>Let&apos;s talk</Link>
          <Link href="https://www.linkedin.com/in/siddhanthchapade" target="_blank" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full")}>LinkedIn</Link>
          <Link href="/resume" className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "rounded-full")}>Resume</Link>
        </div>
      </AnimatedSection>
    </ClientPageWrapper>
  );
}
