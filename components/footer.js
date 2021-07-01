import Link from 'next/link';

export default function Footer() {
  return (
    <div>
      <p>
        &copy; 2021{' '}
        <Link href="/">
          <a>Dimas</a>
        </Link>{' '}
        | code with ❤️ using Next.js
      </p>
    </div>
  );
}
