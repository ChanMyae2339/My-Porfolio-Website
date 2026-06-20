import Link from "next/link";
import PixelSnow from "../app/components/PixelSnow";
import Navbar from "../app/components/home/Navbar";
import Hero from "../app/components/home/Hero";
import About from "../app/components/home/About";
import Projects from "../app/components/home/Projects";

export default function Home() {
  return (
    // Wrapper for the whole page
    <div className="relative min-h-screen bg-black font-sans text-white overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      {/* Background Animation - Fixed to the back with z-index 0 */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <PixelSnow
          color="#ffffff"
          flakeSize={0.01}
          minFlakeSize={1.25}
          pixelResolution={200}
          speed={1.25}
          density={0.3}
          direction={125}
          brightness={1}
          depthFade={8}
          farPlane={20}
          gamma={0.4545}
          variant="square"
        />
      </div>

      {/* Main Content - Relative positioning to sit on top of the background */}
      <div className="flex items-center flex-col justify-between px-8 py-6 w-full max-w-7xl mx-auto"></div>
    </div>
  );
}
