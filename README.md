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
- `src/data/identities.ts` y `src/components/IdentityCard.astro`: diez fichas de identidad visual completa dentro de Diseño. Cada ficha despliega hasta dos aplicaciones o recursos disponibles; las dos piezas de Méntrida se agrupan en el mismo proyecto.
- `src/assets/identities`: imágenes optimizadas a partir de los logos y manuales facilitados por Marcos. Los PDF originales no se publican.
- `src/data/social.ts` y `src/components/SocialFeed.astro`: cuatro perfiles dentro de Redes, con nueve imágenes estáticas por cuenta y enlaces a cada publicación de Instagram. Las portadas están optimizadas en `src/assets/social`; no se cargan vídeos, servicios de feed, contadores ni scripts de Instagram. La selección es fija y se actualiza editando los datos.
- `src/scripts/portfolio.ts`: conserva los cuatro proyectos destacados al entrar, filtra Web y Redes, y muestra las identidades al abrir Diseño. Sin JavaScript se ven ambos conjuntos y los detalles nativos siguen funcionando.
- `src/pages/index.astro`: textos de presentación y trayectoria.
- `src/styles/global.css`: identidad visual y adaptación a móvil.
- `public/projects`: recursos reales de los proyectos facilitados por Marcos.
- `src/components/CallCalendar.astro` y `src/scripts/call-calendar.ts`: calendario visual para proponer una llamada por WhatsApp. Muestra únicamente los 15 días desde mañana, en horario de España peninsular, y usa las franjas de `site.calls.weekly`. No consulta una agenda real ni confirma reservas.
- `PUBLIC_SITE_LIVE=true`: habilita la indexación en la compilación de producción. La variable está configurada solo en el entorno Production de Cloudflare Pages; sin ella, las compilaciones locales y de vista previa conservan `noindex`.

La página mantiene proyectos, detalles nativos y el contacto directo por WhatsApp sin JavaScript. JavaScript activa el calendario de propuestas, el filtro por servicio y las animaciones. En móvil abre las carpetas de la portada al bajar y las cierra al subir. Las animaciones respetan `prefers-reduced-motion` y no incluyen bucles continuos.

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

La web es estática y no necesita adaptador de servidor ni base de datos. Cloudflare la recompila al subir cambios a la rama de producción seleccionada.

`vercel.json` desactiva las publicaciones automáticas de Vercel para evitar despliegues duplicados desde la conexión anterior con GitHub. El alojamiento elegido es Cloudflare Pages.

Guía oficial: https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/.

## Estado de publicación · 24/09/2026

- GitHub conectado con Cloudflare Pages y despliegue completado en https://marca-propia.pages.dev/.
- `marcoszalazar.es` y `www.marcoszalazar.es` están conectados a Cloudflare Pages: estado Active y SSL enabled. El dominio principal sirve la versión nueva por HTTPS 200; `www` redirige a él mediante 301 y conserva ruta y parámetros. DonDominio tiene asignados `romina.ns.cloudflare.com` y `rommy.ns.cloudflare.com`.
- `PUBLIC_SITE_LIVE=true` está guardada solo en el entorno Production de Cloudflare Pages. La versión publicada devuelve `index, follow`, `robots.txt` enlaza al sitemap y la página declara el dominio principal como canónico.
- Google Search Console tiene verificada la propiedad de dominio `marcoszalazar.es` mediante un TXT en Cloudflare. El sitemap `https://marcoszalazar.es/sitemap.xml` se procesó correctamente y detectó la portada. La prueba de URL publicada indicó que la página se puede indexar; se solicitó su indexación el 24/09/2026. La aparición en Google depende del rastreo posterior.
- Reenvío gratuito de Cloudflare habilitado: `info@marcoszalazar.es` tiene una regla activa hacia el Gmail de trabajo verificado. Los registros MX y DKIM están configurados, y hay un único SPF que incluye Cloudflare y DonDominio. Falta comprobar la recepción con un mensaje real; el correo todavía no se anuncia como activo en la web.

## Pendiente para completar los servicios

