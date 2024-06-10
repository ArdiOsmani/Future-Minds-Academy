import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css'
import Counter from './views/Counter'
import Toggle from './views/Toggle';

function App() {
  
  const router = createBrowserRouter([
    {path: '/', element: <Counter />},
    {path:'/toggle', element: <Toggle/>}
  ]);

  return (
    <>
      <h1>Welcome</h1>
      <RouterProvider router={router} />
    </>
  )
}

export default App
