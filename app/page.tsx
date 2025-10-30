import { GymLogo } from "@/components/GymLogo";

const featureItems = [
  {
    title: "Strength Reimagined",
    description: "Progressive resistance training curated for athletes and first-timers alike.",
  },
  {
    title: "Immersive Atmosphere",
    description: "Ambient lighting, curated playlists, and energy that keeps you dialed in.",
  },
  {
    title: "Hybrid Coaching",
    description: "Personal guidance fused with data-driven insights for faster results.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero-card">
        <div className="hero-card-content">
          <GymLogo className="logo" />
          <div className="hero-text">
            <span className="hero-tagline">ForgeFit Athletics</span>
            <h1 className="hero-title">Where Iron Meets Imagination</h1>
            <p className="hero-description">
              Experience a gym identity forged for modern athletes. Our emblem blends precision engineering with raw power—crafted for apparel, signage, and digital presence.
            </p>
          </div>
        </div>

        <ul className="feature-grid">
          {featureItems.map((item) => (
            <li key={item.title} className="feature-card">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>

        <div className="callout-text">
          <p>
            <a className="download-link" href="/forgefit-logo.svg" download>
              Download the ForgeFit emblem
            </a>{" "}
            and apply it across your brand touchpoints.
          </p>
          <p>Crafted in scalable vector format for print, merch, and digital experiences.</p>
        </div>
      </section>
    </main>
  );
}
