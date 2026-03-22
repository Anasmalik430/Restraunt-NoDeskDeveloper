/**
 * THE TEMPLATE CENTRAL CONFIG
 * Edit this file to change the restaurant's identity, branding, and assets.
 */

export const siteConfig = {
  name: "Lumière Gastronomy",
  tagline: "The Art of Elevating Taste",
  description:
    "Experience a cinematic culinary journey where every dish tells a story of passion and precision.",

  // Design Theme
  theme: {
    colors: {
      primary: "#D4AF37", // Gold
      secondary: "#1A1A1A", // Onyx
      accent: "#E9E9E9", // Silver Mist
      background: "#0D0D0D", // Deep Charcoal
    },
    fonts: {
      sans: "Inter, sans-serif",
      display: "Playfair Display, serif",
    },
  },

  // 3D Assets
  assets: {
    mainModel: "/models/signature-dish.glb", // Path to the 3D model
    fallbackImage: "/images/hero-fallback.jpg",
  },

  // Navigation
  navLinks: [
    { name: "Experience", href: "#experience" },
    { name: "Menu", href: "#menu" },
    { name: "Reserve", href: "#reserve" },
  ],

  // Content Sections
  hero: {
    title: "Culinary Excellence",
    subtitle: "Redefined.",
    cta: "Book Your Table",
  },

  menu: [
    { id: 1, name: "Truffle Linguine", price: "$34", category: "Pasta" },
    { id: 2, name: "Wagyu Ribeye", price: "$82", category: "Grill" },
    { id: 3, name: "Saffron Risotto", price: "$28", category: "Rice" },
  ],

  contact: {
    address: "123 Gourmet Ave, Foodie City",
    phone: "+91 9690170502",
    email: "hello@lumiere.com",
  },
};
