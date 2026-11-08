import Image from "next/image";
import { eventStories } from "./content";
import styles from "@/app/events/events.module.css";

export default function EventsGallery() {
  return (
    <section id="gallery" aria-label="Explore club events" className={styles.overview}>
      <div id="event-guide" className={styles.storyGrid}>
        {eventStories.map(story => (
          <article key={story.id} id={story.id} className={styles.story}>
            <div className={styles.photoMedia}>
              {story.image.src ? (
                <Image src={story.image.src} alt={story.image.alt ?? story.image.label} fill sizes="(max-width: 700px) 100vw, 33vw" />
              ) : (
                <div className={styles.photoPlaceholder} role="img" aria-label={`Photo placeholder: ${story.image.label}`}>
                  <span>Photo placeholder</span><strong>{story.image.label}</strong>
                </div>
              )}
            </div>
            <h2>{story.title}</h2>
            {story.descriptions.map(description => <p key={description.text} id={description.id}>{description.text}</p>)}
          </article>
        ))}
      </div>
    </section>
  );
}
