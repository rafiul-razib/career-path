import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { AuthContext } from "../../firebase/AuthProvider";
import { ThemeContext } from "../../Provider/ThemeProvider";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleThemeToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  const { user, logOut } = useContext(AuthContext);
  const links = (
    <div className={`${theme === "light" && "text-gray-700"}`}>
      <NavLink className={"mr-8"} to={"/"}>
        Home
      </NavLink>

      <NavLink className={"mr-8"} to={"/allListedJobs"}>
        All Jobs
      </NavLink>

      {user && (
        <>
          <NavLink className={"mr-8"} to={"/appliedJob"}>
            Applied Jobs
          </NavLink>

          <NavLink className={"mr-8"} to={"/addJob"}>
            Add a Job
          </NavLink>

          <NavLink className={"mr-8"} to={"/myJobs"}>
            My Jobs
          </NavLink>
        </>
      )}

      <NavLink className={"mr-8"} to={"/blogs"}>
        Blogs
      </NavLink>

      {user && (
        <NavLink className={"mr-8"} to={"/profile"}>
          Profile
        </NavLink>
      )}
      {/* <Link className="mr-8" to="/login">
        <button>Login</button>
      </Link> */}
    </div>
  );

  const handleLogOut = () => {
    logOut();
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header
      className={`w-full ${
        theme === "dark" ? "bg-gray-800" : "bg-gray-300"
      } text-gray-100 body-font shadow-sm`}
    >
      {/* :DESKTOP MENU container mx-auto flex justify-between items-center*/}
      <div className="container mx-auto flex justify-between items-center py-7 px-0 md:px-5">
        {/* Site logo and Name */}
        <a
          href="#link"
          className="flex lg:flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0"
        >
          {theme === "dark" ? (
            <img
              className="w-1/2 lg:w-2/3"
              src="/src/assets/career-path-drk-removebg-preview.png"
              alt=""
            />
          ) : (
            <img
              className="w-1/2 lg:w-2/3"
              src="/src/assets/CareerPath-removebg-preview.png"
              alt=""
            />
          )}
        </a>
        {/* Navbar  hidden md:ml-auto md:flex flex-wrap items-center justify-center text-base tracking-wide*/}
        <nav className="hidden lg:ml-auto lg:flex flex-wrap items-center justify-center text-base">
          {links}
        </nav>
        {/* Avatar */}
        {user ? (
          <div
            className={`flex items-center gap-4 ${
              theme === "light" && "text-gray-700"
            }`}
          >
            <button className="hidden lg:block" onClick={handleLogOut}>
              Log Out
            </button>
            <div className="hidden sm:inline-flex ml-auto md:ml-0 mr-4 md:mr-0 cursor-pointer">
              <img
                title={user.displayName}
                className="h-8 w-8 rounded-full"
                src={user.photoURL}
                alt=""
              />
            </div>
          </div>
        ) : (
          <Link to="/login">
            <button
              className={`${
                theme === "light" && "text-gray-700"
              } hidden lg:block`}
            >
              Login
            </button>
          </Link>
        )}

        {/* theme-toggle */}
        <div className="px-3 lg:px-8">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              onClick={handleThemeToggle}
              checked={theme === "light" ? false : true}
              type="checkbox"
              className="hidden"
            />

            {/* sun icon */}
            <svg
              className="swap-on fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off fill-current w-10 h-10 text-gray-700"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>

        {/* Burger icon standard */}
        <button
          className={`lg:hidden rounded-md active:outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-8 w-8 rounded-md text-gray-300 bg-gradient-to-br from-transparent to-transparent hover:text-white hover:from-pink-500 hover:to-yellow-500 ${
              theme === "light" && "text-gray-700"
            }`}
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
        <div
          className={`mobile w-full flex flex-col py-4 px-3 text-base uppercase text-center font-semibold ${
            theme === "light" && "bg-gray-400"
          }`}
        >
          <NavLink
            className={
              "block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={
              "block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
            }
            to={"/allListedJobs"}
          >
            All Jobs
          </NavLink>

          {user && (
            <>
              <NavLink
                className={
                  "block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
                }
                to={"/appliedJob"}
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
            </>
          )}
          <NavLink
            className={
              "block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
            }
            to={"/blogs"}
          >
            Blogs
          </NavLink>

          {user && (
            <NavLink
              className={
                "block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
              }
              to={"/profile"}
            >
              Profile
            </NavLink>
          )}
          {user ? (
            <button onClick={handleLogOut}>Log Out</button>
          ) : (
            <Link to="/login">
              <button>Login</button>
            </Link>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
