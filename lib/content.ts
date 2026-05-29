/**
 * Central content store for the ABA Membership Portal.
 *
 * Keeping copy/data here (rather than inline in components) makes the whole
 * site CMS-ready: a future admin/CMS layer can hydrate these same shapes
 * without touching presentation. All figures marked "placeholder" should be
 * confirmed against source-of-truth materials before launch.
 */

/* ---------------------------------------------------------------------------
 * Hero
 * ------------------------------------------------------------------------- */
export const HERO = {
  kicker: 'Academy Baseball Association',
  title: 'Built for the Next Era of Amateur Baseball',
  subtitle:
    'A modern competitive, media, and technology infrastructure designed for elite baseball academies and private school programs.',
  primaryCta: { label: 'Explore Membership', href: '#why-aba' },
  secondaryCta: { label: 'Schedule Introductory Call', href: '#contact' },
  /** Rotating descriptors layered over the hero motion field. */
  marquee: [
    'Drone-captured broadcasts',
    'TrackMan-integrated competition',
    'National postseason at LakePoint',
    'Recruiting-grade visibility',
  ],
};

/* ---------------------------------------------------------------------------
 * Why ABA — comparison cards (Traditional vs ABA)
 * ------------------------------------------------------------------------- */
export type ComparisonRow = {
  dimension: string;
  traditional: string;
  aba: string;
};

export const WHY_ABA_INTRO = {
  eyebrow: 'Why ABA',
  title: 'Elite programs are outgrowing legacy structures',
  body:
    'The best academies and private school programs are scaling faster than traditional associations were built to support. ABA is the operating system for that growth — flexible scheduling, multiple competitive pathways, modern media, and recruiting visibility, without the ceilings of legacy models.',
};

export const COMPARISON_ROWS: ComparisonRow[] = [
  { dimension: 'Game volume', traditional: 'Hard seasonal caps', aba: 'Unlimited practices and games' },
  { dimension: 'Scheduling', traditional: 'Fixed, rigid calendars', aba: 'Open, flexible scheduling' },
  { dimension: 'Teams per program', traditional: 'Often limited', aba: 'Multiple team pathways' },
  { dimension: 'Media coverage', traditional: 'Minimal to none', aba: 'Integrated media ecosystem' },
  { dimension: 'Technology', traditional: 'Fragmented, bring-your-own', aba: 'Unified integrations' },
  { dimension: 'Branding', traditional: 'Standardized / restricted', aba: 'Keep your identity' },
  { dimension: 'Scalability', traditional: 'Structurally constrained', aba: 'Designed to scale' },
];

export const WHY_ABA_PILLARS = [
  {
    title: 'Scheduling freedom',
    body: 'Unlimited practices and games with open, flexible calendars — schedule the season your program needs.',
  },
  {
    title: 'Scalable athletic departments',
    body: 'Field multiple teams across divisions and grow your program without structural ceilings.',
  },
  {
    title: 'Modern visibility',
    body: 'National-level competition paired with media exposure that puts your athletes in front of scouts.',
  },
  {
    title: 'Operational flexibility',
    body: 'Freedom from outdated structures — run your program on infrastructure built for the modern game.',
  },
];

/* ---------------------------------------------------------------------------
 * Competitive Infrastructure — capability cards + headline stats
 * ------------------------------------------------------------------------- */
export const INFRASTRUCTURE_INTRO = {
  eyebrow: 'Competitive Infrastructure',
  title: 'A league, rebuilt as infrastructure',
  body:
    'ABA is not just a schedule of games. It is the connective infrastructure — competition, governance, media, and technology — that lets elite programs operate at a national level.',
};

export const INFRASTRUCTURE_STATS = [
  { value: 4, suffix: '+', label: 'Competitive divisions' },
  { value: 12, suffix: '', label: 'Championship weekend days at LakePoint', display: '4' },
  { value: 100, suffix: '%', label: 'Streamed postseason games' },
  { value: 2.7, suffix: 'M', label: 'Social views, last 30 days', decimals: 1 },
];

