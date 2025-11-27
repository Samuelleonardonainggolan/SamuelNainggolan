import "./globals.css"

export const metadata = {
  title: "Samuel Leonardo — Software Engineering",
  description: "Portfolio — Samuel Leonardo Nainggolan",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Devicon Icons */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />

        {/* Favicon (opsional, jika ingin ditambah) */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </head>

      <body className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-200">
        {/* Progress bar container */}
        <div id="progress"></div>

        {/* Page Content */}
        {children}
      </body>
    </html>
  )
}
