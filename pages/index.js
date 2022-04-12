import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from "next/link";
import Head from "next/head";
import { sortByDate } from '../utils'

export default function Home({ contents }) {
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
      <div>
        <h3 className="font-bold text-2xl text-gray-900">Tulisan Terbaru</h3>
        <hr className='mb-3' />
        <ul>
          {contents.map((content, index) => (
            <li key={index}>
              <Link href={`/blog/${content.slug}`}>
                <a className='capitalize rounded-sm py-1 md:-mx-3 md:px-3 md:hover:bg-gray-200 md:hover:text-gray-900 text-gray-700 flex gap-4  items-center'>{content.fronmatter.title} <span className="whitespace-nowrap ml-auto text-sm text-gray-500 text-xs">
                  {new Date(content.fronmatter.date).toLocaleDateString('en-us', {
                    day: '2-digit',
                    month: 'short',
                  })}
                </span></a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Post end */}
    </>
  )
}

export async function getStaticProps() {
  // get files from the contents dir
  const files = fs.readdirSync(path.join('contents'))

  // get slug and fronmatter from contents
  const contents = files.map(filename => {
    // Create slug
    const slug = filename.replace('.md', '')

    const markdownWithMeta = fs.readFileSync(path.join('contents', filename), 'utf-8')
    const { data: fronmatter } = matter(markdownWithMeta)

    return {
      slug,
      fronmatter
    }
  })

  return {
    props: {
      contents: contents.sort(sortByDate).slice(0, 3)
    }
  }
}