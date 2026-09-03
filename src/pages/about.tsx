import "./about.css";
import heroImage from "../assets/hero4.jpg";
import storyImage from "../assets/fresh.jpg";


function About() {
  return (
    <div className="about-page">

      <main className="about-main">
        <div className="about-aura" aria-hidden="true">
          <span className="aura aura-primary" />
          <span className="aura aura-secondary" />
        </div>

        {/* Hero */}
        <section className="about-section about-hero container-about">
          <div className="about-hero-grid">
            <div className="about-hero-copy">
              <div className="about-eyebrow-row">
                <span className="about-eyebrow-line" />
                <span className="about-eyebrow">About Amatera</span>
              </div>

              <h1 className="about-hero-title">
                Flowers Crafted with a <em>Story.</em>     
              </h1>

              <p className="about-lead">
                We believe every flower holds a story, and every cherished
                moment deserves to be celebrated with timeless botanical
                elegance.
              </p>
            </div>

            <div className="about-hero-visual">
              <span className="about-decor about-decor-one" aria-hidden="true" />
              <span className="about-decor about-decor-two" aria-hidden="true" />

              <div className="about-image-frame">
                <div className="about-image-wrap">
                  <img
                    src={heroImage}
                    alt="Bouquet bunga romantis Amatera Florist"
                    className="about-main-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section id="cerita" className="about-section container-about about-story-section">
          <div className="about-section-heading">
            <h2>Our Story</h2>
            <div className="about-heading-line" />
          </div>

          <div className="about-story-grid">
            <div className="about-story-visual">
              <div className="about-story-image-wrap">
                <img
                  src={storyImage}
                  alt="Rangkaian bunga Amatera Florist"
                  className="about-story-image"
                />
              </div>

              
            </div>

            <div className="about-story-copy">
              <h3>
                Amatera Florist was born from a yearning for a timeless
                language of love.
              </h3>
              <p>
                Born out of a deep reverence for botanical beauty and a
                heartfelt desire to help people express their deepest
                emotions, Amatera serves as a messenger for unspoken love,
                gratitude, and heartfelt warmth.
              </p>
              <p>
                Every stem is hand-selected at dawn while morning dew still
                graces the petals. Artfully arranged by our florists with
                gentle patience, serene pastel harmonies, and a poetic touch,
                ensuring each bloom carries its own distinct soul.
              </p>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="container-about about-quote-section">
          <div className="about-quote-card">
            <span className="about-quote-mark" aria-hidden="true">“</span>
            <blockquote>
              Every flower carries a story, a whisper of love, and an
              everlasting memory.
            </blockquote>
            <div className="about-quote-line" />
            <span className="about-quote-brand">Amatera Florist </span>
            <span className="about-quote-caption">
              Curators of Botanical Elegance • Est. 2026
            </span>
          </div>
        </section>

        {/* FOOTER */}
      </main>

      <footer className="about-footer">
        <div className="container-about about-footer-grid">
          <div className="about-footer-brand">
            <h3>Amatera Florist</h3>
            <p>
              Artisanal floral arrangements and botanical gifts crafted daily
              with fresh blooms.
            </p>
          </div>

          <div className="about-footer-column">
            <h4>Boutique</h4>
            <a href="/categories">Categories</a>
            <a href="/products">Best Sellers</a>
            <a href="/occasions">Occasions</a>
          </div>

          <div className="about-footer-column">
            <h4>Customer Care</h4>
            <a href="#">Care Guide</a>
            <a href="#">Delivery &amp; Shipping</a>
            <a href="#">Contact Atelier</a>
          </div>

          <div className="about-footer-column">
            <h4>Contact</h4>
            <span>Tabanan, Bali</span>
            <span>+62 812 3456 7890</span>
            <span>hello@amateraflorist.com</span>
          </div>
        </div>

        <div className="container-about about-footer-bottom">
          <span>© 2026 Amatera Florist.</span>
          <span>Handcrafted with ♡</span>
        </div>
      </footer>
    </div>
  );
}

export default About;
