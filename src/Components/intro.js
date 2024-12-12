const Intro = () => {
  const nameClass = "hover:underline hover:decoration-wavy hover:decoration-[#68A5B3] font-normal text-gray-800 font-medium";

  return (
    <section className="text-[18px] leading-[177%] font-light">
      <div className="pt-4">
        I am an undergraduate and researcher at{' '}
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
          KAIST School of Computing
        </a>
        , advised by{' '}
        <a
          href="https://aliceoh9.github.io"
          target="_blank"
          className={nameClass}
        >
          Prof. Alice Oh
        </a>. My research interests broadly lie at the intersection of human-computer interaction (HCI), social computing, and natural language processing (NLP).
        Ultimately, I aim to harness the potential of social and language technologies to empower individuals and communities to expand their worldviews, fostering personal growth and societal harmony.
      </div>
      <div className="pt-1 pb-2">
        It has been my honor to be advised by{' '}
        <a
          href="http://munmund.net"
          target="_blank"
          className={nameClass}
        >
          Prof. Munmun De Choudhury
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
        as an exchange student. At{' '}
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
          Dr. Young-Ho Kim
        </a>. I was also incredibly lucky to be advised by{' '}
        <a
          href="https://galaxytourist.notion.site/galaxytourist/Hwajung-Hong-cc10b0291bbe4ca38dbf4882cd687423"
          target="_blank"
          className={nameClass}
        >
          Prof. Hwajung Hong
        </a>
        ,{' '}
        <a
          href="https://www.jangheecho.com/"
          target="_blank"
          className={nameClass}
        >
          Prof. Janghee Cho
        </a>, and{' '}
        <a
          href="http://juhokim.com"
          target="_blank"
          className={nameClass}
        >
          Prof. Juho Kim
        </a>
        , who all inspired my love and devotion to research.
      </div>
    </section>
  );
};

export default Intro;
