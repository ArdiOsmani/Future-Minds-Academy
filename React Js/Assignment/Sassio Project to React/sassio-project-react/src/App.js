import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './assets/css/fma-general.css';
import './assets/css/fma-responsive.css';
import './assets/css/style-responsive.css';
import './assets/css/style.css';

import Home from './pages/Home';
import About from './pages/About';


const router = createBrowserRouter([
  {path: '/', element: <Home />},
  {path: '/about', element: <About />}
]);

function App() {
  return (
    <div className="container-fixed">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