export const INFRASTRUCTURE_CARDS = [
  { title: 'Scheduling flexibility', body: 'Open calendars and unlimited games engineered around your program’s needs.' },
  { title: 'Scalable divisions', body: 'Premier through Middle School pathways that grow with your athletic department.' },
  { title: 'Postseason structure', body: 'A defined road to a national championship with double-elimination integrity.' },
  { title: 'National competition', body: 'Cross-regional matchups against elite academies and private programs.' },
  { title: 'Modern governance', body: 'Insured operations, multi-year agreements, and enforced standards.' },
  { title: 'Media systems', body: 'Streaming, highlights, and social distribution built into the season.' },
  { title: 'Technology integrations', body: 'GameChanger, TrackMan, Synergy and more, unified under one league.' },
  { title: 'Recruiting visibility', body: 'Scout-facing data and coverage that compounds athlete exposure.' },
];

/* ---------------------------------------------------------------------------
 * League Structure — division explorer
 * ------------------------------------------------------------------------- */
export type Division = {
  id: string;
  name: string;
  tagline: string;
  level: string;
  roster: string;
  travel: string;
  games: string;
  hotelNights: string;
  recruiting: string;
  postseason: string;
  future?: boolean;
};

export const DIVISIONS: Division[] = [
  {
    id: 'premier',
    name: 'Premier',
    tagline: 'The highest level of ABA competition',
    level: 'Elite / national',
    roster: 'Top academy & postgrad-eligible talent',
    travel: '5–6 road trips per season',
    games: 'High-volume national schedule',
    hotelNights: '~12 hotel nights',
    recruiting: 'Maximum scout & media visibility',
    postseason: 'Direct national championship access',
  },
  {
    id: 'prospect',
    name: 'Prospect',
    tagline: 'Developing high-level recruits',
    level: 'High / regional-national',
    roster: 'Projectable underclass & developing talent',
    travel: '4–5 road trips per season',
    games: 'Full competitive schedule',
    hotelNights: '~8–10 hotel nights',
    recruiting: 'Strong recruiting visibility',
    postseason: 'National championship qualification',
  },
  {
    id: 'varsity',
    name: 'Varsity',
    tagline: 'Competitive program-team baseball',
    level: 'Competitive / regional',
    roster: 'Established varsity rosters',
    travel: '3–4 road trips per season',
    games: 'Balanced regional-national schedule',
    hotelNights: '~6–8 hotel nights',
    recruiting: 'Meaningful recruiting exposure',
    postseason: 'Postseason qualification',
  },
  {
    id: 'jv',
    name: 'JV',
    tagline: 'Development and depth',
    level: 'Developmental',
    roster: 'Underclass & developmental rosters',
    travel: 'Mostly regional day trips',
    games: 'Regional schedule with doubleheaders',
    hotelNights: 'Few to no hotel nights',
    recruiting: 'Early exposure & development tracking',
    postseason: 'Divisional postseason',
  },
  {
    id: 'middle-school',
    name: 'Middle School',
    tagline: 'The pipeline, formalized',
    level: 'Future division',
    roster: 'Middle school programs',
    travel: 'Regional day trips and doubleheaders',
    games: 'Regional development schedule',
    hotelNights: 'Minimal travel',
    recruiting: 'Long-horizon development tracking',
    postseason: 'Regional events',
    future: true,
  },
];

/* ---------------------------------------------------------------------------
 * National Visibility — stat counters + media partners
 * ------------------------------------------------------------------------- */
export const VISIBILITY_INTRO = {
  eyebrow: 'National Visibility',
  title: 'A modern baseball media ecosystem',
  body:
    'ABA distributes the game the way the modern audience consumes it — streamed, clipped, and amplified across every channel that matters to athletes, families, and scouts.',
};

