// case-studies.ts
// Full case study content, keyed by the same `slug` used in work-data.ts.
// Look up via getCaseStudyBySlug(slug) alongside getProjectBySlug(slug)
// on the case study page.

export interface CaseStudy {
  slug: string;
  sector: string; // industry / niche
  type: "client" | "portfolio" | "brand";
  scope?: string; // used for brand-identity projects
  brief: string[]; // "the problem" / "the brief" — paragraphs
  approach: string[]; // "what we built" / "the approach" — paragraphs
  outcome: string[]; // paragraphs
  stack?: string[]; // only present for web/dev projects
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "d2d",
    sector: "Auto detailing, Montreal",
    type: "client",
    brief: [
      "D2D was running entirely on phone calls and Instagram DMs. Every booking meant a back and forth conversation to figure out the service, the date, and the time, then the owner had to remember to check his phone all day so he wouldn't miss a message. Montreal is a bilingual market too, so the business was losing French-speaking customers who landed on an English-only page and left.",
    ],
    approach: [
      "We built the platform on React with Vite for the frontend, and used Firebase for everything on the backend: Firestore for the database, Firebase Auth for the admin login, and Firebase Hosting for deployment. We picked Firebase specifically because the project didn't need a dedicated backend server. It let us move fast without setting up and maintaining separate infrastructure.",
      "The site is fully bilingual. Customers can switch between English and French anywhere on the site, and the entire booking flow, service descriptions, and confirmation emails follow the language they picked.",
      "The booking flow itself: a customer picks a service, sees available time slots, fills in their details, and confirms. Firestore stores the booking in real time. From there two things fire automatically. A confirmation email goes out through Resend, styled to match the brand instead of looking like a generic transactional email. And a message hits a Telegram bot connected to the owner's phone, with the customer's name, service, and time slot, so he gets an instant alert without needing to open a dashboard or check email. We chose Telegram over SMS here because it's free, instant, and the owner already used Telegram daily, so there was zero extra habit to build.",
      "We also built a simple admin panel so the owner can see all upcoming bookings, mark jobs complete, and manage which time slots are open, without needing to touch Firestore directly.",
      "On the marketing side, we set up GA4 with UTM tracking, and layered in server-side tagging through Stape.io. This mattered because a lot of ad tracking breaks now due to browser privacy changes and ad blockers. Server-side tagging routes the tracking data through a server instead of the browser, so the numbers stay accurate even when a chunk of visitors are blocking client-side scripts. That meant the owner could actually trust which channel was bringing in bookings instead of guessing.",
    ],
    outcome: [
      "D2D moved from a business run entirely through calls and messages to one with a self-serve, bilingual booking flow and real, trustworthy tracking data behind it. This became Aphoric's anchor portfolio project. When the build was done, we wrote full documentation covering the codebase, the Firebase setup, and how each integration worked, so the client could hand it to another developer for future maintenance without losing any context.",
    ],
    stack: [
      "React",
      "Vite",
      "Firebase (Firestore, Auth, Hosting)",
      "Resend",
      "Telegram Bot API",
      "GA4",
      "Stape.io",
    ],
  },
  {
    slug: "ovenout",
    sector: "Cloud kitchen, food delivery",
    type: "client",
    brief: [
      "This client didn't start as Oven & Out. The business began as a pizza cafe, and the owner decided to pivot the entire concept into a cloud kitchen model, meaning no dine-in space, just a kitchen built to fulfill delivery and pickup orders. That decision meant almost nothing from the old business carried over. The name, the branding, the website, and the way customers would even find and order from the business all had to be rebuilt from the ground up.",
    ],
    approach: [
      "We started with the brand itself before touching any code. New name, new identity, built around a palette of deep red, gold, cream, and dark brown to feel warm and food-forward rather than generic. We designed the logo and the full visual identity in Illustrator, then used that identity as the base for everything that followed, the site, the posters, and the social presence.",
      "The website is built on Next.js with a Firebase backend, built entirely from scratch. There's a public ordering page where customers browse the menu and place orders, and an admin panel where the kitchen manages incoming orders as they come in, in real time through Firestore. It's live and deployed on Vercel at ovenandout.cloud, with DNS handled through GoDaddy.",
      "Beyond the site, we designed a series of promotional posters using the new brand identity, meant for both social posts and general marketing use, so the visual identity stayed consistent everywhere the business showed up online.",
      "We also took over the Facebook page. That meant setting up the rebrand on the page itself, new profile and cover assets, updated business info, and managing ongoing posts. Alongside that, we built out Messenger automation so customers messaging the page get instant automated replies instead of waiting on a manual response, and Telegram order notifications, so the kitchen gets an instant alert on a new order the same way D2D's owner gets notified about bookings, without needing to sit and refresh the admin panel.",
      "Running paid ads is part of the plan but hasn't happened yet. That's the next phase for this client.",
      "We also mapped out an SEO roadmap covering JSON-LD schema, metadata, and Google Search Console setup, so the site keeps gaining organic visibility over time instead of relying only on social and word of mouth.",
    ],
    outcome: [
      "Oven & Out went from an old pizza cafe concept to a fully rebranded cloud kitchen with its own ordering system, admin tools, automated notifications, and an active social presence, all built and managed from the ground up. The business is now generating a decent daily income, and ads are the next step to grow that further. It's one of Aphoric's strongest examples of a full rebrand and build in one engagement, covering brand identity, full-stack development, marketing assets, and ongoing social media management.",
    ],
    stack: [
      "Next.js",
      "Firebase",
      "TypeScript",
      "Vercel",
      "Telegram Bot API",
      "Meta Messenger API",
    ],
  },
  {
    slug: "traken",
    sector: "Mobile and laptop accessories, ecommerce",
    type: "portfolio",
    brief: [
      "A premium accessories brand needs a store that looks and feels premium. Cheap-looking product pages undercut trust before a customer even reads a description, especially for a brand selling on quality and design rather than price.",
    ],
    approach: [
      "An ecommerce storefront for a fictional accessories brand selling phone cases, laptop sleeves, and add-ons like AirTag holders. The site is built around clean product photography, category browsing by phone, laptop, and accessories, and a homepage that leans on lifestyle imagery and brand story instead of just grid after grid of products.",
      "We built out product collections, category pages, and a homepage flow designed to move visitors from browsing to a specific collection quickly, the kind of structure a real accessories brand would use to sell a $40 case as a design choice, not just a protective shell.",
    ],
    outcome: [
      "Traken shows what Aphoric can deliver for a direct-to-consumer brand that sells on look and feel: fast, clean, image-led ecommerce without unnecessary clutter.",
    ],
    stack: ["Next.js", "Vercel"],
  },
  {
    slug: "pawsome",
    sector: "Pet supplies, ecommerce",
    type: "portfolio",
    brief: [
      "Pet ecommerce lives or dies on trust and ease. Buyers want to find the right food or product for their specific pet fast, and they want to feel confident about quality before checkout.",
    ],
    approach: [
      "A full pet supply storefront covering dogs, cats, and small pets. The site includes category-based shopping, a best sellers and new arrivals section, product ratings, and a working cart flow. We built it with real product data, actual brand names, pricing, and review counts, so it reads like a live store instead of a placeholder demo.",
      "The homepage is structured to build trust fast: fast delivery, easy returns, and authenticity are called out right at the top, along with customer testimonials, before asking for a sale.",
    ],
    outcome: [
      "Pawsome demonstrates a complete ecommerce build for a retail niche, from product catalog structure to a trust-focused homepage layout, showing Aphoric can deliver a store that's ready to sell from day one.",
    ],
    stack: ["Next.js", "Vercel"],
  },
  {
    slug: "merideth",
    sector: "Home goods and lifestyle",
    type: "brand",
    scope: "Brand identity, typography system, colour system, visual direction",
    brief: [
      'Merideth needed a brand identity that could carry a furniture and homeware line without falling into the generic "modern minimalist" look every competitor already uses. The founder wanted warmth and character, something that felt handcrafted rather than mass produced.',
    ],
    approach: [
      "We built the identity around a bold retro wordmark, using Bogart for headlines and CY Grotesk Key for body copy. The pairing gives the brand a confident, slightly rounded voice on the page while staying legible at small sizes for product tags and packaging.",
      "The palette pulls from burnt orange, dark walnut brown, tan, and a warm cream base. It reads as autumnal and grounded, which fits a brand selling pieces meant to live in a home for years, not a season.",
      "Supporting graphics use repeating arc and ring shapes lifted from mid-century furniture silhouettes. These show up as background texture on marketing material without competing with product photography.",
    ],
    outcome: [
      "The final system gives Merideth a look that stands apart from the flat, cool-toned aesthetic common in furniture branding right now. Every asset, from the logo lockup to the Instagram grid, ties back to the same four colours and two typefaces, so the brand stays recognizable across every touchpoint.",
    ],
  },
  {
    slug: "typeface",
    sector: "Stationery and analog goods",
    type: "brand",
    scope: "Brand identity, typography system, colour system, editorial layout",
    brief: [
      "TypeFace sells notebooks, pens, and desk accessories built around the idea of slowing down and writing by hand. The brand needed to feel nostalgic without looking dated, and confident enough to hold its own next to modern stationery brands online.",
    ],
    approach: [
      "The identity leans on Agrandir Bold for a chunky, retro headline face, balanced with CY Grotesk Key for clean supporting text. A checkerboard motif and looping ribbon graphic, drawn from 60s and 70s print design, give the brand a distinct visual signature that shows up across packaging, social posts, and the website.",
      "Colour does a lot of the work here: a warm cream base, a strong red-orange, and a muted teal accent. The combination feels vintage but not faded, which keeps the brand from reading as costume-y.",
      'Product photography was directed around warm-toned still life scenes: typewriters, rotary phones, glass perfume bottles. These reinforce the "analog storytelling" positioning without needing copy to explain it.',
    ],
    outcome: [
      "TypeFace now has a full visual language that photographs well on shelves and on Instagram alike. The checkerboard and ribbon elements are flexible enough to extend into packaging inserts, stickers, and print ads without a redesign each time.",
    ],
  },
  {
    slug: "tj",
    sector: "Apparel and accessories",
    type: "brand",
    scope: "Brand identity, logo system, colour system, packaging",
    brief: [
      "Terra & June is a youthful apparel and eyewear label aimed at a Gen Z audience. The founders wanted something loud, playful, and shareable, a brand that photographs well on hangtags, stickers, and packaging as much as it does on a body.",
    ],
    approach: [
      "The logo combines two overlapping letterforms into a single mark that works standalone as a sticker or stamp, separate from the wordmark. Bernoru handles the display type with a bouncy, rounded personality, paired with Open Sauce for anything that needs to stay readable at small sizes.",
      "The palette is unapologetically saturated: hot pink, sunshine yellow, and sky blue, set against a soft blush background. A hand-drawn starburst icon shows up throughout as a signature detail, on tags, stickers, and social graphics.",
      "Photography direction leaned into candid, colour-blocked backdrops with models in sunglasses and bright layered outfits, keeping the tone fun rather than polished.",
    ],
    outcome: [
      "The system gives Terra & June a brand kit that scales from a tiny hangtag to a full campaign shoot without losing its identity. The starburst and monogram mark now function as recognizable shorthand for the brand, even without the full wordmark attached.",
    ],
  },
  {
    slug: "lorem",
    sector: "Fitness and wellness",
    type: "brand",
    scope:
      "Brand identity, typography system, colour system, lifestyle direction",
    brief: [
      "Lorem is a fitness and activewear brand aimed at women who want their workout gear to feel as good as it looks. The challenge was building a brand that reads as energetic and confident without leaning on the clinical, all-black aesthetic most fitness brands default to.",
    ],
    approach: [
      "Gulf Display gives the wordmark a chunky, sporty weight, paired with Garet for supporting copy where legibility matters more than personality. The logo mark is an abstract hourglass shape, simple enough to work as a standalone icon on gear and packaging.",
      "Colour is where the brand does its heavy lifting: a punchy pink sits against lime green and two shades of forest green. The combination feels active and optimistic rather than aggressive, and it holds up equally well on a yoga mat, a gym bag, or a social post.",
      "Lifestyle photography features real movement: stretching, jump rope, roller skates, gear laid out mid-workout. Nothing feels staged or overly polished, which matches the brand's tone of confidence over perfection.",
    ],
    outcome: [
      "Lorem's identity now carries a distinct point of view in a crowded category. The pink and green combination is memorable on its own, and the flexible hourglass mark gives the brand a shorthand icon that works across merchandise, packaging, and digital touchpoints.",
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
