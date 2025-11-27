"use client"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Experience from "../components/Experience"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import Education from "../components/Education"
import Certificates from "../components/Certificates"
import Contact from "../components/Contact"
import BackToTop from "../components/BackToTop"
import { useEffect } from "react"

export default function Page() {
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const prog = document.getElementById("progress")
      if (!prog) return
      const value = (doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100
      prog.style.width = value + "%"
    }
    window.addEventListener("scroll", onScroll)
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // return (
  //   <>
  //     <Navbar />
  //     <main className="container mx-auto px-6 md:px-12">
  //       <Hero />
  //       <About />
  //       <Experience />
  //       <Projects />
  //       <Skills />
  //       <Education />
  //       <Certificates />
  //       <Contact />
  //     </main>
  //     <BackToTop />
  //   </>
  // )
}
