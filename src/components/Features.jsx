import { FlaskConical, ShieldCheck, Microscope, Leaf } from 'lucide-react'

const features = [
  {
    icon: FlaskConical,
    title: 'Recombinant at scale',
    desc: 'High-yield expression with precise control, optimized in ciliate hosts built for productivity.'
  },
  {
    icon: ShieldCheck,
    title: 'Endotoxin-free by design',
    desc: 'Bacteria-free biology eliminates endotoxin risk for cleaner downstream and safer therapeutics.'
  },
  {
    icon: Microscope,
    title: 'Ciliate-powered purity',
    desc: 'Eukaryotic folding and secretion pathways produce proteins with superior fidelity.'
  },
  {
    icon: Leaf,
    title: '100% animal-free',
    desc: 'No animal inputs. Sustainable, ethical, and regulation-forward manufacturing.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-x-0 -top-24 -z-0 h-48 bg-gradient-to-b from-pink-50/70 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            A new standard for protein biomanufacturing
          </h2>
          <p className="mt-4 text-gray-600">
            Purpose-built around ciliates to unlock high-quality protein production without animal inputs or endotoxin concerns.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-lg"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br from-pink-100/60 via-rose-100/40 to-blue-100/60" />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-blue-600 text-white shadow">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-gray-900">{f.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-gray-900">Why ciliates?</h3>
            <p className="mt-4 text-gray-700">
              Ciliates are robust, fast-growing eukaryotes with secretory machinery that mirrors higher organisms—without the burden of endotoxin or animal-derived components. That means cleaner proteins, simpler purification, and faster time-to-clinic.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-pink-500" /> Superior folding and secretion fidelity</li>
              <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-blue-600" /> Built-in endotoxin avoidance</li>
              <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-rose-500" /> Streamlined downstream processing</li>
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-2 shadow">
              <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-pink-200 via-white to-blue-200" />
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
