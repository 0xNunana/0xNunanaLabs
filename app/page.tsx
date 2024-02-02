import About from "@/sections/About";
import Approach from "@/sections/Approach";
import Hero from "@/sections/Hero";
import Partners from "@/sections/Partners";
import Projects from "@/sections/Projects";
import Ready from "@/sections/Ready";
import Services from "@/sections/Services";


export default function Home() {
  return (
    <main className="">
     <Hero/>
     <Services/>
     <About/>
     <Partners/>
     <Projects/>
<Approach/>
<Ready/>
 
    </main>
  );
}
