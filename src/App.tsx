import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import InfoPage from "./Pages/InfoPage";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Services from "./Pages/Services";
import About from "./Pages/About";
import BlogPost from "./Pages/BlogPost";
import BlogPost2 from "./Pages/BlogPost2";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/services" element={<Services />} />
      <Route path="/blog/:id" element={<BlogPost />} />
      <Route path="/blog/2" element={<BlogPost2 />} />
      <Route path="/Services" element={<Navigate to="/services" replace />} />
      <Route path="/blog" element={<Blog />} />
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
