import { Button, Tooltip } from "antd";
const Intro = () => {
  const nameClass = "hover:underline hover:decoration-wavy hover:decoration-[#68A5B3] font-normal text-gray-800 font-medium";
  const linkClass = `
  relative font-light text-gray-800
  hover:bg-gradient-to-t hover:from-[#68A5B3]/40 hover:to-transparent
`;
  return (
    <section className="text-[18px] leading-[177%] font-light pb-2 text-justify">
      <div className="pt-4">
        Hello! Thanks for visiting :)
        I am a 1st year PhD student in 🐯<a
          href="https://cs.princeton.edu"
          className="text-[#E77500] font-medium hover:font-bold"
          target="_blank"
        >
          Princeton
        </a> Computer Science, working with <a href="https://manoelhortaribeiro.github.io/"
          target="_blank"
          className={nameClass}>Manoel Horta Ribeiro</a>. I am affiliated with the two incredible communities in Princeton: <a href="https://citp.princeton.edu/" target="_blank" className={linkClass}>Center for Information Technology Policy (CITP)</a> and <a href="https://hci.princeton.edu/" target="_blank" className={linkClass}>Princeton HCI Group</a>.
      </div>
      <div className="pt-1">
      I am passionate about sense of hope & anxiety in contemporary society, which I believe is inevitably tied with our information ecology. I hope to improve policy and design for individuals to cultivate and savor the flourishing meaning of everyday life with joy and hope. My research lies at the intersection of human-computer interaction (HCI), social computing, and computational social science.

      </div>
      <div className="pt-1">
  I was born and raised in Daejeon, South Korea 🇰🇷, and completed my undergraduate at{' '}
  <span className="inline-flex items-center">
    <img
      src={'images/nupzuk.png'}
      className="h-5 align-middle"
      style={{ verticalAlign: 'text-bottom' }}
      alt="KAIST"
    />{' '}
  </span>
  <a
    href="https://cs.kaist.ac.kr"
    className="text-[rgba(0,65,145,1)] font-medium hover:font-bold"
    target="_blank"
  >
    KAIST
  </a>.
  I was an exchange student at{' '}
  <span className="inline-flex items-center">
    <img
      src={'images/gtbee.svg'}
      className="h-5 align-middle"
      alt="Georgia Tech"
    />{' '}
  </span>
  <a
    href="https://www.cc.gatech.edu/"
    className="text-[rgb(180,164,106)] font-medium hover:font-bold"
    target="_blank"
  >
    Georgia Tech
  </a>{' '}
  and worked as a research intern at{' '}
  <span className="inline-flex items-center">
    <img
      src={'images/naver.png'}
      className="h-5 align-middle"
      style={{ verticalAlign: 'text-bottom' }}
      alt="NAVER"
    />{' '}
  </span>
  <a
    href="https://naver-career.gitbook.io/en/teams/clova-cic/ai-lab"
    className="text-[#2DB400] font-medium hover:font-bold"
    target="_blank"
  >
    NAVER AI Lab
  </a>.
  I was incredibly fortunate to be advised by <a
          href="http://munmund.net"
          target="_blank"
          className={nameClass}
        >
          Munmun De Choudhury</a>, <a
          href="https://galaxytourist.notion.site/galaxytourist/Hwajung-Hong-cc10b0291bbe4ca38dbf4882cd687423"
          target="_blank"
          className={nameClass}
        >
          Hwajung Hong
        </a>, <a
          href="http://younghokim.net"
          target="_blank"
          className={nameClass}
        >
          Young-Ho Kim
        </a>, and <a
          href="http://juhokim.com"
          target="_blank"
          className={nameClass}
        >
          Juho Kim
        </a> throughout these experiences.

</div>
      <div className="pb-1 pt-1">Outside research, I love outdoor activities (especially running, biking, and hiking), playing music (piano and classic guitar), reading (I like reading <a href="https://www.amazon.com/Crisis-Narration-Byung-Chul-Han/dp/1509560432/" target="_blank" className={linkClass}>Byun Chul Han's works</a>), and writing stuffs (from low to high effort).</div>
      <div>
        No matter who you are, what position you are in, please feel free to reach out if you want to chat (I appreciate it). I would love to listen to your stories and/or questions, and happy to share mine as well.  
      </div>
      </section> 
       );
};

export default Intro;
