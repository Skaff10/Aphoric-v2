"use client";

import { useState } from "react";
import { LuCrown } from "react-icons/lu";

interface Tier {
  name: string;
  description: string;
  features: string[];

  icon?: React.ReactNode;
}

interface ServiceCategory {
  id: string;
  label: string;
  footnote?: string;
  tiers: Tier[];
}

const servicesData: ServiceCategory[] = [
  {
    id: "website",
    label: "Website",

    tiers: [
      {
        name: "Presence",
        description:
          "Anyone who just needs to exist online. Portfolio, freelancer, small local business, someone running off Instagram who wants a real link.",
        features: [
          "Up to 5 static pages",
          "Responsive design (mobile + desktop)",
          "Basic UI/UX",
          "Basic contact form",
          "Basic SEO (meta tags, page titles, OG tags)",
          "2 revision rounds",
          "7 days support",
        ],
      },
      {
        name: "Build",
        description:
          "A business that needs to update their own content without calling a developer every time. Restaurants updating their menu, detailing shops changing service prices, portfolio people adding new projects.",
        features: [
          "Up to 8 pages",
          "Everything in Presence",
          "CMS admin panel — a clean dashboard (built on Sanity or similar) where you can update text, images, menu items, service listings, portfolio pieces, and gallery photos. No code required.",
          "On-page SEO (meta, schema, sitemap, Search Console setup)",
          "Speed optimization (compression, lazy loading, caching)",
          "3 revision rounds",
          "1 month support",
        ],
      },
      {
        name: "Scale",
        description:
          "A business where customers need to do something — book an appointment, submit a service inquiry, browse a product catalog, make a reservation. The first tier with real backend logic.",
        features: [
          "Up to 12 pages",
          "Everything in Build",
          "Custom admin panel — built specifically for your business. Manage bookings, leads/inquiries, service listings, gallery, team members, or product catalog. Not a third-party CMS — an actual dashboard built into your app.",
          "Booking system OR product catalog with cart (choose based on business type)",
          "Customer inquiry/lead management inside the admin",
          "GA4 + event tracking setup",
          "Advanced performance tuning (Core Web Vitals, CDN, caching)",
          "Security hardening (SSL, firewall, spam protection)",
          "Basic animation",
          "3 revision rounds",
          "2 months support",
        ],
      },
      {
        name: "Dominate",
        description:
          "A business that's running at scale and needs payments, e-commerce, advanced analytics, and a serious admin dashboard — not just a website, but a full business tool.",
        features: [
          "Up to 20 pages",
          "Everything in Scale",
          "Full e-commerce — product management, cart, checkout, and payment gateway integration (Stripe / PayPal)",
          "Advanced admin dashboard — order management, revenue overview, booking history, customer records, analytics — all in one place",
          "Advanced user tracking (GA4 custom events, UTM tracking, conversion funnels)",
          "Custom animations and micro-interactions",
          "Cloudinary media setup for optimized image/video delivery at scale",
          "A/B testing integration",
          "4 revision rounds",
          "3 months support",
        ],
      },
    ],
  },
  {
    id: "marketing",
    label: "Marketing",
    tiers: [
      {
        name: "Starter",
        description:
          "A business running ads for the first time. Just testing the waters.",
        features: [
          "1 platform (Meta only — Facebook & Instagram)",
          "$50 ad spend included",
          "Up to $100 total budget managed",
          "Free ad account setup",
          "Targeted audience research",
          "2 ad creatives (static)",
          "Meta Pixel integration",
          "Basic awareness campaign (single campaign, single objective)",
          "14 days management",
          "Daily progress report (simple performance snapshot)",
        ],
      },
      {
        name: "Growth",
        description:
          "A business that's tried ads before but wants real results with a proper funnel — not just boosting posts.",

        features: [
          "2 platforms (Meta + Google)",
          "$100 ad spend included",
          "Up to $200 total budget managed",
          "Free ad account setup",
          "Advanced audience research + lookalike audiences",
          "4 ad creatives (static + motion)",
          "Meta Pixel + conversion tracking setup",
          "Full campaign funnel (awareness → consideration → conversion)",
          "A/B testing on creatives or audiences",
          "30 days management",
          "Daily progress report + weekly performance breakdown",
        ],
      },
      {
        name: "Enterprise",
        description:
          "A business scaling aggressively and needs everything — multi-platform, retargeting, full funnel, and ongoing optimization.",

        features: [
          "3 platforms (Meta + Google + TikTok)",
          "$200 ad spend included",
          "Up to $400 total budget managed",
          "Free ad account setup",
          "Deep audience research + custom audiences + lookalikes",
          "6 ad creatives (static, motion, and video formats)",
          "Meta Pixel + Conversion API + Google Tag setup",
          "Full funnel + retargeting campaigns (separate campaigns for cold and warm audiences)",
          "A/B testing across campaigns",
          "Landing page conversion review",
          "60 days management",
          "Daily progress report + detailed monthly strategy report",
        ],
      },
    ],
  },
  {
    id: "brand design",
    label: "Design",
    tiers: [
      {
        name: "Foundation",
        description:
          "A clean starting point for your brand identity — logo, colors, and typography.",
        features: [
          "3 logo concepts — three distinct directions designed for your brand. Pick the one that fits, we refine it from there.",
          "Brand color palette — a curated set of 3–5 colors (primary, secondary, accent) delivered with hex codes.",
          "Typography selection — two fonts chosen to match your brand personality (headings + body).",
          "2 rounds of revisions",
          "Final files: PNG, JPG, PDF — web-ready and print-ready formats.",
        ],
      },
      {
        name: "Identity",
        description:
          "A full brand identity kit with logo variations, social templates, and a style guide.",

        features: [
          "Everything in Foundation",
          "Logo variations — horizontal, stacked, and icon-only versions for every placement.",
          "Basic brand style guide — logo usage rules, color codes, and typography reference.",
          "5 social media templates — editable post templates for Instagram, Facebook, or LinkedIn.",
          "Business card design — print-ready, properly spaced, consistent with your brand.",
          "3 rounds of revisions",
          "Final files: PNG, JPG, PDF, SVG — includes vector format for scalability.",
        ],
      },
      {
        name: "Complete",
        description:
          "Everything you need to launch and maintain a visually consistent brand across every touchpoint.",

        features: [
          "Everything in Identity",
          "Full brand guidelines document — comprehensive brand book with logo usage, color system, typography hierarchy, spacing, and visual tone.",
          "10 social media templates — posts and stories formats included.",
          "Flyer / poster design — one marketing flyer or event poster, print-ready and digital.",
          "Email signature design — professional signature with logo, contact details, and social links.",
          "Brand pattern / texture — custom repeating visual pattern for backgrounds, packaging, and merch.",
          "4 rounds of revisions",
          "All source files included (AI, PSD, or Figma) — full ownership.",
        ],
      },
    ],
  },
  {
    id: "automation",
    label: "AI Automation",
    tiers: [
      {
        name: "Assist",
        description:
          "A conversational AI on your website or WhatsApp that handles FAQs and captures leads automatically.",
        features: [
          "AI chatbot setup (single channel) — deployed on website or WhatsApp. Handles incoming messages automatically.",
          "FAQ automation — trained on your most common questions (hours, pricing, location, services, policies). 24/7 instant answers.",
          "Lead capture via chat — collects name, email, and inquiry through natural conversation. Drops data into inbox or Google Sheet.",
          "Basic conversation flow — greetings, FAQs, lead capture, and handoff message for unanswerable queries.",
          "2 rounds of revisions",
          "7 days post-launch support",
        ],
      },
      {
        name: "Automate",
        description:
          "Multi-channel AI with booking automation, email sequences, and CRM integration.",

        features: [
          "Everything in Assist",
          "Multi-channel deployment — same AI assistant across website and WhatsApp or Instagram DMs.",
          "Appointment / booking automation — collects date, time, and service preference, checks availability, confirms appointment automatically.",
          "Auto-response email sequences — welcome message, follow-up, and reminder sent automatically when a lead comes in.",
          "CRM integration — every lead and conversation logged into Google Sheets, Notion, or your existing CRM.",
          "3 rounds of revisions",
          "14 days post-launch support",
        ],
      },
      {
        name: "Integrate",
        description:
          "Full workflow automation with lead scoring, marketing sequences, and third-party integrations.",
        features: [
          "Everything in Automate",
          "Full workflow automation (Make.com / n8n) — core business workflows mapped and automated end-to-end.",
          "AI chatbot across all channels — website, WhatsApp, Instagram, Facebook Messenger.",
          "CRM automation with lead scoring — leads tagged, scored by intent, and routed automatically.",
          "WhatsApp / email marketing sequences — automated multi-step campaigns triggered by customer actions.",
          "Third-party tool integration — Shopify, WooCommerce, Google Calendar, Calendly, Stripe, and more.",
          "Automation dashboard — reporting view for leads, messages, bookings, and sequences.",
          "4 rounds of revisions",
          "1 month post-launch support",
        ],
      },
      {
        name: "Dominate",
        description:
          "A custom AI agent trained on your business, voice AI, advanced pipelines, and full business intelligence.",

        features: [
          "Everything in Integrate",
          "Custom AI agent — purpose-built and trained on your products, tone, FAQs, policies, and pricing. Handles complex queries without scripted flows.",
          "Voice AI integration — handles inbound calls or voice queries, answers questions, takes information, and routes to a human when needed.",
          "Advanced multi-step automation pipelines — conditional workflows for reminders, re-engagement, out-of-stock alerts, and more.",
          "Business intelligence integration — automated weekly reports on sales, leads, bookings, and conversion rates.",
          "Custom AI training on business data — product catalog, customer interactions, support history, and documentation.",
          "Priority support + monthly maintenance — 2 months post-launch monitoring and adjustment.",
          "Unlimited revisions (within agreed scope)",
        ],
      },
    ],
  },
];

