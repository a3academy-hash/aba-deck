/**
 * Single source of truth for the page's sections. Each entry drives:
 *  - the left floating navigation (label + id)
 *  - active-section tracking via IntersectionObserver
 *  - in-page anchor links
 *
 * `id` must match the `id` rendered on the corresponding <section>.
 */
export type NavSection = {
  id: string;
  label: string;
  /** Short label for the compact/mobile rail. */
  short?: string;
};

export const NAV_SECTIONS: NavSection[] = [
  { id: 'hero', label: 'Overview', short: 'Home' },
  { id: 'why-aba', label: 'Why ABA' },
  { id: 'infrastructure', label: 'Competitive Infrastructure', short: 'Infrastructure' },
  { id: 'league-structure', label: 'League Structure', short: 'Structure' },
  { id: 'national-visibility', label: 'National Visibility', short: 'Visibility' },
  { id: 'championship', label: 'Championship Experience', short: 'Championship' },
  { id: 'technology', label: 'Technology Ecosystem', short: 'Technology' },
  { id: 'economics', label: 'Membership Economics', short: 'Economics' },
  { id: 'governance', label: 'Governance & Standards', short: 'Governance' },
  { id: 'pathway', label: 'Membership Pathway', short: 'Pathway' },
  { id: 'faq', label: 'FAQ' },
  { id: 'expansion', label: 'Expansion Vision', short: 'Expansion' },
  { id: 'founding-schools', label: 'Founding Member Schools', short: 'Members' },
  { id: 'contact', label: 'Schedule a Call', short: 'Contact' },
];
