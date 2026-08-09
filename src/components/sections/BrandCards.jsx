import Reveal from '../ui/Reveal';
import Button from '../ui/Button';
import LogoMark from '../ui/LogoMark';
import { brands } from '../../data/content';

export default function BrandCards() {
  return (
    <section
      aria-label="Marcas"
      className="relative z-[3] mt-[clamp(-100px,-11vw,-130px)] px-[clamp(20px,5vw,72px)] pb-[clamp(60px,8vw,100px)]"
    >
      <div className="mx-auto grid max-w-[820px] grid-cols-2 gap-[clamp(12px,3vw,32px)]">
        {brands.map((b, i) => (
          <Reveal
            as="article"
            key={b.name}
            delay={i * 0.08}
            className="flex flex-col items-center gap-2.5 sm:gap-3.5 rounded-[14px] border border-[#ECE3D0] bg-cream p-[clamp(16px,2.6vw,32px)_clamp(12px,3vw,40px)] text-center shadow-[0_24px_60px_-28px_rgba(0,29,64,.45)]"
          >
            {b.logo ? (
              <img src={b.logo} alt={`Logo ${b.name}`} className="h-[clamp(38px,4.4vw,52px)] w-auto object-contain" />
            ) : (
              <LogoMark size={40} className={b.color === 'ink' ? 'text-ink' : 'text-navy'} />
            )}
            <div className="flex flex-col items-center gap-1.5">
              <span className="font-display text-[clamp(22px,2.6vw,30px)] font-semibold tracking-[0.02em] text-navy">
                {b.name}
              </span>
              <span className="font-sans text-[10px] tracking-[0.18em] sm:text-[12px] sm:tracking-[0.36em] font-medium text-gold">
                {b.tag}
              </span>
            </div>
            <div className="h-px w-10 bg-[#E0D6C0]" />
            <p className="font-sans text-[14px] sm:text-[16px] font-normal text-[#5a5f63]">{b.subtitle}</p>
            <Button
              href={b.url}
              variant={b.color}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1.5 w-full px-4 py-3 sm:w-auto sm:px-[34px] sm:py-3.5"
            >
              VER MÁS
            </Button>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
