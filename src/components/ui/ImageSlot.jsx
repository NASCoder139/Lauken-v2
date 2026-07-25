// Imagen de referencia usada en todos los slots por ahora.
const LAKE_IMG = '/assets/parcela1.jpg';

/**
 * Cuando esté en true, los slots muestran la foto.
 * Para volver al fondo de marca (sin imágenes), cambia a false.
 */
const SHOW_IMAGES = true;

/**
 * Reemplazo React del <image-slot> de Claude Design.
 * position/tint/zoom se conservan para cuando se reactiven las fotos.
 */
export default function ImageSlot({
  src = LAKE_IMG,
  alt = '',
  placeholder = '',
  className = '',
  position = 'center',
  tint = 0,
  zoom = false,
}) {
  if (!SHOW_IMAGES) {
    // Placeholder de marca: degradado navy -> verde, sin imagen.
    return (
      <div className={`relative h-full w-full overflow-hidden ${className}`} aria-label={placeholder}>
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-[#0a2a4d] to-green" />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(120% 90% at 50% 0%, rgba(195,162,78,.10), transparent 62%)' }}
        />
      </div>
    );
  }

  if (!src) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center bg-green/10 p-6 text-center ${className}`}
        aria-label={placeholder}
      >
        <span className="font-sans text-sm text-green/70">{placeholder}</span>
      </div>
    );
  }

  return (
    <>
      <img
        src={src}
        alt={alt || placeholder}
        loading="lazy"
        className={`h-full w-full object-cover transition-transform duration-[1200ms] ease-out ${
          zoom ? 'group-hover:scale-105' : ''
        } ${className}`}
        style={{ objectPosition: position }}
      />
      {tint > 0 && (
        <div className="pointer-events-none absolute inset-0" style={{ background: `rgba(0,29,64,${tint})` }} />
      )}
    </>
  );
}
