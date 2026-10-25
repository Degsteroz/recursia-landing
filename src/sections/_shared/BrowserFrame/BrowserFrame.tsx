import type { ReactNode } from "react";
import styles from "./BrowserFrame.module.sass";

type BrowserFrameProps = {
  href: string;
  host: string;
  tone: "yellow" | "ink";
  tilt?: "left" | "right" | "none";
  shadow?: boolean;
  children: ReactNode;
};

export function BrowserFrame({
  href,
  host,
  tone,
  tilt = "none",
  shadow = false,
  children,
}: BrowserFrameProps) {
  const className = [
    styles.frame,
    styles[tone],
    tilt === "left" ? styles.left : "",
    tilt === "right" ? styles.right : "",
    shadow ? styles.shadow : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      <div className={styles.chrome}>
        <span className={styles.dotFilled} />
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.host}>{host}</span>
      </div>
      {children}
    </a>
  );
}
