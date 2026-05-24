import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import ClayGlazeSelector from '@/components/ClayGlazeSelector';

/* DESIGN SYSTEM: Brutalist Minimalism with Typographic Hierarchy
 * Single-page editorial layout for pottery collective
 * Features: Hero section, product grid, interactive glaze selector
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-background border-b-brutalist-thin">
        <div className="container py-6 flex items-center justify-between">
          <h1 className="text-display-md">Pottery Collective</h1>
          <nav className="hidden md:flex gap-8">
            <a href="#collection" className="text-body-md font-semibold hover:text-foreground/70 transition-colors">
              Collection
            </a>
            <a href="#glazes" className="text-body-md font-semibold hover:text-foreground/70 transition-colors">
              Glazes
            </a>
            <a href="#about" className="text-body-md font-semibold hover:text-foreground/70 transition-colors">
              About
            </a>
            <a href="#contact" className="text-body-md font-semibold hover:text-foreground/70 transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Product Grid Section */}
        <section id="collection" className="border-t-brutalist-thin">
          <ProductGrid />
        </section>

        {/* Clay Glaze Selector Section */}
        <section id="glazes" className="border-t-brutalist-thin">
          <ClayGlazeSelector />
        </section>

        {/* About Section */}
        <section id="about" className="border-t-brutalist-thin bg-background py-12 md:py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
              <div>
                <h2 className="text-display-lg mb-6">About the Collective</h2>
                <div className="space-y-4 text-body-md text-foreground/70">
                  <p>
                    Founded in 2020, our collective brings together independent ceramic artists 
                    dedicated to handcrafted stoneware. Each member maintains their own studio practice 
                    while collaborating on shared vision and values.
                  </p>
                  <p>
                    We believe in transparency, sustainability, and the inherent beauty of handmade objects. 
                    Every piece carries the maker's hand and intention.
                  </p>
                </div>
              </div>
              <div className="border-brutalist p-8 md:p-12">
                <h3 className="text-display-md mb-6">Our Process</h3>
                <ol className="space-y-4 text-body-md">
                  <li className="flex gap-4">
                    <span className="font-semibold min-w-fit">01.</span>
                    <span>Hand-throw each piece on the wheel</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-semibold min-w-fit">02.</span>
                    <span>Trim and refine the form</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-semibold min-w-fit">03.</span>
                    <span>Apply custom glazes by hand</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-semibold min-w-fit">04.</span>
                    <span>Fire in reduction kiln at 2300°F</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-semibold min-w-fit">05.</span>
                    <span>Inspect and prepare for shipment</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="border-t-brutalist-thin bg-foreground text-background py-12 md:py-20">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="text-display-lg mb-6">Get in Touch</h2>
              <p className="text-body-lg mb-8">
                Interested in commissioning a piece or learning more about our work? 
                We'd love to hear from you.
              </p>
              <div className="space-y-4 text-body-md mb-8">
                <p>
                  <strong>Email:</strong> hello@potterycollective.com
                </p>
                <p>
                  <strong>Studio Hours:</strong> Wednesday – Sunday, 10am – 6pm PST
                </p>
                <p>
                  <strong>Location:</strong> Oakland, California
                </p>
              </div>
              <button className="px-8 py-4 border-2 border-background bg-background text-foreground font-semibold text-body-md hover:bg-foreground hover:text-background transition-colors duration-200">
                Send Message
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-brutalist-thin bg-background py-8 md:py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b-brutalist-thin">
            <div>
              <h3 className="text-display-md mb-4">Pottery Collective</h3>
              <p className="text-body-sm text-foreground/60">
                Handcrafted stoneware for collectors and curators.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-body-md mb-3">Navigation</h4>
              <ul className="space-y-2 text-body-sm text-foreground/60">
                <li><a href="#collection" className="hover:text-foreground transition-colors">Collection</a></li>
                <li><a href="#glazes" className="hover:text-foreground transition-colors">Glazes</a></li>
                <li><a href="#about" className="hover:text-foreground transition-colors">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-body-md mb-3">Connect</h4>
              <ul className="space-y-2 text-body-sm text-foreground/60">
                <li><a href="#" className="hover:text-foreground transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Email</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-body-sm text-foreground/50">
            <p>&copy; 2024 Pottery Collective. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
