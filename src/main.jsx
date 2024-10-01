import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'remixicon/fonts/remixicon.css'
import Home from './Pages/Home.jsx'
import { Route, Routes, createBrowserRouter,createRoutesFromElements , RouterProvider } from 'react-router-dom'
import About from './Pages/About.jsx'
import NotFound from './Pages/NotFound.jsx'
import Program from './Pages/Program.jsx'
import Teachers from './Pages/Teachers.jsx'
import Faqs from './Pages/Faqs.jsx'
import Gallery from './Pages/Gallery.jsx'
import Contact from './Pages/Contact.jsx'
import TimeTable from './Pages/TimeTable.jsx'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index path='/' element={<Home/>}/>
      <Route  path='/about' element={<About/>}/>
      <Route  path='program/programs' element={<Program/>}/>
      <Route  path='/pages/teacher' element={<Teachers/>}/>
      <Route  path='/pages/faqs' element={<Faqs/>}/>
      <Route  path='/pages/gallery' element={<Gallery/>}/>
      <Route  path='/pages/timetable' element={<TimeTable/>}/>
      <Route  path='/contact' element={<Contact/>}/>
      <Route  path='*' element={<NotFound/>}/>
      
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
