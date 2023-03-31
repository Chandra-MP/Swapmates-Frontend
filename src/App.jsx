import React from 'react'
import Navbar from './components/Navbar.jsx'
import Landing from './pages/Landing.jsx'
import Home from './pages/Home.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import User from './pages/User.jsx'
import Post from './pages/Post.jsx'
import '../src/styles.scss'
import '../src/styles.scss'



import Footer from './components/Footer.jsx'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

const Layout = () =>{
  return (
    <>
    <Navbar />
    <Outlet/>
    <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Landing/>
      },
      {
        path: '/search',
        element: <Home/>
      },
      {
        path: "/post/:id",
        element: <Post />
      },
    ]
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/user/:id',
    element: <User/>
  }
])

const App = () => {
  return (
    <div className='app-wrapper'>
      <div className='container-wrapper'></div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
