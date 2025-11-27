"use client"
import { motion } from "framer-motion"

export default function Experience() {
  const items = [
    {
      role: "Software Developer",
      company: "Tech Company",
      period: "2023 - Present",
      desc: "Building full-stack web applications with React, Node.js, and PostgreSQL. Leading frontend development and mentoring junior developers.",
    },
    {
      role: "Junior Developer",
      company: "Digital Agency",
      period: "2022 - 2023",
      desc: "Developed responsive websites and web applications. Worked with Laravel, MySQL, and JavaScript to create client solutions.",
    },
    {
      role: "Internship",
      company: "IT Company",
      period: "2021 - 2022",
      desc: "Gained hands-on experience in backend API development with Express.js. Collaborated with senior developers on multiple projects.",
    },
  ]

  return (
    <section id="experience" className="py-20 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-2">Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded" />
          </div>

          <div className="space-y-8">
            {items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-8 pb-8 border-l-2 border-cyan-600 dark:border-cyan-400 last:pb-0"
              >
                <div className="absolute left-0 top-0 w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full transform -translate-x-[9px]" />
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:border-cyan-500 transition">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.role}</h3>
                      <p className="text-cyan-600 dark:text-cyan-400 font-semibold">{item.company}</p>
                    </div>
                    <span className="text-sm bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-200 px-3 py-1 rounded-full font-medium">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