export const VISIBILITY_STATS = [
  { value: 2.7, suffix: 'M', decimals: 1, label: 'Social views, last 30 days' },
  { value: 100, suffix: '%', label: 'Postseason games streamed' },
  { value: 500, suffix: '+', label: 'Player highlights produced', note: 'placeholder' },
  { value: 50, suffix: 'M+', label: 'Annual media impressions', note: 'placeholder' },
];

export type MediaPartner = { name: string; status: 'active' | 'future'; logo?: string };
export const MEDIA_PARTNERS: MediaPartner[] = [
  { name: 'Young Gun Media', status: 'active', logo: '/media/young-gun-media.png' },
  { name: 'Doubted Athletes', status: 'active', logo: '/media/doubted-athletes.png' },
  { name: 'Diamond Pro Media', status: 'active', logo: '/media/diamond-pro-media.png' },
  { name: 'Prep Baseball Report', status: 'active', logo: '/media/prep-baseball.png' },
  { name: 'Perfect Game', status: 'active', logo: '/media/perfect-game.png' },
  { name: 'LakePoint Sports', status: 'active', logo: '/media/lakepoint.png' },
];

/** Official ABA social channel for the visibility feed / follow card. */
export const INSTAGRAM = {
  handle: '@aba.conference',
  url: 'https://www.instagram.com/aba.conference/',
};

/** All official ABA social channels (footer + contact). */
export const SOCIALS = {
  instagram: 'https://www.instagram.com/aba.conference/',
  x: 'https://x.com/aba_hq',
  facebook: 'https://www.facebook.com/ACADEMYBASEBALLASSOCIATION/',
};

/* ---------------------------------------------------------------------------
 * Championship Experience — timeline beats + grid
 * ------------------------------------------------------------------------- */
export const CHAMPIONSHIP_INTRO = {
  eyebrow: 'Championship Experience',
  title: 'A championship experience that will last a lifetime',
  body:
    'Hosted at LakePoint Sports, the ABA postseason is engineered as an event — opening night, the Home Run Derby, live streaming, scouts in the stands, and an awards ceremony that sends athletes home with a story.',
};

export const CHAMPIONSHIP_BEATS = [
  {
    title: 'Opening Night',
    body: 'An opening ceremony unlike any other — recognized in front of a packed house of peers and competitors.',
  },
  {
    title: 'Home Run Derby',
    body: 'An electric, marquee, made-for-social showcase that brings energy from everyone in attendance.',
  },
  {
    title: 'Live Streaming',
    body: 'Every postseason game live-streamed on AWRE, with multiple camera angles for a rich experience for those who can’t make it.',
  },
  { title: 'Scout Attendance', body: 'College and pro evaluators on-site throughout.' },
  {
    title: 'Awards Ceremony',
    body: 'Our bell-ringing tradition honors student-athletes who chose a different path — and marks the moment the bell rings for the last team standing.',
  },
];

export const CHAMPIONSHIP_VENUE = {
  name: 'LakePoint Sports',
  location: 'Emerson, Georgia',
  detail: 'One of the premier amateur sports destinations in the country.',
};

export const CHAMPIONS_2026 = {
  team: 'Georgia Premier Academy',
  title: '2026 ABA Premier Division Champions',
  image: '/champs.jpg',
  alt: 'Georgia Premier Academy celebrating as 2026 ABA Premier Division Champions',
};

/* ---------------------------------------------------------------------------
 * Technology Ecosystem — center + orbiting integrations
 * ------------------------------------------------------------------------- */
export const TECH_INTRO = {
  eyebrow: 'Technology Ecosystem',
  title: 'Modernizing amateur baseball',
  body:
    'ABA unifies the tools elite programs already want — performance, video, analytics, media, and recruiting — into one connected ecosystem.',
};

