import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Landing from './Pages/Landing'



const Router = createBrowserRouter([
  {
    path: '/',
    element: <Landing/>
  },
])





const App = () => {
  return (
    <RouterProvider router={Router}/>
  )
}

export default App
