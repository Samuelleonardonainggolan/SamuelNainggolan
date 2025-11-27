"use client"
import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20 border-t border-slate-200 dark:border-slate-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6"
      >
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Hi! I'm Samuel Leonardo Nainggolan, a passionate software developer based in Balige. With a strong
              foundation in both frontend and backend technologies, I specialize in building scalable web and mobile
              applications that solve real-world problems.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              I graduated with a degree in Software Engineering Technology in 2023 and have since worked on diverse projects
              including environmental reporting platforms, educational systems, e-commerce solutions, and more. I'm
              constantly learning and exploring new technologies to stay at the forefront of web development.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-2xl border border-cyan-100 dark:border-slate-700"
          >
            <h3 className="font-bold text-lg mb-4">Quick Info</h3>
            <div className="space-y-3 text-sm">
              <p className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-400">Location:</span>
                <span className="font-semibold">Balige, Indonesia</span>
              </p>
              {/* <p className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-400">Experience:</span>
                <span className="font-semibold">2+ Years</span>
              </p> */}
              <p className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-400">Education:</span>
                <span className="font-semibold">IT Del</span>
              </p>
              <p className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-400">Email:</span>
                <a href="mailto:nainggolansamuel51@gmail.com" className="font-semibold text-cyan-600 hover:text-cyan-700">
                  nainggolansamuel51@gmail.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
