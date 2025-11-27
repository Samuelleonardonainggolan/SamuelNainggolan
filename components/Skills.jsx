"use client"
import { motion } from "framer-motion"

const skillsData = [
  { name: "HTML5", icon: "devicon-html5-plain colored" },
  { name: "CSS", icon: "devicon-css3-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "Next.js", icon: "devicon-nextjs-original" },
  { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
  { name: "Laravel", icon: "devicon-laravel-plain colored" },
  { name: "PHP", icon: "devicon-php-plain colored" },
  { name: "Flutter", icon: "devicon-flutter-plain colored" },
  { name: "Dart", icon: "devicon-dart-plain colored" },
  { name: "C", icon: "devicon-c-plain colored" },
  { name: "Java", icon: "devicon-java-plain colored" },
  { name: "Python", icon: "devicon-python-plain colored" },
  { name: "Go", icon: "devicon-go-original-wordmark colored" },
  { name: "MySQL", icon: "devicon-mysql-original colored" },
  { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
  { name: "Firebase", icon: "devicon-firebase-plain colored" },
  { name: "GitHub", icon: "devicon-github-original colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "Figma", icon: "devicon-figma-plain colored" },
  { name: "VS Code", icon: "devicon-vscode-plain colored" },
  { name: "Linux", icon: "devicon-linux-plain colored" },
  { name: "Postman", icon: "devicon-postman-plain colored" },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-2">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {skillsData.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="group bg-white dark:bg-slate-800 px-4 py-3 sm:px-6 sm:py-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-400 hover:shadow-lg hover:bg-gradient-to-br hover:from-cyan-50 dark:hover:from-slate-700 hover:to-purple-50 dark:hover:to-slate-800 transition-all cursor-default flex flex-col items-center justify-center text-center h-24 sm:h-32"
              >
                <i
                  className={`${skill.icon} text-3xl sm:text-4xl mb-2 group-hover:scale-125 transition-transform`}
                ></i>

                <span className="font-semibold text-xs sm:text-sm text-slate-700 dark:text-slate-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition line-clamp-2">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
