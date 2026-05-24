import { motion } from 'framer-motion';

/* DESIGN SYSTEM: Brutalist Minimalism
 * Hero section with editorial header and large-scale typography
 * Sets the tone: gallery-like, refined, collector-focused
 */

export default function Hero() {
  return (
    <div className="w-full bg-background min-h-screen flex items-center">
      <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left: Editorial Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <p className="text-body-md text-foreground/60 uppercase tracking-widest mb-4">
                Independent Collective
              </p>
              <h1 className="text-display-xl leading-tight mb-6">
                Handcrafted Stoneware for Collectors
              </h1>
              <p className="text-body-lg text-foreground/70 max-w-md">
                Each ceramic piece is individually thrown, glazed, and fired. 
                We celebrate the imperfections that make handmade objects beautiful.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-4 border-brutalist bg-foreground text-background font-semibold text-body-md hover:bg-background hover:text-foreground transition-colors duration-200">
                Browse Collection
              </button>
              <button className="px-8 py-4 border-brutalist-thin text-foreground font-semibold text-body-md hover:border-brutalist transition-colors duration-200">
                About Us
              </button>
            </div>
          </motion.div>

          {/* Right: Typography Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 border-brutalist p-8 md:p-12"
          >
            <div>
              <p className="text-body-sm text-foreground/50 uppercase tracking-widest mb-2">
                Typography System
              </p>
              <h2 className="text-display-md mb-4">Display Serif + Space Mono</h2>
            </div>

            {/* Typography Scale Examples */}
            <div className="space-y-6 border-t-brutalist-thin pt-6">
              <div>
                <p className="text-body-sm text-foreground/50 mb-2">Display XL (4rem)</p>
                <p className="text-display-xl">Pottery</p>
              </div>
              <div>
                <p className="text-body-sm text-foreground/50 mb-2">Display LG (3rem)</p>
                <p className="text-display-lg">Collective</p>
              </div>
              <div>
                <p className="text-body-sm text-foreground/50 mb-2">Display MD (2rem)</p>
                <p className="text-display-md">Stoneware</p>
              </div>
              <div>
                <p className="text-body-sm text-foreground/50 mb-2">Body LG (1.125rem)</p>
                <p className="text-body-lg">Handcrafted ceramic pieces</p>
              </div>
            </div>

            {/* Color Palette */}
            <div className="border-t-brutalist-thin pt-6">
              <p className="text-body-sm text-foreground/50 uppercase tracking-widest mb-4">
                Color Palette
              </p>
              <div className="grid grid-cols-4 gap-2">
                <div className="space-y-2">
                  <div className="w-full h-12 border-brutalist-thin bg-black" />
                  <p className="text-body-sm text-center">Black</p>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-12 border-brutalist-thin bg-white" />
                  <p className="text-body-sm text-center">Off-White</p>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-12 border-brutalist-thin" style={{ backgroundColor: '#8B8680' }} />
                  <p className="text-body-sm text-center">Grey</p>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-12 border-brutalist-thin" style={{ backgroundColor: '#C85A3A' }} />
                  <p className="text-body-sm text-center">Terracotta</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
