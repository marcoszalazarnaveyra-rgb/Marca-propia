import type { APIRoute } from 'astro';
import { site } from '../data/site';
export const GET: APIRoute = () => new Response(site.live
  ? 'User-agent: *\nAllow: /\nSitemap: https://marcoszalazar.es/sitemap.xml\n'
  : 'User-agent: *\nDisallow: /\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
