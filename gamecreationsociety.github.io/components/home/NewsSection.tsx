import type { NewsItem } from "@/lib/data";
import styles from "./home.module.css";
export default function NewsSection({ items }: { items: NewsItem[] }) {
  return <div><h3>Recent announcements</h3><ul className={styles.newsList}>
    {items.slice(0, 3).map(item => <li key={item.id}>
      <p className={styles.date}>{item.date}</p><h4>{item.title}</h4><p>{item.body}</p>
    </li>)}
  </ul></div>;
}
