import { Avatar, Dropdown, Flowbite, Navbar, Sidebar } from 'flowbite-react';
import {
  ChartPieIcon,
  ViewBoardsIcon,
  InboxIcon,
  UserIcon,
  ShoppingBagIcon,
  ArrowSmRightIcon,
  TableIcon,
  HomeIcon,
  BookOpenIcon,
  ChatIcon,
} from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface ShellProps {
  children: React.ReactNode;
}

export function Shell({ children }: ShellProps) {
  return (
    <div className="dark:bg-gray-900">
      <Flowbite>
        <Navbar fluid={true} rounded={true}>
          <Navbar.Brand href="https://flowbite.com/">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Flowbite
            </span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded={true}
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">
                  name@flowbite.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link href="/navbars" active={true}>
              Home
            </Navbar.Link>
            <Navbar.Link href="/navbars">About</Navbar.Link>
            <Navbar.Link href="/navbars">Services</Navbar.Link>
            <Navbar.Link href="/navbars">Pricing</Navbar.Link>
            <Navbar.Link href="/navbars">Contact</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
        <div className="flex">
          <div className="w-fit h-screen dark:bg-gray-800 bg-gray-50 rounded-none">
            <Sidebar aria-label="Default sidebar example">
              <Sidebar.Items>
                <Sidebar.ItemGroup>
                  <Link to="/">
                    <Sidebar.Item icon={HomeIcon}>Home</Sidebar.Item>
                  </Link>
                  <Link to="/conjug8">
                    <Sidebar.Item icon={BookOpenIcon} labelColor="alternative">
                      Conjug8
                    </Sidebar.Item>
                  </Link>
                  <Link to="/vocab">
                    <Sidebar.Item icon={ChatIcon} label="3">
                      Vocab
                    </Sidebar.Item>
                  </Link>
                </Sidebar.ItemGroup>
              </Sidebar.Items>
            </Sidebar>
          </div>
          <div>{children}</div>
        </div>
      </Flowbite>
    </div>
  );
}

export default Shell;
