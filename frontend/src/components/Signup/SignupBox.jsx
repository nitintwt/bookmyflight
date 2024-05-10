import { Link } from 'react-router-dom'

export default function SignupBox() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950">
      <div className="mx-auto w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Already have an account?
            <Link
              className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-500 dark:hover:text-indigo-400"
              to="/login"
            >
              Login
            </Link>
          </p>
        </div>
        <form action="#" className="space-y-6" method="POST">
          <div>
            <h2 className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="name">
              Name
            </h2>
            <div className="mt-1">
              <input
                autoComplete="name"
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:placeholder-gray-500"
                id="name"
                name="name"
                required
                type="text"
              />
            </div>
          </div>
          <div>
            <h2 className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="email">
              Email address
            </h2>
            <div className="mt-1">
              <input
                autoComplete="email"
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:placeholder-gray-500"
                id="email"
                name="email"
                required
                type="email"
              />
            </div>
          </div>
          <div>
            <h2 className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="password">
              Password
            </h2>
            <div className="mt-1">
              <input
                autoComplete="current-password"
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:placeholder-gray-500"
                id="password"
                name="password"
                required
                type="password"
              />
            </div>
          </div>
          <div>
            <button
              className="flex w-full justify-center rounded-md bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus:ring-indigo-400"
              type="submit"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}