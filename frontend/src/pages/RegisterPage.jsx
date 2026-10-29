import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, UserPlus } from 'lucide-react'
import AuthLayout, { inputClass } from '../components/AuthLayout'
import { registerUser } from '../api'

function calcAge(dob) {
  if (!dob) return ''
  const birth = new Date(dob)
  const now = new Date()
  if (birth > now) return ''
  let age = now.getFullYear() - birth.getFullYear()
  const monthDiff = now.getMonth() - birth.getMonth()
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birth.getDate())) {
    age -= 1
  }
  return age
}

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: '',
    contact: '',
    address: '',
    dob: '',
    password: '',
    confirm: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [registered, setRegistered] = useState(false)

  const age = calcAge(form.dob)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    if (form.name.trim().length < 3) {
      setError('Please enter your full name.')
      return
    }
    if (form.contact.replace(/\D/g, '').length < 10) {
      setError('Please enter a valid 10-digit contact number.')
      return
    }
    if (form.address.trim().length < 5) {
      setError('Please enter your address.')
      return
    }
    if (!age) {
      setError('Please enter a valid date of birth.')
      return
    }
    if (form.password.length < 6) {
      setError('Password must be at least 6 characters long.')
      return
    }
    if (form.password !== form.confirm) {
      setError('Password and confirm password do not match.')
      return
    }

    try {
      await registerUser({
        name: form.name,
        contact: form.contact,
        address: form.address,
        dob: form.dob,
        age,
        password: form.password,
      })
      setRegistered(true)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (registered) {
    return (
      <AuthLayout
        title="Registration Successful"
        subtitle="Your ShopSmart account has been created."
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle2 className="h-9 w-9 text-green-600" />
          </span>
          <h2 className="mt-4 text-lg font-bold text-slate-900">
            Welcome, {form.name.split(' ')[0]}!
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Your age has been recorded. You can now login with your mobile
            number and password.
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
      title="Create your account"
      subtitle="Join ShopSmart and enjoy AI-powered personalized shopping."
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </p>
        )}

        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="contact" className="mb-1.5 block text-sm font-medium text-slate-700">
            Contact Number
          </label>
          <input
            id="contact"
            name="contact"
            type="tel"
            value={form.contact}
            onChange={handleChange}
            placeholder="Enter 10-digit mobile number"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="address" className="mb-1.5 block text-sm font-medium text-slate-700">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            rows={3}
            value={form.address}
            onChange={handleChange}
            placeholder="Enter your complete address"
            className={`${inputClass} resize-none`}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="dob" className="mb-1.5 block text-sm font-medium text-slate-700">
              Date of Birth
            </label>
            <input
              id="dob"
              name="dob"
              type="date"
              value={form.dob}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="age" className="mb-1.5 block text-sm font-medium text-slate-700">
              Age (auto-calculated)
            </label>
            <input
              id="age"
              name="age"
              type="text"
              value={age ? `${age} years` : ''}
              readOnly
              placeholder="--"
              className={`${inputClass} bg-slate-100 text-slate-500`}
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-slate-700">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Create a password (min 6 characters)"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="confirm" className="mb-1.5 block text-sm font-medium text-slate-700">
            Confirm Password
          </label>
          <input
            id="confirm"
            name="confirm"
            type="password"
            value={form.confirm}
            onChange={handleChange}
            placeholder="Re-enter your password"
            className={inputClass}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-orange-400 py-3 text-sm font-bold text-slate-900 transition hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <UserPlus className="h-4 w-4" />
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-slate-500">
        Already registered?{' '}
        <Link to="/login" className="font-semibold text-orange-500 transition hover:text-orange-600">
          Login
        </Link>
      </p>
    </AuthLayout>
  )
}
