import { SectionHeading } from "@/sections/_shared/SectionHeading/SectionHeading";
import styles from "./AlsoShipped.module.sass";

const MORE = [
  {
    num: "01",
    name: "Gilded",
    kind: "MARKETPLACE",
    url: "https://gilded-project.vercel.app/",
    desc: "Classifieds marketplace for Serbia: post an ad, find a buyer.",
  },
  {
    num: "02",
    name: "Tzara Book",
    kind: "READER",
    url: "https://tzara-book.vercel.app/read/00-predystoriya",
    desc: "Reading site for an author's book, chapter by chapter.",
  },
  {
    num: "03",
    name: "Now Playing → OBS",
    kind: "EXTENSION",
    url: "https://t.me/Degster_oz",
    desc: "Browser extension that sends the current Yandex Music track to OBS as a scrolling ticker.",
  },
];

export function AlsoShipped() {
  return (
    <section className={styles.shipped}>
      <div className={styles.wrap}>
        <SectionHeading depth={3} title="Also shipped" tone="onInk" scale="compact" />
        {MORE.map((item) => (
          <a key={item.name} className={styles.row} href={item.url} target="_blank" rel="noreferrer">
            <span className={styles.num}>{item.num}</span>
            <span className={styles.main}>
              <span className={styles.name}>{item.name}</span>
              <span className={styles.desc}>{item.desc}</span>
            </span>
            <span className={styles.kind}>{item.kind}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
