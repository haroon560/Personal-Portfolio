import React from "react"
import { RouterProvider,
        createRoutesFromElements,
        createBrowserRouter,
        Route
} from "react-router-dom"
import "./App.css"
import Layout from "./components/Layout"
import About from "./pages/About"
import Project from "./pages/Project"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Modal from "./pages/Modal"





const router=createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout/>} >
  <Route index element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="project" element={<Project/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="modal" element={<Modal/>}/>

  
  </Route>
  

)
)
function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
