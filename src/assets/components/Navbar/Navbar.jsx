import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { AuthContext } from "../../firebase/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const links = (
    <>
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
    </>
  );

  const handleLogOut = () => {
    logOut();
  };
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
        {user ? (
          <div className="flex items-center gap-4">
            <button onClick={handleLogOut}>Log Out</button>
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
            <button>Login</button>
          </Link>
        )}

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
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={
              "block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
            }
            to={"/allJobs"}
          >
            All Jobs
          </NavLink>

          {user && (
            <>
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
