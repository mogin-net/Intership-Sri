import "./App.css";
import heroImage from "./assets/hero4.jpg";
import tangkai from "./assets/8tangkai.jpg";
import bulu from "./assets/bulu.jpg";
import kawatbulu from "./assets/bulu6tangkai.jpg";
import fresh from "./assets/fresh.jpg";
import freshFlowerImage from "./assets/Freshflower.jpeg";
import satinImage from "./assets/satin.jpg";
import whiteLilyImage from "./assets/whitelily.jpeg";

type Collection = {
  title: string;
  image: string;
};

const collections: Collection[] = [
  {
    title: "Buket Satin",
    image: satinImage,
  },
  {
    title: "Buket Kawat Bulu",
    image: bulu,
  },
  {
    title: "Buket Fresh Flower",
    image: freshFlowerImage,
  },
];

type Product = {
  name: string;
  price: string;
  image: string;
};

const products: Product[] = [
  {
    name: "Buket Satin 8 Tangkai",
    price: "Rp 450.000",
    image: tangkai,
  },
  {
    name: "Kawat Bulu 6 Tangkai",
    price: "Rp 320.000",
    image: kawatbulu
  },
  {
    name: "Buket Fresh Flower L",
    price: "Rp 550.000",
    image: fresh,
  },
  {
    name: "White Lily",
    price: "Rp 480.000",
    image: whiteLilyImage,
  },
];

function App() {
  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="container navbar-content">
          <a href="#" className="logo">
            Amatera Florist
          </a>

          <nav className="desktop-nav">
            <a href="#collections">Categoris</a>
            <a href="#occasions">Occasions</a>
            <a href="#products">Best Sellers</a>
            <a href="#about">About Us</a>
          </nav>

          <div className="nav-actions">
            <button className="icon-button" aria-label="Favorites">
              ♡
            </button>

            <button className="icon-button cart-button" aria-label="Cart">
              🛍
              <span className="cart-count">0</span>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero container">
          <div className="hero-wrapper">
            <div className="hero-content">
              <span className="eyebrow">Amatera Florist</span>

              <h1>
                Elegansi dalam
                <span> Setiap Kelopak</span>
              </h1>

              <p>
                Buket bunga yang dirangkai dengan penuh perhatian untuk
                melengkapi setiap momen spesial dalam hidup Anda.
              </p>

              <div className="hero-actions">
                <button className="primary-button">Pesan Sekarang</button>

                <a href="#collections" className="secondary-button">
                  Lihat Kategori
                </a>
              </div>

              <div className="hero-info">
                <div>
                  <strong>100%</strong>
                  <span>Bunga Segar</span>
                </div>

                <div>
                  <strong>500+</strong>
                  <span>Pelanggan</span>
                </div>

                <div>
                  <strong>4.9</strong>
                  <span>Rating</span>
                </div>
              </div>
            </div>

            <div className="hero-image-wrapper">
              <img
                className="hero-image"
                src={heroImage}
                alt="Buket bunga romantis"
              />

              {/* <div className="floating-card">
                <span className="floating-icon">✿</span>

                <div>
                  <strong>Fresh Everyday</strong>
                  <span>Dirangkai setiap pagi</span>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        {/* KATEGORI */}
        <section className="collections container" id="collections">
          <div className="section-heading centered">
            <span className="eyebrow">Pilihan untuk setiap momen</span>
            <h2>Kategori Populer</h2>
            <p>
              Temukan rangkaian bunga yang tepat untuk menyampaikan perasaanmu.
            </p>
          </div>

          <div className="collection-grid">
            {collections.map((collection) => (
              <article className="collection-card" key={collection.title}>
                <img src={collection.image} alt={collection.title} />

                <div className="collection-overlay">
                  <span>Explore</span>
                  <h3>{collection.title}</h3>
                  <button aria-label={`Lihat ${collection.title}`}>→</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* BEST SELLERS */}
        <section className="products-section" id="products">
          <div className="container">
            <div className="section-heading products-heading">
              <div>
                <span className="eyebrow">Favorit pelanggan</span>
                <h2>Produk Terlaris</h2>
                <p>
                  Rangkaian yang paling dicintai pelanggan kami minggu ini.
                </p>
              </div>

              <a href="#" className="view-all">
                Lihat Semua
                <span>→</span>
              </a>
            </div>

            <div className="product-grid">
              {products.map((product) => (
                <article className="product-card" key={product.name}>
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />

                    <button
                      className="favorite-button"
                      aria-label={`Favorite ${product.name}`}
                    >
                      ♡
                    </button>

                    <span className="product-badge">Best Seller</span>
                  </div>

                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>

                    <button className="add-cart-button">
                      <span>Tambah ke Keranjang</span>
                      <span>＋</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className="why-us container" id="about">
          <div className="section-heading centered">
            <span className="eyebrow">Tentang pelayanan kami</span>
            <h2>Mengapa Memilih Kami?</h2>
            <p>
              Kami memperhatikan setiap detail agar bunga sampai dengan indah
              di tangan Anda.
            </p>
          </div>

          <div className="feature-grid">
            <article className="feature-card">
              <div className="feature-icon">✿</div>

              <h3>Bunga Segar</h3>

              <p>
                Kami hanya menggunakan bunga berkualitas terbaik yang dipilih
                setiap pagi.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">✎</div>

              <h3>Desain Custom</h3>

              <p>
                Setiap buket dapat dirangkai khusus sesuai keinginan dan momen
                spesial Anda.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">♡</div>

              <h3>Dibuat dengan Cinta</h3>

              <p>
                Setiap rangkaian dibuat dengan perhatian pada detail dan sentuhan
                personal.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">⌁</div>

              <h3>Pengiriman Cepat</h3>

              <p>
                Layanan pengiriman yang aman agar bunga tetap segar sampai ke
                penerima.
              </p>
            </article>
          </div>
        </section>

        {/* PROMO */}
        <section className="promo container">
          <div className="promo-wrapper">
            <div className="promo-decoration promo-decoration-left">
              ✿
            </div>

            <div className="promo-content">
              <span className="eyebrow">Buat momen lebih berarti</span>

              <h2>Kirim Bunga, Kirim Kebahagiaan.</h2>

              <p>
                Temukan rangkaian bunga yang sempurna untuk seseorang yang
                spesial.
              </p>

              <button className="primary-button">Temukan Buketmu</button>
            </div>

            <div className="promo-decoration promo-decoration-right">
              ❀
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a className="logo" href="#">
              Amatera Florist
            </a>

            <p>
              Menghadirkan keindahan bunga ke dalam setiap momen berharga Anda.
            </p>

            <div className="socials">
              <a href="#" aria-label="Instagram">
                ig
              </a>
              <a href="#" aria-label="Facebook">
                f
              </a>
              <a href="#" aria-label="Tiktok">
                ♪
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Explore</h4>

            <a href="#collections">Categoris</a>
            <a href="#">Occasions</a>
            <a href="#products">Best Sellers</a>
            <a href="#about">About Us</a>
          </div>

          <div className="footer-column">
            <h4>Help</h4>

            <a href="#">Contact Us</a>
            <a href="#">Shipping Policy</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>

          <div className="footer-column">
            <h4>Hubungi Kami</h4>

            <p>Tabanan, Bali</p>
            <p>+62 812 3456 7890</p>
            <p>hello@amateraflorist.id</p>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 Amatera Florist.</span>
          <span>Handcrafted with ♡</span>
        </div>
      </footer>
    </div>
  );
}

export default App;