// logoWidth: ancho del lockup dentro de la tarjeta, en % del contenedor.
// Los dos archivos tienen proporciones muy distintas (Lauken 2,95:1 vs Goycoolea 1,57:1),
// asi que a igual alto uno se ve mucho mas grande. Estos anchos igualan el area de
// tinta renderizada de ambos (relacion 1,48:1), que es lo que se percibe como "mismo tamano".
export const brands = [
  { name: 'Laukén', tag: 'INMOBILIARIA', subtitle: 'Proyectos junto al lago', color: 'navy', url: 'https://lauken.cl/', logo: '/assets/logo-lauken-lockup.png', logoWidth: '80%' },
  { name: 'Goycoolea', tag: 'PROPIEDADES', subtitle: 'Propiedades junto al lago', color: 'ink', url: 'https://goycooleapropiedades.cl/', logo: '/assets/logo-goycoolea-lockup.png', logoWidth: '54%' },
];

export const categories = [
  { id: 'parcelas', title: 'Parcelas', placeholder: 'Foto de parcelas junto al lago', img: '/assets/cat-parcelas.jpg' },
  { id: 'sitios', title: 'Sitios', placeholder: 'Foto de sitios junto al lago', img: '/assets/cat-sitios.jpg' },
  { id: 'casas', title: 'Casas', placeholder: 'Foto de casas junto al lago', img: '/assets/cat-casas.jpg' },
  { id: 'proyectos', title: 'Proyectos', placeholder: 'Foto de proyectos junto al lago', img: '/assets/cat-proyectos.jpg' },
];

export const properties = [
  {
    id: 'san-rafael',
    badge: 'LAUKÉN INMOBILIARIA',
    badgeColor: 'rgba(0,29,64,.92)',
    title: 'Bahía Las Palmas · Lago Rapel',
    subtitle: 'Sitios de 1.500 m²',
    price: 'Desde $60.000.000',
    placeholder: 'Foto Bahía Las Palmas - Lago Rapel',
    img: '/assets/las-palmas-aerea.jpg',
    imgPos: 'center 50%',
    url: 'https://lauken.cl/bahia-las-palmas',
    features: ['Marina exclusiva', 'Rol propio', 'Acceso controlado'],
  },
  {
    id: 'casa-orilla',
    badge: 'GOYCOOLEA PROPIEDADES',
    badgeColor: 'rgba(34,62,63,.94)',
    title: 'Casa a orilla de Lago Rapel',
    subtitle: 'Propiedad seleccionada',
    price: 'UF 8.900',
    placeholder: 'Foto Casa a orilla de Lago Rapel',
    img: '/assets/prop-casa.jpg',
    imgPos: 'center 78%',
    url: 'https://www.goycooleapropiedades.cl//fichaPropiedad.aspx?i=159478',
    features: ['Vista al lago', 'Acceso cercano', 'Excelente ubicación'],
  },
];

export const locations = [
  { name: 'San Rafael', top: '26%', left: '30%' },
  { name: 'Las Palmas', top: '52%', left: '58%' },
  { name: 'Pullin', top: '72%', left: '40%' },
];

export const aculeoHighlights = [
  'Entorno natural privilegiado',
  'Gran potencial de inversión',
  'A solo 1 hora de Santiago',
];

export const reasons = [
  'Dos actores con experiencia',
  'Propiedades seleccionadas',
  'Información transparente',
  'Asesoría experta',
];
