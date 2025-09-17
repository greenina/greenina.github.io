import { Button, Tooltip } from "antd";
const Intro = () => {
  const nameClass = "hover:underline hover:decoration-wavy hover:decoration-[#68A5B3] font-normal text-gray-800 font-medium";

  return (
    <section className="text-[18px] leading-[177%] font-light pb-2 text-justify">
      <div className="pt-4">
        Hello! Thanks for visisting :)
        I am a 1st year PhD student in the Computer Science Department at 🐯 <a
          href="https://cs.princeton.edu"
          className="text-[#E77500] font-medium hover:font-bold"
          target="_blank"
        >
          Princeton
        </a>, working with <a href="https://manoelhortaribeiro.github.io/"
          target="_blank"
          className={nameClass}>Manoel Horta Ribeiro</a>. I am also affiliated with the two incredible communities in Princeton: <a>Center for Information Technology Policy (CITP)</a> and <a href="https://hci.princeton.edu/">Princeton HCI Group</a>.
         My research interest lies at the intersection of human-computer interaction (HCI), social computing, and computational social science.
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
  </a>{' '}
  School of Computing.
  I also studied as an exchange student at{' '}
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
</div>

      {/* <div className="pt-1">
      I was born/raised in Daejeon, South Korea 🇰🇷, and finished my undergraduate at{' '}
        <span className="inline-flex items-center">
          <img
            src={'images/nupzuk.png'}
            className="h-5 align-middle"
            style={{ verticalAlign: 'text-bottom' }}
            alt="kaist"
          />{' '}
        </span>
        <a
          href="https://cs.kaist.ac.kr"
          className="text-[rgba(0,65,145,1)] font-medium hover:font-bold"
          target="_blank"
        >
          KAIST 
        </a> School of Computing.
        During my undergraduate, I was grateful to be advised by Hwajung Hong, Juho Kim, and Alice Oh.
        I was honored to be advised by{' '}
        <a
          href="http://munmund.net"
          target="_blank"
          className={nameClass}
        >
          Munmun De Choudhury
        </a>{' '}
        while I was at{' '}
        <span className="inline-flex items-center">
          <img
            src={'images/gtbee.svg'}
            className="h-5 align-middle"
            alt="gt"
          />{' '}
        </span>
        <a
          href="https://www.cc.gatech.edu/"
          className="text-[rgb(180,164,106)] font-medium hover:font-bold"
          target="_blank"
        >
          Georgia Tech
        </a>{' '}
        as an exchange student. I was also a research intern at{' '}
        <span className="inline-flex items-center">
          <img
            src={'images/naver.png'}
            className="h-5 align-middle"
            style={{ verticalAlign: 'text-bottom' }}
            alt="naver"
          />{'  '}
        </span>
        <a
          href="https://naver-career.gitbook.io/en/teams/clova-cic/ai-lab"
          className="text-[#2DB400] font-medium hover:font-bold"
          target="_blank"
        >
          NAVER AI Lab
        </a>
        , I was fortunate to be advised by{' '}
        <a
          href="http://younghokim.net"
          target="_blank"
          className={nameClass}
        >
          Young-Ho Kim
        </a>,
        who who all inspired my love and devotion to research.
        </div> */}
        {/* I was also incredibly lucky to be advised by{' '}
        <a
          href="https://galaxytourist.notion.site/galaxytourist/Hwajung-Hong-cc10b0291bbe4ca38dbf4882cd687423"
          target="_blank"
          className={nameClass}
        >
          Hwajung Hong
        </a>
        ,{' '}
        <a
          href="https://www.jangheecho.com/"
          target="_blank"
          className={nameClass}
        >
          Janghee Cho
        </a>, and{' '}
        <a
          href="http://juhokim.com"
          target="_blank"
          className={nameClass}
        >
          Juho Kim
        </a>
        , who all inspired my love and devotion to research.
      </div> */}
      <div className="pb-2 pt-2">Outside research, I love outdoor activities (especially running and hiking), playing music (piano and classic guitar), reading (usually social commentary), and writing blog posts (from low to high effort :)). </div>
      {/* <div className="pb-2 pt-2">
        <span>
          Outside research, I enjoy outside activities (
          <Tooltip
            title={
              <video
                src="/images/hobbies/marathon.mp4"
                autoPlay
                loop
                muted
                style={{ width: '200px', borderRadius: '8px' }}
              >
                Your browser does not support the video tag.
              </video>
            }
            color="#FFF1BF"
          >
            <span
              className="cursor-pointer px-2 py-1 text-primary font-medium rounded-md transition-transform transform hover:scale-105 hover:bg-secondary"
            >
              running
            </span>
          </Tooltip> &
          <Tooltip
            title={
              <img
                src="/images/hobbies/hiking.jpg"
                style={{ width: '200px', borderRadius: '8px' }}
              />
            }
            color="#FFF1BF"
          >
            <span
              className="cursor-pointer px-2 py-1 text-primary font-medium rounded-md transition-transform transform hover:scale-105 hover:bg-secondary"
            >
              hiking
            </span>
          </Tooltip>)
          and playing music (<Tooltip
            title={
              <iframe
                id="youtube-video"
                src="https://www.youtube.com/embed/eGfeQerBUD8?start=344&end=365&autoplay=1&mute=1&enablejsapi=1"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={{ width: '400px', height: '300px', borderRadius: '8px' }}
                onLoad={() => {
                  let count = 0;
                  const player = document.getElementById('youtube-video');
                  const onEndHandler = () => {
                    count += 1;
                    if (count >= 10) {
                      player.src = "";
                    } else {
                      player.src = "https://www.youtube.com/embed/eGfeQerBUD8?start=344&end=365&autoplay=1";
                    }
                  };

                  player.addEventListener("ended", onEndHandler);
                }}
                onVisibleChange={(visible) => {
                  const video = document.getElementById('youtube-video');
                  if (video) {
                    if (visible) {
                      video.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                    } else {
                      video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                    }
                  }
                }}
              >
                <script src="https://www.youtube.com/iframe_api"></script>
              </iframe>
            }
            color="#FFF1BF"
          >
            <span
              className="cursor-pointer px-2 py-1 text-primary font-medium rounded-md transition-transform transform hover:scale-105 hover:bg-secondary"
            >
              piano
            </span>
          </Tooltip> & <Tooltip
            title={
              <iframe
                id="youtube-video"
                src="https://www.youtube.com/embed/wN94liyEkkA?start=40&end=60&autoplay=1&mute=1&enablejsapi=1"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={{ width: '400px', height: '300px', borderRadius: '8px' }}
                onLoad={() => {
                  let count = 0;
                  const player = document.getElementById('youtube-video');
                  const onEndHandler = () => {
                    count += 1;
                    if (count >= 10) {
                      player.src = "";
                    } else {
                      player.src = "https://www.youtube.com/embed/wN94liyEkkA?start=40&end=60&autoplay=1";
                    }
                  };

                  player.addEventListener("ended", onEndHandler);
                }}
                onVisibleChange={(visible) => {
                  const video = document.getElementById('youtube-video');
                  if (video) {
                    if (visible) {
                      video.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                    } else {
                      video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                    }
                  }
                }}
              >
                <script src="https://www.youtube.com/iframe_api"></script>
              </iframe>
            }
            color="#FFF1BF"
          >
            <span
              className="cursor-pointer px-2 py-1 text-primary font-medium rounded-md transition-transform transform hover:scale-105 hover:bg-secondary"
            >
              classic guitar
            </span>
          </Tooltip>)!
        </span>
      </div> */}
    </section>
  );
};

export default Intro;
