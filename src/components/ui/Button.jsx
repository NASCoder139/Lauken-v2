/**
 * Botón/enlace con el estilo del diseño.
 * variant: 'navy' (#001d40) | 'ink' (#363d43) | 'gold' (#C3A24E)
 */
export default function Button({ children, href = '#', variant = 'navy', className = '', ...props }) {
  const base =
    'inline-flex items-center justify-center gap-2 min-h-[48px] rounded-[6px] font-sans font-semibold text-[13px] tracking-[0.16em] transition-all duration-300 hover:-translate-y-0.5';
  const variants = {
    navy: 'bg-navy text-cream hover:bg-[#00294f]',
    ink: 'bg-ink text-cream hover:bg-[#2b3137]',
    gold: 'bg-gold text-navy font-bold hover:bg-gold-soft',
  };
  return (
    <a href={href} className={`${base} ${variants[variant] || variants.navy} ${className}`} {...props}>
      {children}
    </a>
  );
}
