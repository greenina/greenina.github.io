import React from 'react';
import publicationData from '../Data/publications.json';
import PublicationEntry from './publicationEntry';

const Publications = (props) => {
    return (
        <div className="w-full flex flex-col mt-3">
            <div className="text-gray-400 text-2xl font-extrabold mb-2">Publications</div>
            <div className='mb-3'>Please see my CV for more details.</div>

            <div className="flex flex-col">
                {publicationData.map((publication) => (
                    <PublicationEntry key={publication.id} publication={publication} />
                ))}
            </div>
        </div>
    );
};

export default Publications;