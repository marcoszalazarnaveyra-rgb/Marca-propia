import type { ImageMetadata } from 'astro';
import bercianitasLogo from '../assets/identities/bercianitas-logo.webp';
import bercianitasPackaging from '../../public/projects/bercianitas-caja.png';
import rinconcitoLogo from '../assets/identities/rinconcito-logo.webp';
import rinconcitoResources from '../assets/identities/rinconcito-recursos.webp';
import rinconcitoVersion from '../assets/identities/rinconcito-version.webp';
import urbanLogo from '../assets/identities/urban-logo.webp';
import urbanCards from '../assets/identities/urban-tarjetas.webp';
import urbanSign from '../assets/identities/urban-rotulo.webp';
import efLogo from '../assets/identities/ef-data-logo.webp';
import efDigital from '../assets/identities/ef-data-digital.webp';
import efResources from '../assets/identities/ef-data-recursos.webp';
import impulseLogo from '../assets/identities/impulse-logo.webp';
import impulseArtwork from '../assets/impulse-academy.png';
import asgemeLogo from '../assets/identities/asgeme-logo.webp';
import asgemeVersions from '../assets/identities/asgeme-versiones.webp';
import mentridaLogo from '../assets/identities/mentrida-logo.webp';
import mentridaSocial from '../assets/identities/mentrida-redes.webp';
import srsLogo from '../assets/identities/srs-logo.webp';
import penafielLogo from '../assets/identities/penafiel-logo.webp';
import orchestoriumLogo from '../assets/identities/orchestorium-logo.webp';
import orchestoriumVersion from '../assets/identities/orchestorium-version.webp';

export interface Identity {
  id: string;
  name: string;
  description: string;
  detail: string;
  logo: ImageMetadata;
  background: string;
  applications: { image: ImageMetadata; alt: string; caption: string; background?: string }[];
  colors?: { value: string; name: string }[];
  url?: string;
}

