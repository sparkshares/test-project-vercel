// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl">Welcome to My Next.js App</h1>
      <nav className="flex gap-4 mt-4">
        <Link href="/login" legacyBehavior>
          <a className="text-blue-500">Login</a>
        </Link>
        <Link href="/profile" legacyBehavior>
          <a className="text-blue-500">Profile</a>
        </Link>
      </nav>
    </div>
  );
}