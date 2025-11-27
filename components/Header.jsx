export default function Header(){
  return (
    <header className="flex items-center justify-between py-4">
      <div className="text-lg font-semibold">YourLogo</div>
      <nav className="hidden md:flex gap-6 text-sm text-slate-700">
        <a href="#projects" className="hover:text-indigo-600">Projects</a>
        <a href="#contact" className="hover:text-indigo-600">Contact</a>
        <a href="#" className="bg-indigo-600 text-white px-3 py-1 rounded-md">Resume</a>
      </nav>
      <div className="md:hidden">{/* mobile menu (simple) */}
        <button aria-label="menu">☰</button>
      </div>
    </header>
  )
}
