"use client"
import "./globals.css"
import { useEffect, useState } from "react"

export default function RootLayout({ children }) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const theme = localStorage.getItem("theme") || "light"
    setIsDark(theme === "dark")
    document.documentElement.setAttribute("data-theme", theme)
  }, [])

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#00a8cc" />
      </head>
      <body>
        <div id="progress"></div>
        {children}
      </body>
    </html>
  )
}
