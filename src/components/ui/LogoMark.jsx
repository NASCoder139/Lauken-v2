/**
 * Monograma en diamante (vectorial) inspirado en el logo de Lago Rapel.
 * Nítido y escalable; color heredado vía currentColor.
 * Reemplazable por el logo real (PNG transparente / SVG) cuando esté disponible.
 */
export default function LogoMark({ size = 60, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.4"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <rect x="16" y="16" width="68" height="68" transform="rotate(45 50 50)" />
      <rect x="28" y="28" width="44" height="44" transform="rotate(45 50 50)" />
      {/* Motivo interlock central */}
      <path d="M50 34 V50 H66" strokeWidth="3" />
      <path d="M50 66 V50 H34" strokeWidth="3" />
    </svg>
  );
}
