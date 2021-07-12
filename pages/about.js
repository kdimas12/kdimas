import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h2>Tentang Saya</h2>
        <p>
          Sekarang aku sedang fokus ke{' '}
          <span className="text-blue-600 dark:text-blue-400">React</span>
        </p>
        <ul>
          <p>Alat tempur:</p>
          <li>Acer Aspire V3-471</li>
          <li>Visual Studio Code</li>
        </ul>
      </section>
    </Layout>
  );
}
