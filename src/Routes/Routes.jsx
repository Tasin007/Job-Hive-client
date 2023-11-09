import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddJob from "../pages/AddJob";
import AppliedJob from "../pages/AppliedJob";
import Blogs from "../pages/Blogs";
import MyJob from "../pages/MyJob";
import AllJobs from "../pages/AllJobs";
import PrivateRoute from "./PrivateRoute";
import SingleJobDetails from "../components/SingleJobDetails";
import Update from "../components/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/alljobs",
        element: <AllJobs></AllJobs>,
      },
      {
        path: '/jobs/:jobId',
        element: <PrivateRoute><SingleJobDetails /></PrivateRoute>,
        loader: ({params}) => fetch(`https://job-hive-server-side.vercel.app/api/v1/jobs/${params.jobId}`)
      },
      {
        path: "/addjob",
        element: <PrivateRoute> <AddJob></AddJob> </PrivateRoute>,
      },
      {
        path: "/appliedjob",
        element: <PrivateRoute><AppliedJob></AppliedJob></PrivateRoute>,
        loader: ()=> fetch('https://job-hive-server-side.vercel.app/api/v1/applications')
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/myjobs",
        element: <PrivateRoute><MyJob></MyJob></PrivateRoute>,
      },
      {
        path: '/update-jobs/:jobId',
        element: <PrivateRoute> <Update /> </PrivateRoute>,
        loader: ({params}) => fetch(`https://job-hive-server-side.vercel.app/api/v1/update-jobs/${params.jobId}`)
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);
export default router;
