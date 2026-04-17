import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import InfoPage from "./Pages/InfoPage";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Services from "./Pages/Services";
import About from "./Pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/services" element={<Services />} />
      <Route path="/Services" element={<Navigate to="/services" replace />} />
      <Route
        path="/blog"
        element={
          <InfoPage
            title="Construction Blog and Insights"
            description="Read updates, insights, and stories from our work in construction, design-build, project delivery, and the built environment across Nigeria."
            canonicalPath="/blog"
            noIndex
          />
        }
      />
      <Route
        path="/privacy"
        element={
          <InfoPage
            title="Privacy Policy"
            description="Read the privacy policy for Arch-Sterix Nigeria Limited and learn how we handle your contact details and project enquiries."
            canonicalPath="/privacy"
          />
        }
      />
      <Route
        path="/terms"
        element={
          <InfoPage
            title="Terms of Service"
            description="Review the terms of service for working with Arch-Sterix Nigeria Limited and using this website."
            canonicalPath="/terms"
          />
        }
      />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
