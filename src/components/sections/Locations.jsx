import { useCallback } from 'react';
import { GoogleMap, OverlayViewF, useLoadScript } from '@react-google-maps/api';
import Reveal from '../ui/Reveal';
// import Button from '../ui/Button'; // usado por el boton oculto de abajo
import { MapPin } from '../ui/icons';
import { locations } from '../../data/content';

// Misma clave que el sitio de Lauken (VITE_GOOGLE_MAPS_API_KEY en .env.local).
const MAPS_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const MAP_OPTIONS = {
  mapTypeId: 'satellite',
  disableDefaultUI: true,
  zoomControl: true,
  mapTypeControl: true,
  scrollwheel: false,
  gestureHandling: 'cooperative',
};

// Margen para que los chips con el nombre (a la izquierda del pin) no se corten.
const BOUNDS_PADDING = { top: 60, right: 60, bottom: 50, left: 190 };
const BOUNDS_PADDING_MOVIL = { top: 60, right: 30, bottom: 50, left: 140 };

const LABEL_ALIGN = { top: 'items-start', bottom: 'items-end', center: 'items-center' };

export default function Locations() {
  const { isLoaded, loadError } = useLoadScript({ googleMapsApiKey: MAPS_KEY });

  // El zoom se ajusta solo para que entren todas las ubicaciones.
  const onLoad = useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds();
    locations.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
    map.fitBounds(bounds, map.getDiv().offsetWidth < 640 ? BOUNDS_PADDING_MOVIL : BOUNDS_PADDING);
  }, []);

  return (
    <section aria-label="Ubicaciones destacadas" className="px-[clamp(20px,5vw,72px)] py-[clamp(48px,7vw,100px)]">
      <div className="mx-auto max-w-[1120px]">
        <Reveal className="mb-[clamp(36px,5vw,56px)] text-center">
          <span className="font-sans text-[12px] tracking-[0.34em] text-gold">EN EL MAPA</span>
          <h2 className="mt-3.5 text-[clamp(30px,5vw,52px)] font-semibold">Ubicaciones Destacadas</h2>
        </Reveal>

        <Reveal className="relative aspect-[4/5] min-h-[320px] sm:aspect-[16/9] sm:min-h-[340px] overflow-hidden rounded-[18px] bg-[#dfe6e4] shadow-[0_26px_60px_-34px_rgba(0,29,64,.55)]">
          {loadError ? (
            <div className="flex h-full w-full items-center justify-center p-6 text-center font-sans text-sm text-green/70">
              No se pudo cargar el mapa.
            </div>
          ) : !isLoaded ? (
            <div className="flex h-full w-full items-center justify-center font-sans text-sm text-green/70">
              Cargando mapa...
            </div>
          ) : (
            <GoogleMap mapContainerStyle={{ width: '100%', height: '100%' }} options={MAP_OPTIONS} onLoad={onLoad}>
              {locations.map((loc) => (
                <OverlayViewF key={loc.name} position={{ lat: loc.lat, lng: loc.lng }} mapPaneName="overlayMouseTarget">
                  {/* Nombre a la izquierda; la punta del pin (26x30px) queda sobre la coordenada. */}
                  <a
                    href={loc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group absolute flex -translate-x-[calc(100%-13px)] -translate-y-[30px] gap-1 ${LABEL_ALIGN[loc.labelAlign || 'center']}`}
                  >
                    <span className="whitespace-nowrap rounded-[20px] bg-cream px-2.5 py-1 font-sans text-[11px] font-semibold sm:px-3 sm:py-1.5 sm:text-[12px] tracking-[0.08em] text-navy shadow-[0_6px_16px_-6px_rgba(0,29,64,.5)] transition-colors group-hover:bg-white group-hover:text-green">
                      {loc.name}
                    </span>
                    <MapPin />
                  </a>
                </OverlayViewF>
              ))}
            </GoogleMap>
          )}
        </Reveal>

        {/* Boton oculto por ahora: no hay pagina de ubicaciones a donde llevarlo.
        <Reveal className="mt-[clamp(30px,4vw,44px)] text-center">
          <Button className="px-[40px] py-4 min-h-[52px]">VER TODAS LAS UBICACIONES</Button>
        </Reveal>
        */}
      </div>
    </section>
  );
}
