import { useState } from 'react';

const PubBtn = ({ href, text }) => {
  return (
    <a
      href={href}
      className="px-2 py-1 text-black text-sm font-semibold shadow-sm bg-gray-100 hover:bg-green-100 rounded-lg no-underline border"
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
};

const PublicationEntry = ({ publication }) => {
  const [abstract, setAbstract] = useState(false);

  return (
    <div className="mb-5 flex flex-col border-b border-gray-200">
      <div className="flex flex-col md:flex-row w-full">
        {publication.img && (
          <div className="w-full md:w-1/3 pr-4">
            <img
              src={publication.img}
              alt="Publication"
              className="w-full h-auto object-cover border-2 border-gray-300 rounded-lg"
            />
          </div>
        )}
        <div className="flex flex-col w-full">
          <div className="text-lg font-semibold mb-2">
            {publication.title}
          </div>
          <div className="text-base font-light text-gray-500 mb-2">
            {publication.authors.map((author, index) => (
              <span key={index} className="inline-block">
                {author.url ? (
                  <a
                    href={author.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-green-600"
                  >
                    {author.name}
                  </a>
                ) : (
                  <span
                    className={`${publication.highlight_author.includes(index)
                      ? 'text-gray-700 underline font-bold'
                      : 'text-gray-700'
                      }`}
                  >
                    {author.name}
                  </span>
                )}
                {index < publication.authors.length - 1 && (<>,<span className="ml-1"></span></>)}
              </span>
            ))}
          </div>
          <div className="text-lg mb-2">
            {/* {publication.booktitle && <span className="text-gray-700">{publication.booktitle}</span>} */}
            {publication.state && (
              <span className="text-gray-700 text-base">{publication.state}</span>
            )}
          </div>
          <div className="flex flex-wrap gap-2 mb-3">
            {publication.url && <PubBtn href={publication.url} text="DOI" />}
            {publication.pdf && <PubBtn href={publication.pdf} text="PDF" />}
            {publication.arxiv && <PubBtn href={publication.arxiv} text="Arxiv" />}
            {publication.openreview && (
              <PubBtn href={publication.openreview} text="OpenReview" />
            )}
            {/* {publication.abstract && (
              <div
                className="cursor-pointer"
                onClick={() => setAbstract(!abstract)}
              >
                <PubBtn text="Abstract" />
              </div>
            )} */}
          </div>
          {/* {abstract && (
            <div className="px-3 py-2 mt-2 border-l-4 border-green-300 text-gray-600 text-sm">
              {publication.abstract}
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default PublicationEntry;
