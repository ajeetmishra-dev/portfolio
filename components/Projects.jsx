"use client";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive personal portfolio built with Next.js and Tailwind CSS featuring dark theme, glassmorphism UI, and smooth animations.",
    tags: ["Next.js", "Tailwind CSS", "React"],
    github: "https://github.com/ajeetmishra",
    gradient: "from-purple-500/20 to-pink-500/20",
    borderGlow: "group-hover:shadow-purple-500/10",
  },
  {
    title: "Weather App",
    description:
      "A weather application that fetches real-time data from a weather API, displaying current conditions and forecasts with a clean interface.",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    github: "https://github.com/ajeetmishra",
    gradient: "from-cyan-500/20 to-blue-500/20",
    borderGlow: "group-hover:shadow-cyan-500/10",
  },
  {
    title: "Task Manager",
    description:
      "A to-do list application with features like task creation, completion tracking, and local storage persistence using vanilla JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/ajeetmishra",
    gradient: "from-green-500/20 to-emerald-500/20",
    borderGlow: "group-hover:shadow-green-500/10",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-pink-600/5 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">
            My Work
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`group relative rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm overflow-hidden hover:border-white/[0.12] transition-all duration-500 hover:shadow-2xl ${project.borderGlow} hover:-translate-y-3`}
            >
              {/* Image / Preview area */}
              <div
                className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
              >
                {/* Code-like preview */}
                <div className="bg-[#0d0d1a]/80 backdrop-blur rounded-lg p-4 m-4 font-mono text-xs w-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="ml-2 text-gray-500 text-[10px]">
                      {project.title.toLowerCase().replace(/\s/g, "-")}.js
                    </span>
                  </div>
                  <p className="text-gray-500">{"// " + project.title}</p>
                  <p>
                    <span className="text-purple-400">export</span>{" "}
                    <span className="text-cyan-400">default</span>{" "}
                    <span className="text-yellow-300">function</span>
                    <span className="text-green-400">()</span>{" "}
                    <span className="text-white">{"{"}</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-purple-400">return</span>{" "}
                    <span className="text-cyan-400">&lt;App /&gt;</span>
                  </p>
                  <p>
                    <span className="text-white">{"}"}</span>
                  </p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300 pt-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  View on GitHub
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
