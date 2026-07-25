import Reveal from '../ui/Reveal';
import ImageSlot from '../ui/ImageSlot';
import Button from '../ui/Button';
import { MapPin } from '../ui/icons';
import { locations } from '../../data/content';

export default function Locations() {
  return (
    <section aria-label="Ubicaciones destacadas" className="px-[clamp(20px,5vw,72px)] py-[clamp(48px,7vw,100px)]">
      <div className="mx-auto max-w-[1120px]">
        <Reveal className="mb-[clamp(36px,5vw,56px)] text-center">
          <span className="font-sans text-[12px] tracking-[0.34em] text-gold">EN EL MAPA</span>
          <h2 className="mt-3.5 text-[clamp(30px,5vw,52px)] font-semibold">Ubicaciones Destacadas</h2>
        </Reveal>

        <Reveal className="relative aspect-[16/10] min-h-[200px] sm:aspect-[16/9] sm:min-h-[340px] overflow-hidden rounded-[18px] bg-[#dfe6e4] shadow-[0_26px_60px_-34px_rgba(0,29,64,.55)]">
          <ImageSlot src="/assets/locations.jpg" position="center 40%" placeholder="Mapa estilizado del Lago Rapel" />
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(0,29,64,.08) 0%, rgba(0,29,64,.30) 100%)' }}
          />
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="absolute flex -translate-x-1/2 -translate-y-full flex-col items-center"
              style={{ top: loc.top, left: loc.left }}
            >
              <span className="whitespace-nowrap rounded-[20px] bg-cream px-3 py-1.5 font-sans text-[12px] font-semibold tracking-[0.08em] text-navy shadow-[0_6px_16px_-6px_rgba(0,29,64,.5)]">
                {loc.name}
              </span>
              <MapPin />
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-[clamp(30px,4vw,44px)] text-center">
          <Button className="px-[40px] py-4 min-h-[52px]">VER TODAS LAS UBICACIONES</Button>
        </Reveal>
      </div>
    </section>
  );
}
