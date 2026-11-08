import Link from "next/link";

export default function InfoSection() {
  return (
    <section className="border-b-2 border-black">
      <div className="mx-auto max-w-6xl p-8 md:p-12">
        <div className="grid border-2 border-black md:grid-cols-2">
          {/* Text */}
          <div className="flex flex-col justify-center p-8 md:p-12">
            <h2 className="text-3xl font-bold">Who we are</h2>
            <p className="mt-4">
              Game Creation Society is a student-run organization at Carnegie
              Mellon University, dedicated to the art and science of making
              games. We help members of all skill levels and backgrounds learn
              and gain experience in game development.
            </p>
            <p className="mt-4">
              Each semester, teams form at the Pitch Fair and spend about ten
              weeks building a game together, then showcase the finished work
              at Release. GCS has been running since 2004.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-block w-fit border-2 border-black px-6 py-3 font-semibold transition-colors hover:bg-black hover:text-white"
            >
              About GCS
            </Link>
          </div>

          {/* Image placeholder */}
          <div className="flex min-h-70 items-center justify-center bg-neutral-200 border-t-2 border-black md:border-t-0 md:border-l-2">
            <span className="text-sm uppercase tracking-widest text-neutral-500">
              Image
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
