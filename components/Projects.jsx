"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const projects = [
  {
    title: "Pemesanan Tiket Konser - Ticketist",
    desc: "A Java-based concert ticket reservation system developed with FXML and Scene Builder. The platform supports two roles: Audience and Admin. Audience can register, log in, browse events and artists, select ticket categories, book seats, view payment status, and make payments. Admins are provided with full CRUD management for events, artists, areas, and ticket categories, as well as payment approval workflows. The system is built with an OOP structure documenting Use Case Diagrams, Class Diagrams, and a fully relational MySQL database.",
    tags: ["Java", "FXML", "Scene Builder", "MySQL", "OOP"],
    image: "/Picture11.jpg?height=240&width=320&query=environmental-reporting",
    images: [
      "/Picture10.jpg?height=400&width=600&query=environmental-reporting-1",
      "/Picture12.jpg?height=400&width=600&query=environmental-reporting-1",
      "/Picture13.jpg?height=400&width=600&query=environmental-reporting-1",
      "/Picture14.jpg?height=400&width=600&query=environmental-reporting-1",
      "/Picture15.jpg?height=400&width=600&query=environmental-reporting-1",
      "/Picture16.jpg?height=400&width=600&query=environmental-reporting-1",
      "/Picture17.jpg?height=400&width=600&query=environmental-reporting-1",
      "/Picture18.jpg?height=400&width=600&query=environmental-reporting-1",
    ],
  },
  {
    title: "Sistem Informasi Harga Pasar Toba Berbasis Web dan Mobile",
    desc: "A web and mobile-based market price information system designed for traditional markets in Toba Regency. This platform enables market administrators to record, update, and monitor the daily prices of essential commodities. It includes real-time price tracking, category-based filtering, historical price graphs, user-specific market access, and a mobile app for fast on-site data entry. Built with Flutter and Golang using secure JWT authentication and REST API integration.",
    tags: ["Flutter", "Dart", "Laravel", "Golang", "REST API", "MySQL", "Postman"],
    image: "/Screenshot 2025-11-26 092428.png?height=240&width=320&query=education-system",
    images: [
      "/Screenshot 2025-11-26 092428.png?height=400&width=800&query=education-system-1",
      "/Screenshot 2025-11-26 092539.png?height=400&width=800&query=education-system-2",
      "/Screenshot 2025-11-26 092559.png?height=400&width=800&query=education-system-3",
      "/Screenshot 2025-11-26 092727.png?height=400&width=800&query=education-system-4",
      "/Screenshot 2025-11-26 092823.png?height=400&width=800&query=education-system-5",
      "/Screenshot 2025-11-26 092935.png?height=400&width=800&query=education-system-6",
    ],
  },
  // {
  //   title: "E-Commerce Shoe Store",
  //   desc: "A full-featured e-commerce platform with product catalog, shopping cart, checkout, and order management system.",
  //   tags: ["Asp.NET", "C#", "JavaScript"],
  //   image: "/ecommerce-shoe-store-platform.jpg?height=240&width=320&query=ecommerce-shoes",
  //   images: [
  //     "/ecommerce-shoe-store-platform.jpg?height=400&width=600&query=ecommerce-shoes-1",
  //     "/ecommerce-shoe-store-platform.jpg?height=400&width=600&query=ecommerce-shoes-2",
  //     "/ecommerce-shoe-store-platform.jpg?height=400&width=600&query=ecommerce-shoes-3",
  //   ],
  // },
  // {
  //   title: "Village Administration Website",
  //   desc: "A village information portal with news management, citizen services, and administrative features using Laravel.",
  //   tags: ["Laravel", "MySQL", "JavaScript"],
  //   image: "/village-administration-website.jpg?height=240&width=320&query=village-website",
  //   images: [
  //     "/village-administration-website.jpg?height=400&width=600&query=village-website-1",
  //     "/village-administration-website.jpg?height=400&width=600&query=village-website-2",
  //     "/village-administration-website.jpg?height=400&width=600&query=village-website-3",
  //   ],
  // },
  // {
  //   title: "Campus Information System",
  //   desc: "A mobile app replicating academic features with Flutter frontend and Laravel backend, integrated via REST API.",
  //   tags: ["Flutter", "Laravel", "MySQL"],
  //   image: "/campus-information-mobile-app.jpg?height=240&width=320&query=campus-app",
  //   images: [
  //     "/campus-information-mobile-app.jpg?height=400&width=600&query=campus-app-1",
  //     "/campus-information-mobile-app.jpg?height=400&width=600&query=campus-app-2",
  //     "/campus-information-mobile-app.jpg?height=400&width=600&query=campus-app-3",
  //   ],
  // },
  // {
  //   title: "Florist E-Commerce Website",
  //   desc: "A dynamic florist business website with product showcase, WhatsApp integration, and admin content management.",
  //   tags: ["Laravel", "MySQL", "JavaScript"],
  //   image: "/florist-ecommerce-website.jpg?height=240&width=320&query=florist-shop",
  //   images: [
  //     "/florist-ecommerce-website.jpg?height=400&width=600&query=florist-shop-1",
  //     "/florist-ecommerce-website.jpg?height=400&width=600&query=florist-shop-2",
  //     "/florist-ecommerce-website.jpg?height=400&width=600&query=florist-shop-3",
  //   ],
  // },
]

