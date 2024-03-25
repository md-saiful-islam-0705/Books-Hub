import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Navbar,
  MobileNav,
  Button,
  IconButton,
} from "@material-tailwind/react";

const NavBar = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col  lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-pink-500 border-2 rounded-lg  p-2 font-bold border-pink-500 hover:border-2 hover:p-2"
            : "font-bold"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-pink-500 border-2 rounded-lg p-2 font-bold border-pink-500 "
            : "font-bold"
        }
        to="/listedBooks"
      >
        Listed Books
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-pink-500 border-2 rounded-lg  p-2 font-bold border-pink-500 hover:border-2 hover:p-2"
            : "font-bold"
        }
        to="/readPages"
      >
        Pages to Read
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-pink-500 border-2 rounded-lg  p-2 font-bold border-pink-500 hover:border-2 hover:p-2"
            : "font-bold"
        }
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-pink-500 border-2 rounded-lg  p-2 font-bold border-pink-500 hover:border-2 hover:p-2"
            : "font-bold"
        }
        to="/news"
      >
        News
      </NavLink>
    </ul>
  );

  return (
    <Navbar className=" bg-gray px-4 py-2 lg:px-0 lg:pt-6 rounded-none shadow-none ">
      <div className=" flex  items-center justify-between text-blue-gray-900">
        <Link to="/" className="btn btn-ghost gap-0 normal-case text-2xl">
          <h1 className="text-2xl font-semibold ">
            Books <span className="text-pink-300 ">Hub</span>
          </h1>
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-x-1">
          <Button
            variant="Gradient"
            size="md"
            className="hidden lg:inline-block bg-gradient-to-r from-cyan-500 to-blue-500"
          >
            <span>Log In</span>
          </Button>
          <Button
            size="md"
            className="hidden lg:inline-block bg-gradient-to-r from-purple-500 to-pink-300"
          >
            <span>Sign in</span>
          </Button>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
};

export default NavBar;
