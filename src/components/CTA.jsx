export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-blue-800/60 via-indigo-900/60 to-slate-900/60 p-1 shadow-xl ring-1 ring-white/10">
          <div className="rounded-[1.35rem] bg-[#0b1020] p-10 sm:p-12">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                  Partner with Cell Forge
                </h3>
                <p className="mt-4 text-slate-300">
                  From pilot runs to full-scale manufacturing, we help you bring cleaner, safer proteins to market—faster.
                </p>
                <ul className="mt-6 space-y-3 text-slate-300">
                  <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-sky-400" /> Process development</li>
                  <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-blue-500" /> Analytical support</li>
                  <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-indigo-400" /> Tech transfer</li>
                </ul>
              </div>
              <form
                className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 shadow-sm"
                onSubmit={(e) => {
                  e.preventDefault()
                  const data = new FormData(e.currentTarget)
                  const params = new URLSearchParams(data)
                  window.location.href = `mailto:hello@cellforge.bio?subject=Cell%20Forge%20Demo%20Request&body=${encodeURIComponent(params.toString())}`
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <label className="block text-sm font-medium text-slate-200">Name</label>
                    <input name="name" required className="mt-1 w-full rounded-lg border-slate-700 bg-slate-950 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500" />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="block text-sm font-medium text-slate-200">Company</label>
                    <input name="company" className="mt-1 w-full rounded-lg border-slate-700 bg-slate-950 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-slate-200">Email</label>
                    <input type="email" name="email" required className="mt-1 w-full rounded-lg border-slate-700 bg-slate-950 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-slate-200">What would you like to make?</label>
                    <textarea name="message" rows={4} className="mt-1 w-full rounded-lg border-slate-700 bg-slate-950 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500" />
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-xs text-slate-400">We’ll get back within 1–2 business days.</p>
                  <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2.5 text-sm font-semibold shadow hover:from-blue-500 hover:to-indigo-500">
                    Request a demo
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-slate-400">© {new Date().getFullYear()} Cell Forge. All rights reserved.</p>
      </div>
    </section>
  )
}