const tagColors = {
  React: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200",
  Flutter: "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200",
  "Express.js": "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200",
  MySQL: "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-200",
  Laravel: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200",
  "C#": "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200",
  "Asp.NET": "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200",
  JavaScript: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200",
}

function ProjectModal({ project, isOpen, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!isOpen) return null

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white dark:bg-slate-800 rounded-2xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image Section */}
          <div className="md:w-2/3 bg-slate-900 flex flex-col h-[50vh] md:h-auto">
            <div className="flex-grow flex items-center justify-center overflow-auto bg-black">
              <img
                src={project.images[currentImageIndex] || "/placeholder.svg"}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="max-w-full max-h-full w-auto h-auto object-contain p-2"
              />
            </div>

            {/* Image Navigation */}
            <div className="flex items-center justify-between p-3 sm:p-4 bg-slate-800 gap-2">
              <button
                onClick={prevImage}
                className="px-2 sm:px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition text-xs sm:text-sm font-semibold"
              >
                ← Previous
              </button>
              <span className="text-white text-xs sm:text-sm font-semibold">
                {currentImageIndex + 1} / {project.images.length}
              </span>
              <button
                onClick={nextImage}
                className="px-2 sm:px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition text-xs sm:text-sm font-semibold"
              >
                Next →
              </button>
            </div>
          </div>

          {/* Info Section */}
          <div className="md:w-1/3 p-4 sm:p-6 md:p-8 flex flex-col justify-between max-h-[40vh] md:max-h-none overflow-y-auto md:overflow-y-auto">
            <div>
              <button
                onClick={onClose}
                className="float-right text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 text-2xl mb-4"
              >
                ✕
              </button>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3 pr-6">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-4 sm:mb-6 leading-relaxed">
                {project.desc}
              </p>

              <div className="space-y-3">
                <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">Technologies:</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2 sm:px-3 py-1 rounded-full font-semibold ${tagColors[tag] || "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200"}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-2 sm:gap-3 pt-4 sm:pt-6 border-t border-slate-200 dark:border-slate-700 mt-4">
              <a
                href="#"
                className="flex-1 px-3 sm:px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition text-center text-xs sm:text-sm"
              >
                GitHub
              </a>
              {/* <a
                href="#"
                className="flex-1 px-3 sm:px-4 py-2 border border-cyan-500 text-cyan-600 dark:text-cyan-400 font-semibold rounded-lg hover:bg-cyan-50 dark:hover:bg-slate-700 transition text-center text-xs sm:text-sm"
              >
                Live Demo
              </a> */}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="py-20 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-2">Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden hover:shadow-xl hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300 flex flex-col"
              >
                <div
                  className="relative h-48 overflow-hidden bg-gradient-to-br from-cyan-100 to-purple-100 dark:from-slate-700 dark:to-slate-600 cursor-pointer"
                  onClick={() => setSelectedProject(p)}
                >
                  <img
                    src={p.image || "/placeholder.svg"}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition">
                      View Gallery
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white line-clamp-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 flex-grow line-clamp-3">{p.desc}</p>

                  <div className="flex gap-2 flex-wrap pt-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className={`text-xs px-3 py-1 rounded-full font-semibold ${tagColors[t] || "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200"}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 flex gap-3">
                    <button
                      onClick={() => setSelectedProject(p)}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition transform hover:-translate-y-0.5 text-sm"
                    >
                      View Gallery
                    </button>
                    <a
                      href="#"
                      className="flex-1 px-4 py-2 border border-cyan-600 text-cyan-600 dark:text-cyan-400 font-semibold rounded-lg hover:bg-cyan-50 dark:hover:bg-slate-700 transition text-sm text-center"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  )
}
