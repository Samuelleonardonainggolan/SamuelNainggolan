"use client"
import { motion } from "framer-motion"
import { useState } from "react"

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="py-20 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-2">Get in Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-700"
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Let's Connect</h3>
              <div className="space-y-5">
                <a
                  href="mailto:samuel@example.com"
                  className="flex items-center gap-4 p-3 bg-white dark:bg-slate-700 rounded-lg hover:shadow-md hover:border-cyan-500 border border-slate-200 dark:border-slate-600 transition group"
                >
                  <span className="text-2xl">✉️</span>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white group-hover:text-cyan-600">Email</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">nainggolansamuel51@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 bg-white dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Location</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Balige, Sumatera Utara</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200 dark:border-slate-600">
                  <p className="font-semibold text-slate-900 dark:text-white mb-4">Follow Me</p>
                  <div className="flex gap-3">
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
                            <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 
            0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 
            3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 
            5 0 100 10 5 5 0 000-10zm6.5-.75a1.25 1.25 0 11-2.5 
            0 1.25 1.25 0 012.5 0z" />
                          </svg>
                        ),
                        label: "Instagram",
                        href: "https://www.instagram.com/sam.leonard0/",
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
                        title={social.label}
                        className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-lg hover:shadow-lg hover:scale-110 transition text-white"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {/* <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-400 transition">
                <p className="text-3xl mb-3">📞</p>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Available For</h4>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li>✓ Full-time Positions</li>
                  <li>✓ Freelance Projects</li>
                  <li>✓ Consulting</li>
                  <li>✓ Partnerships</li>
                </ul>
              </div> */}

              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-400 transition">
                <p className="text-3xl mb-3">🚀</p>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Let's Work Together</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  I'm interested in freelance opportunities and exciting projects. Feel free to reach out!
                </p>
                <a
                  href="mailto:samuel@example.com"
                  className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition"
                >
                  Start a Project →
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
