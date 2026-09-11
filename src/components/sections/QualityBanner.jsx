import Reveal from '../ui/Reveal';
import ImageSlot from '../ui/ImageSlot';

export default function QualityBanner() {
  return (
    <Reveal
      as="section"
      aria-label="Calidad de vida"
      className="relative flex min-h-[clamp(320px,40vw,440px)] items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <ImageSlot src="/assets/la-brisa-banner.png" position="center 100%" placeholder="La Brisa - Lago Rapel" />
      </div>
      <div className="relative z-[2] mx-auto w-full max-w-[1200px] px-[clamp(24px,6vw,90px)] py-[clamp(28px,4vw,56px)]">
        <div className="flex max-w-[620px] flex-col gap-[22px]">
          <div className="h-0.5 w-14 bg-gold" />
          <h2 className="text-[clamp(28px,4.6vw,52px)] font-medium leading-[1.12] text-cream">
            Vivir el Lago es invertir en Tu Calidad de Vida
          </h2>
          <p className="max-w-[520px] font-sans text-[clamp(15px,1.9vw,19px)] font-normal leading-[1.6] text-[#EAE3D4]">
            Naturaleza, descanso, seguridad y plusvalía en un entorno privilegiado a solo 2 horas de
            Santiago.
          </p>
        </div>
      </div>
    </Reveal>
  );
}
