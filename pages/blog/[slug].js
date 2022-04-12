import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import Head from 'next/head'

export default function BlogPost({ fronmatter: { title, date }, slug, content }) {
  return (
    <>
      <Head>
        <title>{title} - Dimas Kurniawan</title>
      </Head>
      <div className='mt-5'>
        <h1 className='text-3xl font-bold text-gray-900'>{title}</h1>
        <small className='text-gray-800'>Posted on <b>{new Intl.DateTimeFormat('en-GB', { dateStyle: 'full' }).format(new Date(date))}</b></small>
        <div className='prose'>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('contents'))

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.md', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: slug }) {
  const markdownWithMeta = fs.readFileSync(path.join('contents', slug.slug + '.md'), 'utf-8')
  const { data: fronmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      fronmatter,
      slug,
      content
    }
  }
}