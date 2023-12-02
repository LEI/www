// https://github.com/leerob/leerob.io/blob/main/app/work/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { resume } from '../resume';
import { Badge } from '../components/badge';

export const metadata: Metadata = {
  title: 'Work',
  description: 'A summary of my work and contributions.',
};

export default async function Page() {
  const data = await resume.get();
  return (
    <section>
      <h1 className="font-medium text-2xl mb-2 tracking-tighter">
        {data.basics?.label}
      </h1>
      <p className="mb-8 text-neutral-600 dark:text-neutral-400 text-sm">
        <i>{data.basics?.locationAsString}</i>
      </p>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          {data.basics?.summary}
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="inline mr-2 font-medium text-xl mb-1 tracking-tighter">
          Skills
        </h2>
        {/*
        <div className="inline-block mr-3">
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            + keywords
          </p>
        </div>
        */}
        <ul className="not-prose inline">
          {data.skills?.map((skill, index) =>
            <li key={index} className="inline-block">
              <Badge className="font-medium mr-2 mb-2">
                {skill.name} {/* {skill.rating} ({skill.level}) */}
              </Badge>
              {/* TODO: display level and expand keywords on click */}
              <ul className="inline list-none pl-0">
                {skill.keywords?.map(keyword =>
                  <li key={keyword} className="inline-block">
                    <Badge className="font-light mr-2 mb-2">
                      {keyword}
                    </Badge>
                  </li>
                )}
              </ul>
            </li>
          )}
        </ul>
      </div>

      {/*<div className="prose prose-neutral dark:prose-invert">
        <p>
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          Experience
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          + work
        </p>
        <ul>
          {data.work?.map(work =>
            <li>
              {work.name}
              <Link href="{work.url}">{work.url}</Link>
              <p>{work.position}</p>
              <p>{work.location}</p>
              <p>{work.summary}</p>
              <p>{work.description}</p>
              <ul>
                {work.highlights?.map(highlight =>
                  <li>{highlight}</li>
                )}
              </ul>
            </li>
          )}
        </ul>
      </div>*/}
    </section>
  );
}
