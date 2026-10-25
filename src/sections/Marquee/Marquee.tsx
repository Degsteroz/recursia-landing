import styles from "./Marquee.module.sass";

const ITEMS = [
  "Websites",
  "Telegram mini apps",
  "Web apps",
  "Browser extensions",
  "Streamer tools",
];

function Group() {
  return (
    <span className={styles.group}>
      {ITEMS.map((item) => (
        <span key={item} className={styles.pair}>
          <span>{item}</span>
          <span className={styles.star} aria-hidden="true">
            ✺
          </span>
        </span>
      ))}
    </span>
  );
}

export function Marquee() {
  return (
    <div className={styles.marquee} aria-hidden="true">
      <div className={styles.track}>
        <Group />
        <Group />
      </div>
    </div>
  );
}
