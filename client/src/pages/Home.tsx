import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Showreel } from "@/components/sections/Showreel";
import { Works } from "@/components/sections/Works";
import { Services } from "@/components/sections/Services";
import { Contacts } from "@/components/sections/Contacts";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Showreel />
      <Works />
      <Services />
      <Contacts />
    </main>
  );
}
