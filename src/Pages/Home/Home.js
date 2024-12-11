import Publications from '../../Components/publications'
import News from '../../Components/News/News'
import Intro from '../../Components/intro'
import { Projects } from '../../Components/projects'
const Home = () => {
  return (
    <div className='flex flex-col md:flex-row mx-[10%] mt-3'>
      <section className="flex-1 p-5 flex flex-col items-center">
        <img
          src={'images/profile2.jpg'}
          alt="profile"
          className="w-full max-w-xs rounded-full aspect-square object-cover block mb-5 shadow"
        />

        <div className="flex justify-between w-full max-w-xs items-center px-3">
          <a href="https://scholar.google.com/citations?user=wSmDOjUAAAAJ&hl=en" target="_blank">
            <img
              src="/icons/scholar.svg"
              alt="scholar"
              className="w-8 h-8 transition-transform duration-200 hover:scale-110"
            />
          </a>
          <a href="https://twitter.com/_inhwa_song" target="_blank">
            <img
              src="/icons/twitter_x.svg"
              alt="twitter"
              className="w-8 h-8 transition-transform duration-200 hover:scale-110"
            />
          </a>
          <a href="https://www.linkedin.com/in/inhwa-song-993b091a7/" target="_blank">
            <img
              src="/icons/linkedin.svg"
              alt="linkedin"
              className="w-8 h-8 transition-transform duration-200 hover:scale-110"
            />
          </a>
          <a href="https://docs.google.com/document/d/1_ZGuOP94-1kckQbOkkY-SongxzJVprdv0Ayx1lG5a30/edit?usp=sharing" target="_blank">
            <img
              src="/icons/cv.svg"
              alt="cv"
              className="w-8 h-8 transition-transform duration-200 hover:scale-110"
            />
          </a>
          <a href="https://github.com/greenina" target="_blank">
            <img
              src="/icons/github.svg"
              alt="github"
              className="w-8 h-8 transition-transform duration-200 hover:scale-110"
            />
          </a>
        </div>


        <div className="mt-4 w-full">
          <div className="text-primary text-2xl font-black mb-2 text-left">News</div>
          <News />
        </div>
      </section>
      <section className="flex-[3.5] p-5 text-left">
        <Intro />
        <section id="projects">
          <Projects />
        </section>
        <section id="publications">
          <Publications />
        </section>

      </section>
    </div>
  )
}

export default Home;