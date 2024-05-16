import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./assets/Root.jsx";
import Login from "./assets/pages/Login.jsx";
import NotFound from "./assets/pages/NotFound.jsx";
import Home from "./assets/pages/Home.jsx";
import AddJob from "./assets/pages/AddJob.jsx";
import MyJobs from "./assets/pages/MyJobs.jsx";
import AllJobs from "./assets/components/AllJobs.jsx";
import RemoteJobs from "./assets/components/RemoteJobs.jsx";
import OnSiteJobs from "./assets/components/OnSiteJobs.jsx";
import HybridJobs from "./assets/components/HybridJobs.jsx";
import PartTimeJobs from "./assets/components/PartTimeJobs.jsx";
import JobDetails from "./assets/pages/JobDetails.jsx";
import AllJobsList from "./assets/pages/AllJobsList.jsx";
import AuthProvider from "./assets/firebase/AuthProvider.jsx";
import PrivateRoute from "./assets/firebase/PrivateRoute.jsx";
import UpdateJob from "./assets/pages/UpdateJob.jsx";
import AppliedJobs from "./assets/pages/AppliedJobs.jsx";
import Blogs from "./assets/pages/Blogs.jsx";
import ThemeProvider from "./assets/Provider/ThemeProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "",
            element: <AllJobs></AllJobs>,
            loader: () =>
              fetch("https://career-path-server.vercel.app/allJobs"),
          },

          {
            path: "remoteJobs",
            element: <RemoteJobs></RemoteJobs>,
            loader: () =>
              fetch("https://career-path-server.vercel.app/remoteJobs"),
          },
          {
            path: "onSiteJobs",
            element: <OnSiteJobs></OnSiteJobs>,
            loader: () =>
              fetch("https://career-path-server.vercel.app/onSiteJobs"),
          },
          {
            path: "hybridJobs",
            element: <HybridJobs></HybridJobs>,
            loader: () =>
              fetch("https://career-path-server.vercel.app/hybridJobs"),
          },
          {
            path: "partTimeJobs",
            element: <PartTimeJobs></PartTimeJobs>,
            loader: () =>
              fetch("https://career-path-server.vercel.app/partTimeJobs"),
          },
        ],
      },

      {
        path: "/job/:id",
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://career-path-server.vercel.app/job/${params.id}`),
      },
      {
        path: "allListedJobs",
        element: <AllJobsList />,
        loader: () => fetch("https://career-path-server.vercel.app/allJobs"),
      },
      {
        path: "/myJobs",
        element: (
          <PrivateRoute>
            <MyJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "/appliedJob",
        element: (
          <PrivateRoute>
            <AppliedJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "/updateJob/:id",
        element: (
          <PrivateRoute>
            <UpdateJob />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://career-path-server.vercel.app/job/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/addJob",
        element: (
          <PrivateRoute>
            <AddJob />
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
