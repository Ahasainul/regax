
import './App.css'

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Home/>}/>
      </Route>
     
    )
  );


  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
