"use client";

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">
            Get to Know Me
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar / Visual card */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-cyan-500 to-pink-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl bg-[#0f0f2a]/90 border border-white/10 backdrop-blur-xl overflow-hidden flex items-center justify-center">
                {/* Code-style avatar */}
                <div className="text-left font-mono text-sm p-6 space-y-2">
                  <p className="text-gray-500">{"// about-me.js"}</p>
                  <p>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-cyan-400">developer</span>{" "}
                    <span className="text-white">=</span>{" "}
                    <span className="text-yellow-300">{"{"}</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-green-400">name</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-orange-300">{'"Ajeet Mishra"'}</span>
                    <span className="text-white">,</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-green-400">role</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-orange-300">{'"B.Tech Student"'}</span>
                    <span className="text-white">,</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-green-400">passion</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-orange-300">{'"Web Dev"'}</span>
                    <span className="text-white">,</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-green-400">goal</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-orange-300">{'"Full-Stack Dev"'}</span>
                  </p>
                  <p>
                    <span className="text-yellow-300">{"}"}</span>
                    <span className="text-white">;</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Hello! I&apos;m <span className="text-cyan-400 font-semibold">Ajeet Mishra</span>, a
              B.Tech student and aspiring software developer with a strong
              passion for building modern web applications.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I have a solid foundation in{" "}
              <span className="text-purple-400 font-medium">HTML</span>,{" "}
              <span className="text-purple-400 font-medium">CSS</span>, and{" "}
              <span className="text-purple-400 font-medium">Bootstrap</span>,
              and I&apos;m currently expanding my skills in{" "}
              <span className="text-cyan-400 font-medium">Python</span> and{" "}
              <span className="text-cyan-400 font-medium">Web Development</span>.
              I love turning ideas into functional, beautiful digital
              experiences.
            </p>
            <p className="text-gray-400 leading-relaxed">
              My goal is to become a proficient full-stack developer, and I&apos;m
              constantly learning new technologies and frameworks to stay
              up-to-date with the ever-evolving tech landscape.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { number: "5+", label: "Skills" },
                { number: "3+", label: "Projects" },
                { number: "∞", label: "Curiosity" },
              ].map(({ number, label }) => (
                <div
                  key={label}
                  className="text-center p-4 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-colors duration-300"
                >
                  <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    {number}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
