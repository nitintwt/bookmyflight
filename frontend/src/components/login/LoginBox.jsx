import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'sonner';
import axios from 'axios';
import { Button, ButtonGroup } from '@nextui-org/button';



export default function LoginBox() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();



  const handleSubmit = async () => {
    try {
      const loginnedUser = await axios.post('https://bookmyflight-lckq.onrender.com/api/v1/users/login', {
        email: email,
        password: password,
      });
      console.log(loginnedUser)
      toast.success(`${loginnedUser?.data?.message}`);
      setTimeout(() => navigate('/'), 2000);
    } catch (error) {
      console.log(error);
      toast.warning(`${error?.response?.data?.message}`);
    }
  };

  return (
    <div className="flex min-h-[100dvh]  justify-center bg-gray-950 px-4 py-12 ">
      <div className="mx-auto w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-50 ">
            Welcome Back
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400 ">
            Enter your email and password to sign in to your account.
          </p>
        </div>
        <div>
          <h2
            className="block text-sm font-medium text-gray-300 "
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
            className="block text-sm font-medium text-gray-300 "
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
        <Button
          color="primary"
          size="lg"
          variant="shadow"
          className=" w-full"
          onClick={handleSubmit}
        >
          Login
        </Button>
      </div>

      <Toaster position="bottom-center" />
    </div>
  );
}
