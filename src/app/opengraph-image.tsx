import { ImageResponse } from "next/og";

export const alt = "RECURSIA — independent digital studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffd400",
          color: "#0e0e0f",
          padding: "68px 76px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <svg width="92" height="92" viewBox="0 0 100 100">
            <path
              fill="#0e0e0f"
              d="M40 34L46 14L58 26Q65 24 72 26L84 14L90 34Q94 52 82 62Q65 70 48 62Q36 52 40 34Z"
            />
            <path
              fill="#0e0e0f"
              d="M8 64L12 50L21 58Q26 57 31 58L40 50L44 64Q47 77 38 84Q26 90 14 84Q5 77 8 64Z"
            />
            <circle cx="60" cy="42" r="6" fill="#ffd400" />
            <circle cx="76" cy="42" r="6" fill="#ffd400" />
            <circle cx="19" cy="70" r="5.5" fill="#ffd400" />
            <circle cx="33" cy="70" r="5.5" fill="#ffd400" />
          </svg>
          <div style={{ display: "flex", fontSize: 26, letterSpacing: 3 }}>
            INDEPENDENT DIGITAL STUDIO
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 118,
            fontWeight: 800,
            letterSpacing: -4,
            lineHeight: 0.88,
          }}
        >
          RECURSIA
        </div>
        <div style={{ display: "flex", fontSize: 34, maxWidth: 860, lineHeight: 1.25 }}>
          Websites, Telegram mini apps and tools for streamers. Built layer by layer.
        </div>
      </div>
    ),
    { ...size },
  );
}
