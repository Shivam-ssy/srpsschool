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
import Testimonials from './Pages/Testimonials.jsx'
import TeacherDetails from './Pages/TeacherDetails.jsx'
import News from './Pages/News.jsx'
import Classes from './Pages/Classes.jsx'
import ProgramDetials from './Pages/ProgramDetials.jsx'
import ShowContextProvider from './context/ContextProvider.jsx'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index path='/' element={<Home/>}/>
      <Route  path='/about' element={<About/>}/>
      <Route  path='/program' element={<Program/>}/>
      <Route  path='/program/:id' element={<ProgramDetials/>}/>
      <Route  path='/pages/teacher' element={<Teachers/>}/>
      <Route  path='/pages/faqs' element={<Faqs/>}/>
      <Route  path='/pages/gallery' element={<Gallery/>}/>
      <Route  path='/pages/timetable' element={<TimeTable/>}/>
      <Route  path='/pages/testimonials' element={<Testimonials/>}/>
      <Route  path='/pages/teachersdetails' element={<TeacherDetails/>}/>
      <Route  path='/contact' element={<Contact/>}/>
      <Route  path='/classes' element={<Classes/>}/>
      <Route  path='/news' element={<News/>}/>
      <Route  path='*' element={<NotFound/>}/>
      
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <ShowContextProvider>
    <RouterProvider router={router}/>
  </ShowContextProvider>
)
