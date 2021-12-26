import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Nav from '../components/nav';
import Hero from '../components/hero';
import Footer from '../components/footer';

interface BlogListProps {
  data: {
    id: string;
    text: string;
    publishDate: string;
  }[];
}

const Home = ({ data }: BlogListProps) => {
  return (
    <div className="px-6">
      <div className="flex flex-col min-h-screen max-w-screen-md mx-auto">
        <Head>
          <title>Blog Pribadi Dimas Kurniawan</title>
          <meta
            name="description"
            content="Blog ini sebagai dokumentasi apa yang telah saya pelajari tentang programming"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>

        <Nav />
        <Hero />
        <main className="mt-10 flex-grow">
          <h1 className="text-3xl font-bold mb-4 md:px-5">Tulisan Terbaru</h1>
          <div className="grid">
            {data.map(({ id, text, publishDate }) => (
              <a
                key={id}
                href=""
                className="capitalize rounded-sm py-2 md:px-5 md:hover:bg-gray-200 md:hover:text-gray-900 text-gray-700 flex gap-4  items-center"
              >
                {text}{' '}
                <span className="whitespace-nowrap ml-auto text-sm">
                  {new Date(publishDate).toLocaleDateString('en-us', {
                    day: 'numeric',
                    month: 'short',
                  })}
                </span>
              </a>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://dummyapi.io/data/v1/post?limit=5', {
    method: 'GET',
    headers: {
      'app-id': '61c85c18889cdc2fa2eb2e1d',
    },
  });
  const hasil = await res.json();
  const data = hasil.data;
  return {
    props: {
      data,
    },
  };
};

export default Home;
