import Link from "next/link";
import Head from "next/head";
import dayjs from 'dayjs'
import { getAllArticles } from '../src/utils/mdx'

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Blog Pribadi Dimas Kurniawan</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* Hero start*/}
      <div className="mt-8 mb-12">
        <h1 className="text-3xl font-bold mb-3 text-gray-900">Hai, Saya Dimas Kurniawan</h1>
        <p
          className="text-gray-600"
        >Blog ini berisi tulisan dan dokumentasi tentang apa yang saya pelajari tentang Javascript dan Python.</p>

        <div className="mt-3">
          <Link href="/tentang">
            <a className="border border-blue-200 text-blue-700 text-sm bg-blue-50 hover:bg-blue-200 rounded px-3 py-1.5 mr-2">
              Tentang Saya
            </a>
          </Link>
          <Link href="https://github.com/kdimas12">
            <a className="border border-blue-200 text-blue-700 text-sm bg-blue-50 hover:bg-blue-200 rounded px-3 py-1.5 mr-2">
              Github
            </a>
          </Link>
        </div>
      </div>
      {/* Hero end */}

      {/* Post start */}
      <div className='mb-6'>
        <h3 className="font-bold text-xl text-gray-900 mb-3">Tulisan Terbaru</h3>
        {console.log(posts[0].slug)}
        <ul>
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
      {/* Post end */}
      <div>
        <p className='font-bold'>Ikuti saya:</p>
        <ul>
          <li className='list-disc list-inside'>
            <Link href="https://www.instagram.com/kdimas29/">
              <a className='underline'>Instagram</a>
            </Link>
          </li>
          <li className='list-disc list-inside'>
            <Link href="https://www.facebook.com/dimas.kurniawan.503/">
              <a className='underline'>Facebook</a>
            </Link>
          </li>
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
      posts: articles.reverse().slice(0, 3),
    },
  }
}