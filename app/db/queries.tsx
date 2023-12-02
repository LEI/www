'use server';

import { auth, youtube } from '@googleapis/youtube';
import { sql } from '@vercel/postgres';
import { config } from 'app/config';
import {
  unstable_cache as cache,
  unstable_noStore as noStore,
} from 'next/cache';

let googleAuth = new auth.GoogleAuth({
  credentials: {
    client_email: config.googleClientEmail,
    private_key: config.googlePrivateKey,
  },
  scopes: ['https://www.googleapis.com/auth/youtube.readonly'],
});

let yt = youtube({
  version: 'v3',
  auth: googleAuth,
});

export async function getBlogViews() {
  noStore();
  let data = await sql`
    SELECT count
    FROM views
  `;

  return data.rows.reduce((acc, curr) => acc + Number(curr.count), 0);
}

export async function getViewsCount() {
  noStore();
  let data = await sql`
    SELECT slug, count
    FROM views
  `;

  return data.rows as { slug: string; count: number }[];
}

export const getVercelYouTubeSubs = cache(
  async () => {
    let response = await yt.channels.list({
      id: ['UCLq8gNoee7oXM7MvTdjyQvA'],
      part: ['statistics'],
    });

    let channel = response.data.items![0];
    return Number(channel?.statistics?.subscriberCount).toLocaleString();
  },
  ['vercel-youtube-subs'],
  {
    revalidate: 3600,
  }
);

export async function getGuestbookEntries() {
  noStore();
  let entries = await sql`
    SELECT id, body, created_by, updated_at
    FROM guestbook
    ORDER BY created_at DESC
    LIMIT 100
  `;
  return entries.rows;
}
