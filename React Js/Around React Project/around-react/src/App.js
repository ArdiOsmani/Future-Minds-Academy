import React from "react";
import "./fma-general.css";
import "./fma-responsive.css";
import "./homeStyle.css";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Blog from "./pages/Blog";
import Services from "./pages/Services";

const router = createBrowserRouter([
  {path: '/', element: <Home />},
  {path: '/about', element: <About />},
  {path: '/blog', element: <Blog />},
  {path: '/services', element: <Services />}
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

