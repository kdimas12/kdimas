import Image from 'next/image';
import Link from 'next/link';

export default function Project() {
  return (
    <section className="text-xs">
      <h2>Projects</h2>
      <div className="w-full rounded-lg ring-1 p-4 dark:ring-blue-400">
        <h3
          className="font-semibold text-lg tracking-wide"
          style={{ marginTop: 0 }}
        >
          auto_attendance_moodle
        </h3>
        <p className="text-gray-500 my-1">
          This is a program for you who too lazy for open elearning/moodle to
          set attendance by self, so I made this for you.
        </p>
        <Link href="https://github.com/kdimas12/auto_attendance_moodle">
          <a className="text-blue-700  inline-flex items-center font-semibold tracking-wide">
            <span>go to github &#8594;</span>
          </a>
        </Link>
      </div>
      <br />
      <div className="w-full rounded-lg ring-1 p-4 dark:ring-blue-400">
        <h3
          className="font-semibold text-lg tracking-wide"
          style={{ marginTop: 0 }}
        >
          password_generator
        </h3>
        <p className="text-gray-500 my-1">
          password_generator is a small app, same as the name this app will
          grenate a password. This project still not perfect yet, you can
          contribute to add more feature.
        </p>
        <Link href="https://github.com/kdimas12/password_generator">
          <a className="text-blue-700  inline-flex items-center font-semibold tracking-wide">
            <span>go to github &#8594;</span>
          </a>
        </Link>
      </div>
    </section>
  );
}