export type TechIntegration = {
  name: string;
  category: string;
  logo?: string;
  /** For nodes that pair multiple logos (e.g. media distribution partners). */
  logos?: string[];
};
export const TECH_INTEGRATIONS: TechIntegration[] = [
  { name: 'GameChanger', category: 'Scorekeeping', logo: '/tech/gamechanger.png' },
  { name: 'TrackMan', category: 'Performance', logo: '/tech/trackman.png' },
  { name: 'Synergy', category: 'Video / scouting', logo: '/tech/synergy.png' },
  { name: 'AWRE', category: 'Performance', logo: '/tech/awre.png' },
  { name: 'New Balance', category: 'Partner', logo: '/tech/new-balance.png' },
  { name: 'Recruiting Portal', category: 'Exposure', logo: '/aba_logo_transparent.png' },
  { name: 'Media', category: 'Distribution', logos: ['/media/young-gun-media.png', '/media/doubted-athletes.png'] },
];

/* ---------------------------------------------------------------------------
 * Membership Economics — pricing + projections + PDFs
 * ------------------------------------------------------------------------- */
export const ECONOMICS_INTRO = {
  eyebrow: 'Membership Economics',
  title: 'Transparent, predictable, professional',
  body:
    'ABA membership is built around one straightforward principle: a single league initiation fee, then annual fees that scale with the divisions and events you participate in.',
};

export type CoreFee = {
  amount: string;
  cadence: string;
  name: string;
  detail: string;
  /** Bullet list of what the fee includes/covers. */
  includes?: string[];
  highlight?: boolean;
};

// The three ABA fees. Figures confirmed by the league (avg per-team fee varies
// slightly by division/events).
export const CORE_FEES: CoreFee[] = [
  {
    amount: '$5,000',
    cadence: 'One-time',
    name: 'League Initiation Fee',
    detail: 'Paid once to join the league and become a member — and never paid again.',
  },
  {
    amount: '$2,500',
    cadence: 'Per team · annual (avg)',
    name: 'Annual Per-Team Fee',
    highlight: true,
    detail:
      'Covers the League Kickoff event and the postseason double-elimination tournament. In some divisions it also covers a mid-season round-robin league event.',
  },
  {
    amount: '$195',
    cadence: 'Per player · annual',
    name: 'Per-Player Registration',
    detail: 'Paid directly by each player to register with the league. Covers:',
    includes: [
      'Insurance',
      'GameChanger premium access',
      'Season-long social media coverage',
      'ABA player portal',
      'Combine & evaluation activities',
    ],
  },
];

export const ECONOMICS_NOTES = [
  {
    title: 'No ABA gate fees',
    body: 'ABA home teams charge no gate fees — except at league events, at the discretion of PG, PBR, or LakePoint.',
  },
  {
    title: 'Teams cover their own travel',
    body: 'Each team budgets its own travel — airfare, vans, or bus. A charter bus trip runs roughly $3,000–$9,000 depending on trip length.',
  },
  {
    title: 'Travel scales by division',
    body: 'As a general rule, the older, higher divisions carry higher travel costs.',
  },
];

// Home teams own the operation of every home game — both the costs and the
// game-day responsibilities. Confirmed by the league.
export const HOME_TEAM_RESPONSIBILITIES = {
  title: 'Home teams run the game',
  body:
    'For every home game, the home team covers all game-day expenses and responsibilities. Hosting a game means hosting it end to end — securing the venue, staffing it, and getting it on the air.',
  items: [
    { label: 'Secure the field', detail: 'Reserve and prepare a regulation field for game day.' },
    { label: 'Umpires', detail: 'Hire and pay the umpiring crew.' },
    { label: 'Baseballs', detail: 'Supply the game balls.' },
    { label: 'Official score', detail: 'Staff the official scorekeeper and keep the book.' },
    { label: 'Live streaming', detail: 'Set up and run the broadcast of the game.' },
  ],
};

export type BudgetPdf = { title: string; description: string; file: string };
export const BUDGET_PDFS: BudgetPdf[] = [
  { title: 'Premier Budget Projection', description: 'Full national-schedule cost projection.', file: '/pdfs/premier-budget-projection.pdf' },
  { title: 'Varsity Budget Projection', description: 'Regional-national cost projection.', file: '/pdfs/varsity-budget-projection.pdf' },
  { title: 'JV / MS Budget Projection', description: 'Regional, low-travel cost projection.', file: '/pdfs/jv-ms-budget-projection.pdf' },
];

