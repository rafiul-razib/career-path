import { MdLocationPin } from "react-icons/md";
import { FaMobileScreenButton } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { useContext } from "react";
import { ThemeContext } from "../Provider/ThemeProvider";
const Contact = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`relative mx-auto py-10 px-4 w-full max-w-7xl ${
        theme === "dark" ? "bg-gray-700" : "bg-gray-100"
      }`}
    >
      <div className="mx-auto max-w-5xl">
        {/* :DOTS BACKGROUND */}
        <div>
          {/* ::Dots 1 */}
          <span className="absolute top-0 left-0 hidden md:block opacity-10">
            <svg
              width={250}
              height={600}
              fill="none"
              viewBox="0 0 250 600"
              aria-hidden="true"
            >
              <pattern
                id="pattern-rectangles"
                x={0}
                y={0}
                width={40}
                height={40}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={10}
                  height={10}
                  className="text-green-500"
                  fill="currentColor"
                />
              </pattern>
              <rect width={250} height={600} fill="url(#pattern-rectangles)" />
            </svg>
          </span>
          {/* ::Dots 2 */}
          <span className="absolute bottom-0 right-0 opacity-20">
            <svg
              width={300}
              height={300}
              fill="none"
              viewBox="0 0 300 300"
              aria-hidden="true"
            >
              <pattern
                id="pattern-circles"
                x="0"
                y="0"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
                patternContentUnits="userSpaceOnUse"
              >
                <circle
                  id="pattern-circle"
                  cx="10"
                  cy="10"
                  r="5"
                  className="fill-current text-green-500"
                />
              </pattern>
              <rect
                id="rect"
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="url(#pattern-circles)"
              />
            </svg>
          </span>
        </div>

        {/* :MAIN CONTAINER */}
        <div className="relative space-y-5">
          {/* ::Title */}
          <h2 className="text-center text-5xl text-green-500 font-light">
            Contact Us
          </h2>

          {/* ::Some Text */}
          <p
            className={`mx-auto py-5 max-w-3xl text-center text-base  ${
              theme === "dark" ? "text-gray-50" : "text-gray-700"
            }`}
          >
            Contact Career Path today! Our dedicated team is here to assist you
            with personalized job searches, expert career advice, and
            professional development resources. Whether you're seeking a new
            role, exploring career options, or need guidance, we're here to help
            you succeed. Get in touch with us and take the next step in your
            career journey!
          </p>

          {/* ::Infos Container */}
          <div className="flex flex-wrap justify-between items-center text-base">
            {/* :::Address */}
            <div className="m-2.5 inline-flex items-center">
              <MdLocationPin className="mr-2 w-6 h-6 text-green-500" />
              <p
                className={`${
                  theme === "dark" ? "text-gray-50" : "text-gray-700"
                } font-semibold`}
              >
                18 avenue des Champs-Élysées, 75008 Paris
              </p>
            </div>
            {/* :::Phone */}
            <div className="m-2.5 inline-flex items-center">
              <FaMobileScreenButton className="mr-2 w-6 h-6 text-green-500" />
              <p
                className={`${
                  theme === "dark" ? "text-gray-50" : "text-gray-700"
                } font-semibold`}
              >
                357-233-9644
              </p>
            </div>
            {/* :::Address */}
            <div className="m-2.5 inline-flex items-center">
              <IoMailOutline className="mr-2 w-6 h-6 text-green-500" />
              <p
                className={`${
                  theme === "dark" ? "text-gray-50" : "text-gray-700"
                } font-semibold`}
              >
                admin@careerpath.com
              </p>
            </div>
          </div>
        </div>

        {/* :MAP CONTAINER */}
        <div className="relative mt-16 rounded border-2 border-gray-200">
          {/* Embed Google map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8827.330741966553!2d2.308756110118289!3d48.87000842543867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc4f8f3049b%3A0xcbb47407434935db!2s18%20Av.%20des%20Champs-%C3%89lys%C3%A9es%2C%2075008%20Paris!5e0!3m2!1sfr!2sfr!4v1635492407441!5m2!1sfr!2sfr"
            title="map"
            scrolling="no"
            frameborder="0"
            width="100%"
            height="450"
            className=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
