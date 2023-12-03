/**
 * Global configuration.
 */
export class Config {
  /**
   * Default protocol if BASE_URL is unspecified.
   */
  protocol = process.env.HOST || 'http'

  /**
   * Internal host name or IP address.
   */
  host = process.env.HOST || 'localhost'

  /**
   * Internal port number.
   */
  port = process.env.PORT || '3000'

  /**
   * Application external URL.
   */
  get baseUrl() {
    const baseUrl = process.env.BASE_URL;
    if (baseUrl) {
      return baseUrl;
    }

    return `${this.protocol}://${this.host}:${this.port}`;
  }

  /**
   * Website title.
   */
  title = process.env.TITLE || 'Welcome';

  /**
   * Meta description.
   */
  description = process.env.DESCRIPTION;

  /**
   * Standard resume URL.
   */
  resumeUrl = process.env.RESUME_URL;


  /**
   * Address to send guestbook from.
   */
  guestbookFromEmail = process.env.GUESTBOOK_FROM_EMAIL;

  /**
   * Address to send guestbook to.
   */
  guestbookToEmail = process.env.GUESTBOOK_TO_EMAIL;

  /**
   * GitHub OAuth client key.
   */
  githubClientKey = process.env.OAUTH_CLIENT_KEY;

  /**
   * GitHub OAuth client secret.
   */
  githubClientSecret = process.env.OAUTH_CLIENT_SECRET;

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
