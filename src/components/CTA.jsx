export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 p-1 shadow-xl">
          <div className="rounded-[1.35rem] bg-white p-10 sm:p-12">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  Partner with Cell Forge
                </h3>
                <p className="mt-4 text-gray-600">
                  From pilot runs to full-scale manufacturing, we help you bring cleaner, safer proteins to market—faster.
                </p>
                <ul className="mt-6 space-y-3 text-gray-700">
                  <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-pink-500" /> Process development</li>
                  <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-blue-600" /> Analytical support</li>
                  <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-rose-500" /> Tech transfer</li>
                </ul>
              </div>
              <form
                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
                onSubmit={(e) => {
                  e.preventDefault()
                  const data = new FormData(e.currentTarget)
                  const params = new URLSearchParams(data)
                  window.location.href = `mailto:hello@cellforge.bio?subject=Cell%20Forge%20Demo%20Request&body=${encodeURIComponent(params.toString())}`
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input name="name" required className="mt-1 w-full rounded-lg border-gray-300 focus:border-gray-900 focus:ring-gray-900" />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="block text-sm font-medium text-gray-700">Company</label>
                    <input name="company" className="mt-1 w-full rounded-lg border-gray-300 focus:border-gray-900 focus:ring-gray-900" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" name="email" required className="mt-1 w-full rounded-lg border-gray-300 focus:border-gray-900 focus:ring-gray-900" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">What would you like to make?</label>
                    <textarea name="message" rows={4} className="mt-1 w-full rounded-lg border-gray-300 focus:border-gray-900 focus:ring-gray-900" />
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-xs text-gray-500">We’ll get back within 1–2 business days.</p>
                  <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white px-5 py-2.5 text-sm font-semibold shadow hover:bg-gray-800">
                    Request a demo
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-gray-500">© {new Date().getFullYear()} Cell Forge. All rights reserved.</p>
      </div>
    </section>
  )
}
