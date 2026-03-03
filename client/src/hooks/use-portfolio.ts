import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { type PortfolioItem } from "@shared/schema";

// Fallback mock data in case the database is empty to ensure 6 cards show
const MOCK_PORTFOLIO: PortfolioItem[] = [
  {
    id: 1,
    title: "Cyberpunk City Ad",
    description: "Dynamic color grading & VFX for an urban lifestyle brand.",
    videoUrl: "https://youtube.com/embed/placeholder1",
    thumbnailUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&q=80",
  },
  {
    id: 2,
    title: "Neon Nights Music Video",
    description: "Fast-paced rhythmic editing with custom transitions.",
    videoUrl: "https://youtube.com/embed/placeholder2",
    thumbnailUrl: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&q=80",
  },
  {
    id: 3,
    title: "Tech Startup Showreel",
    description: "Clean, minimal motion graphics and storytelling.",
    videoUrl: "https://youtube.com/embed/placeholder3",
    thumbnailUrl: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80",
  },
  {
    id: 4,
    title: "Gaming Tournament Promo",
    description: "High-energy hype reel with heavy sound design.",
    videoUrl: "https://youtube.com/embed/placeholder4",
    thumbnailUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
  },
  {
    id: 5,
    title: "Automotive Commercial",
    description: "Cinematic drone footage editing and color correction.",
    videoUrl: "https://youtube.com/embed/placeholder5",
    thumbnailUrl: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
  },
  {
    id: 6,
    title: "Fashion Week Recap",
    description: "Editorial style montage matching the runway tempo.",
    videoUrl: "https://youtube.com/embed/placeholder6",
    thumbnailUrl: "https://images.unsplash.com/photo-1508243529287-e21914733111?w=800&q=80",
  },
];

export function usePortfolio() {
  return useQuery({
    queryKey: [api.portfolio.list.path],
    queryFn: async () => {
      try {
        const res = await fetch(api.portfolio.list.path, { credentials: "include" });
        if (!res.ok) throw new Error("Failed to fetch portfolio items");
        const data = await res.json();
        const parsed = api.portfolio.list.responses[200].parse(data);
        
        // Return real data if available, otherwise return mock data
        return parsed.length > 0 ? parsed : MOCK_PORTFOLIO;
      } catch (error) {
        console.warn("Failed to fetch from API, using mock data", error);
        return MOCK_PORTFOLIO;
      }
    },
  });
}