export const identities: Identity[] = [
  {
    id: 'bercianitas', name: 'Bercianitas', logo: bercianitasLogo, background: '#ffffff',
    description: 'Logotipo, mascota y packaging para una marca de rosquillas artesanas.',
    detail: 'Desarrollé la identidad visual completa de Bercianitas, desde el logotipo y su mascota hasta la aplicación en los envases y la comunicación de la marca.',
    applications: [{ image: bercianitasPackaging, alt: 'Envase rojo de Bercianitas con el logotipo y la mascota', caption: 'Aplicación en packaging', background: '#ffffff' }],
  },
  {
    id: 'rinconcito', name: 'Rinconcito Street Food', logo: rinconcitoLogo, background: '#010e04',
    description: 'Una identidad que combina lettering, vegetación y color.',
    detail: 'Creé la identidad visual completa de Rinconcito Street Food. El lettering y los recursos vegetales forman un sistema que también funciona en una versión más sencilla del logotipo.',
    applications: [
      { image: rinconcitoResources, alt: 'Composición de Rinconcito con lettering blanco y recursos vegetales', caption: 'Composición con recursos de marca', background: '#010e04' },
      { image: rinconcitoVersion, alt: 'Versión monocromática del logotipo de Rinconcito Street Food', caption: 'Versión monocromática', background: '#ffffff' },
    ],
  },
  {
    id: 'urban', name: 'Urban Doce', logo: urbanLogo, background: '#ffffff',
    description: 'Identidad visual para un café-bar, con aplicaciones impresas y rotulación.',
    detail: 'Desarrollé la identidad visual completa de Urban Doce. Estas piezas muestran cómo se aplica el logotipo en tarjetas y en la presentación de un rótulo.',
    applications: [
      { image: urbanCards, alt: 'Presentación de tarjetas de Urban Doce con su identidad visual', caption: 'Aplicación en tarjetas', background: '#ddddde' },
      { image: urbanSign, alt: 'Presentación de un rótulo circular de Urban Doce', caption: 'Presentación de la rotulación', background: '#0c0b09' },
    ],
  },
  {
    id: 'ef-data', name: 'EF Data Solutions', logo: efLogo, background: '#010423',
    description: 'Logotipo y recursos gráficos con formas orgánicas y tonos azules.',
    detail: 'Creé la identidad visual completa de EF Data Solutions. Las formas del símbolo se utilizan también como recursos gráficos y acompañan las aplicaciones digitales de la marca.',
    applications: [
      { image: efDigital, alt: 'Presentación de la identidad de EF Data Solutions en soportes digitales', caption: 'Aplicación digital', background: '#f0f0e7' },
      { image: efResources, alt: 'Recursos gráficos azules del sistema visual de EF Data Solutions', caption: 'Recursos del sistema visual', background: '#ffffff' },
    ],
  },
  {
    id: 'impulse', name: 'Impulse English Academy', logo: impulseLogo, background: '#ffffff',
    description: 'Una identidad en azul y coral para una academia de inglés.',
    detail: 'Desarrollé la identidad visual completa de Impulse English Academy y su aplicación en piezas de comunicación, además de la web y el contenido para redes.',
    applications: [{ image: impulseArtwork, alt: 'Pieza de comunicación de Impulse English Academy en azul y coral', caption: 'Pieza de comunicación', background: '#ffffff' }],
  },
  {
    id: 'asgeme', name: 'ASGEME', logo: asgemeLogo, background: '#f4efe7',
    description: 'Símbolo, logotipo y sistema visual para una gestoría de tráfico.',
    detail: 'Creé la identidad visual completa de ASGEME, incluyendo el símbolo, el logotipo y sus versiones para distintos fondos y formatos.',
    applications: [{ image: asgemeVersions, alt: 'Versiones de color, monocromática, invertida y compacta de ASGEME', caption: 'Versiones de la identidad', background: '#f4efe7' }],
  },
  {
    id: 'mentrida', name: 'Deportes Méntrida', logo: mentridaLogo, background: '#ffffff',
    description: 'Identidad para la Escuela Deportiva y la comunicación de Deportes Méntrida.',
    detail: 'Desarrollé la identidad visual completa del proyecto deportivo de Méntrida. El escudo de la Escuela Deportiva y las piezas de Deportes Méntrida forman parte del mismo trabajo.',
    applications: [{ image: mentridaSocial, alt: 'Pieza gráfica verde de Deportes Méntrida para redes sociales', caption: 'Aplicación en redes sociales', background: '#a7d6af' }],
  },
  {
    id: 'srs', name: 'SRS Taller', logo: srsLogo, background: '#000000',
    description: 'Identidad en rojo, blanco y negro para un taller de chapa y pintura.',
    detail: 'Creé la identidad visual completa de SRS Taller y desarrollé su página web. El símbolo y el logotipo utilizan el rojo, el blanco y el negro como base visual.',
    applications: [],
    colors: [{ value: '#ff0000', name: 'Rojo' }, { value: '#ffffff', name: 'Blanco' }, { value: '#000000', name: 'Negro' }],
    url: 'https://srstaller.es',
  },
  {
    id: 'penafiel', name: 'El Rincón de Peñafiel', logo: penafielLogo, background: '#8e0e27',
    description: 'Una identidad tipográfica presentada en blanco sobre burdeos.',
    detail: 'Desarrollé la identidad visual completa de El Rincón de Peñafiel. El logotipo combina una tipografía de serifas con una composición en dos líneas.',
    applications: [],
    colors: [{ value: '#8e0e27', name: 'Burdeos' }, { value: '#ffffff', name: 'Blanco' }],
  },
  {
    id: 'orchestorium', name: 'Orchestorium', logo: orchestoriumLogo, background: '#ffffff',
    description: 'Identidad para Benjamín Moreno, con una trompeta como elemento gráfico.',
    detail: 'Creé la identidad visual completa de Orchestorium. La tipografía y el dibujo de la trompeta se adaptan a versiones sobre fondo claro y oscuro.',
    applications: [{ image: orchestoriumVersion, alt: 'Versión de Orchestorium con lettering blanco y trompeta dorada sobre azul oscuro', caption: 'Versión sobre fondo oscuro', background: '#182945' }],
  },
];
