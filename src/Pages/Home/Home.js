import './Home.css'
import { Publications } from '../../Components/publications'
import News from '../../Components/News/News'

const Home = () => {
  return(
    <div className='home-layout'>
      <section className = "left">
        <img src={'images/test2.png'} class="profile-img" alt="profile"/>
        <div className='icons'>
            {/* <a href='mailto:igreen0485@kaist.ac.kr'><img src="/icons/mail.svg" alt="mail"/></a> */}
            <a href='https://scholar.google.com/citations?user=wSmDOjUAAAAJ&hl=en' target="_blank"><img src="/icons/scholar.svg" alt="scholar"/></a>
            <a href='https://twitter.com/_inhwa_song'><img src="/icons/twitter_x.svg" alt="twitter"target="_blank"/></a>
            <a href='https://www.linkedin.com/in/inhwa-song-993b091a7/'><img src="/icons/linkedin.svg" alt="linkedin"target="_blank"/></a>
            <a href='https://docs.google.com/document/d/1_ZGuOP94-1kckQbOkkY-SongxzJVprdv0Ayx1lG5a30/edit?usp=sharing'target="_blank"><img src="/icons/cv.svg" alt="cv"/></a>
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
          These interests guide my work as a highly motivated undergraduate HCI researcher at <img src={'images/nupzuk.png'} style={{ height: '1em', verticalAlign: 'middle' }}/> <a href="https://cs.kaist.ac.kr" className="kaist"target="_blank">
                KAIST School of Computing
              </a>, currently a research intern at <img src={'images/naver.png'} style={{ height: '1em', verticalAlign: 'middle' }}/> <a href="https://naver-career.gitbook.io/en/teams/clova-cic/ai-lab" target="_blank" className="naver">NAVER AI Lab</a>, where I am fortunate to be
              mentored by <a href="http://younghokim.net" target="_blank" id="name">Dr. Young-Ho Kim</a>. It has been my honor to be advised by <a href="http://munmund.net" target="_blank" id="name">Dr. Munmun De Choudhury</a> while I was at <img src={'images/gtbee.svg'} style={{ height: '1em', verticalAlign: 'middle' }}/> <a href="https://www.cc.gatech.edu/" target="_blank" className="gt"> Georgia Tech</a> as an exchange student.
              I was also incredibly lucky to have worked with  <a href="https://galaxytourist.notion.site/galaxytourist/Hwajung-Hong-cc10b0291bbe4ca38dbf4882cd687423" target="_blank" id="name">Dr. Hwajung Hong</a>, <a href="https://jangheecho15.github.io" target="_blank" id="name">Dr. Janghee Cho</a>, and <a href="http://juhokim.com" target="_blank" id="name">Dr. Juho Kim</a>, who all inspired my love and devotion to HCI research💚.   
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