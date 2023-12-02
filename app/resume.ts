/**
 * Standard resume.
 */
export class Resume {
  /**
   * External domain name.
   */
  domain = process.env.DOMAIN || 'localhost'
}

export const resume = new Resume();
