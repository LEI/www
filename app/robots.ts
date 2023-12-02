import { config } from 'app/config';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: `${config.baseUrl}/sitemap.xml`,
    host: config.baseUrl,
  };
}
