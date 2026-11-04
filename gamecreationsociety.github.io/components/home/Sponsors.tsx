export default function Sponsors() {
  return (
    <section className="border-b-2 border-black">
      <div className="mx-auto max-w-6xl p-8 md:p-12">
        <h2 className="mb-6 text-3xl font-bold">Our Sponsors</h2>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="flex h-20 w-40 items-center justify-center border-2 border-black bg-neutral-200"
            >
              <span className="text-xs uppercase tracking-widest text-neutral-500">
                Sponsor logo
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
