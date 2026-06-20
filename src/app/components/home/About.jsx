import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen  text-white py-24 px-6 flex items-center justify-center z-1"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
          <p className="text-lg text-gray-400 leading-relaxed">
            I am a passionate Frontend Developer dedicated to building highly
            performant and visually stunning web applications. I love turning
            complex problems into simple, beautiful, and intuitive interface
            designs.
          </p>

          {/* Skills / Tech Stack */}
          <div className="pt-4">
            <h3 className="text-xl font-semibold mb-4">
              Technologies I work with:
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "Next.js",
                "Node.js",
                "Tailwind CSS",
                "Nginx",
                "Docker",
                "GitHub",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-zinc-800 text-gray-300 rounded-lg text-sm font-medium border border-zinc-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Image Placeholder */}
        <div className="relative h-100 w-full rounded-2xl overflow-hidden bg-zinc-800 border border-zinc-700 flex items-center justify-center group">
          <span className="text-zinc-500 font-medium group-hover:scale-110 transition-transform duration-500">
            <Image
              src="/Images/mypf.jpg"
              alt="Profile"
              fill
              className="object-cover"
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;
