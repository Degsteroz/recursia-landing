import Image from "next/image";
import { BrowserFrame } from "@/sections/_shared/BrowserFrame/BrowserFrame";
import { SectionHeading } from "@/sections/_shared/SectionHeading/SectionHeading";
import purrse from "./assets/purrse.png";
import styles from "./Ventures.module.sass";

const TELEGRAM = "https://t.me/Degster_oz";

const STATS = [
  { value: "5 sec", label: "per receipt" },
  { value: "RSD · EUR", label: "currencies" },
  { value: "RU EN SR", label: "languages" },
];

export function Ventures() {
  return (
    <section id="ventures" className={styles.ventures}>
      <div className={styles.wrap}>
        <SectionHeading
          depth={2}
          title="Ventures"
          tone="onYellow"
          aside="PRODUCTS WE BUILD FOR OURSELVES"
          asideAlign="right"
        />
        <div className={styles.grid}>
          <div>
            <div className={styles.badges}>
              <span className={styles.solidBadge}>CLOSED ALPHA</span>
              <span className={styles.lineBadge}>RAISING A ROUND</span>
            </div>
            <h3 className={styles.title}>Purrse</h3>
            <p className={styles.lead}>Home bookkeeping, run by a cat.</p>
            <p className={styles.body}>
              Scan the QR code on a Serbian fiscal receipt and Purrse sorts every item into
              categories, tracks price history and shows your personal inflation. Limits, Telegram
              summaries and CashCat, who has opinions about your spending.
            </p>
            <div className={styles.stats}>
              {STATS.map((stat) => (
                <div key={stat.label} className={styles.stat}>
                  <div className={styles.value}>{stat.value}</div>
                  <div className={styles.label}>{stat.label}</div>
                </div>
              ))}
            </div>
            <div className={styles.actions}>
              <a className={styles.primary} href="https://purrse.online/" target="_blank" rel="noreferrer">
                purrse.online ↗
              </a>
              <a className={styles.secondary} href={TELEGRAM} target="_blank" rel="noreferrer">
                Investor? Let&apos;s talk
              </a>
            </div>
          </div>
          <BrowserFrame href="https://purrse.online/" host="purrse.online" tone="ink" shadow>
            <Image
              className={styles.shot}
              src={purrse}
              alt="Purrse landing page"
              sizes="(min-width: 900px) 46vw, 100vw"
            />
          </BrowserFrame>
        </div>
      </div>
    </section>
  );
}
