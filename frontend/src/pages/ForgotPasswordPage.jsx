import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, KeyRound } from 'lucide-react'
import AuthLayout, { inputClass } from '../components/AuthLayout'
import { resetPassword } from '../api'

export default function ForgotPasswordPage() {
  const [form, setForm] = useState({ contact: '', password: '', confirm: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    if (form.contact.replace(/\D/g, '').length < 10) {
      setError('Please enter a valid 10-digit mobile number.')
      setLoading(false)
      return
    }
    if (form.password.length < 6) {
      setError('New password must be at least 6 characters long.')
      setLoading(false)
      return
    }
    if (form.password !== form.confirm) {
      setError('New password and confirm password do not match.')
      setLoading(false)
      return
    }

    try {
      await resetPassword(form.contact, form.password)
      setDone(true)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (done) {
    return (
      <AuthLayout
        title="Password Reset Successful"
        subtitle="Your password has been updated."
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle2 className="h-9 w-9 text-green-600" />
          </span>
          <h2 className="mt-4 text-lg font-bold text-slate-900">All set!</h2>
          <p className="mt-2 text-sm text-slate-500">
            You can now login with your new password.
          </p>
          <Link
            to="/login"
            className="mt-6 block w-full rounded-full bg-orange-400 py-3 text-sm font-bold text-slate-900 transition hover:bg-orange-500"
          >
            Go to Login
          </Link>
        </div>
      </AuthLayout>
    )
  }

  return (
    <AuthLayout
      title="Reset your password"
      subtitle="Enter your registered mobile number to set a new password."
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </p>
        )}

        <div>
          <label htmlFor="contact" className="mb-1.5 block text-sm font-medium text-slate-700">
            Mobile Number
          </label>
          <input
            id="contact"
            name="contact"
            type="tel"
            value={form.contact}
            onChange={handleChange}
            placeholder="Enter registered mobile number"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-slate-700">
            New Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter a new password (min 6 characters)"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="confirm" className="mb-1.5 block text-sm font-medium text-slate-700">
            Confirm New Password
          </label>
          <input
            id="confirm"
            name="confirm"
            type="password"
            value={form.confirm}
            onChange={handleChange}
            placeholder="Re-enter your new password"
            className={inputClass}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-orange-400 py-3 text-sm font-bold text-slate-900 transition hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <KeyRound className="h-4 w-4" />
          {loading ? 'Resetting...' : 'Reset Password'}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-slate-500">
        Remembered your password?{' '}
        <Link to="/login" className="font-semibold text-orange-500 transition hover:text-orange-600">
          Login
        </Link>
      </p>
    </AuthLayout>
  )
}
