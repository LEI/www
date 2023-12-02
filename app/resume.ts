import { promises as fs } from 'fs';
// https://github.com/jsonresume/resume-schema/issues/327
import { ResumeSchema } from '@kurone-kito/jsonresume-types';
import { config } from './config';
import 'server-only';

/**
 * Extended JSON resume schema.
 *
 * @see https://gitconnected.com/portfolio-api
 */
export type CustomResumeSchema = ResumeSchema & {
  basics?: {
    headline?: string;
    locationAsString?: string;
  };
};

/**
 * Get, store and parse a JSON resume.
 *
 * @see https://jsonresume.org/schema/
 */
export class Resume {
  /**
   * Cached resume schema data.
   */
  schema: CustomResumeSchema;

  /**
   * Local file path to store the fetched data.
   *
   * TODO: add to a git ignored path (under content?)
   */
  localFile = 'resume.json'

  /**
   * Fetch JSON resume from the given URL.
   */
  async fetch(url: string): Promise<CustomResumeSchema> {
    console.debug('Fetching resume schema URL', url);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch resume');
    }
    return response.json();
  }

  async write(schema: CustomResumeSchema): Promise<void> {
    console.debug('Writing resume schema file:', this.localFile);
    await fs.writeFile(this.localFile, JSON.stringify(schema), 'utf8');
    this.schema = schema;
  }

  async read(): Promise<CustomResumeSchema> {
    console.debug('Reading resume schema file:', this.localFile);
    const buffer = await fs.readFile(this.localFile, 'utf8');
    this.schema = JSON.parse(buffer.toString());
    return this.schema;
  }

  async get(url = config.resumeUrl): Promise<CustomResumeSchema> {
    if (!url) {
      throw new Error('Missing RESUME_URL');
    }
    if (this.schema) {
      return this.schema;
    }
    try {
      await this.read();
    } catch (err) {
      console.warn('Failed to read schema file:', err);
      const schema = await resume.fetch(url);
      await this.write(schema);
    }
    return this.schema;
  }
}

export const resume = new Resume();
