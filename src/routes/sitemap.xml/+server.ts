import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	const pages = [
		{ url: '/', priority: '1.0', changefreq: 'weekly' },
		{ url: '/o-firmie', priority: '0.8', changefreq: 'monthly' },
		{ url: '/uslugi', priority: '0.9', changefreq: 'monthly' },
		{ url: '/realizacje', priority: '0.8', changefreq: 'weekly' },
		{ url: '/kontakt', priority: '0.7', changefreq: 'monthly' },
	];

	const baseUrl = 'https://www.pianapur.com';
	const today = new Date().toISOString().split('T')[0];

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(({ url, priority, changefreq }) => `  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join('\n')}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};
