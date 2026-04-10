import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import InfoPage from './Pages/InfoPage'
import Contact from './Pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/about"
        element={
          <InfoPage
            title="About Us"
            description="Learn more about Arch-Sterix Nigeria Limited, our story, our values, and the team behind our construction and development work."
          />
        }
      />

      <Route
        path="/services"
        element={
          <InfoPage
            title="Our Services"
            description="Explore the range of services we provide, from planning and project execution to sustainable building and construction delivery."
          />
        }
      />

      <Route
        path="/projects"
        element={
          <InfoPage
            title="Projects"
            description="View a growing portfolio of projects that reflect our commitment to quality, durability, and forward-thinking design."
          />
        }
      />

      <Route
        path="/clients"
        element={
          <InfoPage
            title="Clients"
            description="See the organizations and partners that have trusted us to deliver reliable, high-standard construction solutions."
          />
        }
      />

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