/* ---------------------------------------------------------------------------
 * Governance & Standards
 * ------------------------------------------------------------------------- */
export const GOVERNANCE_INTRO = {
  eyebrow: 'Governance & Standards',
  title: 'A serious governing organization',
  body:
    'Stability and trust are built into how ABA operates — insured, contracted, and held to enforced professional standards.',
};

export const GOVERNANCE_ITEMS = [
  { title: 'Insured operations', body: 'League operations backed by appropriate insurance coverage.' },
  { title: 'Multi-year agreements', body: 'Membership grounded in stable, multi-year commitments.' },
  { title: 'Auto-renewal contracts', body: 'Continuity by default, with clearly defined terms.' },
  { title: 'Buyout clauses', body: 'Transparent exit terms defined up front.' },
  { title: 'Coach background checks', body: 'Verification standards for everyone in the dugout.' },
  { title: 'Professionalism standards', body: 'Conduct expectations for programs, staff, and athletes.' },
  { title: 'Conduct enforcement', body: 'Defined disciplinary procedures, consistently applied.' },
  { title: 'Eligibility & roster rules', body: 'Clear eligibility and roster standards across divisions.' },
];

/* ---------------------------------------------------------------------------
 * Membership Pathway — onboarding roadmap
 * ------------------------------------------------------------------------- */
export type Phase = {
  phase: string;
  title: string;
  timeline: string;
  steps: string[];
};

export const PATHWAY_INTRO = {
  eyebrow: 'Membership Pathway',
  title: 'From inquiry to competition',
  body: 'A clear, guided path into the league — designed to get programs competition-ready without friction.',
};

export const PATHWAY_PHASES: Phase[] = [
  { phase: 'Phase 1', title: 'Inquiry', timeline: 'Week 1', steps: ['Introductory call', 'League overview', 'Competitive fit review'] },
  { phase: 'Phase 2', title: 'Approval', timeline: 'Weeks 2–3', steps: ['Board review', 'Membership vote', 'Agreement issuance'] },
  { phase: 'Phase 3', title: 'Setup', timeline: 'Weeks 3–5', steps: ['Team registration', 'Division placement', 'Schedule coordination', 'Coach verification', 'GameChanger setup'] },
  { phase: 'Phase 4', title: 'Launch', timeline: 'Weeks 5–7', steps: ['Roster submission', 'Event registration', 'Travel planning', 'Uniform deadlines'] },
  { phase: 'Phase 5', title: 'Competition', timeline: 'Season', steps: ['Conference play', 'Rankings', 'Media coverage', 'Postseason qualification'] },
];

/* ---------------------------------------------------------------------------
 * FAQ
 * ------------------------------------------------------------------------- */
export type Faq = { q: string; a: string };
export const FAQS: Faq[] = [
  { q: 'Can schools keep their branding?', a: 'Yes. Programs compete under their own identity — ABA is the infrastructure around your brand, not a replacement for it.' },
  { q: 'Can teams schedule outside opponents?', a: 'Yes. ABA is built around scheduling freedom, including games beyond league play.' },
  { q: 'How many games can teams play?', a: 'There are no league-imposed game caps. Programs schedule the volume that fits their season.' },
  { q: 'Can schools field multiple teams?', a: 'Yes. Multiple team pathways across divisions are a core part of the model.' },
  { q: 'What travel is required?', a: 'Travel scales by division — Premier travels nationally (5–6 trips), while JV/MS is largely regional with few or no hotel nights.' },
  { q: 'How are divisions determined?', a: 'Placement is based on competitive level, roster composition, and program goals, reviewed during onboarding.' },
  { q: 'What media exposure is included?', a: 'Streamed postseason games, player highlights, and social distribution through ABA’s media ecosystem.' },
  { q: 'Are postgrads allowed?', a: 'Postgrad-eligible talent is supported at the appropriate competitive levels, subject to eligibility rules.' },
  { q: 'What happens if a member leaves?', a: 'Agreements include clearly defined terms, including buyout clauses, established up front.' },
  { q: 'How does scheduling work?', a: 'ABA coordinates conference play while preserving open scheduling flexibility for each program.' },
  { q: 'What technologies are integrated?', a: 'GameChanger, TrackMan, Synergy, Aware, PlaySight, streaming, analytics, and more — unified under the league.' },
];

