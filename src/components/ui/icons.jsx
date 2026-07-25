/* Íconos SVG del diseño original (Claude Design), convertidos a JSX. */

export const ArrowRight = (p) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const MapPin = (p) => (
  <svg width="26" height="30" viewBox="0 0 24 30" fill="#C3A24E" stroke="#001d40" strokeWidth="1.4" aria-hidden="true" {...p}>
    <path d="M12 1c5 0 9 4 9 9 0 6.5-9 18-9 18S3 16 3 10c0-5 4-9 9-9z" />
    <circle cx="12" cy="10" r="3" fill="#FBF9F4" />
  </svg>
);

// Íconos de features de propiedades (uno por item)
const featureIconPaths = [
  <><path d="M12 3v10M12 13a4 4 0 0 0 4 4M12 13a4 4 0 0 1-4 4M5 13h14l-1.5 6h-11L5 13z" /><circle cx="12" cy="5" r="2" /></>,
  <><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 8h6M9 12h6M9 16h4" /></>,
  <><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" /><path d="M9 12l2 2 4-4" /></>,
  <><path d="M3 14l4-5 4 4 4-6 6 8" /><path d="M3 14v4h18v-2" /></>,
  <path d="M4 20l7-16 4 9 2-4 3 11z" />,
  <><path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
];

export const FeatureIcon = ({ index = 0, ...p }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
    {featureIconPaths[index % featureIconPaths.length]}
  </svg>
);

const aculeoIconPaths = [
  <path d="M12 21c0-6 3-11 8-13-1 6-4 9-8 9M12 21c0-5-2.5-9-7-11 1 5 3.5 8 7 8M12 21V10" />,
  <><path d="M3 17l6-6 4 4 8-8" /><path d="M21 7v5h-5" /></>,
  <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></>,
];

export const AculeoIcon = ({ index = 0, ...p }) => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
    {aculeoIconPaths[index % aculeoIconPaths.length]}
  </svg>
);

const reasonIconPaths = [
  <><circle cx="8" cy="9" r="3" /><circle cx="16" cy="9" r="3" /><path d="M2.5 19c0-3 2.5-5 5.5-5M21.5 19c0-3-2.5-5-5.5-5M9 15c1-.6 2-.6 3 0" /></>,
  <><path d="M12 2l2.5 2.2 3.3-.4 1 3.2 2.9 1.6-1.3 3 1.3 3-2.9 1.6-1 3.2-3.3-.4L12 22l-2.5-2.2-3.3.4-1-3.2L2.3 15l1.3-3-1.3-3 2.9-1.6 1-3.2 3.3.4z" /><path d="M9 12l2 2 4-4" /></>,
  <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></>,
  <><circle cx="12" cy="9" r="5" /><path d="M8.5 13.5L7 22l5-3 5 3-1.5-8.5" /></>,
];

export const ReasonIcon = ({ index = 0, ...p }) => (
  <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" {...p}>
    {reasonIconPaths[index % reasonIconPaths.length]}
  </svg>
);

export const Diamond = (p) => (
  <svg width="54" height="54" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4.2" strokeLinejoin="round" aria-hidden="true" {...p}>
    <rect x="18" y="18" width="64" height="64" transform="rotate(45 50 50)" />
    <rect x="30" y="30" width="40" height="40" transform="rotate(45 50 50)" />
    <path d="M50 38 V62 M38 50 H62" strokeWidth="3.4" />
  </svg>
);
