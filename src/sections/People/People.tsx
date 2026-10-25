import { Mark } from "@/sections/_shared/Mark/Mark";
import { SectionHeading } from "@/sections/_shared/SectionHeading/SectionHeading";
import styles from "./People.module.sass";

export function People() {
  return (
    <section className={styles.people}>
      <div className={styles.wrap}>
        <SectionHeading depth={6} title="People" tone="onYellow" />
        <div className={styles.grid}>
          <article className={styles.founder}>
            <Mark size={88} body="#ffd400" eyes="#0e0e0f" />
            <div>
              <div className={styles.role}>FOUNDER</div>
              <div className={styles.name}>Vitaly</div>
              <div className={styles.note}>Frontend, product, everything in between.</div>
              <a href="https://t.me/Degster_oz" target="_blank" rel="noreferrer">
                @Degster_oz ↗
              </a>
            </div>
          </article>
          <article className={styles.next}>
            <div className={styles.seat}>?</div>
            <div>
              <div className={styles.kicker}>NEXT SEAT</div>
              <div className={styles.name}>Soon, more of us</div>
              <div className={styles.soon}>
                The studio is growing. If you build things and like how this page looks, say hi.
              </div>
            </div>
          </article>
          <div className={styles.nest} aria-hidden="true">
            <div className={styles.frameA}>
              <div className={styles.frameB}>
                <div className={styles.frameC} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
