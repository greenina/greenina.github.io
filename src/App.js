import './App.css';

import { Topbar } from './Components/topbar';
import { About } from './Components/about';
// import { Projects } from './Components/projects';
import { Publications } from './Components/publications';
import { Footer } from './Components/footer';
import publicationData from './Data/publications.json'


// function App() {
//   return (
//     <div className="App">
//       <Topbar/>
//       <section id="about"><About/></section>
//       {/* <section id="projects"><Projects/></section> */}
//       <section id="publications"><Publications/></section>
//       <Footer/>
//     </div>
//   );
// }
function App() {
  return (
    <div className="App">
      <Topbar/>
      {/* <nav>
          <ul>
              <li><a href="#about">About me</a></li>
              <li><a href="#publications">Publications</a></li>
              <li><a href="#cv">CV</a></li>
          </ul>
      </nav> */}
      <div className='layout'>
        <section className = "left">
          <img src={'images/profile.png'} class="profile-img" alt="profile"/>
          <div className='icons'>
              <a href='mailto:igreen0485@kaist.ac.kr'><img src="/icons/mail.svg" alt="mail"/></a>
              <a href='https://scholar.google.com/citations?user=wSmDOjUAAAAJ&hl=en'><img src="/icons/scholar.svg" alt="scholar"/></a>
              <a href='https://www.linkedin.com/in/inhwa-song-993b091a7/'><img src="/icons/linkedin.svg" alt="linkedin"/></a>
              {/* <a href='PDF/CV.pdf'><img src="/icons/cv.svg" alt="cv"/></a> */}
              <a href='https://github.com/greenina'><img src="/icons/github.svg" alt="github"/></a>
          </div>
          <div className='news'>
            <div className='news-header'>
              <div className='news-title'>News</div>
              <hr/>
            </div>
          </div>
        </section>
        <section class="right">
          <article id="about">
            <div>My research interests are centered around the dynamic interplay between technology design and its influence on individual well-being and mental health. I am particularly fascinated by the ways in which people engage with language models and personal informatics systems. Additionally, I believe that creativity has the power to be a catalyst for enhancing mental health and well-being, driving me to explore the nexus of technology and creativity, supporting individuals to seek innovative ways in each of their unique contexts to actively improve well-being and mental health. </div>
            <div>I am a highly motivated undergraduate HCI researcher at KAIST School of Computing, currently a research intern at Naver AI Lab, advised by Young-Ho Kim. Throughout my research trajectory, I was immensely lucky to be advised by Hwajung Hong, Janghee Cho, Juho Kim, Munmun De Choudhury, and Neha Kumar, in DxD Lab, KIXLab, and SocWeB Lab (all names in alphabetical order). </div>
            <div>I am a Ph.D. applicant for Fall 2025!</div>
          </article>
          <section id="publications">
            <Publications/>
          </section>
        </section>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
