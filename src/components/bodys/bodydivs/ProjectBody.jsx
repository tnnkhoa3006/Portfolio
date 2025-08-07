import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectCard from '../../cards/projectCard';

const ProjectBody = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="md:px-16 mt-12 sm:mt-16 md:mt-24">
                <div className="flex sm:flex-row gap-2">
                    <div className="flex items-center gap-2">
                        <span className="text-rose-500 text-xl sm:text-2xl md:text-3xl font-semibold">/</span>
                        <span className="text-xl sm:text-2xl md:text-3xl font-medium font-mono">Projects</span>
                    </div>
                    <div
                        onClick={() => navigate('/projects')}
                        className="flex items-center p-2 sm:p-3 gap-2 text-sm sm:text-base md:text-lg ml-auto cursor-pointer border-[1px] border-rose-500 rounded-md hover:bg-rose-500 hover:text-white transition-all duration-300"
                        aria-label="View all projects"
                    >
                        <span>View all</span>
                        <span className="font-mono">~~&gt;</span>
                    </div>
                </div>
                <div className="mt-6 sm:mt-8">
                    <ProjectCard limit={3} />
                </div>
            </div>
        </div>
    );
};

export default ProjectBody;