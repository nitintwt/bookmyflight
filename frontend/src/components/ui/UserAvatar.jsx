import React, { useContext, useEffect } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from '@nextui-org/react';
import { useCookies } from 'react-cookie';
import axios from 'axios';

export default function UserAvatar() {
  const [cookies] = useCookies(['accessToken', 'refreshToken', 'user']);

  const handleLogout = async () => {
    try {
      const loggedOut = await axios.post(
        '/api/v1/users/logout',
        cookies.user._id
      );
      console.log(loggedOut);
    } catch (error) {
      console.log('error:', error);
    }
  };

  return (
    <Navbar className="dark:bg-gray-950">
      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end" className="dark">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2 text-white">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{cookies?.user?.email}</p>
            </DropdownItem>
            <DropdownItem key="settings" className="text-white">
              My Bookings
            </DropdownItem>
            <DropdownItem key="team_settings" className="text-white">
              Payment
            </DropdownItem>
            <DropdownItem key="analytics" className="text-white">
              Rewards
            </DropdownItem>
            <DropdownItem key="help_and_feedback" className="text-white">
              Help & Feedback
            </DropdownItem>
            <DropdownItem
              key="logout"
              color="danger"
              className="text-white"
              onClick={handleLogout}
            >
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
