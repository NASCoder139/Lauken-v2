import Reveal from '../ui/Reveal';
import { ReasonIcon } from '../ui/icons';
import { reasons } from '../../data/content';

export default function WhyChooseUs() {
  return (
    <section aria-label="Por qué elegirnos" className="bg-green px-[clamp(20px,5vw,72px)] py-[clamp(36px,5vw,68px)]">
      <div className="mx-auto max-w-[1120px]">
        <Reveal className="mb-[clamp(26px,3.5vw,44px)] text-center">
          <span className="font-sans text-[12px] tracking-[0.34em] text-gold">NUESTRO SELLO</span>
          <h2 className="mt-3.5 text-balance text-[clamp(28px,4.8vw,50px)] font-medium leading-[1.12] text-cream">
            ¿Por qué elegir Lago Rapel Propiedades?
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4">
          {reasons.map((r, i) => (
            <Reveal
              key={r}
              delay={i * 0.06}
              className={`flex flex-col items-center gap-[12px] px-[clamp(16px,2.4vw,32px)] py-[clamp(12px,1.4vw,18px)] text-center ${
                i < reasons.length - 1 ? 'md:border-r md:border-[rgba(195,162,78,.28)]' : ''
              }`}
            >
              <span className="text-gold">
                <ReasonIcon index={i} />
              </span>
              <p className="font-sans text-[16px] font-medium leading-[1.4] text-cream">{r}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
