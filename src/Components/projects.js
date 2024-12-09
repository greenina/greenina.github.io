import { useState } from 'react'
import './components.css'
import projectData from '../Data/projects.json'
import ProjectEntry from './projectEntry'
import { Segmented } from 'antd';


export const Projects = (props) => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const handleCategoryChange = (value) => {
        setSelectedCategory(value);
    };
    const filteredProjects = projectData.filter((project) => {
        if (selectedCategory === 'All') {
            return true;
        }
        return project.categories.includes(selectedCategory);
    });
    return (
        <div className="w-full flex flex-col mt-3">
            <div className="text-gray-400 text-2xl font-extrabold mb-2">Projects</div>
            A selection of previous projects that I have done, for research, coursework, and of course, for fun!

            <Segmented
                options={['All', 'System Building', 'Deep Learning', 'Data Analysis', 'Qualitative Method']}
                onChange={handleCategoryChange}
                className='my-4'
            />
            <div className="flex flex-col">
                {filteredProjects.map((project) => (
                    <ProjectEntry key={project.id} project={project} />
                ))}
            </div>
        </div>
    )
}

export default Projects;