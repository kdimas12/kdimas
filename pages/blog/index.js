import Link from "next/link";
import Head from "next/head";
import dayjs from 'dayjs'
import { getAllArticles } from '../../src/utils/mdx'

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>Blog - Dimas Kurniawan</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="mt-8">
        <h3 className="font-bold text-2xl mb-2 text-gray-900">Semua Tulisan</h3>
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Ketik untuk mencari..."
        ></input>

        <ul className='mt-5'>
          {posts.map((frontmatter, index) => (
            <li key={index}>
              <Link href={`/blog/${frontmatter.slug}`}>
                <a className='capitalize rounded-sm py-1 md:-mx-3 md:px-3 md:hover:bg-gray-200 grid text-gray-900'>
                  <span>
                    {frontmatter.title}
                  </span>
                  <span className='text-gray-600 text-xs'>
                    {dayjs(frontmatter.publishedAt).format('MMMM D, YYYY')} &mdash;{' '}
                    {frontmatter.readingTime}
                  </span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const articles = await getAllArticles();
  articles
    .map((article) => article.data)
    .sort((a, b) => {
      if (a.data.publishedAt > b.data.publishedAt) return 1
      if (a.data.publishedAt < b.data.publishedAt) return -1

      return 0
    })

  return {
    props: {
      posts: articles.reverse(),
    },
  }
}