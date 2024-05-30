import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Fall from "./pages/Fall";
import Spring from './pages/Spring';
import Winter from './pages/Winter';
import Summer from './pages/Summer';

function App() {

  const router = createBrowserRouter([
    {path: '', element: <Spring />},
    {path: '/fall', element: <Fall />},
    {path: '/spring', element: <Spring />},
    {path:'/winter', element:<Winter/>},
    {path: '/summer', element: <Summer/>}
  ]);


  return (
    <RouterProvider router={router} />
  );
}

export default App;
