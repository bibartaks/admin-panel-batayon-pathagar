import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="container py-10">
        <h1 className="text-2xl font-medium text-center mb-5">
          Welcome to Batayon Pathagar Admin Panel
        </h1>
        <h3 className="mb-5">Choose a subject:</h3>
        <Link href="/physics_1" className="block mb-3 text-sm underline">
          Physics First Paper
        </Link>
        <Link href="/physics_2" className="block mb-3 text-sm underline">
          Physics Second Paper
        </Link>
      </div>
    </main>
  );
}
