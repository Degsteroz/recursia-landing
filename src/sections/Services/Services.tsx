import styles from "./Services.module.sass";

const SERVICES = [
  {
    num: "01",
    name: "Websites & landing pages",
    desc: "Event sites, product launches, studio and personal sites.",
  },
  {
    num: "02",
    name: "Telegram mini apps",
    desc: "Registration, booking and community tools that live inside Telegram.",
  },
  {
    num: "03",
    name: "Web applications",
    desc: "Dashboards, internal tools, products with accounts and data.",
  },
  {
    num: "04",
    name: "Browser extensions",
    desc: "Small utilities that hook into the sites you already use.",
  },
  {
    num: "05",
    name: "Tools for streamers",
    desc: "Overlays, bots and OBS integrations for Twitch and beyond.",
  },
];

export function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.wrap}>
        <div>
          <div className={styles.kicker}>↳↳↳↳↳ DEPTH 05</div>
          <h2>What we make</h2>
          <p>
            No packages and no price list. Tell us what you need, we come back with a plan, a
            timeline and a number.
          </p>
        </div>
        <div className={styles.list}>
          {SERVICES.map((service) => (
            <div key={service.num} className={styles.row}>
              <span className={styles.num}>{service.num}</span>
              <div>
                <div className={styles.name}>{service.name}</div>
                <div className={styles.desc}>{service.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
