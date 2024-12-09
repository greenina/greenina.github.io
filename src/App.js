import './App.css';

import { Topbar } from './Components/topbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from './Components/footer';
import Home from './Pages/Home/Home'
import AboutMe from './Pages/AboutMe/AboutMe';
import ProjectPage from './Pages/ProjectPage';
import PublicationPage from './Pages/PublicationPage';
function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Topbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/publications" element={<PublicationPage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
