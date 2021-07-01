import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import Layout from '../../components/layout';
import Dates from '../../components/date';
import { url } from '../../config/next.config';

export default function Post({ article }) {
  return (
    <Layout>
      <Head>
        <title>{article.Title}</title>
      </Head>
      <article>
        <h2 style={{ marginBottom: 0 }}>{article.Title}</h2>
        <small className="italic">
          <Dates dateString={article.published_at} />
        </small>
        <ReactMarkdown>{article.Body}</ReactMarkdown>
      </article>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const res = await fetch(`${url}/articles?_slug=${slug}`);
  const data = await res.json();

  const article = data[0];
  return {
    props: {
      article,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`${url}/articles`);
  const articles = await res.json();

  const paths = articles.map((item) => ({
    params: { slug: item.slug },
  }));

  return { paths, fallback: false };
}
