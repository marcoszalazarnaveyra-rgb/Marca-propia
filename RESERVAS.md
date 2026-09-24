# Activar la agenda

Estado: pendiente de conectar un calendario real. Por ahora todas las solicitudes llegan al WhatsApp profesional de la tarjeta, +34 614 621 568. No se ha creado ninguna cuenta ni reserva de prueba.

## Configuración propuesta

Confirmado por Marcos: llamadas de 30 minutos, de lunes a viernes de 09:00 a 13:00 y martes y jueves también de 16:00 a 19:00, en horario de España peninsular (`Europe/Madrid`, con ajuste estacional). Estas franjas se muestran en la web y se guardan en `site.calls.weekly`; los días se numeran de 1 (lunes) a 7 (domingo). No equivalen a huecos reservados: falta conectar el calendario real.

Cal.com dispone de un plan individual gratuito con conexión de calendarios y notificaciones según https://cal.com/pricing (consultado el 23/09/2026). Las condiciones finales deben comprobarse al crear la cuenta.

1. Elegir la cuenta de calendario que se utilizará en el móvil de trabajo. Puede ser una cuenta de Google Calendar si ya se utiliza Google.
2. Crear la cuenta de Cal.com y conectar ese calendario para consultar ocupación y añadir eventos.
3. Crear el evento «Hablemos de tu proyecto» de 30 minutos, con las franjas confirmadas arriba y zona `Europe/Madrid`. Propuesta adicional pendiente: 15 minutos de margen y 24 horas de antelación mínima.
4. Usar llamada telefónica si Marcos lo prefiere e incluir un campo obligatorio de teléfono del visitante, además del nombre y correo necesarios para la confirmación.
5. Activar los avisos por correo de nuevas reservas y las notificaciones de la aplicación de calendario en el móvil de trabajo.
6. Copiar la URL pública del evento a `PUBLIC_BOOKING_URL` en el alojamiento y recompilar. La web cambiará automáticamente «Acordar una llamada · 30 min» por «Reservar una llamada · 30 min».
7. Hacer una reserva real de prueba con Marcos: comprobar que aparece en su calendario, llega el aviso al móvil, desaparece ese hueco de la disponibilidad y funcionan cancelación y cambio de hora. Cancelar después esa reserva.

No publicar una agenda que solo muestre horas visualmente: las reservas deben consultar disponibilidad real y generar una notificación comprobada. El enlace externo mantiene la landing sencilla, sin cargar scripts del proveedor hasta que el visitante decide abrirlo.
