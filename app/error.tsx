'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      {/*<p>Oh no, something went wrong... maybe refresh?</p>*/}
      <h2>Oops, there is an error!</h2>
      <p>Name: {error.name}</p>
      <p>Cause: {JSON.stringify(error.cause)}</p>
      <p>Message: {error.message}</p>
      <pre>{error.stack}</pre>
    </div>
  );
}
