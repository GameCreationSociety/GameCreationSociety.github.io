"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
const links = [["Home", "/"], ["About", "/about"], ["Events", "/events"], ["Contact", "/contact"], ["Games", "/games"]];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return <header className={styles.header} onKeyDown={e => { if (e.key === "Escape") { setOpen(false); e.currentTarget.querySelector("button")?.focus(); } }}>
    <nav aria-label="Main navigation" className={styles.nav}>
      <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>GCS</Link>
      <button type="button" className={styles.toggle} aria-expanded={open} aria-controls="main-links" onClick={() => setOpen(!open)}>{open ? "Close menu" : "Menu"}</button>
      <ul id="main-links" className={`${styles.links} ${open ? styles.open : ""}`}>
        {links.map(([label, href]) => <li key={href}><Link href={href} aria-current={pathname === href ? "page" : undefined} onClick={() => setOpen(false)}>{label}</Link></li>)}
      </ul>
    </nav>
  </header>;
}
