"use client"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState("light")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light"
    setTheme(savedTheme)
    document.documentElement.setAttribute("data-theme", savedTheme)

    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.documentElement.setAttribute("data-theme", newTheme)
    localStorage.setItem("theme", newTheme)
  }

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#certificates", label: "Certificates" },
    { href: "#contact", label: "Contact" },
  ]

  const socialLinks = [
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      label: "GitHub",
      href: "https://github.com/Samuelleonardonainggolan",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.25-.129.599-.129.948v5.419h-3.554s.047-8.733 0-9.637h3.554v1.364c.429-.662 1.196-1.6 2.905-1.6 2.121 0 3.71 1.388 3.71 4.37v5.503zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.953.77-1.715 1.914-1.715.1-.001.201-.001.302 0 1.144 0 1.915.762 1.915 1.715 0 .953-.771 1.715-1.916 1.715zm1.6 11.597H3.738V9.215h3.199v11.237zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      ),
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/samuel-nainggolan-9275672a1/",
    },
    // {
    //   icon: (
    //     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    //       <path d="M23.953 4.57a10 10 0 002.856-3.315c-3.117 1.439-6.076 2.393-9.064 2.609 3.328-3.312 5.336-8.049 2.204-13.115-4.798 2.372-7.742 7.066-7.742 11.414 0 .955.118 1.88.335 2.782C5.08 10.85 0 8.967 0 4.186c0-.584.124-1.14.335-1.682 3.81 4.479 11.98 7.908 19.582 3.914-1.02-1.379-2.367-2.529-4.002-2.954.946 2.432.946 4.424 0 6.508z" />
    //     </svg>
    //   ),
    //   label: "Twitter",
    //   href: "https://twitter.com",
    // },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      label: "Email",
      href: "mailto:nainggolansamuel51@gmail.com",
    },
  ]

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-20 bg-white/95 shadow-md dark:bg-slate-900/95 dark:border-b dark:border-slate-800"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center text-white font-bold">
            SLN
          </div>
          <span className="font-bold text-lg bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
            Samuel Leonardo Nainggolan
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide hover:text-cyan-600 dark:hover:text-cyan-400 transition relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-cyan-500 after:to-purple-600 after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 mr-2 pl-2 border-l border-slate-200 dark:border-slate-700">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-purple-600 hover:text-white transition transform hover:scale-110"
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition hover:text-cyan-600 dark:hover:text-cyan-400"
            aria-label="Toggle theme"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button> */}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide hover:text-cyan-600 dark:hover:text-cyan-400 transition"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-700 flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-purple-600 hover:text-white transition"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
