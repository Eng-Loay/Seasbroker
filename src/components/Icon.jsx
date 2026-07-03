const icons = {
  marine: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M6 32h36l-4 8H10l-4-8z" stroke="currentColor" strokeWidth="2" />
      <path d="M12 32V20l12-8 12 8v12" stroke="currentColor" strokeWidth="2" />
      <circle cx="34" cy="14" r="8" stroke="currentColor" strokeWidth="2" />
      <path d="M34 10v8M30 14h8" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  offshore: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M24 6v10M18 10h12" stroke="currentColor" strokeWidth="2" />
      <rect x="14" y="16" width="20" height="18" stroke="currentColor" strokeWidth="2" />
      <path d="M10 34h28M8 38h32" stroke="currentColor" strokeWidth="2" />
      <path d="M20 24h8M20 28h8" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  inspection: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="16" r="6" stroke="currentColor" strokeWidth="2" />
      <path d="M12 38c0-8 5-12 12-12s12 4 12 12" stroke="currentColor" strokeWidth="2" />
      <rect x="30" y="24" width="10" height="14" rx="1" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  design: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="8" y="10" width="32" height="28" stroke="currentColor" strokeWidth="2" />
      <path d="M14 34l10-10 6 6 8-8" stroke="currentColor" strokeWidth="2" />
      <path d="M30 8l10 10" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  feasibility: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="10" y="8" width="22" height="30" stroke="currentColor" strokeWidth="2" />
      <circle cx="34" cy="30" r="8" stroke="currentColor" strokeWidth="2" />
      <path d="M32 30h4M34 28v4" stroke="currentColor" strokeWidth="2" />
      <path d="M14 16h14M14 22h14M14 28h8" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  management: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="14" r="5" stroke="currentColor" strokeWidth="2" />
      <path d="M14 36c0-6 4-10 10-10s10 4 10 10" stroke="currentColor" strokeWidth="2" />
      <path d="M34 20l4 4-4 4M14 20l-4 4 4 4" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  infrastructure: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M6 30h36" stroke="currentColor" strokeWidth="2" />
      <path d="M10 30V18l8-6 8 6v12M26 30V14l8-6 8 6v16" stroke="currentColor" strokeWidth="2" />
      <path d="M4 34c4-2 8-2 12 0s8 2 12 0 8-2 12 0" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  oilgas: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M16 38V18l8-10 8 10v20" stroke="currentColor" strokeWidth="2" />
      <path d="M12 38h24" stroke="currentColor" strokeWidth="2" />
      <path d="M20 24h8M20 30h8" stroke="currentColor" strokeWidth="2" />
      <circle cx="36" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  digital: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2" />
      <path d="M16 24c0-4 4-8 8-8s8 4 8 8-4 8-8 8" stroke="currentColor" strokeWidth="2" />
      <path d="M24 16v16M18 20h12M18 28h12" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  training: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2" />
      <circle cx="16" cy="22" r="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="18" r="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="32" cy="22" r="3" stroke="currentColor" strokeWidth="2" />
      <path d="M14 32c3-3 17-3 20 0" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  experience: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="16" r="6" stroke="currentColor" strokeWidth="2" />
      <path d="M10 38c2-8 8-12 14-12s12 4 14 12" stroke="currentColor" strokeWidth="2" />
      <path d="M16 10l2 4 4 1-3 3 1 4-4-2-4 2 1-4-3-3 4-1 2-4z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  projects: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M12 20l12-8 12 8v18H12V20z" stroke="currentColor" strokeWidth="2" />
      <path d="M20 38V26h8v12" stroke="currentColor" strokeWidth="2" />
      <rect x="18" y="12" width="12" height="8" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  global: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2" />
      <path d="M8 24h32M24 8c-6 6-6 26 0 32M24 8c6 6 6 26 0 32" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  integrated: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="18" cy="24" r="8" stroke="currentColor" strokeWidth="2" />
      <circle cx="30" cy="24" r="8" stroke="currentColor" strokeWidth="2" />
      <path d="M18 16v-4M18 36v-4M30 16v-4M30 36v-4" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  marineAbout: (
    <svg viewBox="0 0 56 56" fill="none" aria-hidden="true">
      <path d="M8 38h40l-4 8H12l-4-8z" stroke="currentColor" strokeWidth="2.5" />
      <path d="M16 38V22l12-10 12 10v16" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="40" cy="16" r="10" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  ),
  offshoreAbout: (
    <svg viewBox="0 0 56 56" fill="none" aria-hidden="true">
      <path d="M28 8v12M20 14h16" stroke="currentColor" strokeWidth="2.5" />
      <rect x="16" y="20" width="24" height="22" stroke="currentColor" strokeWidth="2.5" />
      <path d="M10 42h36" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  ),
  industrial: (
    <svg viewBox="0 0 56 56" fill="none" aria-hidden="true">
      <rect x="10" y="24" width="16" height="20" stroke="currentColor" strokeWidth="2.5" />
      <rect x="30" y="16" width="16" height="28" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="38" cy="12" r="6" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  ),
  pmAbout: (
    <svg viewBox="0 0 56 56" fill="none" aria-hidden="true">
      <circle cx="28" cy="18" r="7" stroke="currentColor" strokeWidth="2.5" />
      <path d="M14 46c0-10 6-16 14-16s14 6 14 16" stroke="currentColor" strokeWidth="2.5" />
      <path d="M40 24l6 6-6 6" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  ),
  headquarters: (
    <svg viewBox="0 0 56 56" fill="none" aria-hidden="true">
      <path d="M10 42h36V22l-8-8-8 8v-6l-8-8-8 8v20z" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="28" cy="16" r="4" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 56 56" fill="none" aria-hidden="true">
      <rect x="8" y="14" width="40" height="28" rx="2" stroke="currentColor" strokeWidth="2.5" />
      <path d="M8 18l20 14 20-14" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="28" cy="28" r="6" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 56 56" fill="none" aria-hidden="true">
      <circle cx="28" cy="28" r="18" stroke="currentColor" strokeWidth="2.5" />
      <path d="M22 20c2 8 6 14 14 16" stroke="currentColor" strokeWidth="2.5" />
      <path d="M24 18l-4-2 2 6" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  ),
}

export default function Icon({ name, className }) {
  return <span className={className}>{icons[name]}</span>
}
