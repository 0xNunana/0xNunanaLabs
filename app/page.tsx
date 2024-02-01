import About from "@/sections/About";
import Hero from "@/sections/Hero";
import Ready from "@/sections/Ready";
import Services from "@/sections/Services";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
     <Hero/>
     <Services/>
     <About/>

<Ready/>
 
    </main>
  );
}
