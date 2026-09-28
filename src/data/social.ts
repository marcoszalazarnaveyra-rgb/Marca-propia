import type { ImageMetadata } from 'astro';
import bercianitasAvatar from '../assets/social/bercianitas-avatar.webp';
import bercianitasPost9 from '../assets/social/bercianitas-9.webp';
import bercianitasPost6 from '../assets/social/bercianitas-6.webp';
import bercianitasPost1 from '../assets/social/bercianitas-1.webp';
import bercianitasPost4 from '../assets/social/bercianitas-4.webp';
import bercianitasPost8 from '../assets/social/bercianitas-8.webp';
import bercianitasPost2 from '../assets/social/bercianitas-2.webp';
import bercianitasPost5 from '../assets/social/bercianitas-5.webp';
import bercianitasPost7 from '../assets/social/bercianitas-7.webp';
import bercianitasPost3 from '../assets/social/bercianitas-3.webp';
import sevenAvatar from '../assets/social/seven-avatar.webp';
import sevenPost8 from '../assets/social/seven-8.webp';
import sevenPost3 from '../assets/social/seven-3.webp';
import sevenPost9 from '../assets/social/seven-9.webp';
import sevenPost4 from '../assets/social/seven-4.webp';
import sevenPost1 from '../assets/social/seven-1.webp';
import sevenPost5 from '../assets/social/seven-5.webp';
import sevenPost7 from '../assets/social/seven-7.webp';
import sevenPost11 from '../assets/social/seven-11.webp';
import sevenPost12 from '../assets/social/seven-12.webp';
import realistaAvatar from '../assets/social/realista-avatar.webp';
import realistaPost1 from '../assets/social/realista-1.webp';
import realistaPost2 from '../assets/social/realista-2.webp';
import realistaPost6 from '../assets/social/realista-6.webp';
import realistaPost4 from '../assets/social/realista-4.webp';
import realistaPost5 from '../assets/social/realista-5.webp';
import realistaPost3 from '../assets/social/realista-3.webp';
import realistaPost7 from '../assets/social/realista-7.webp';
import realistaPost9 from '../assets/social/realista-9.webp';
import realistaPost11 from '../assets/social/realista-11.webp';
import repsolAvatar from '../assets/social/repsol-avatar.webp';
import repsolPost3 from '../assets/social/repsol-3.webp';
import repsolPost2 from '../assets/social/repsol-2.webp';
import repsolPost8 from '../assets/social/repsol-8.webp';
import repsolPost6 from '../assets/social/repsol-6.webp';
import repsolPost4 from '../assets/social/repsol-4.webp';
import repsolPost5 from '../assets/social/repsol-5.webp';
import repsolPost9 from '../assets/social/repsol-9.webp';
import repsolPost1 from '../assets/social/repsol-1.webp';
import repsolPost10 from '../assets/social/repsol-10.webp';

export interface SocialProfile {
  id: string;
  name: string;
  handle: string;
  profileUrl: string;
  platform: 'Instagram' | 'TikTok';
  description: string;
  avatar: ImageMetadata;
  posts: { image: ImageMetadata; alt: string; url: string; isVideoCover?: boolean; fit?: 'cover' | 'contain' }[];
}

