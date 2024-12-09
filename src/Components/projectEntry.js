const PrjBtn = ({ type, href, text }) => {
  let imgSrc;

  switch (type) {
    case 'code':
      imgSrc = '/icons/github-logo.png';
      break;
    case 'website':
      imgSrc = '/icons/web-icon.png';
      break;
    case 'video':
      imgSrc = '/icons/video-icon.png';
      break;
    case 'pdf':
      imgSrc = '/icons/pdf-icon.png';
      break;
    default:
      imgSrc = '/icons/link-icon.png';
      break;
  }
  return (
    <a
      href={href}
      className="flex items-center gap-1 py-1 text-black text-sm hover:underline hover:font-semibold hover:text-green-600"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={imgSrc} className="w-4 h-4" />
      <span>{text}
      </span>
    </a>
  );
};

const PrjTag = ({ text }) => {
  console.log("TEXT: ", text)
  return (
    <div className="mr-3">#{text}</div>
  )
}

const ProjectEntry = ({ project }) => {

  return (
    <div className="mb-3 flex flex-col border-b border-gray-200">
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/3 pr-4">
          <img
            src={project.image}
            alt="project"
            className="w-full h-auto object-cover border-2 border-gray-300 rounded-lg mb-3"
          />
        </div>
        <div className="flex flex-col w-full">
          <div className="text-lg font-semibold mb-2">
            {project.title}.  {' '}
          </div>

          {/* <div className="text-lg font-light mb-2">
            {project.description}
          </div> */}

          <div className="text-lg font-light mb-2">
            <span className="bg-gray-200 rounded-md px-1">Role:</span> {project.my_role}
          </div>
          <div className="flex flex-wrap gap-2 mb-2">
            {project.urls.map(url => <PrjBtn type={url.type} href={url.href} text={url.text} />)}
          </div>
          <div className="flex flex-row text-lg font-light text-sm mb-2 font-code">
            {project.tags.map(tag => <PrjTag text={tag} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectEntry;
