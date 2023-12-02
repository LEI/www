/**
 * Global configuration.
 */
export class Config {
    /**
     * External domain name.
     */
    domain = process.env.DOMAIN || 'localhost'

    /**
     * Website title.
    /**
     * Application base URL.
     */
    baseUrl = process.env.BASE_URL || 'http://localhost:3000'

    /**
     * Website title.
     */
    title = process.env.TITLE || 'Title';

    /**
     * Main description.
     */
    description = process.env.DESCRIPTION || '';

    /**
     * GitHub OAuth client key.
     */
    githubClientKey = process.env.OAUTH_CLIENT_KEY || '';

    /**
     * GitHub OAuth client secret.
     */
    githubClientSecret = process.env.OAUTH_CLIENT_SECRET || '';

    /**
     * Resend secret.
     */
    resendSecret = process.env.RESEND_SECRET;

    /**
     * Google client email.
     */
    googleClientEmail = process.env.GOOGLE_CLIENT_EMAIL;

    /**
     * Google private key.
     */
    googlePrivateKey = process.env.GOOGLE_PRIVATE_KEY;
    
    /**
     * Google verification.
     */
    google?: string;

    /**
     * Yandex verification.
     */
    yandex?: string;
}

export const config = new Config();