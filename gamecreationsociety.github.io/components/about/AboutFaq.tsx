import Link from "next/link";
import { FiPlus } from "react-icons/fi";
import { aboutLinks, faqs } from "./content";
import styles from "@/app/about/about.module.css";

export default function AboutFaq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className={styles.faq}>
      <h2 id="faq-title">Frequently asked questions</h2>
      <div className={styles.questions}>
        {faqs.map(({ question, answer, link }) => (
          <details key={question}>
            <summary>{question}<FiPlus aria-hidden="true" /></summary>
            <div className={styles.answer}><p>{answer}</p>{link && <Link href={link.href}>{link.label}</Link>}</div>
          </details>
        ))}
      </div>
      <p className={styles.moreQuestions}>Other questions? <a href={aboutLinks.discord}>Ask in Discord</a>, <a href={aboutLinks.email}>email us</a>, or <Link href="/contact">contact an officer</Link>.</p>
    </section>
  );
}
