import Error from "next/error";

/**
 * Custom not found page.
 */
export default function Custom404() {
  return <Error statusCode={500} />;
}
