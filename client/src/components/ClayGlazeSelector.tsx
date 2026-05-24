import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* DESIGN SYSTEM: Brutalist Minimalism
 * Interactive Clay Glaze Selector with three glaze options
 * Glaze colors: Obsidian Noir, Chalky Stone, Terracotta Sand
 * Interaction: Smooth transitions, high-contrast visual feedback
 */

interface Glaze {
  id: string;
  name: string;
  hex: string;
  description: string;
}

const GLAZES: Glaze[] = [
  {
    id: 'obsidian',
    name: 'Obsidian Noir',
    hex: '#1a1a18',
    description: 'Deep, lustrous black with subtle depth'
  },
  {
    id: 'chalky',
    name: 'Chalky Stone',
    hex: '#E8E4DF',
    description: 'Soft, matte finish with natural texture'
  },
  {
    id: 'terracotta',
    name: 'Terracotta Sand',
    hex: '#C85A3A',
    description: 'Warm earth tone with organic warmth'
  }
];

export default function ClayGlazeSelector() {
  const [selectedGlaze, setSelectedGlaze] = useState<string>('obsidian');
  const currentGlaze = GLAZES.find(g => g.id === selectedGlaze) || GLAZES[0];

  return (
    <div className="w-full bg-background py-12 md:py-16">
      <div className="container">
        {/* Section Header */}
        <div className="mb-12 border-b-brutalist-thin pb-8">
          <h2 className="text-display-md mb-2">Clay Glaze Selector</h2>
          <p className="text-body-md text-foreground/70">
            Explore our signature glaze finishes. Each ceramic piece is available in these carefully curated options.
          </p>
        </div>

        {/* Glaze Selection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {GLAZES.map((glaze) => (
            <button
              key={glaze.id}
              onClick={() => setSelectedGlaze(glaze.id)}
              className={`relative p-6 text-left transition-all duration-200 ${
                selectedGlaze === glaze.id
                  ? 'border-brutalist bg-foreground/5'
                  : 'border-brutalist-thin hover:border-brutalist'
              }`}
            >
              {/* Glaze Color Swatch */}
              <div
                className="w-full h-32 mb-4 border-brutalist-thin"
                style={{ backgroundColor: glaze.hex }}
              />

              {/* Glaze Name */}
              <h3 className="text-display-md mb-2 text-sm leading-tight">
                {glaze.name}
              </h3>

              {/* Glaze Description */}
              <p className="text-body-sm text-foreground/60">
                {glaze.description}
              </p>

              {/* Selection Indicator */}
              <AnimatePresence>
                {selectedGlaze === glaze.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-3 right-3 w-4 h-4 border-2 border-foreground"
                  />
                )}
              </AnimatePresence>
            </button>
          ))}
        </div>

        {/* Glaze Preview Section */}
        <div className="border-brutalist p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Preview Visual */}
            <div className="flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentGlaze.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="w-48 h-48 border-brutalist-thin"
                  style={{ backgroundColor: currentGlaze.hex }}
                />
              </AnimatePresence>
            </div>

            {/* Preview Information */}
            <div className="flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentGlaze.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-display-lg mb-4">{currentGlaze.name}</h3>
                  <p className="text-body-lg mb-6 text-foreground/80">
                    {currentGlaze.description}
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b-brutalist-thin pb-3">
                      <span className="text-body-md font-semibold">Hex Code</span>
                      <code className="font-mono text-body-md">{currentGlaze.hex}</code>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-body-md font-semibold">Finish</span>
                      <span className="text-body-md text-foreground/70">
                        {currentGlaze.id === 'obsidian' && 'Lustrous'}
                        {currentGlaze.id === 'chalky' && 'Matte'}
                        {currentGlaze.id === 'terracotta' && 'Warm'}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-body-md text-foreground/70 mb-6">
            Each glaze is applied by hand to ensure unique character in every piece.
          </p>
          <button className="px-8 py-4 border-brutalist bg-foreground text-background font-semibold text-body-md hover:bg-background hover:text-foreground transition-colors duration-200">
            View Catalog
          </button>
        </div>
      </div>
    </div>
  );
}
