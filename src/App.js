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
      <div className="App">
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/publications" element={<PublicationPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
