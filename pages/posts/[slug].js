import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import Layout from '../../components/layout';
import Dates from '../../components/date';
import { url } from '../../config/next.config';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { prism } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const components = {
  code({ node, inline, className, children, ...props }) {
    const [isMounted, setIsMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    useEffect(() => {
      setIsMounted(true);
    }, []);
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter
        style={isMounted && (theme === 'dark' ? dracula : prism)}
        wrapLongLines
        language={match[1]}
        PreTag="div"
        children={String(children).replace(/\n$/, '')}
        {...props}
      />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

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
        <ReactMarkdown components={components} children={article.Body} />
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
