# Lago Rapel Propiedades — Landing Page

Landing page desarrollada con **Claude Design** para *Lago Rapel Propiedades*,
que agrupa proyectos inmobiliarios junto al Lago Rapel (marcas **Laukén**,
**Goycolea**, entre otras).

## Estructura

```
.
├── Lago Rapel Propiedades.dc.html   <- página principal (Claude Design)
├── support.js                        <- runtime de Claude Design
├── image-slot.js                     <- componente <image-slot> de Claude Design
├── assets/
│   ├── hero-lago.png                 <- imagen hero
│   └── hero-ref.png                  <- imagen hero (referencia)
└── uploads/
    ├── imagen_lago_rapel.png
    ├── imagen_lago_rapel-a7eb64f6.png
    └── LANDING V3 LRP.pdf            <- material de referencia (diseño)
```

## Cómo previsualizar

El HTML referencia `support.js` e `image-slot.js` de forma relativa, por lo que
conviene servirlo con un servidor local (abrirlo con `file://` puede bloquear
algunos scripts):

```powershell
# Desde esta carpeta
python -m http.server 8000
# luego abrir http://localhost:8000/Lago%20Rapel%20Propiedades.dc.html
```

## Notas

- Es un proyecto de **Claude Design**: `support.js`, `image-slot.js` y los
  elementos `<x-dc>` / `<image-slot>` son parte de su runtime; no editar salvo
  que sepas lo que haces.
- Fuentes usadas (vía Google Fonts): *Playfair Display* y *Montserrat*.
- Paleta: azul `#001d40`, dorado `#C3A24E`, fondo crema `#FBF9F4`.
- Hay imágenes **duplicadas** (`hero-lago.png` = `hero-ref.png`;
  `imagen_lago_rapel.png` = `imagen_lago_rapel-a7eb64f6.png`). Se pueden
  consolidar más adelante para aligerar el repo.
