import { motion } from "framer-motion";
const CallToAction = () => {
  return (
    <div className="w-full bg-gray-700">
      {/* :MAIN CONTAINER */}
      <div className="mx-auto py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
        {/* ::Title */}
        <h2 className="space-y-2 text-3xl sm:text-4xl text-white font-extrabold uppercase">
          Sign in now to apply the hot jobs!
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Hello, Framer Motion!
          </motion.div> */}
        </h2>
        {/* ::Text */}
        <p className="mt-4 text-lg text-indigo-200 leading-6">
          Career Path is the most Popular Job Searching Platform in the Country.
          You can open an account here to post the jobs of your company as well
          and hire the right person you need from thousand of applicants.
        </p>
        {/* ::Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-around items-center uppercase font-medium tracking-widest">
          {/* Signup */}
          <a
            href="/login"
            className="relative mb-5 sm:mb-0 px-5 py-3 w-48 rounded-md shadow bg-indigo-100 text-indigo-700 transform hover:bg-white active:top-0.5"
          >
            Sign In
          </a>
          {/* Maybe later */}
          <a
            href="#link"
            className="relative px-5 py-3 w-48 rounded-md shadow bg-indigo-500 text-indigo-100 hover:bg-indigo-600 active:top-0.5"
          >
            Maybe later
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
