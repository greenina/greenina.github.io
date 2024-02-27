import './App.css';

import { Topbar } from './Components/topbar';
import { About } from './Components/about';
import { Projects } from './Components/projects';
import { Publications } from './Components/publications';
import { Footer } from './Components/footer';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <section id="about"><About/></section>
      {/* <section id="projects"><Projects/></section> */}
      <section id="publications"><Publications/></section>
      <Footer/>
    </div>
  );
}

export default App;
