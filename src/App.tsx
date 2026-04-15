import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import InfoPage from './Pages/InfoPage'
import Contact from './Pages/Contact'
import Projects from './Pages/Projects'
import Services from './Pages/Services'
import About from './Pages/About'


function App() {
  return (
    <Routes>
    
      <Route path="/" element={<Home />} />

      
      <Route path="/about" element={<About />} />

     
      
    <Route path="/projects" element={<Projects />} />
   
    <Route path='/Services' element={<Services />} />
      

      <Route
        path="/blog"
        element={
          <InfoPage
            title="Blog"
            description="Read updates, insights, and stories from our work in construction, design, project delivery, and the built environment."
          />
        }
      />

    
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App