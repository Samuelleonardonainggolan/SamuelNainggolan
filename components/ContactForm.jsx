export default function ContactForm({ actionUrl }) {
  return (
    <form action={actionUrl} method="POST" className="mt-4 max-w-xl">
      <label className="block mb-2">
        <span className="text-sm font-medium">Nama</span>
        <input name="name" type="text" required className="mt-1 block w-full rounded-md border p-2" />
      </label>

      <label className="block mb-2">
        <span className="text-sm font-medium">Email</span>
        <input name="email" type="email" required className="mt-1 block w-full rounded-md border p-2" />
      </label>

      <label className="block mb-2">
        <span className="text-sm font-medium">Pesan</span>
        <textarea name="message" rows="5" required className="mt-1 block w-full rounded-md border p-2" />
      </label>

      <button type="submit" className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md">
        Kirim Pesan
      </button>
    </form>
  )
}
