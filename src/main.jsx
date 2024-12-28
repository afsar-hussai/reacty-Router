

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import { About, Contact, Github, Home, User } from './components/components.js'
import { githubData } from './apis/githubApi.js'



// it is one way below shown

// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {path:"about",
//       element:<About/>
//     },
//       {path:"",
//       element:<Home/>
//     },
//     {
//       path:'contact',
//       element:<Contact />
//     },
//     {
//       path:'user/:userid',
//       element:< User/>
//     },
//     {
//       path:'github',
//       element:<Github />
//     }
//     ]
//   }
// ])



//Second method
const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<Layout />} >

      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route 
      loader={githubData}
      path="github" 
      element={<Github />} 
      />
      <Route path="user/:userid" element={<User />} />

    </Route>

  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    

    
    <RouterProvider router={router} />

  </StrictMode>,
)
