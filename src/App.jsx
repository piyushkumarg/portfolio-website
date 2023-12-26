import React from "react";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactMe from "./pages/ContactMe";
import Layout from "./components/layout/Layout";
import AboutPage from "./pages/AboutPage";
import Resume from "./components/resume/Resume";
import ProjectPage from "./pages/ProjectPage";
import BlogsPage from "./pages/BlogsPage";
import PageNotFound from "./pages/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/contact",
        element:<ContactMe/>
      },
      {
        path:"/about",
        element:<AboutPage/>
      },
      {
        path:"/resume",
        element:<Resume/>
      },
      {
        path:"/projects",
        element:<ProjectPage/>
      },
      {
        path:"/blogs",
        element:<BlogsPage/>
      },
      {
        path:"*",
        element: <PageNotFound/>
      }
    
    ]
  },
  
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
