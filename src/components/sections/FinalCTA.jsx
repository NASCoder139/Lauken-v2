import ImageSlot from '../ui/ImageSlot';
import Button from '../ui/Button';
import LogoMark from '../ui/LogoMark';
import { Diamond } from '../ui/icons';
import { brands } from '../../data/content';

export default function FinalCTA() {
  return (
    <section aria-label="Contacto final" className="relative overflow-hidden px-[clamp(20px,5vw,72px)] py-[clamp(44px,6vw,86px)]">
      <div className="absolute inset-0">
        <ImageSlot src="/assets/finalcta.jpg" position="center 75%" placeholder="Fotografía nocturna o de atardecer del Lago Rapel" />
      </div>
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(0,29,64,.30) 0%, rgba(0,29,64,.42) 100%)' }}
      />

      <div className="relative z-[2] mx-auto flex max-w-[1000px] flex-col items-center gap-[clamp(24px,4vw,40px)] text-center">
        <div className="flex flex-col items-center gap-3 text-cream">
          <Diamond />
          <span className="flex flex-col items-center leading-none">
            <span className="font-sans text-[clamp(28px,4vw,44px)] font-light tracking-[0.14em]">
              LAGO RAPEL
            </span>
            <span className="mt-2 font-sans text-[clamp(12px,1.4vw,15px)] font-normal tracking-[0.44em] text-[#EDE6D6]">
              PROPIEDADES
            </span>
          </span>
        </div>

        <h2 className="text-balance text-[clamp(28px,5.4vw,58px)] font-semibold leading-[1.08] tracking-[0.02em] text-cream">
          Tu Próxima Propiedad
          <br />
          Te Está Esperando
        </h2>
        <p className="max-w-[620px] font-sans text-[clamp(15px,2vw,20px)] font-normal text-[#EAE3D4]">
          Explora las oportunidades de cada marca y encuentra el lugar perfecto para ti
        </p>

        <div className="mt-2 grid w-full max-w-[760px] grid-cols-2 gap-[clamp(12px,2.6vw,28px)]">
          {brands.map((b) => (
            <article
              key={b.name}
              className="flex flex-col items-center gap-2.5 sm:gap-4 rounded-[14px] bg-[rgba(251,249,244,.97)] p-[clamp(16px,3vw,38px)]"
            >
              <LogoMark size={44} className={b.color === 'ink' ? 'text-ink' : 'text-navy'} />
              <div className="flex flex-col items-center gap-[5px]">
                <span className="font-display text-[clamp(18px,2.4vw,27px)] font-semibold text-navy">
                  {b.name}
                </span>
                <span className="font-sans text-[10px] tracking-[0.16em] sm:text-[11px] sm:tracking-[0.34em] font-medium text-gold">
                  {b.tag}
                </span>
              </div>
              <Button
                href={b.url}
                variant={b.color}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-3 py-3 sm:px-[30px] sm:py-3.5"
              >
                VER MÁS
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
