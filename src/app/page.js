import Image from "next/image";
import Hero from "@/components/Hero";
import Project from "@/components/Project";

export default function Home() {
  return (
    <div >
      <div className="container mx-auto">
        <Hero />
        <Project />
      </div>
     
    </div>
  );
}