1. Probar desde otra cuenta la recepción de `info@marcoszalazar.es` en el Gmail de trabajo. El reenvío no incluye el envío de mensajes desde el dominio.
2. Si se necesitan reservas confirmadas y bloqueo de huecos, conectar una agenda real siguiendo `RESERVAS.md`. El calendario actual solo prepara la propuesta para WhatsApp.
3. Si se incorpora analítica, publicidad o contenido externo incrustado, revisar las políticas legales y bloquear su carga hasta obtener el consentimiento que corresponda.

## Privacidad y documentos legales · 28/09/2026

- `/aviso-legal/`, `/politica-de-privacidad/` y `/politica-de-cookies/` son páginas independientes, enlazadas desde el pie de toda la web. No se incluyen en el sitemap ni se indexan, pero se pueden consultar públicamente sin JavaScript.
- El titular es una persona física. `LEGAL_OWNER_NAME`, `LEGAL_OWNER_NIF` y `LEGAL_OWNER_ADDRESS` se facilitan como variables privadas de compilación en Cloudflare Pages. Para trabajo local, usar `.env.local`, que está excluido de Git. No copiar los valores a este repositorio, a capturas ni a registros de compilación. La compilación se detiene si falta alguno, para evitar publicar una identificación incompleta. Los valores se muestran en el aviso legal público y no se incluyen en los scripts del navegador.
- `PrivacyNotice.astro` y `privacy.ts` informan de que no hay servicios opcionales activos. No simulan consentimiento a analítica o publicidad inexistente. El panel nativo se puede reabrir desde «Configurar cookies». Solo una acción explícita permite recordar la lectura con `mz_privacy_notice` en almacenamiento local; no se escribe nada al visitar o desplazar la página. La preferencia se aplica durante 180 días. «Continuar sin guardar» borra únicamente esa clave y mantiene las funciones de la web.
- La política de recursos en `src/data/privacy.ts` impide cargar scripts, conexiones, fuentes e imágenes de terceros o iframes. Los enlaces salientes funcionan normalmente. `public/_headers` añade protección frente a incrustación de la web en otros sitios.
- El alojamiento y la protección de Cloudflare pueden procesar información técnica de las conexiones. El correo del dominio se reenvía al buzón de trabajo en Gmail. Los contactos por WhatsApp se realizan fuera de la web; seleccionar una fecha no envía datos ni confirma una reserva.
- Comprobaciones: `npm run check`, `npm run build`, `node scripts/check-privacy.mjs` y revisión del panel y de las funciones principales en ordenador y móvil. Cada nuevo servicio requiere revisar el inventario real, la base jurídica y, cuando proceda, un consentimiento previo con aceptar, rechazar y configurar sin ventajas visuales entre las decisiones.

Fuentes primarias: [LSSI, artículos 10 y 22](https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758), [RGPD](https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807), [guía de cookies de la AEPD](https://www.aepd.es/guias/guia-cookies.pdf) y políticas de los proveedores enlazadas en la web.

## Fuentes visuales

Identidad personal: tarjetas de visita facilitadas por Marcos (Space Mono, marfil y tres azules). Recursos descargados de las webs indicadas por el autor para presentar sus propios trabajos:

- Bercianitas: `https://bercianitas.es/wp-content/uploads/2025/04/logo-mascota.svg` y `https://bercianitas.es/wp-content/uploads/2025/03/caja-1.png`.
- Urban Doce: `https://urbandoce.es/images/logo.svg` y cebra mostrada en la portada de la web.
- SRS: logotipo y foto principal mostrados en `https://srstaller.es`.
- Impulse Academy: pieza gráfica facilitada por Marcos. Enlace corregido a `https://impulse-english.es`, visible en la pieza y verificado el 23/09/2026.
- Retrato: fotografía facilitada por Marcos, conservada en `src/assets/marcos-zalazar.png`. Se sirve una versión WebP pequeña y se encuadra mediante CSS en la presentación.

El fondo de Bercianitas es blanco. La composición de Urban Doce muestra únicamente la cebra y el logotipo, sin textos superpuestos. Las imágenes originales facilitadas por Marcos se conservan en `src/assets`; Astro genera los formatos optimizados de entrega.

Las composiciones de las fichas son presentaciones de portfolio realizadas con esos recursos; no son capturas de pantalla. No se atribuyen métricas ni resultados comerciales no proporcionados por Marcos. Redes confirmadas: Urban Doce, Bercianitas e Impulse Academy.
