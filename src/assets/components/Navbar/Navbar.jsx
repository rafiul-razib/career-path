import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const links = (
    <>
      <NavLink className={"mr-8"} to={"/allJobs"}>
        All Jobs
      </NavLink>

      <NavLink className={"mr-8"} to={"/appliedJobs"}>
        Applied Jobs
      </NavLink>

      <NavLink className={"mr-8"} to={"/addJob"}>
        Add a Job
      </NavLink>

      <NavLink className={"mr-8"} to={"/myJobs"}>
        My Jobs
      </NavLink>

      <NavLink className={"mr-8"} to={"/profile"}>
        Profile
      </NavLink>
      <Link className="mr-8" to="/login">
        <button>Login</button>
      </Link>
    </>
  );
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="w-full bg-gray-800 text-gray-100 body-font shadow-sm">
      {/* :DESKTOP MENU */}
      <div className="container mx-auto flex justify-between items-center py-7 px-5">
        {/* Site logo and Name */}
        <a
          href="#link"
          className="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0"
        >
          <img
            className="w-2/3"
            src="/src/assets/career-path-drk-removebg-preview.png"
            alt=""
          />
          {/* <img
            className="w-2/3"
            src="/src/assets/CareerPath-removebg-preview.png"
            alt=""
          /> */}
        </a>
        {/* Navbar */}
        <nav className="hidden md:ml-auto md:flex flex-wrap items-center justify-center text-base tracking-wide">
          {links}
        </nav>
        {/* Avatar */}
        <div className="hidden sm:inline-flex ml-auto md:ml-0 mr-4 md:mr-0 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        {/* Burger icon standard */}
        <button
          className="md:hidden rounded-md active:outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 rounded-md text-gray-300 bg-gradient-to-br from-transparent to-transparent hover:text-white hover:from-pink-500 hover:to-yellow-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* :MOBILE MENU */}
      {isOpen && (
        <div className="mobile w-full flex flex-col py-4 px-3 md:hidden bg-gray-900 text-base uppercase text-center font-semibold">
          <NavLink
            className={
              "block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
            }
            to={"/allJobs"}
          >
            All Jobs
          </NavLink>

          <NavLink
            className={
              "block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
            }
            to={"/appliedJobs"}
          >
            Applied Jobs
          </NavLink>

          <NavLink
            className={
              "block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
            }
            to={"/addJob"}
          >
            Add a Job
          </NavLink>

          <NavLink
            className={
              "block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
            }
            to={"/myJobs"}
          >
            My Jobs
          </NavLink>

          <NavLink
            className={
              "block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
            }
            to={"/profile"}
          >
            Profile
          </NavLink>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
