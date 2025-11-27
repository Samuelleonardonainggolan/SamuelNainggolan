export default function ProjectCard({ project }){
  return (
    <article className="p-5 bg-white rounded-xl shadow-sm border border-slate-100">
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="mt-2 text-slate-600">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map(t => (
          <span key={t} className="text-xs px-2 py-1 bg-slate-100 rounded">{t}</span>
        ))}
      </div>
      <div className="mt-4">
        <a className="text-sm text-indigo-600 hover:underline" href="#">View details →</a>
      </div>
    </article>
  )
}
