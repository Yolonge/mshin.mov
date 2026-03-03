import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get(api.portfolio.list.path, async (_req, res) => {
    let items = await storage.getPortfolioItems();
    
    // Seed initial data if empty
    if (items.length === 0) {
      await seedDatabase();
      items = await storage.getPortfolioItems();
    }
    
    res.json(items);
  });

  return httpServer;
}

async function seedDatabase() {
  const seedItems = [
    {
      title: "Commercial for Tech Startup",
      description: "Fast-paced dynamic edit with kinetic typography.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnailUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&auto=format&fit=crop"
    },
    {
      title: "Travel Vlog - Japan",
      description: "Cinematic color grading and smooth transitions.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnailUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&auto=format&fit=crop"
    },
    {
      title: "Music Video",
      description: "Creative visual effects and beat-synced cuts.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnailUrl: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800&auto=format&fit=crop"
    },
    {
      title: "Corporate Interview",
      description: "Clean, professional multicam edit.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnailUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop"
    },
    {
      title: "Gaming Highlights",
      description: "High energy montage with sound design.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnailUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop"
    },
    {
      title: "Documentary Short",
      description: "Narrative-driven edit with emotional pacing.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnailUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&auto=format&fit=crop"
    }
  ];

  for (const item of seedItems) {
    await storage.createPortfolioItem(item);
  }
}
