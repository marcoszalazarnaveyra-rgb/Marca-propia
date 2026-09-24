# Marcos Zalazar

Landing estática para marcoszalazar.es. Astro + Tailwind, fuentes locales, sin base de datos ni servicios de pago necesarios para ejecutar la web.

## Desarrollo

Node.js 24.13.0, fijado en `.node-version`, y dependencias fijadas en `package-lock.json`.

```sh
npm ci
npm run dev
npm run check
npm run build
npm run preview
```

## Contenido y contacto

- `src/data/site.ts`: proyectos, servicios, teléfono, foto y configuración.
- `src/pages/index.astro`: textos de presentación y trayectoria.
- `src/styles/global.css`: identidad visual y adaptación a móvil.
- `public/projects`: recursos reales de los proyectos facilitados por Marcos.
- `PUBLIC_BOOKING_URL`: enlace HTTPS del servicio de reservas. Vacío por defecto: el botón permite acordar una llamada por WhatsApp, sin simular disponibilidad ni una reserva confirmada.
- `PUBLIC_SITE_LIVE=true`: habilita la indexación en la compilación de producción. La variable está configurada solo en el entorno Production de Cloudflare Pages; sin ella, las compilaciones locales y de vista previa conservan `noindex`.

La página funciona sin JavaScript: proyectos, detalles nativos y contacto siguen disponibles. JavaScript activa el filtro por servicio y detecta cuándo entran los elementos en pantalla para iniciar las animaciones CSS una sola vez. Las animaciones respetan `prefers-reduced-motion` y no incluyen bucles continuos.

## Publicación en Cloudflare Pages

Repositorio: https://github.com/marcoszalazarnaveyra-rgb/Marca-propia.

Importar el repositorio desde Workers & Pages → Create application → Pages. Configurar:

- Framework: Astro.
- Rama de producción: `codex/publicacion-web`.
- Compilación: `npm run build`.
- Directorio de salida: `dist`.
- Directorio raíz: raíz del repositorio.
- Node.js: 24.13.0, según `.node-version`.
- `PUBLIC_SITE_LIVE=true` solo en el entorno Production, después de conectar y comprobar el dominio definitivo.
- `PUBLIC_BOOKING_URL`: dejar vacío hasta conectar y comprobar la agenda real.

La web es estática y no necesita adaptador de servidor ni base de datos. Cloudflare la recompila al subir cambios a la rama de producción seleccionada.

`vercel.json` desactiva las publicaciones automáticas de Vercel para evitar despliegues duplicados desde la conexión anterior con GitHub. El alojamiento elegido es Cloudflare Pages.

Guía oficial: https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/.

## Estado de publicación · 24/09/2026

- GitHub conectado con Cloudflare Pages y despliegue completado en https://marca-propia.pages.dev/.
- `marcoszalazar.es` y `www.marcoszalazar.es` están conectados a Cloudflare Pages: estado Active y SSL enabled. El dominio principal sirve la versión nueva por HTTPS 200; `www` redirige a él mediante 301 y conserva ruta y parámetros. DonDominio tiene asignados `romina.ns.cloudflare.com` y `rommy.ns.cloudflare.com`.
- `PUBLIC_SITE_LIVE=true` está guardada solo en el entorno Production de Cloudflare Pages. La versión publicada devuelve `index, follow`, `robots.txt` enlaza al sitemap y la página declara el dominio principal como canónico.
- Reenvío gratuito de Cloudflare habilitado: `info@marcoszalazar.es` tiene una regla activa hacia el Gmail de trabajo verificado. Los registros MX y DKIM están configurados, y hay un único SPF que incluye Cloudflare y DonDominio. Falta comprobar la recepción con un mensaje real; el correo todavía no se anuncia como activo en la web.

## Pendiente para completar los servicios

1. Probar desde otra cuenta la recepción de `info@marcoszalazar.es` en el Gmail de trabajo. El reenvío no incluye el envío de mensajes desde el dominio.
2. Conectar la agenda siguiendo `RESERVAS.md`.
3. Completar los datos reales del titular para los textos legales. No se han inventado NIF, domicilio profesional ni correo operativo. Esta versión no lleva analítica, píxeles, formularios ni calendarios incrustados; los servicios externos se abren al pulsar sus enlaces.

## Fuentes visuales

Identidad personal: tarjetas de visita facilitadas por Marcos (Space Mono, marfil y tres azules). Recursos descargados de las webs indicadas por el autor para presentar sus propios trabajos:

- Bercianitas: `https://bercianitas.es/wp-content/uploads/2025/04/logo-mascota.svg` y `https://bercianitas.es/wp-content/uploads/2025/03/caja-1.png`.
- Urban Doce: `https://urbandoce.es/images/logo.svg` y cebra mostrada en la portada de la web.
- SRS: logotipo y foto principal mostrados en `https://srstaller.es`.
- Impulse Academy: pieza gráfica facilitada por Marcos. Enlace corregido a `https://impulse-english.es`, visible en la pieza y verificado el 23/09/2026.
- Retrato: fotografía facilitada por Marcos, conservada en `src/assets/marcos-zalazar.png`. Se sirve una versión WebP pequeña y se encuadra mediante CSS en la presentación.

El fondo de Bercianitas es blanco. La composición de Urban Doce muestra únicamente la cebra y el logotipo, sin textos superpuestos. Las imágenes originales facilitadas por Marcos se conservan en `src/assets`; Astro genera los formatos optimizados de entrega.

Las composiciones de las fichas son presentaciones de portfolio realizadas con esos recursos; no son capturas de pantalla. No se atribuyen métricas ni resultados comerciales no proporcionados por Marcos. Redes confirmadas: Urban Doce, Bercianitas e Impulse Academy.