export const socialProfiles: SocialProfile[] = [
  {
    id: 'bercianitas', name: "Bercianitas", handle: '@bercianitas',
    profileUrl: 'https://www.instagram.com/bercianitas/', platform: 'Instagram', avatar: bercianitasAvatar,
    description: "Producto, marca y día a día de Bercianitas en redes.",
    posts: [
      { image: bercianitasPost9, alt: "Detalle de la mascota de Bercianitas en su food truck", url: "https://www.instagram.com/bercianitas/p/DUDayHOiJgW/" },
      { image: bercianitasPost6, alt: "Food truck de Bercianitas con su identidad en rojo y azul", url: "https://www.instagram.com/bercianitas/reel/DWiyjK-CG7j/", isVideoCover: true },
      { image: bercianitasPost1, alt: "Portada de Bercianitas con una composición de Méntrida en azul y naranja", url: "https://www.instagram.com/bercianitas/reel/DFNmGyyt-E9/", isVideoCover: true },
      { image: bercianitasPost4, alt: "Detalle de una rosquilla de Bercianitas", url: "https://www.instagram.com/bercianitas/reel/DY6vJ9lospb/", isVideoCover: true },
      { image: bercianitasPost8, alt: "Portada de un reel de Bercianitas sobre ingredientes en el obrador", url: "https://www.instagram.com/bercianitas/reel/DVN-0CVEblN/", isVideoCover: true },
      { image: bercianitasPost2, alt: "Portada de un reel de Bercianitas con un helado de mango", url: "https://www.instagram.com/bercianitas/reel/DaieNOtIVmD/", isVideoCover: true },
      { image: bercianitasPost5, alt: "Food truck de Bercianitas durante una celebración", url: "https://www.instagram.com/bercianitas/reel/DXmoykrCDxO/", isVideoCover: true },
      { image: bercianitasPost7, alt: "Portada de un reel con el equipo de Bercianitas en el obrador", url: "https://www.instagram.com/bercianitas/reel/DVt3oJZACqi/", isVideoCover: true },
      { image: bercianitasPost3, alt: "Portada de un reel de Bercianitas probando el producto", url: "https://www.instagram.com/bercianitas/reel/DZftUE6EZMV/", isVideoCover: true },
    ],
  },
  {
    id: 'seven', name: "Seven Properties", handle: '@sevenproperties',
    profileUrl: 'https://www.instagram.com/sevenproperties/', platform: 'Instagram', avatar: sevenAvatar,
    description: "Viviendas, equipo y contenido de la agencia inmobiliaria.",
    posts: [
      { image: sevenPost8, alt: "Diseño de Seven Properties sobre la presentación de una vivienda", url: "https://www.instagram.com/sevenproperties/p/DcxwexDj_x4/", fit: 'contain' },
      { image: sevenPost3, alt: "Publicación de Seven Properties con un chalet y una piscina", url: "https://www.instagram.com/sevenproperties/p/DdTkdcrFpSK/", fit: 'contain' },
      { image: sevenPost9, alt: "Diseño de Seven Properties sobre la venta de viviendas", url: "https://www.instagram.com/sevenproperties/p/DceRnFEgF6-/", fit: 'contain' },
      { image: sevenPost4, alt: "Publicación de Seven Properties con una zona comunitaria y piscina", url: "https://www.instagram.com/sevenproperties/p/DdErWZCluWM/", fit: 'contain' },
      { image: sevenPost1, alt: "Portada de un reel de Seven Properties con el logotipo sobre una oficina", url: "https://www.instagram.com/sevenproperties/reel/C7hW9rpp1kR/", isVideoCover: true },
      { image: sevenPost5, alt: "Publicación de Seven Properties con un chalet y patio", url: "https://www.instagram.com/sevenproperties/p/DdEq2J9FuXg/", fit: 'contain' },
      { image: sevenPost7, alt: "Publicación de Seven Properties con el interior de una vivienda", url: "https://www.instagram.com/sevenproperties/p/Dc0S8fmHLlX/", fit: 'contain' },
      { image: sevenPost11, alt: "Portada de un reel del equipo de Seven Properties frente a la oficina", url: "https://www.instagram.com/sevenproperties/reel/DcRJJv1CEGT/", isVideoCover: true },
      { image: sevenPost12, alt: "Portada de un reel de Seven Properties en su oficina", url: "https://www.instagram.com/sevenproperties/reel/Db7xzeNAWN9/", isVideoCover: true },
    ],
  },
  {
    id: 'realista', name: "Realista Hipotecas", handle: '@realistahipotecas',
    profileUrl: 'https://www.instagram.com/realistahipotecas/', platform: 'Instagram', avatar: realistaAvatar,
    description: "Contenido sobre hipotecas, con publicaciones y portadas de reels.",
    posts: [
      { image: realistaPost1, alt: "Portada ilustrada de Realista sobre la compra de una vivienda", url: "https://www.instagram.com/realistahipotecas/reel/Dazhj0UM0Rn/", isVideoCover: true },
      { image: realistaPost2, alt: "Portada de Realista con una entrevista sobre fondo coral", url: "https://www.instagram.com/realistahipotecas/reel/DZ9TMhxsuf6/", isVideoCover: true },
      { image: realistaPost6, alt: "Portada de un reel de Realista con un asesor sobre fondo azul", url: "https://www.instagram.com/realistahipotecas/reel/DY1WFTqMbTz/", isVideoCover: true },
      { image: realistaPost4, alt: "Portada de un reel de Realista sobre hipotecas verdes", url: "https://www.instagram.com/realistahipotecas/reel/DZZP92DMwa7/", isVideoCover: true },
      { image: realistaPost5, alt: "Portada ilustrada de Realista sobre fondo coral", url: "https://www.instagram.com/realistahipotecas/reel/DZCLiBUMTrE/", isVideoCover: true },
      { image: realistaPost3, alt: "Portada de Realista con una ilustración sobre dudas hipotecarias", url: "https://www.instagram.com/realistahipotecas/reel/DZrRmadMhJc/", isVideoCover: true },
      { image: realistaPost7, alt: "Portada de un reel de Realista sobre reseñas", url: "https://www.instagram.com/realistahipotecas/reel/DYlwHF3R4US/", isVideoCover: true },
      { image: realistaPost9, alt: "Portada de un reel de Realista con una entrevista sobre la nota simple", url: "https://www.instagram.com/realistahipotecas/reel/DYTuhLeR9hP/", isVideoCover: true },
      { image: realistaPost11, alt: "Portada de un reel de Realista sobre la hipoteca mixta", url: "https://www.instagram.com/realistahipotecas/reel/DYERzyJRPlO/", isVideoCover: true },
    ],
  },
  {
    id: 'repsol', name: "Repsol Méntrida", handle: '@repsolmentrida',
    profileUrl: 'https://www.instagram.com/repsolmentrida/', platform: 'Instagram', avatar: repsolAvatar,
    description: "Publicaciones de la estación de servicio y de Rinconcito Street Food.",
    posts: [
      { image: repsolPost3, alt: "Diseño de Rinconcito Street Food con platos para compartir", url: "https://www.instagram.com/repsolmentrida/p/DdDyF3FGqtu/" },
      { image: repsolPost2, alt: "Publicación de Repsol Méntrida sobre el lavado de coches Klin", url: "https://www.instagram.com/repsolmentrida/p/DdbBInMjtsY/" },
      { image: repsolPost8, alt: "Pieza de comunicación de Repsol con los colores de Waylet", url: "https://www.instagram.com/repsolmentrida/p/DbaeYggAZy6/" },
      { image: repsolPost6, alt: "Composición de Rinconcito Street Food con fotografías del local y comida", url: "https://www.instagram.com/repsolmentrida/p/DcRGaxzAGJa/" },
      { image: repsolPost4, alt: "Portada de un reel de Repsol Méntrida en la estación de servicio", url: "https://www.instagram.com/repsolmentrida/reel/Dc1R6CdCvDB/", isVideoCover: true },
      { image: repsolPost5, alt: "Diseño de Repsol con pasos numerados y recursos de Waylet", url: "https://www.instagram.com/repsolmentrida/p/Dcfu75fjHxY/" },
      { image: repsolPost9, alt: "Diseño de Rinconcito Street Food con bocadillos y tortillas", url: "https://www.instagram.com/repsolmentrida/p/DbInXJ_ASan/" },
      { image: repsolPost1, alt: "Publicación de Repsol con una composición sobre aparcamiento y Waylet", url: "https://www.instagram.com/repsolmentrida/p/Ddqrs4BEWSu/" },
      { image: repsolPost10, alt: "Publicación de Repsol sobre la tarjeta Waylet", url: "https://www.instagram.com/repsolmentrida/p/Da2KZzIAYeA/" },
    ],
  },
];
