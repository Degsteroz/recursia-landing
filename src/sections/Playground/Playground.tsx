import Image from "next/image";
import { SectionHeading } from "@/sections/_shared/SectionHeading/SectionHeading";
import monster from "./assets/monster.png";
import sadMusic from "./assets/sad-music.jpg";
import styles from "./Playground.module.sass";

const CARDS = [
  {
    title: "Release your inner monster",
    href: "https://release-your-inner-monster.vercel.app/",
    image: monster,
    alt: "Release your inner monster",
    copy: "A fan site for Monster Energy Ultra White, the drink. Unlock it, release it.",
    tilt: "left" as const,
    canvas: styles.light,
  },
  {
    title: "Sad Music",
    href: "https://sad-music.vercel.app/",
    image: sadMusic,
    alt: "Sad Music",
    copy: "Tap the pads, stack the layers, end up with a melancholic track of your own.",
    tilt: "right" as const,
    canvas: styles.dark,
  },
];

export function Playground() {
  return (
    <section id="play" className={styles.play}>
      <div className={styles.wrap}>
        <SectionHeading
          depth={4}
          title="Playground"
          tone="onYellow"
          aside="MADE FOR FUN · THEY WORK, GO CLICK"
        />
        <div className={styles.grid}>
          {CARDS.map((card) => (
            <article
              key={card.title}
              className={card.tilt === "left" ? `${styles.card} ${styles.left}` : `${styles.card} ${styles.right}`}
            >
              <div className={styles.bar}>
                <span className={styles.name}>{card.title}</span>
                <a href={card.href} target="_blank" rel="noreferrer">
                  open ↗
                </a>
              </div>
              <div className={`${styles.preview} ${card.canvas}`}>
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(min-width: 960px) 46vw, 100vw"
                  className={styles.shot}
                />
              </div>
            </article>
          ))}
        </div>
        <div className={styles.notes}>
          {CARDS.map((card) => (
            <p key={card.title}>{card.copy}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
