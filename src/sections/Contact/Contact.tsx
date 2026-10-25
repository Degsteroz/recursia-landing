import { cacheLife } from "next/cache";
import { Mark } from "@/sections/_shared/Mark/Mark";
import styles from "./Contact.module.sass";

const TELEGRAM = "https://t.me/Degster_oz";
const SIZES = [96, 58, 35, 21];

export async function Contact() {
  "use cache";
  cacheLife("max");
  const year = new Date().getFullYear();

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.wrap}>
        <div className={styles.kicker}>return recursia(you);</div>
        <a className={styles.headline} href={TELEGRAM} target="_blank" rel="noreferrer">
          Let&apos;s build
          <br />
          the next layer ↗
        </a>
        <div className={styles.row}>
          <a className={styles.pill} href={TELEGRAM} target="_blank" rel="noreferrer">
            Telegram @Degster_oz
          </a>
          <div className={styles.marks}>
            {SIZES.map((size) => (
              <Mark key={size} size={size} body="#ffd400" eyes="#0e0e0f" />
            ))}
            <span className={styles.ellipsis}>…</span>
          </div>
        </div>
        <div className={styles.footer}>
          <span>RECURSIA.ONLINE</span>
          <span>© {year} RECURSIA STUDIO</span>
        </div>
      </div>
    </section>
  );
}
