"use client";
import { useEffect, useState } from "react";
import { HeroSection } from "./Home/HeroSection";
import { LoaderOneDemo } from "@/components/ui/LoaderOneDemo";
import { Pointer } from "@/components/magicui/pointer";



export default function Home() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate a loading delay (e.g. fetching API, animations, etc.)
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <LoaderOneDemo />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100">
     <Pointer className="fill-blue-500" />
      <HeroSection />
     
    </main>
  );
}
