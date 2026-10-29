import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LogIn } from 'lucide-react'
import AuthLayout, { inputClass } from '../components/AuthLayout'
import { loginUser, getMarketingProfile, setMarketingApiKey } from '../api'

export default function LoginPage() {
  const navigate = useNavigate()
  const [contact, setContact] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const data = await loginUser(contact, password)
      localStorage.setItem('shopsmart_token', data.token)
      localStorage.setItem('shopsmart_role', data.role)
      localStorage.setItem('shopsmart_user', JSON.stringify(data.user))

      if (data.role === 'marketing') {
        try {
          const profile = await getMarketingProfile()
          if (profile?.apiKeyCreatedAt) {
            setMarketingApiKey(localStorage.getItem('marketing_api_key'))
          }
        } catch (e) {
          console.warn('Could not fetch marketing profile:', e)
        }
      }

      if (data.role === 'admin') {
        navigate('/admin')
      } else if (data.role === 'marketing') {
        navigate('/marketing')
      } else {
        navigate('/')
      }
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Login to continue shopping with ShopSmart."
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </p>
        )}

        <div>
          <label htmlFor="contact" className="mb-1.5 block text-sm font-medium text-slate-700">
            Mobile Number / Username
          </label>
          <input
            id="contact"
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Mobile number (customer) or username (admin/marketing)"
            className={inputClass}
          />
        </div>

        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium text-slate-700">
              Password
            </label>
            <Link
              to="/forgot-password"
              className="text-xs font-medium text-orange-500 transition hover:text-orange-600"
            >
              Forgot password?
            </Link>
          </div>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className={inputClass}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-orange-400 py-3 text-sm font-bold text-slate-900 transition hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <LogIn className="h-4 w-4" />
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-slate-500">
        New to ShopSmart?{' '}
        <Link to="/register" className="font-semibold text-orange-500 transition hover:text-orange-600">
          Create an account
        </Link>
      </p>
    </AuthLayout>
  )
}
