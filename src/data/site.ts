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
    line: 'Diseño y desarrollo web',
    description: 'Diseño páginas web adaptadas a cada negocio, desde la estructura y la experiencia de uso hasta el desarrollo y las integraciones necesarias.',
    tags: ['Diseño UX/UI', 'Desarrollo web', 'Integraciones y automatización'],
  },
  {
    id: 'redes', name: 'redes', number: '02', color: 'dark',
    line: 'Contenido y gestión de redes',
    description: 'Trabajo la planificación, el contenido y el diseño para que la comunicación en redes mantenga una dirección clara y reconocible.',
    tags: ['Contenido', 'Diseño para redes', 'Gestión de redes sociales'],
  },
  {
    id: 'diseno', name: 'diseño', number: '03', color: 'blue',
    line: 'Identidad visual y diseño gráfico',
    description: 'Creo sistemas visuales que pueden aplicarse con coherencia al logotipo, las piezas impresas, el entorno digital y otros puntos de contacto.',
    tags: ['Identidad visual', 'Diseño gráfico', 'Aplicaciones de marca'],
  },
];

export const projects = [
  {
    id: 'bercianitas', name: 'Bercianitas', sector: 'Alimentación · Méntrida',
    services: ['web', 'redes', 'diseno'],
    description: 'Identidad visual, web y comunicación para una marca de rosquillas artesanas.',
    detail: 'Identidad visual, página web y redes sociales para Bercianitas, una marca de rosquillas artesanas de Méntrida. Un proyecto en el que también he trabajado como director de marketing.',
    url: 'https://bercianitas.es', visual: true,
  },
  {
    id: 'urban', name: 'Urban Doce', sector: 'Hostelería · Madrid',
    services: ['web', 'redes', 'diseno'],
    description: 'Identidad, web y redes sociales para un café-bar de Madrid.',
    detail: 'Identidad visual, web y gestión de redes sociales para Urban Doce. Una marca con personalidad que conecta la experiencia del local con su presencia digital.',
    url: 'https://urbandoce.es', visual: true,
  },
  {
    id: 'srs', name: 'SRS Taller', sector: 'Automoción · Ventas de Retamosa',
    services: ['web', 'diseno'],
    description: 'Nueva identidad visual y página web para un taller de chapa y pintura.',
    detail: 'Identidad visual y página web para un taller especializado en chapa y pintura. Un espacio para presentar sus servicios, enseñar sus trabajos y facilitar el contacto.',
    url: 'https://srstaller.es', visual: true,
  },
  {
    id: 'impulse', name: 'Impulse Academy', sector: 'Formación · Madrid',
    services: ['web', 'redes', 'diseno'],
    description: 'Identidad visual, página web y contenido para redes sociales.',
    detail: 'Desarrollo de la identidad visual, página web y trabajo en redes sociales para Impulse Academy.',
    url: 'https://impulse-english.es', visual: true,
  },
];
