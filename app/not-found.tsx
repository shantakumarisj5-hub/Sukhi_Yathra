import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-5">
      <section className="max-w-md text-center">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#B97810]">
          Error 404
        </p>

        <h1 className="mt-3 text-4xl font-black text-[#071F5B]">
          Page not found
        </h1>

        <p className="mt-4 leading-7 text-slate-600">
          The page you are looking for does not exist or may have been moved.
        </p>

        <Link
          href="/"
          className="mt-7 inline-flex rounded-full bg-[#071F5B] px-6 py-3 font-bold text-white transition hover:bg-[#123e91]"
        >
          Back to Home
        </Link>
      </section>
    </main>
  );
}