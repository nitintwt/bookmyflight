import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Toaster, toast } from 'sonner';
import { Button, ButtonGroup } from '@nextui-org/button';

export default function SignupBox() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [register, setRegister] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const registeredUser = await axios.post('/api/v1/users/register', {
        name: name,
        email: email,
        password: password,
      });
      toast.success(`${registeredUser?.data?.message}`);
      setTimeout(() => navigate('/'), 2000);
    } catch (error) {
      toast.warning(`${error?.response?.data?.message}`);
    }
  };

  return (
    <div className="flex min-h-[100dvh] justify-center bg-gray-950 px-4 py-12 ">
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

        <div>
          <h2
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            htmlFor="name"
          >
            Name
          </h2>
          <div className="mt-1">
            <input
              autoComplete="name"
              className="block w-full appearance-none rounded-md border text-white border-gray-700 px-3 py-2 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500  bg-gray-950 "
              id="name"
              name="name"
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div>
          <h2
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            htmlFor="email"
          >
            Email address
          </h2>
          <div className="mt-1">
            <input
              autoComplete="email"
              className="block w-full appearance-none rounded-md border text-white border-gray-700 px-3 py-2 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500  bg-gray-950 "
              id="email"
              name="email"
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div>
          <h2
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            htmlFor="password"
          >
            Password
          </h2>
          <div className="mt-1">
            <input
              autoComplete="current-password"
              className="block w-full appearance-none rounded-md border text-white border-gray-700 px-3 py-2 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500  bg-gray-950 "
              id="password"
              name="password"
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div>
          <Button
            color="primary"
            size="lg"
            variant="shadow"
            className="font-bold"
            onClick={handleSubmit}
          >
            Sign up
          </Button>
        </div>
      </div>
      <Toaster position="bottom-center" />
    </div>
  );
}
