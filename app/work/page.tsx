import { resume } from '../resume';

export default async function Page() {
  const data = await resume.get();
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">{data.basics?.label}</h1>
      <p className="prose prose-neutral dark:prose-invert">
        {data.skills?.length}
      </p>
    </section>
  );
}
