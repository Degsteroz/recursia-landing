import Image from "next/image";
import { BrowserFrame } from "@/sections/_shared/BrowserFrame/BrowserFrame";
import { Reveal } from "@/sections/_shared/Reveal/Reveal";
import { SectionHeading } from "@/sections/_shared/SectionHeading/SectionHeading";
import { PhoneMock } from "./components/PhoneMock/PhoneMock";
import roast from "./assets/roast.png";
import tedx from "./assets/tedx.png";
import styles from "./Work.module.sass";

const TELEGRAM_APP = "https://t.me/ITConnectEventsBot?startapp";

export function Work() {
  return (
    <section id="work" className={styles.work}>
      <div className={styles.wrap}>
        <SectionHeading
          depth={1}
          title="Selected work"
          tone="onInk"
          aside="SCREENSHOTS OF LIVE SITES"
        />

        <Reveal className={styles.row}>
          <BrowserFrame
            href="https://www.tedxsavskivenac.com/"
            host="tedxsavskivenac.com"
            tone="yellow"
            tilt="left"
          >
            <div className={`${styles.preview} ${styles.tedx}`}>
              <Image
                src={tedx}
                alt="TEDx Savski Venac website"
                fill
                sizes="(min-width: 1100px) 46vw, 100vw"
                className={styles.shot}
              />
            </div>
          </BrowserFrame>
          <div>
            <div className={styles.kicker}>
              <span>01</span>
              <span>EVENT WEBSITE · 2026</span>
            </div>
            <h3>TEDx Savski Venac</h3>
            <p>
              Website for an independent TEDx event in Belgrade: “Small Shifts, Big Impact”, 10
              October 2026 at Startit Center. Speakers, programme and tickets in one fast page.
            </p>
            <a className={styles.link} href="https://www.tedxsavskivenac.com/" target="_blank" rel="noreferrer">
              Visit site ↗
            </a>
          </div>
        </Reveal>

        <Reveal className={styles.row}>
          <div className={styles.flip}>
            <BrowserFrame
              href="https://roast.recursia.online/"
              host="roast.recursia.online"
              tone="yellow"
              tilt="right"
            >
              <div className={`${styles.preview} ${styles.roast}`}>
                <Image
                  src={roast}
                  alt="RoastBot website"
                  fill
                  sizes="(min-width: 1100px) 46vw, 100vw"
                  className={styles.shot}
                />
              </div>
            </BrowserFrame>
          </div>
          <div>
            <div className={styles.kicker}>
              <span>02</span>
              <span>TWITCH BOT · AI VOICE</span>
            </div>
            <h3>RoastBot</h3>
            <p>
              Voice AI roast for Twitch. A yandere and a tsundere roast the chat, raiders, donors
              and the streamer, out loud, live on air. Landing page, bot and voice pipeline.
            </p>
            <a className={styles.link} href="https://roast.recursia.online/" target="_blank" rel="noreferrer">
              Visit site ↗
            </a>
          </div>
        </Reveal>

        <Reveal className={`${styles.row} ${styles.rowLast}`}>
          <div className={styles.stage}>
            <div className={styles.phone}>
              <PhoneMock />
            </div>
          </div>
          <div>
            <div className={styles.kicker}>
              <span>03</span>
              <span>TELEGRAM MINI APP</span>
            </div>
            <h3>IT Connect Hub</h3>
            <p>
              Telegram mini app for the IT Connect community. Organisers announce an event, people
              register in two taps without leaving Telegram.
            </p>
            <a className={styles.solid} href={TELEGRAM_APP} target="_blank" rel="noreferrer">
              Open in Telegram ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
