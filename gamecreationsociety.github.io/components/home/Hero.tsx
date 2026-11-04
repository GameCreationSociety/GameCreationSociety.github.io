import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative -mt-16 flex min-h-screen w-full items-center justify-center overflow-hidden border-b-2 border-black text-center">
      {/* Video background placeholder */}
      <div className="absolute inset-0 flex items-center justify-center bg-neutral-200">
        <span className="text-sm uppercase tracking-widest text-neutral-500">
          Video Background
        </span>
      </div>

      {/* Overlay content */}
      <div className="relative z-10 px-6">
        <h1 className="text-5xl font-bold md:text-7xl">Game Creation Society</h1>
        <p className="mt-4 text-lg md:text-xl">
          Student game development at Carnegie Mellon University.
        </p>
        <Link
          href="/about"
          className="mt-8 inline-block border-2 border-black bg-white px-6 py-3 font-semibold transition-colors hover:bg-black hover:text-white"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}
