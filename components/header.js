import Link from 'next/link'

export default function Header() {
  return (
    <h2 className="mx-16 my-8 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
      <Link href="/" className="hover:underline">
        Great Idea Media
      </Link>
    </h2>
  );
}
