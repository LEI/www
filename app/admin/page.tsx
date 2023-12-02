import { auth } from 'app/auth';
import { config } from '../config';
import { getGuestbookEntries } from 'app/db/queries';
import { redirect } from 'next/navigation';
import Form from './form';

export const metadata = {
  title: 'Admin',
};

export default async function AdminPage() {
  console.log('Trying auth...');
  let session = await auth();
  console.log('Page auth:', session?.user, config.baseUrl);
  if (session?.user?.email?.endsWith(config.baseUrl.replace('https://', '@'))) {
    redirect('/');
  }

  let entries = await getGuestbookEntries();

  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">admin</h1>
      <Form entries={entries} />
    </section>
  );
}
