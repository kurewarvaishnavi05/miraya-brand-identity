export interface CategoryMeta {
  title: string;
  slug: string;
  description: string;
  bestFor: string[];
  subCollections: string[];
  heroImage: string;
}

export const categoryData: Record<string, CategoryMeta> = {
  lehenga: {
    title: 'Lehenga',
    slug: 'lehenga',
    description: 'Discover our exquisite collection of handcrafted Lehengas, where traditional artistry meets contemporary elegance. Designed for the modern bride and bridesmaid.',
    bestFor: ['Weddings', 'Engagements', 'Receptions'],
    subCollections: ['Bridal Lehenga', 'Designer Lehenga', 'Party Wear Lehenga'],
    heroImage: '/categories/lehenga.jpg',
  },
  saree: {
    title: 'Saree',
    slug: 'saree',
    description: 'Drape yourself in luxury with our curated selection of fine sarees. Experience the grace of pure silk, intricate banarasi weaves, and delicate organza.',
    bestFor: ['Weddings', 'Festivals', 'Parties'],
    subCollections: ['Silk Saree', 'Banarasi Saree', 'Organza Saree', 'Designer Saree'],
    heroImage: '/categories/saree.jpg',
  },
  kurti: {
    title: 'Kurti',
    slug: 'kurti',
    description: 'Elevate your everyday style with our premium Kurtis. Offering the perfect blend of comfort and sophisticated design for any setting.',
    bestFor: ['Daily Wear', 'Office', 'Casual', 'Festive'],
    subCollections: ['Cotton Kurti', 'Printed Kurti', 'Embroidered Kurti'],
    heroImage: '/categories/kurti.jpg',
  },
  'anarkali-suit': {
    title: 'Anarkali Suit',
    slug: 'anarkali-suit',
    description: 'Embrace royal elegance with our Anarkali Suits. Flowing silhouettes and rich embroidery that capture the essence of festive grandeur.',
    bestFor: ['Wedding Functions', 'Festivals'],
    subCollections: ['Floor Length', 'Embroidered', 'Party Wear'],
    heroImage: '/categories/anarkali.jpg',
  },
  'sharara-suit': {
    title: 'Sharara Suit',
    slug: 'sharara-suit',
    description: 'Make a statement with our stunning Sharara Suits. The perfect combination of vintage charm and festive glamour.',
    bestFor: ['Mehendi', 'Sangeet', 'Eid'],
    subCollections: ['Designer Sharara', 'Mirror Work', 'Festive Collection'],
    heroImage: '/categories/sharara.jpg',
  },
  'salwar-suit': {
    title: 'Salwar Suit',
    slug: 'salwar-suit',
    description: 'Timeless comfort and effortless grace. Explore our beautifully crafted Salwar Suits designed for your everyday elegance.',
    bestFor: ['Daily Wear', 'Festive Wear'],
    subCollections: ['Cotton', 'Chanderi', 'Party Wear'],
    heroImage: '/categories/salwar.jpg',
  },
  'indo-western-gown': {
    title: 'Indo-Western Gown',
    slug: 'indo-western-gown',
    description: 'Redefine evening wear with our Indo-Western Gowns. A breathtaking fusion of global silhouettes and Indian craftsmanship.',
    bestFor: ['Reception', 'Cocktail Party'],
    subCollections: ['Designer Gowns', 'Evening Wear', 'Fusion Collection'],
    heroImage: '/categories/gown.jpg',
  },
  'co-ord-set': {
    title: 'Co-ord Set',
    slug: 'co-ord-set',
    description: 'Chic, modern, and perfectly matched. Our luxury Co-ord Sets offer sophisticated ease for the fashion-forward woman.',
    bestFor: ['Casual', 'Travel', 'Smart Casual'],
    subCollections: ['Printed', 'Linen', 'Luxury Co-ord Sets'],
    heroImage: '/categories/coord.jpg',
  },
};
