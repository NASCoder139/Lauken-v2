import { motion } from 'framer-motion';
import LogoMark from '../ui/LogoMark';

export default function Hero() {
  return (
    <header className="relative flex min-h-[clamp(520px,78vh,720px)] flex-col overflow-hidden px-[clamp(20px,5vw,72px)] pb-[clamp(96px,11vw,150px)] pt-[clamp(24px,4vw,44px)]">
      {/* Video de fondo */}
      <div className="absolute inset-0 z-0 bg-navy">
        <video
          className="h-full w-full object-cover"
          style={{ objectPosition: 'center 50%' }}
          src="https://storage.googleapis.com/lauken/lauken-web/proyectos/videos/valles-de-range-2/video-banner-valles-de-rangue-2-video%20.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Video del Lago Rapel"
        />
      </div>

      {/* Velo para legibilidad del texto */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(180deg, rgba(0,29,64,0.45) 0%, rgba(0,29,64,0.25) 45%, rgba(0,29,64,0.40) 75%, rgba(0,29,64,0.60) 100%)',
        }}
      />

      <div className="relative z-[2] mx-auto flex w-full max-w-[1200px] flex-1 flex-col">
        {/* Lockup del logo — arriba, centrado */}
        <motion.div
          className="flex justify-center pt-2"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <div className="flex items-center gap-4 text-cream">
            <LogoMark size={78} className="drop-shadow-[0_2px_16px_rgba(0,29,64,0.5)]" />
            <span className="flex flex-col items-center leading-none">
              <span className="font-sans text-[clamp(32px,4.6vw,54px)] font-light tracking-[0.14em]">
                LAGO RAPEL
              </span>
              <span className="mt-2 font-sans text-[clamp(12px,1.4vw,17px)] font-normal tracking-[0.42em] text-cream/85">
                PROPIEDADES
              </span>
            </span>
          </div>
        </motion.div>

        {/* Título + subtítulo — a la izquierda, centrados verticalmente */}
        <motion.div
          className="flex flex-1 flex-col items-start justify-center text-left"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 0.61, 0.36, 1], delay: 0.2 }}
        >
          <h1 className="max-w-[12ch] font-display text-[clamp(40px,7.5vw,86px)] font-semibold leading-[1.04] text-cream drop-shadow-[0_2px_28px_rgba(0,29,64,0.6)]">
            Tu Lugar junto al Lago
          </h1>
          <p className="mt-6 max-w-[46ch] font-sans text-[clamp(15px,1.9vw,19px)] font-medium leading-[1.6] text-cream/90">
            Un portafolio único de propiedades y proyectos exclusivos
          </p>
        </motion.div>
      </div>
    </header>
  );
}
