import { unbounded } from "@/styles/fonts";
import { HeroWord } from "./components/HeroWord/HeroWord";
import styles from "./Hero.module.sass";

const TELEGRAM = "https://t.me/Degster_oz";

export function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.wrap}>
        <div className={styles.meta}>
          <span>recursia(recursia(recursia(…)))</span>
          <span>Independent digital studio</span>
        </div>
        <HeroWord fontFamily={unbounded.style.fontFamily} />
        <div className={styles.grid}>
          <p className={styles.tagline}>
            Websites, Telegram mini apps and tools for streamers. Built layer by layer.
          </p>
          <div className={styles.copy}>
            <p>
              A small studio that designs and ships the whole thing: interface, backend,
              deployment. Event sites, bots, products of our own.
            </p>
            <div className={styles.actions}>
              <a className={styles.primary} href={TELEGRAM} target="_blank" rel="noreferrer">
                Write on Telegram ↗
              </a>
              <a className={styles.secondary} href="#work">
                See the work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
