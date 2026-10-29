import { Link } from 'react-router-dom'
import { BadgePercent, ShieldCheck, ShoppingBag, Sparkles, Truck } from 'lucide-react'

export const inputClass =
  'w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200'

const perks = [
  { icon: Sparkles, text: 'AI-powered product recommendations' },
  { icon: Truck, text: 'Fast and free delivery options' },
  { icon: ShieldCheck, text: 'Secure payments and easy returns' },
  { icon: BadgePercent, text: 'Exclusive deals for members' },
]

export default function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <div className="relative hidden w-1/2 flex-col justify-between overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 p-12 text-white lg:flex">
        <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-purple-600/30 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-blue-600/30 blur-[100px]" />

        <Link to="/" className="relative flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg shadow-purple-500/40">
            <ShoppingBag className="h-5 w-5 text-white" />
          </span>
          <span className="text-xl font-bold">ShopSmart</span>
        </Link>

        <div className="relative">
          <h2 className="text-4xl font-extrabold leading-tight">
            Shopping that <span className="text-gradient">knows you</span>
          </h2>
          <p className="mt-4 max-w-md text-slate-300">
            Personalized recommendations, smart deals, and a shopping experience
            designed around you.
          </p>
          <ul className="mt-8 space-y-4">
            {perks.map((p) => (
              <li key={p.text} className="flex items-center gap-3 text-sm text-slate-200">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                  <p.icon className="h-4 w-4 text-purple-300" />
                </span>
                {p.text}
              </li>
            ))}
          </ul>
        </div>

        <p className="relative text-xs text-slate-400">
          © {new Date().getFullYear()} ShopSmart. All rights reserved.
        </p>
      </div>

      <div className="flex flex-1 items-center justify-center px-4 py-12 sm:px-8">
        <div className="w-full max-w-md">
          <Link to="/" className="mb-8 flex items-center justify-center gap-2 lg:hidden">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-blue-500">
              <ShoppingBag className="h-5 w-5 text-white" />
            </span>
            <span className="text-xl font-bold text-slate-900">ShopSmart</span>
          </Link>

          <h1 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            {title}
          </h1>
          <p className="mt-2 text-center text-sm text-slate-500">{subtitle}</p>

          <div className="mt-8">{children}</div>
        </div>
      </div>
    </div>
  )
}
