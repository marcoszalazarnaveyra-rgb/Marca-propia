import portrait from '../assets/marcos-zalazar.png';

const booking = import.meta.env.PUBLIC_BOOKING_URL?.trim() ?? '';
if (booking && new URL(booking).protocol !== 'https:') {
  throw new Error('PUBLIC_BOOKING_URL debe ser una dirección HTTPS real.');
}

export const site = {
  name: 'Marcos Zalazar',
  domain: 'marcoszalazar.es',
  phone: '34614621568',
  phoneDisplay: '+34 614 621 568',
  bookingUrl: booking,
  calls: {
    durationMinutes: 30,
    timezone: 'Europe/Madrid',
    timezoneLabel: 'Hora de España peninsular',
    weekly: [
      { label: 'Lunes a viernes', days: [1, 2, 3, 4, 5], start: '09:00', end: '13:00' },
      { label: 'Martes y jueves', days: [2, 4], start: '16:00', end: '19:00' },
    ],
  },
  portrait,
  live: import.meta.env.PUBLIC_SITE_LIVE === 'true',
};

export function whatsapp(message = 'Hola Marcos, he visto tu web y me gustaría hablar contigo sobre un proyecto.') {
  return `https://wa.me/${site.phone}?text=${encodeURIComponent(message)}`;
}

export const services = [
  {
    id: 'web', name: 'web', number: '01', color: 'light',
    line: 'Tu negocio, bien conectado.',
    description: 'Webs pensadas para las personas que las usan. Diseño, experiencia de usuario y desarrollo para que tu negocio tenga su propio espacio digital.',
    tags: ['Diseño UX/UI', 'Desarrollo web', 'Integraciones y automatización'],
  },
  {
    id: 'redes', name: 'redes', number: '02', color: 'dark',
    line: 'Una marca que tiene algo que contar.',
    description: 'Una presencia en redes que se reconoce y se mantiene en el tiempo. Contenido, diseño y gestión con una misma dirección visual.',
    tags: ['Contenido', 'Diseño para redes', 'Gestión de redes sociales'],
  },
  {
    id: 'diseno', name: 'diseño', number: '03', color: 'blue',
    line: 'Una identidad que se siente tuya.',
    description: 'Del primer logotipo a todas sus aplicaciones. Diseño identidades visuales que cuentan quién eres y dan coherencia a cada punto de contacto.',
    tags: ['Identidad visual', 'Diseño gráfico', 'Aplicaciones de marca'],
  },
];

export const projects = [
  {
    id: 'bercianitas', name: 'Bercianitas', sector: 'Alimentación · Méntrida',
    services: ['web', 'redes', 'diseno'],
    description: 'El sabor de siempre, con una identidad propia.',
    detail: 'Identidad visual, página web y redes sociales para Bercianitas, una marca de rosquillas artesanas de Méntrida. Un proyecto en el que también he trabajado como director de marketing.',
    url: 'https://bercianitas.es', visual: true,
  },
  {
    id: 'urban', name: 'Urban Doce', sector: 'Hostelería · Madrid',
    services: ['web', 'redes', 'diseno'],
    description: 'Un café-bar de barrio con mucho carácter.',
    detail: 'Identidad visual, web y gestión de redes sociales para Urban Doce. Una marca con personalidad que conecta la experiencia del local con su presencia digital.',
    url: 'https://urbandoce.es', visual: true,
  },
  {
    id: 'srs', name: 'SRS Taller', sector: 'Automoción · Ventas de Retamosa',
    services: ['web', 'diseno'],
    description: 'Una nueva imagen, dentro y fuera del taller.',
    detail: 'Identidad visual y página web para un taller especializado en chapa y pintura. Un espacio para presentar sus servicios, enseñar sus trabajos y facilitar el contacto.',
    url: 'https://srstaller.es', visual: true,
  },
  {
    id: 'impulse', name: 'Impulse Academy', sector: 'Formación · Madrid',
    services: ['web', 'redes', 'diseno'],
    description: 'De la identidad a su presencia digital.',
    detail: 'Desarrollo de la identidad visual, página web y trabajo en redes sociales para Impulse Academy.',
    url: 'https://impulse-english.es', visual: true,
  },
];
