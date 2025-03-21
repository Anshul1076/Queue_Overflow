import { Routes, Route } from 'react-router-dom'
import Auth from './pages/Auth/Auth'
import Home from './pages/Home/Home'
import Questions from './pages/Questions/Questions'
import AskQuestion from './pages/AskQuestion/AskQuestion'
import DisplayQuestion from './pages/Questions/DisplayQuestion'
import Tags from './pages/Tags/Tags'
import Users from "./pages/Users/Users"
import UserProfile from "./pages/UserProfile/UserProfile"
import CompanyCards from './pages/Companies/Companies'
import OverflowAI from './pages/OverflowAI/OverflowAI'
import About from './pages/About/About'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Auth' element={<Auth />} />
      <Route path='/AskQuestion' element={<AskQuestion />} />
      <Route path='/Questions' element={<Questions />} />
      <Route path='/Questions/:id' element={<DisplayQuestion />} />
      <Route path='/Tags' element={<Tags />} />
      <Route path='/Users' element={<Users />} />
      <Route path='/Companies' element={<CompanyCards />} />
      <Route path='/Users/:id' element={<UserProfile />} />
      <Route path='/overflow-ai' element={<OverflowAI/>}/>
      <Route path='/about' element={<About />} />
    </Routes>
  )
}

export default AllRoutes