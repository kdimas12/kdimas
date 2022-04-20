import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from "next/link";
import Head from "next/head";
import { sortByDate } from '../../utils'

export default function Blog({ contents }) {
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
          {contents.map((content, index) => (
            <li key={index}>
              <Link href={`/blog/${content.slug}`}>
                <a className='capitalize rounded-sm py-1 md:-mx-3 md:px-3 md:hover:bg-gray-200 grid text-gray-900'>
                  <span>
                    {content.fronmatter.title}
                  </span>
                  <span className='text-gray-600 text-xs'>
                    {new Intl.DateTimeFormat(['ban', 'id'], { day: "2-digit", month: "short", year: "numeric" }).format(new Date(content.fronmatter.date))}
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
      contents: contents.sort(sortByDate)
    }
  }
}