"use client"
import { useState } from "react"
import { motion } from "framer-motion"

const certs = [
  {
    title: "Finalis Data Science Competition FORTEX 6.0 2025",
    issuer: "Universitas Al Azhar Indonesia",
    date: "Nov 2025",
    credentialId: "-",
    image: "/SAMUEL LEONARDO NAINGGOLAN - DSC FORTEX 6.0_page-0001.jpg?height=400&width=500&query=frontend-certificate",
  },
  {
    title: "Workshop Pembuatan Platform Digital Dengan Domain .id",
    issuer: "PANDI | Pengelola Nama Domain Internet Indonesia",
    date: "Agu 2025",
    credentialId: "-",
    image: "/PANDI.jpg?height=400&width=500&query=google-cloud-certificate",
  },
  {
    title: "Student Developer Initiative : Code Generations and Optimization",
    issuer: "Hacktiv8 Indonesia",
    date: "Okt 2025",
    credentialId: "-",
    image: "/Code Generations and Optimization.jpg?height=400&width=500&query=react-certificate",
  },
]

function CertificateModal({ certificate, isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white dark:bg-slate-800 rounded-2xl max-w-2xl w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 text-2xl"
        >
          ✕
        </button>

        <div className="space-y-6 p-6 md:p-8">
          {/* Certificate Image */}
          <div className="rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-700">
            <img
              src={certificate.image || "/placeholder.svg"}
              alt={certificate.title}
              className="w-full h-auto max-h-96 object-contain"
            />
          </div>

          {/* Certificate Details */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{certificate.title}</h3>
              <p className="text-lg text-cyan-600 dark:text-cyan-400 font-semibold">{certificate.issuer}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-200 dark:border-slate-700">
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400 font-semibold mb-1">Date Issued</p>
                <p className="text-lg font-bold text-slate-900 dark:text-white">{certificate.date}</p>
              </div>
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400 font-semibold mb-1">Credential ID</p>
                <p className="text-lg font-bold text-slate-900 dark:text-white">{certificate.credentialId}</p>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <a
                href="#"
                className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition text-center"
              >
                View Credential
              </a>
              <button
                onClick={onClose}
                className="flex-1 px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null)

  return (
    <section
      id="certificates"
      className="py-20 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-2">Certificates</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certs.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedCert(cert)}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-400 hover:shadow-lg transition-all group cursor-pointer"
              >
                {/* <div className="text-4xl mb-3 group-hover:scale-125 transition-transform">📜</div> */}
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition">
                  {cert.title}
                </h3>
                <p className="text-sm text-cyan-600 dark:text-cyan-400 font-semibold mb-3">{cert.issuer}</p>
                <div className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                  <p>
                    <span className="font-semibold">Date:</span> {cert.date}
                  </p>
                  <p>
                    <span className="font-semibold">Credential:</span> {cert.credentialId}
                  </p>
                </div>
                <button className="mt-4 w-full px-3 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition text-sm">
                  View Details
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {selectedCert && (
        <CertificateModal certificate={selectedCert} isOpen={!!selectedCert} onClose={() => setSelectedCert(null)} />
      )}
    </section>
  )
}
