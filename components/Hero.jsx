"use client"
import { useEffect, useState } from "react"

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const roles = ["Software Developer", "Problem Solver", "Tech Enthusiast"]
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentRole = roles[roleIndex]
      if (charIndex < currentRole.length) {
        setDisplayText(currentRole.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      } else {
        setTimeout(() => {
          setDisplayText("")
          setCharIndex(0)
          setRoleIndex((roleIndex + 1) % roles.length)
        }, 2000)
      }
    }, 100)
    return () => clearTimeout(timer)
  }, [charIndex, roleIndex])

  return (
    <section className="min-h-screen pt-32 pb-16 flex items-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 opacity-50" />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 z-10">
            <div>
              <h1 className="text-5xl md:text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
                  Samuel Leonardo Nainggolan
                </span>
              </h1>
              <div className="h-8 mt-4 text-2xl font-semibold text-cyan-600 dark:text-cyan-400">
                {displayText}
                <span className="animate-pulse">|</span>
              </div>
            </div>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
              I'm a passionate Software Developer crafting innovative digital solutions. With expertise in modern web
              technologies and a love for clean code, I transform ideas into beautiful, functional applications.
            </p>

            <div className="flex gap-4 pt-4 flex-wrap">
              <a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition transform hover:-translate-y-1"
              >
                View Projects →
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-cyan-600 text-cyan-600 dark:text-cyan-400 font-bold rounded-lg hover:bg-cyan-50 dark:hover:bg-slate-800 transition"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center z-10">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-3xl blur-2xl opacity-30 animate-blob" />
              <div className="relative bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-2xl border border-cyan-100 dark:border-slate-700">
                <img
                  src="/11423001_SamuelLeonardoNainggolan.png?height=320&width=320&query=professional-developer"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
