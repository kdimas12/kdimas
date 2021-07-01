import Head from 'next/head';
import Link from 'next/link';
import Dates from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import { url } from '../config/next.config';

export const getStaticProps = async () => {
  const data = await fetch(`${url}/articles?_sort=published_at:desc`);
  const list = await data.json();

  return {
    props: {
      list,
    },
  };
};

export default function Home({ list }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p className="my-3">
          I'm a student of State Islamic University of North Sumatra. Recently I
          focused on <span className="text-blue-600">Javascript</span> as my
          programming language, before it I use{' '}
          <span className="text-blue-600">Python</span>.
        </p>
      </section>
      <section>
        <h2>Blog</h2>
        <ul>
          {list.map((item) => (
            <li key={item.id}>
              <Link href={`/posts/${item.slug}`}>
                <a>{item.Title}</a>
              </Link>
              <br />
              <small className="italic">
                <Dates dateString={item.published_at} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
