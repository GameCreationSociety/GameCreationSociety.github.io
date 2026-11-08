import Link from "next/link";
import { historyMilestones } from "./content";
import styles from "@/app/about/about.module.css";

const highlights = [
  { year: 2014, title: "The GCS Cabinet", description: "An arcade cabinet built to play student games." },
  { year: 2022, title: "Painting the Fence", description: "Advertising the first in-person Release since the pandemic." },
];

export default function AboutHighlights() {
  return (
    <section id="gallery" aria-labelledby="highlights-title" className={styles.highlights}>
      <div className={styles.sectionHeading}><h2 id="highlights-title">From past years</h2><Link href="/events#gallery" className={styles.textLink}>Event gallery</Link></div>
      <div className={styles.highlightGrid}>
        {highlights.map(({ year, title, description }) => {
          const photo = historyMilestones.find(milestone => milestone.year === year)?.photo;
          return (
            <figure key={year}>
              <div className={styles.highlightPhoto} role="img" aria-label={`Photo placeholder: ${photo?.label}`}><span>Photo placeholder</span><strong>{photo?.label}</strong></div>
              <figcaption><a href={`#history-${year}`}>{title} <span>{year}</span></a><p>{description}</p></figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}