/* ---------------------------------------------------------------------------
 * Expansion Vision
 * ------------------------------------------------------------------------- */
export const EXPANSION_INTRO = {
  eyebrow: 'Expansion Vision',
  title: 'The national standard for elite amateur baseball',
  body:
    'ABA is building deliberately toward a national footprint — more regions, more divisions, deeper media, and a championship ecosystem that becomes the destination for elite programs.',
};

export const EXPANSION_PILLARS = [
  { title: 'National growth', body: 'Methodical regional expansion across the country.' },
  { title: 'Middle school divisions', body: 'Formalizing the development pipeline earlier.' },
  { title: 'Media expansion', body: 'Deeper broadcast, highlight, and distribution capacity.' },
  { title: 'Technology integration', body: 'Continued unification of performance and recruiting tools.' },
  { title: 'League stability', body: 'Long-term governance and operational maturity.' },
  { title: 'Championship ecosystem', body: 'A national championship that programs build their season around.' },
];

/* ---------------------------------------------------------------------------
 * Founding Member Schools (placeholder logos/profiles)
 * ------------------------------------------------------------------------- */
export type FoundingSchool = {
  name: string;
  /** City, state — omitted where not yet confirmed. */
  location?: string;
  divisions: string[];
  /** Latitude/longitude for the locator map (present when location is known). */
  lat?: number;
  lng?: number;
  /** Square logo tile in /public/logos (its background color is baked in). */
  logo?: string;
  /** 2026 ABA division titles won by this program (e.g. ['Premier','Varsity']). */
  championships?: string[];
  /** Membership tier label shown on the card. Defaults to 'Founding Member'. */
  membership?: string;
};

