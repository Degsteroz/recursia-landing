import styles from "./Mark.module.sass";

type MarkProps = {
  size?: number;
  body: string;
  eyes: string;
  className?: string;
};

export function Mark({ size = 34, body, eyes, className }: MarkProps) {
  return (
    <svg
      className={className ? `${styles.mark} ${className}` : styles.mark}
      viewBox="0 0 100 100"
      width={size}
      height={size}
      aria-hidden="true"
    >
      <path
        d="M40 34L46 14L58 26Q65 24 72 26L84 14L90 34Q94 52 82 62Q65 70 48 62Q36 52 40 34Z"
        fill={body}
      />
      <path
        d="M8 64L12 50L21 58Q26 57 31 58L40 50L44 64Q47 77 38 84Q26 90 14 84Q5 77 8 64Z"
        fill={body}
      />
      <circle cx="60" cy="42" r="4.5" fill={eyes} />
      <circle cx="76" cy="42" r="4.5" fill={eyes} />
      <circle cx="19" cy="70" r="4" fill={eyes} />
      <circle cx="33" cy="70" r="4" fill={eyes} />
    </svg>
  );
}
