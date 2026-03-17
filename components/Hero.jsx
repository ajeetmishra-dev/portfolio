"use client";

import { useState, useEffect, useCallback } from "react";

const fullText = "Hi, I'm Ajeet Mishra";
const roles = [
  "Aspiring Software Developer",
  "B.Tech Student",
  "Web Development Enthusiast",
];

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleText, setRoleText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [titleDone, setTitleDone] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Type the main title once
  useEffect(() => {
    if (displayedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      setTitleDone(true);
    }
  }, [displayedText]);

  // Type/delete the rotating roles
  const animateRole = useCallback(() => {
    const current = roles[roleIndex];

    if (!isDeleting) {
      if (roleText.length < current.length) {
        return setTimeout(() => {
          setRoleText(current.slice(0, roleText.length + 1));
        }, 60);
      } else {
        return setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (roleText.length > 0) {
        return setTimeout(() => {
          setRoleText(roleText.slice(0, -1));
        }, 30);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        return null;
      }
    }
  }, [roleText, isDeleting, roleIndex]);

  useEffect(() => {
    if (!titleDone) return;
    const timeout = animateRole();
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [titleDone, animateRole]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-[#050510]">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-[150px] animate-pulse-slow" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating particles */}
        {isMounted &&
          Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 8}s`,
              }}
            />
          ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm text-gray-400">
            Available for opportunities
          </span>
        </div>

        {/* Main heading with typing effect */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            {displayedText}
          </span>
          <span className="animate-blink text-cyan-400">|</span>
        </h1>

        {/* Rotating role */}
        <div className="h-10 mb-6 animate-fade-in-up animation-delay-200">
          <p className="text-xl sm:text-2xl text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text font-medium">
            {roleText}
            <span className="animate-blink text-purple-400">_</span>
          </p>
        </div>

        {/* Tagline */}
        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up animation-delay-400">
          Passionate about building modern, responsive web applications and
          constantly learning new technologies to create impactful digital
          experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-600">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-white font-semibold text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 active:scale-95"
          >
            Contact Me
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/40 rounded-full animate-scroll-dot" />
          </div>
        </div>
      </div>
    </section>
  );
}
