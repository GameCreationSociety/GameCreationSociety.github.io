"use client";

import { useState } from "react";
import type { NewsItem } from "@/lib/data";

export default function NewsSection({ items }: { items: NewsItem[] }) {
  const [selected, setSelected] = useState(0);
  const current = items[selected] ?? items[0];

  return (
    <section className="border-b-2 border-black">
      <div className="mx-auto max-w-6xl p-8 md:p-12">
        <h2 className="mb-6 text-3xl font-bold">Latest News</h2>

        <div className="flex flex-col border-2 border-black md:h-120 md:flex-row">
          {/* Expanded view */}
          <div className="flex aspect-square flex-col overflow-hidden border-b-2 border-black md:aspect-auto md:h-full md:w-120 md:flex-none md:border-b-0 md:border-r-2">
            {current.image && (
              <div className="flex min-h-0 flex-1 items-center justify-center bg-neutral-200">
                <span className="text-xs uppercase tracking-widest text-neutral-500">
                  Image
                </span>
              </div>
            )}
            <div
              className={`overflow-y-auto p-5 ${current.image ? "border-t-2 border-black" : "flex flex-1 flex-col"}`}
            >
              <p className="text-xs uppercase tracking-wide text-neutral-500">
                {current.date}
              </p>
              <h3 className="mt-1 text-xl font-bold">{current.title}</h3>
              <p className="mt-3 text-sm">{current.body}</p>
            </div>
          </div>

          {/* Scrollable list */}
          <div className="max-h-105 overflow-y-auto md:h-full md:max-h-none md:flex-1">
            <ul>
              {items.map((item, i) => {
                const isLast = i === items.length - 1;
                const hideDivider = i === selected || i + 1 === selected;
                const divider =
                  isLast || hideDivider ? "" : "border-b border-neutral-300";
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => setSelected(i)}
                      aria-current={i === selected ? "true" : undefined}
                      className={`flex w-full items-center gap-3 p-3 text-left ${divider} ${i === selected ? "bg-black text-white" : "hover:bg-neutral-100"}`}
                    >
                      {item.image && (
                        <span
                          className="h-10 w-10 shrink-0 bg-neutral-200"
                          aria-hidden="true"
                        />
                      )}
                      <span className="min-w-0">
                        <span className="block text-xs uppercase tracking-wide opacity-70">
                          {item.date}
                        </span>
                        <span className="block truncate font-bold">
                          {item.title}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
