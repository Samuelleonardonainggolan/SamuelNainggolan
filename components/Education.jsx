"use client"
import { motion } from "framer-motion"

export default function Education() {
  const education = [
    {
      degree: "D4 Software Engineering Technology",
      school: "Institut Teknologi Del (IT Del)",
      period: "2023 - now",
      details: "GPA: 3.44 / 4.00 || Focus on Web Development and Software Engineering",
    },
  ]

  return (
    <section id="education" className="py-20 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-4xl">🎓</span>
              <h2 className="text-4xl font-bold">Education</h2>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded" />
          </div>

          <div className="space-y-6">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-cyan-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-xl border-l-4 border-cyan-500 hover:shadow-lg transition"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{edu.degree}</h3>
                    <p className="text-cyan-600 dark:text-cyan-400 font-semibold mb-2">{edu.school}</p>
                    <p className="text-slate-600 dark:text-slate-400">{edu.details}</p>
                  </div>
                  <span className="text-sm bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-200 px-4 py-2 rounded-full font-semibold whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
