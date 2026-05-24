import { motion } from 'framer-motion';

/* DESIGN SYSTEM: Brutalist Minimalism
 * Editorial grid for stoneware listings with asymmetric arrangement
 * High-contrast typography and precision borders
 */

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  featured?: boolean;
}

const PRODUCTS: Product[] = [
  {
    id: 'vase-01',
    name: 'Cylindrical Vessel',
    category: 'Vases',
    description: 'Hand-thrown stoneware with subtle variations in wall thickness',
    price: '$280',
    featured: true
  },
  {
    id: 'bowl-01',
    name: 'Nested Bowls',
    category: 'Bowls',
    description: 'Set of three graduated bowls in complementary glazes',
    price: '$320'
  },
  {
    id: 'vase-02',
    name: 'Tapered Form',
    category: 'Vases',
    description: 'Organic asymmetrical shape with natural clay body',
    price: '$240'
  },
  {
    id: 'plate-01',
    name: 'Dinner Plate',
    category: 'Tableware',
    description: 'Functional stoneware with generous rim and subtle foot',
    price: '$65'
  },
  {
    id: 'vessel-01',
    name: 'Sculptural Vessel',
    category: 'Vessels',
    description: 'Statement piece exploring form and negative space',
    price: '$450',
    featured: true
  },
  {
    id: 'mug-01',
    name: 'Handmade Mug',
    category: 'Tableware',
    description: 'Ergonomic form with comfortable handle and generous capacity',
    price: '$48'
  },
  {
    id: 'vase-03',
    name: 'Bulbous Form',
    category: 'Vases',
    description: 'Rounded body with narrow neck, perfect for single stems',
    price: '$195'
  },
  {
    id: 'vessel-02',
    name: 'Textured Vessel',
    category: 'Vessels',
    description: 'Surface carved with geometric patterns, raw clay finish',
    price: '$380'
  }
];

export default function ProductGrid() {
  return (
    <div className="w-full bg-background py-12 md:py-20">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 border-b-brutalist-thin pb-8">
          <h2 className="text-display-lg mb-4">Stoneware Collection</h2>
          <p className="text-body-lg text-foreground/70 max-w-2xl">
            Each piece is individually crafted and fired, resulting in unique variations. 
            Our collection spans functional tableware to sculptural vessels.
          </p>
        </div>

        {/* Asymmetric Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max">
          {PRODUCTS.map((product, index) => {
            // Determine grid span for featured items
            const isFeatured = product.featured;
            const isFirstFeatured = isFeatured && index === 0;
            const isSecondFeatured = isFeatured && index === 4;

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true, margin: '-100px' }}
                className={`${
                  isFirstFeatured ? 'md:col-span-2 md:row-span-2' : ''
                } ${
                  isSecondFeatured ? 'md:col-span-2' : ''
                } group cursor-pointer`}
              >
                <div className="border-brutalist p-6 h-full flex flex-col hover-scale-subtle">
                  {/* Product Image Placeholder */}
                  <div className="w-full bg-grey/10 border-brutalist-thin mb-6 flex items-center justify-center"
                    style={{
                      aspectRatio: isFirstFeatured ? '1 / 1.2' : '1 / 1'
                    }}
                  >
                    <span className="text-foreground/30 text-body-md">
                      {product.category}
                    </span>
                  </div>

                  {/* Product Information */}
                  <div className="flex-1 flex flex-col">
                    <div className="mb-3">
                      <p className="text-body-sm text-foreground/50 uppercase tracking-widest mb-2">
                        {product.category}
                      </p>
                      <h3 className="text-display-md mb-2">
                        {product.name}
                      </h3>
                    </div>

                    <p className="text-body-md text-foreground/70 mb-6 flex-1">
                      {product.description}
                    </p>

                    {/* Price and Action */}
                    <div className="border-t-brutalist-thin pt-4 flex items-center justify-between">
                      <span className="text-display-md font-semibold">
                        {product.price}
                      </span>
                      <button className="px-4 py-2 border-brutalist-thin text-body-sm font-semibold hover:border-brutalist transition-colors duration-200">
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Grid Footer */}
        <div className="mt-16 border-t-brutalist-thin pt-8">
          <p className="text-body-md text-foreground/60 mb-6">
            All pieces are one-of-a-kind. Availability updates weekly.
          </p>
          <button className="px-8 py-4 border-brutalist bg-foreground text-background font-semibold text-body-md hover:bg-background hover:text-foreground transition-colors duration-200">
            Explore Full Catalog
          </button>
        </div>
      </div>
    </div>
  );
}
