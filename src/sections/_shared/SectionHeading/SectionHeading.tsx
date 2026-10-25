import styles from "./SectionHeading.module.sass";

type SectionHeadingProps = {
  depth: number;
  title: string;
  tone: "onInk" | "onYellow";
  aside?: string;
  asideAlign?: "right";
  scale?: "display" | "compact";
};

export function SectionHeading({
  depth,
  title,
  tone,
  aside,
  asideAlign,
  scale = "display",
}: SectionHeadingProps) {
  const arrows = "↳".repeat(depth);

  return (
    <div className={`${styles.head} ${styles[tone]}`}>
      <div>
        <div className={styles.kicker}>
          {arrows} DEPTH 0{depth}
        </div>
        <h2 className={scale === "compact" ? styles.compact : styles.title}>
          {title}
        </h2>
      </div>
      {aside ? (
        <span
          className={
            asideAlign === "right" ? `${styles.aside} ${styles.right}` : styles.aside
          }
        >
          {aside}
        </span>
      ) : null}
    </div>
  );
}
