"use client";

export default function Education() {
  return (
    <section id="education" className="relative py-24 px-6 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px]" />

      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">
            My Journey
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-transparent" />

          {/* Education card */}
          <div className="relative flex flex-col md:flex-row md:justify-center gap-8">
            {/* Timeline dot */}
            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-8 z-10">
              <div className="relative">
                <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
                <div className="absolute inset-0 w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-ping opacity-20" />
              </div>
            </div>

            {/* Card */}
            <div className="ml-20 md:ml-0 md:w-[calc(50%-2rem)] md:mr-auto group">
              <div className="relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm hover:bg-white/[0.06] hover:border-purple-500/20 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/5">
                {/* Graduation cap icon */}
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 text-white mb-4">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84 51.39 51.39 0 0 0-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                    />
                  </svg>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      Currently Pursuing
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Bachelor of Technology (B.Tech)
                  </h3>
                  <p className="text-cyan-400 font-medium">
                    Computer Science & Engineering
                  </p>
                  <p className="text-gray-500 text-sm">
                    Building a strong foundation in programming, data structures,
                    algorithms, and software development.
                  </p>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-500/5 to-transparent rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
