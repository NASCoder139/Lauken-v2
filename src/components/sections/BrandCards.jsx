import Reveal from '../ui/Reveal';
import Button from '../ui/Button';
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
            {/* Lockup de marca: ya incluye nombre y rubro.
                Ancho por marca (ver logoWidth en content.js) para igualar el peso optico;
                min-h en vez de h para que nunca se recorte al escalar la tarjeta. */}
            <div className="flex min-h-[clamp(58px,8vw,104px)] w-full items-center justify-center">
              <img src={b.logo} alt={`${b.name} ${b.tag}`} className="h-auto" style={{ width: b.logoWidth }} />
            </div>
            <div className="h-px w-10 bg-[#E0D6C0]" />
            <p className="font-sans text-[14px] sm:text-[16px] font-normal text-[#5a5f63]">{b.subtitle}</p>
            <Button
              href={b.url}
              variant={b.color}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto w-full px-4 py-3 sm:w-auto sm:px-[34px] sm:py-3.5"
            >
              VER MÁS
            </Button>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
