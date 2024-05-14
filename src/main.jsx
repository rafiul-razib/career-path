import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
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
            loader: () => fetch("http://localhost:3000/allJobs"),
          },

          {
            path: "remoteJobs",
            element: <RemoteJobs></RemoteJobs>,
            loader: () => fetch("http://localhost:3000/remoteJobs"),
          },
          {
            path: "onSiteJobs",
            element: <OnSiteJobs></OnSiteJobs>,
            loader: () => fetch("http://localhost:3000/onSiteJobs"),
          },
          {
            path: "hybridJobs",
            element: <HybridJobs></HybridJobs>,
            loader: () => fetch("http://localhost:3000/hybridJobs"),
          },
          {
            path: "partTimeJobs",
            element: <PartTimeJobs></PartTimeJobs>,
            loader: () => fetch("http://localhost:3000/partTimeJobs"),
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
        loader: ({ params }) => fetch(`http://localhost:3000/job/${params.id}`),
      },
      {
        path: "allListedJobs",
        element: <AllJobsList />,
        loader: () => fetch("http://localhost:3000/allJobs"),
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
        path: "/updateJob/:id",
        element: <UpdateJob />,
        loader: ({ params }) => fetch(`http://localhost:3000/job/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/addJob",
        element: <AddJob />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
