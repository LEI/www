'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const err = (error as { digest?: unknown });
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h1 className="font-medium text-2xl mb-2 tracking-tighter">
        {error.name}
      </h1>
      <p className="mb-8 text-neutral-600 dark:text-neutral-400 text-sm">
        Oh no, something went wrong... maybe refresh?
      </p>
      <div className="px-4 py-3 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm flex items-center text-neutral-900 dark:text-neutral-100 mb-8">
        {/*<div className="flex items-center w-4 mr-4">⚠</div>*/}
        <div className="w-full callout">
          <pre className="whitespace-pre-wrap">{error.stack}</pre>
        </div>
      </div>
      <pre className="whitespace-pre-wrap opacity-50">
        {typeof err.digest === 'string' ? err.digest : JSON.stringify(err.digest)}
      </pre>
    </div>
  );
}
