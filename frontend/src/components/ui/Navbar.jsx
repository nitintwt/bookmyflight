import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import UserAvatar from './UserAvatar';
import { Button } from '@nextui-org/react';

function Navbar() {
  const [cookies, setCookie] = useCookies();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (cookies.accessToken) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [cookies]);

  console.log(cookies)

  return (
    <header className="flex items-center justify-between h-16 px-4 md:px-6  bg-gray-950 dark:bg-gray-950 shadow">
      <Link className="text-lg font-bold text-white" to="/">
        Bookmyflight
      </Link>
      {isAuth ? (
        <div>
          <UserAvatar />
        </div>
      ) : (
        <Button color="primary" variant="ghost" size="lg">
          <NavLink
            to="/signup"
            style={({ isActive }) => {
              return isActive ? { color: 'black' } : {};
            }}
            className="text-white font-bold"
          >
            Login
          </NavLink>
        </Button>
      )}
    </header>
  );
}

export default Navbar;