const page = () => {
  const categoryOrder = [
    "all",
    "website",
    "brand design",
    "marketing",
    "automation",
  ];
  const [activeCategory, setActiveCategory] = useState("all");

  const visibleCategories =
    activeCategory === "all"
      ? servicesData
      : servicesData.filter((c) => c.id === activeCategory);

  return (
    <div className="w-full flex flex-col items-center">
      <section>
        <h1 className="text-[460px] overflow-hidden font-display leading-none">
          services
        </h1>
        <div className="w-full flex justify-end mt-5">
          <p className="font-sans text-text text-3xl max-w-[630] ">
            we also build custom packages around what you actually need.
          </p>
        </div>
      </section>
      <section className="w-full flex gap-10 mt-30 justify-center text-6xl">
        {categoryOrder.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={
              activeCategory === cat
                ? "text-secondary font-semibold "
                : "text-text "
            }
          >
            {cat}
          </button>
        ))}
      </section>
      <section className="w-full flex flex-col items-center gap-24 mt-10 px-6 md:px-16 mb-40">
        {visibleCategories.map((category) => (
          <div key={category.id} className="min-w-510 flex flex-col gap-8">
            <div className="flex items-baseline justify-between border-b border-text/20 pb-4">
              <h2 className="font-display text-4xl md:text-5xl text-secondary lowercase">
                {category.label}
              </h2>
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
              {category.tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={
                    "flex flex-col gap-5 p-6 border rounded-2xl " +
                    "border-text/15"
                  }
                >
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display text-2xl text-secondary/90 lowercase flex items-center gap-2">
                      {tier.name}
                    </h3>
                  </div>

                  <p className="font-sans text-text/70 text-sm leading-relaxed">
                    {tier.description}
                  </p>

                  <ul className="flex flex-col gap-2 mt-2">
                    {tier.features.map((feature, i) => (
                      <li
                        key={i}
                        className="font-sans text-text text-sm leading-relaxed flex gap-2"
                      >
                        <span className="text-secondary shrink-0">—</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="mt-auto font-sans text-sm text-text border border-text/30 rounded-full px-5 py-2 hover:bg-text hover:text-white transition-colors self-start">
                    get a quote
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default page;
