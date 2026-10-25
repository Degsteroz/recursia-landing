import { Mark } from "@/sections/_shared/Mark/Mark";
import styles from "./Header.module.sass";

const TELEGRAM = "https://t.me/Degster_oz";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#ventures", label: "Ventures" },
  { href: "#play", label: "Playground" },
  { href: "#services", label: "Services" },
];

export function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.brand} href="#top">
        <Mark className={styles.mark} body="#0e0e0f" eyes="#ffd400" />
        <span className={styles.word}>RECURSIA</span>
      </a>
      <nav className={styles.nav}>
        {LINKS.map((link) => (
          <a key={link.href} className={styles.link} href={link.href}>
            {link.label}
          </a>
        ))}
        <a className={styles.cta} href={TELEGRAM} target="_blank" rel="noreferrer">
          Start a project
        </a>
      </nav>
    </header>
  );
}
