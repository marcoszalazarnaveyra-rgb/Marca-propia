# Revisión de la primera versión · 23/09/2026

- `npm run check`: 0 errores, 0 advertencias, 0 sugerencias.
- `npm run build`: salida estática generada.
- Navegador: imágenes locales cargadas, consola sin errores ni advertencias.
- Sin desbordamiento horizontal en 320, 390, 768 y 1280 píxeles de ancho.
- Filtro web: 4 proyectos. Diseño: 4. Redes: Bercianitas, Urban Doce e Impulse Academy. Ver todos restablece los 4.
- Detalle de Bercianitas abierto y cerrado mediante teclado. Filtro web activado con Enter.
- Enlaces de contacto dirigidos a +34 614 621 568; mensajes predefinidos codificados correctamente. No se enviaron mensajes.
- Los enlaces de los cuatro proyectos apuntan a sus webs. El de Impulse Academy se corrigió a `https://impulse-english.es`, verificado a partir de la dirección de la pieza proporcionada.
- Agenda sin configurar: se ofrece acordar una llamada por WhatsApp, sin mostrar reservas ficticias.
- Previsualización no indexable; imágenes y fuentes servidas localmente.
- Animación de entrada de las tres carpetas: 650 ms, escalonada y sin repetición continua. Apertura al pasar el cursor comprobada en escritorio; transición de 200 ms.
- Entradas de proyectos activadas al aparecer en pantalla. El filtro de redes sigue mostrando exactamente los tres proyectos correspondientes.
- Todas las animaciones y transiciones añadidas están condicionadas a `prefers-reduced-motion: no-preference`; el contenido no depende de ellas para ser visible.
- Horarios confirmados por Marcos y visibles en contacto: llamadas de 30 minutos, lunes a viernes 09:00–13:00 y martes/jueves 16:00–19:00, Europe/Madrid.

El dominio marcoszalazar.es ya está comprado en DonDominio. El alojamiento elegido es Cloudflare Pages y el correo se configurará mediante Email Routing hacia el Gmail de trabajo de Marcos.

## Publicación y correo · 24/09/2026

- Despliegue de Cloudflare Pages completado: https://marca-propia.pages.dev/ devuelve HTTP 200. Se han comprobado el contenido y la carga de todas las imágenes en el navegador.
- `robots.txt` y la etiqueta robots siguen bloqueando la indexación de esta publicación provisional.
- Servidores DNS guardados en DonDominio y comprobados en el registro autoritativo `.es`: `romina.ns.cloudflare.com` y `rommy.ns.cloudflare.com`. La activación de la zona en Cloudflare sigue pendiente.
- Gmail de destino añadido a Email Routing y marcado como Verified. No ha sido necesario pedir otra verificación al usuario.
- El alta de Email Routing muestra «This zone is not active». La regla para `info@marcoszalazar.es`, sus registros de correo y la prueba de recepción siguen pendientes; no se presenta el correo como activo.

Pendiente: conexión del dominio y comprobación de HTTPS, activación y recepción real del correo reenviado, datos del titular para publicación, agenda real y avisos en el móvil. Las pruebas de reserva y notificaciones requieren el calendario conectado.
