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
                  Samuel Nainggolan
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
            <div className="relative w-80 h-80 transform -translate-y-6">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-3xl blur-2xl opacity-30 animate-blob" />
              <div className="relative bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-2xl border border-cyan-100 dark:border-slate-700">
                <img
                  src="/11423001_SamuelLeonardoNainggolan.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-16 flex justify-center gap-6 flex-wrap">
          {[
            {
              icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              ),
              label: "GitHub",
              href: "https://github.com/Samuelleonardonainggolan",
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.25-.129.599-.129.948v5.419h-3.554s.047-8.733 0-9.637h3.554v1.364c.429-.662 1.196-1.6 2.905-1.6 2.121 0 3.71 1.388 3.71 4.37v5.503zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.953.77-1.715 1.914-1.715.1-.001.201-.001.302 0 1.144 0 1.915.762 1.915 1.715 0 .953-.771 1.715-1.916 1.715zm1.6 11.597H3.738V9.215h3.199v11.237zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              ),
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/samuel-nainggolan-9275672a1/",
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 002.856-3.315c-3.117 1.439-6.076 2.393-9.064 2.609 3.328-3.312 5.336-8.049 2.204-13.115-4.798 2.372-7.742 7.066-7.742 11.414 0 .955.118 1.88.335 2.782C5.08 10.85 0 8.967 0 4.186c0-.584.124-1.14.335-1.682 3.81 4.479 11.98 7.908 19.582 3.914-1.02-1.379-2.367-2.529-4.002-2.954.946 2.432.946 4.424 0 6.508z" />
                </svg>
              ),
              label: "Twitter",
              href: "https://twitter.com",
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              ),
              label: "Email",
              href: "mailto:nainggolansamuel51@gmail.com",
            },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-purple-600 hover:text-white transition transform hover:scale-110"
              title={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div> */}
      </div>
    </section>
  )
}
