import './App.css';

import { Topbar } from './Components/topbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from './Components/footer';
import Home from './Pages/Home/Home'
import AboutMe from './Pages/AboutMe/AboutMe';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Topbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/about" element={<AboutMe/>}/> */}
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
