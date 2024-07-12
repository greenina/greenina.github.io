import './Home.css'
import { Publications } from '../../Components/publications'
import News from '../../Components/News/News'

const Home = () => {
  return(
    <div className='home-layout'>
      <section className = "left">
        <img src={'images/test2.png'} class="profile-img" alt="profile"/>
        <div className='icons'>
            <a href='mailto:igreen0485@kaist.ac.kr'><img src="/icons/mail.svg" alt="mail"/></a>
            <a href='https://scholar.google.com/citations?user=wSmDOjUAAAAJ&hl=en'><img src="/icons/scholar.svg" alt="scholar"/></a>
            <a href='https://twitter.com/_inhwa_song'><img src="/icons/twitter.svg" alt="twitter"/></a>
            <a href='https://www.linkedin.com/in/inhwa-song-993b091a7/'><img src="/icons/linkedin.svg" alt="linkedin"/></a>
            {/* <a href='PDF/CV.pdf'><img src="/icons/cv.svg" alt="cv"/></a> */}
            <a href='https://github.com/greenina'><img src="/icons/github.svg" alt="github"/></a>
        </div>
        <div className='news'>
          <div className='news-header'>
            <div className='news-title'>News</div>
            <News/>
          </div>
        </div>
      </section>
      <section class="right">
        <section id="about">
          <div>My recent research interests are centered around the dynamic interplay between technology design and its influence on individual well-being and mental health. I am particularly fascinated by the ways in which people engage with <b>language models</b> and <b>personal informatics</b> systems. Additionally, I believe that <b>creativity</b> has the power to be a catalyst for enhancing <b>mental health</b> and <b>well-being</b>, driving me to explore the nexus of technology and creativity, supporting individuals to seek innovative ways in each of their unique contexts to actively improve well-being and mental health. </div>
          <div className='middle'>
          These interests guide my work as a highly motivated undergraduate HCI researcher at <a href="https://cs.kaist.ac.kr">
                KAIST School of Computing
              </a>, currently a research intern at <a>NAVER AI Lab</a>, where I am fortunate to be
              mentored by <a href="http://younghokim.net" target="_blank">Dr. Young-Ho Kim</a>, also to work with <a href="http://munmund.net" target="_blank">Dr. Munmun De Choudhury</a>. 
              I was also incredibly lucky to have worked with  <a href="https://galaxytourist.notion.site/galaxytourist/Hwajung-Hong-cc10b0291bbe4ca38dbf4882cd687423" target="_blank">Dr. Hwajung Hong</a>, <a href="https://jangheecho15.github.io" target="_blank">Dr. Janghee Cho</a>, and <a href="http://juhokim.com" target="_blank">Dr. Juho Kim</a>, who all inspired my love and devotion to HCI research💚.   
          </div>
          <p className='style1'>I am a Ph.D. applicant for Fall 2025!</p>
        </section>
        <section id="publications">
          <Publications/>
        </section>
      </section>
    </div>
  )
}

export default Home;