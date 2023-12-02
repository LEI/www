import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';

import { config } from './config';

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [
    GitHub({
      clientId: config.githubClientKey,
      clientSecret: config.githubClientSecret,
    }),
  ],
  pages: {
    signIn: '/sign-in',
  },
});
