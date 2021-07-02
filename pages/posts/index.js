import Head from 'next/head';
import Link from 'next/link';
import Dates from '../../components/date';
import Layout, { siteTitle } from '../../components/layout';
import { url } from '../../config/next.config';

export const getStaticProps = async () => {
  const data = await fetch(`${url}/articles?_sort=published_at:desc`);
  const list = await data.json();

  return {
    props: {
      list,
    },
  };
};

export default function Posts({ list }) {
  return (
    <Layout>
      <Head>
        <title>Blog | {siteTitle}</title>
      </Head>
      <section>
        <h2>All blog post</h2>
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
