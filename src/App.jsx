import './App.css'
import Home from "../src/pages/Home"
import {
  createBrowserRouter,createRoutesFromElements,Route,
  RouterProvider,
} from "react-router-dom";
import Service from './pages/Service';
import Team from './pages/Team';
import Rootlayout from './components/root/Rootlayout';
import Fahim from './pages/Fahim';
import Price from "../src/pages/Price"
import Feat from "../src/pages/Feat"
import Razib from "../src/pages/Razib"

const router = createBrowserRouter(createRoutesFromElements(
  <Route element= {<Rootlayout/>}>
    <Route path='/'element={<Home/>}></Route>
    <Route path='/service'element={<Service/>}></Route>
    <Route path='/team'element={<Team/>}></Route>
    <Route path='/fahim'element={<Fahim/>}></Route>
    <Route path='/price'element={<Price/>}></Route>
    <Route path='/feat'element={<Feat/>}></Route>
    <Route path='/razib'element={<Razib/>}></Route>
  </Route>
))
function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
