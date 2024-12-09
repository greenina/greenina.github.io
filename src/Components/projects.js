import { useState } from 'react'
import './components.css'
import projectData from '../Data/projects.json'
import ProjectEntry from './projectEntry'
import { ConfigProvider, Segmented } from 'antd';

const customTheme = {
    components: {
        Segmented: {
            colorBgBase: '#f5f5f5',
            itemActiveBg: 'rgba(0, 0, 0, 0.15)',
            itemHoverBg: 'rgba(0, 0, 0, 0.06)',
            itemSelectedBg: '#92BCC6',
            itemSelectedColor: '#ffffff',
            itemColor: 'rgba(0, 0, 0, 0.88)',
            itemHoverColor: 'rgba(0, 0, 0, 0.88)',
            trackBg: '#f5f5f5',
            trackPadding: 4,
            itemSelectedStyle: {
                fontWeight: 800, // Bold font when selected
            },
        },
    }
};

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
        <div className="w-full flex flex-col">
            <div className="text-primary text-2xl font-extrabold mb-2">Projects</div>
            A selection of previous projects that I have done, for research, coursework, and of course, for fun!
            <ConfigProvider theme={customTheme}>
                <Segmented
                    options={['All', 'System Building', 'Deep Learning', 'Data Analysis', 'Qualitative Method']}
                    onChange={handleCategoryChange}
                    className='my-4 font-normal'
                    size='large'

                />
            </ConfigProvider>
            <div className="flex flex-col">
                {filteredProjects.map((project) => (
                    <ProjectEntry key={project.id} project={project} />
                ))}
            </div>
        </div>
    )
}

export default Projects;