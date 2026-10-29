import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function DashboardPlaceholder({ title, role }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-100 px-4 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 text-2xl font-bold text-white">
        {role.slice(0, 1).toUpperCase()}
      </span>
      <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">{title}</h1>
      <p className="max-w-md text-sm text-slate-500">
        This dashboard is coming soon. Your login worked successfully.
      </p>
      <Link
        to="/"
        className="mt-2 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Store
      </Link>
    </div>
  )
}
