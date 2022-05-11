import Head from 'next/head'
import dayjs from 'dayjs'
import Image from 'next/image'
import rehypeSlug from 'rehype-slug'
import { MDXRemote } from 'next-mdx-remote'
import rehypeHighlight from 'rehype-highlight'
import rehypeCodeTitles from 'rehype-code-titles'
import { serialize } from 'next-mdx-remote/serialize'
import 'highlight.js/styles/atom-one-dark-reasonable.css'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { getSlug, getArticleFromSlug } from "../../src/utils/mdx"

export default function BlogPost({ post: { source, frontmatter } }) {
  return (
    <>
      <Head>
        <title>{frontmatter.title} - Dimas Kurniawan</title>
      </Head>
      <div className='mt-5'>
        <div className='mb-10'>
          <h1 className='text-3xl font-bold text-gray-900'>{frontmatter.title}</h1>
          <small className='text-gray-800'>Posted on <b>{dayjs(frontmatter.publishedAt).format('MMMM D, YYYY')} &mdash;{' '}
            {frontmatter.readingTime}</b></small>
        </div>
        <div className="prose">
          <MDXRemote {...source} />
        </div>
      </div>
    </>
  )
}

// dynamically generate the slugs for each article(s)
export async function getStaticPaths() {
  // getting all paths of each article as an array of
  // objects with their unique slugs
  const paths = (await getSlug()).map((slug) => ({ params: { slug } }))

  return {
    paths,
    // in situations where you try to access a path
    // that does not exist. it'll return a 404 page
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  //fetch the particular file based on the slug
  const { slug } = params
  const { content, frontmatter } = await getArticleFromSlug(slug)

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: { className: ['anchor'] },
          },
          { behaviour: 'wrap' },
        ],
        rehypeHighlight,
        rehypeCodeTitles,
      ],
    },
  })

  return {
    props: {
      post: {
        source: mdxSource,
        frontmatter,
      },
    },
  }
}