// Alphabetized. Coordinates are approximate city centers, used only to place
// markers on the schematic locator map. Programs without a confirmed city are
// listed in the grid but omitted from the map. Logos that are not yet supplied
// fall back to a monogram tile (FTB Academy East, Rays Collegiate Blue Claws).
export const FOUNDING_SCHOOLS: FoundingSchool[] = [
  { name: 'A3 Academy', location: 'Tampa, FL', divisions: ['Premier', 'Prospect', 'Varsity', 'JV', 'Middle School'], lat: 27.9506, lng: -82.4572, logo: '/logos/a3-academy.png', championships: ['JV'], membership: 'Board Member Academy' },
  { name: 'A3 Academy Spartans', location: 'Jacksonville, FL', divisions: ['Varsity', 'JV', 'Middle School'], lat: 30.3322, lng: -81.6557, logo: '/logos/a3-spartans.png', membership: 'Member Academy' },
  { name: 'Central Pointe Academy', location: 'Kissimmee, FL', divisions: ['Prospect', 'Varsity'], lat: 28.292, lng: -81.4076, logo: '/logos/central-pointe.png', championships: ['Prospect'] },
  { name: 'Clubhouse Performance Academy', location: 'Spring Hill, FL', divisions: ['Varsity', 'JV'], lat: 28.4769, lng: -82.609, logo: '/logos/clubhouse.png' },
  { name: 'Dominion Sports Collective', location: 'Richmond, VA', divisions: ['Prospect', 'Varsity'], lat: 37.5407, lng: -77.436, logo: '/logos/dominion.png' },
  { name: 'ECA', location: 'Wayne County, NC', divisions: ['Premier', 'Prospect', 'Varsity'], lat: 35.3849, lng: -77.9928, logo: '/logos/eca.png' },
  { name: 'FTB Academy', location: 'Wimauma, FL', divisions: ['Varsity', 'JV', 'Middle School'], lat: 27.7142, lng: -82.2998, logo: '/logos/ftb-academy.png' },
  { name: 'FTB Academy East', location: 'Vero Beach, FL', divisions: ['Varsity', 'JV', 'Middle School'], lat: 27.6386, lng: -80.3973, logo: '/logos/ftb-academy-east.png', membership: 'Member Academy' },
  { name: 'Georgia Premier Academy', location: 'Statesboro, GA', divisions: ['Premier', 'Prospect', 'Varsity'], lat: 32.4488, lng: -81.7832, logo: '/logos/georgia-premier.png', championships: ['Premier', 'Varsity'], membership: 'Board Member Academy' },
  { name: 'Kingsmen Academy', location: 'Gastonia, NC', divisions: ['Prospect', 'Varsity'], lat: 35.2621, lng: -81.1873, logo: '/logos/kingsmen.png' },
  { name: 'P27 Academy', location: 'Lexington, SC', divisions: ['Premier', 'Prospect', 'Varsity'], lat: 33.9815, lng: -81.2362, logo: '/logos/p27.png', membership: 'Board Member Academy' },
  { name: 'PDG Academy', location: 'Fredericksburg, VA', divisions: ['Premier', 'Prospect'], lat: 38.3032, lng: -77.4605, logo: '/logos/pdg.png' },
  { name: 'Rays Collegiate Blue Claws', location: 'Myrtle Beach, SC', divisions: ['Prospect'], lat: 33.6891, lng: -78.8867, logo: '/logos/rays-blue-claws.png' },
  { name: 'TNXL Academy', location: 'Ocoee, FL', divisions: ['Premier', 'Prospect', 'Varsity', 'JV'], lat: 28.5692, lng: -81.5439, logo: '/logos/tnxl.png', membership: 'Board Member Academy' },
  { name: 'Wellington Sports Academy', location: 'Wellington, FL', divisions: ['Premier', 'Prospect', 'Varsity', 'JV', 'Middle School'], lat: 26.6618, lng: -80.2415, logo: '/logos/wellington.png' },
];

// Prospective programs that have expressed interest — shown on the map as a
// distinct marker color, but not yet members (excluded from the member grid).
export type InterestedSchool = { name: string; location: string; divisions: string[]; lat: number; lng: number };
export const INTERESTED_SCHOOLS: InterestedSchool[] = [
  { name: 'DME Academy', location: 'Daytona, FL', divisions: ['Varsity'], lat: 29.2108, lng: -81.0228 },
  { name: 'Montverde Academy', location: 'Montverde, FL', divisions: ['Varsity', 'JV', 'Middle School'], lat: 28.5969, lng: -81.6759 },
  { name: 'Gulf South Academy', location: 'Niceville, FL', divisions: ['Varsity'], lat: 30.5169, lng: -86.4822 },
  { name: '108 Performance Institute', location: 'Nashville, TN', divisions: ['Premier', 'Prospect'], lat: 36.1627, lng: -86.7816 },
  { name: 'A+ Academy', location: 'Gaithersburg, MD', divisions: ['Prospect', 'Varsity'], lat: 39.1434, lng: -77.2014 },
  { name: 'Pro Stock Royals', location: 'Charlotte, NC', divisions: ['Varsity', 'JV'], lat: 35.2271, lng: -80.8431 },
];

/* ---------------------------------------------------------------------------
 * Contact
 * ------------------------------------------------------------------------- */
export const CONTACT_INTRO = {
  eyebrow: 'Get Started',
  title: 'Schedule an introductory call',
  body:
    'Tell us about your program. We’ll walk you through the league, assess competitive fit, and outline a path to membership.',
};

export const CONTACT_ROLES = [
  'Academy Owner / Director',
  'Head Coach',
  'Athletic Director',
  'School Administrator',
  'Investor / Partner',
  'Other',
];
