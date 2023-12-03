import Link from 'next/link';
import { resume } from './resume';
import { Badge } from './components/badge';

export default async function Page() {
  const data = await resume.get();
  return (
    <section>
      <h1 className="font-medium text-2xl mb-2 tracking-tighter">
        {data.basics?.name}
        {typeof data.basics?.url === 'string' ?
          <Link href={data.basics?.url} className="ml-2 text-neutral-600 dark:text-neutral-400 text-sm">
            {data.basics?.url?.replace('https://', '')}
          </Link>
          : ''}
      </h1>
      <p className="mb-8 text-neutral-600 dark:text-neutral-400 text-sm">
        <code className="not-prose">{data.basics?.headline}</code>
      </p>

      <p className="prose prose-neutral dark:prose-invert">
        {`I currently `}
        <Link href="/work">work</Link>
        {` as a web developer at `}
        <span className="not-prose">
          <Badge href="https://flexnetwork.fr">
            FLEXNETWORK
          </Badge>
        </span>
        .
      </p>

      {/*
      {typeof data.basics?.picture === 'string' ? <img src={data.basics?.picture} /> : ''}
      */}

      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      <footer className="font-light opacity-50">
        {`Template stolen from `}
        <Link href="https://leerob.io">Lee</Link>
        {` and powered by `}
        <span className="not-prose">
          <Badge href="https://vercel.com/home">
            <svg
              width="13"
              height="11"
              viewBox="0 0 13 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline-flex mr-1"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.5 0L13 11H0L6.5 0Z"
                fill="currentColor"
              />
            </svg>
            Vercel
          </Badge>
        </span>
        .
      </footer>
    </section>
  );
}
