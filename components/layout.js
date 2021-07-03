import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from './footer';

const name = 'Dimas Kurniawan';
export const siteTitle = 'Dimas Kurniawan';

export default function Layout({ children, home }) {
  return (
    <div className="prose container px-5 sm:px-0 mx-auto mt-12">
      <Head>
        <link rel="icon" href="/images/icon.png" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className="text-center">
        {home ? (
          <>
            <Image
              priority
              src="/images/upsace.jpg"
              className="rounded-full"
              height={144}
              width={144}
              alt={name}
            />
            <h1>
              Hi, I'm <b>{name}</b>
            </h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/upsace.jpg"
                  className="rounded-full"
                  height={100}
                  width={100}
                  alt={name}
                />
                <h2 style={{ marginTop: 0 }}>
                  Hi, I'm <b>{name}</b>
                </h2>
              </a>
            </Link>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <Footer />
    </div>
  );
}
