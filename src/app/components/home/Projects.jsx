import React from 'react';

// Project Data Array
const projectsData = [
  {
    title: "Vehicle Expense Management",
    description: "A comprehensive system to track and manage vehicle-related expenses effectively.",
    tech: ["React", "Tailwind CSS", "Node.js"],
    link: "#"
  },
  {
    title: "Movie Explorer",
    description: "A dynamic movie application to browse, search, and discover the latest films.",
    tech: ["React", "API Integration", "CSS"],
    link: "#"
  },
  {
    title: "Smart Track",
    description: "An intuitive tracking application designed for seamless monitoring and reporting.",
    tech: ["Next.js", "Tailwind CSS", "Docker"],
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative min-h-screen  text-white py-24 px-6  z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="group p-6 bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-blue-500 transition-colors duration-300">
              
              {/* Project Image Placeholder */}
              <div className="h-48 w-full bg-zinc-800 rounded-xl mb-6 overflow-hidden flex items-center justify-center text-zinc-500">
                Project Snapshot
              </div>
              
              {/* Project Info */}
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
              <p className="text-gray-400 mb-6">{project.description}</p>
              
              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-xs font-medium text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Project Link */}
              <a href={project.link} className="text-sm font-bold tracking-wide uppercase hover:text-blue-500 transition-colors inline-flex items-center gap-2">
                View Project <span>&rarr;</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;