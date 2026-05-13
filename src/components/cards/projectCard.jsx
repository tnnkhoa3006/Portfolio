import React from 'react';
import ProjectData from '../../datas/projectData';
import BoxLink from '../navlinks/BoxLink';

const ProjectCard = ({ limit }) => {
    const projects = limit ? ProjectData.slice(0, limit) : ProjectData;
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="flex flex-col border-[1px] border-gray-400 dark:border-gray-600 rounded-lg sm:p-6 h-full shadow-md"
                >
                    {project.image ? (
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 sm:h-56 object-cover rounded-md"
                        />
                    ) : (
                        <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-indigo-400 to-violet-500 rounded-md flex items-center justify-center">
                            <span className="text-white text-4xl font-bold font-mono tracking-wider">{project.title}</span>
                        </div>
                    )}
                    <ul className="flex flex-wrap gap-2 p-2">
                        {project.technologies.map((tech, i) => (
                            <li
                                key={i}
                                className="bg-rose-200 dark:bg-rose-900/30 px-3 py-1 rounded-lg text-sm sm:text-base font-mono dark:text-white"
                            >
                                {tech}
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-col gap-2 p-2 flex-grow">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-mono dark:text-white">{project.title}</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 p-2 mt-auto dark:text-white">
                        <BoxLink icon="FaGithub" title="GitHub" link={project.linkgithub} />
                        {project.linkdemo && <BoxLink icon="FaExternalLinkAlt" title="Demo" link={project.linkdemo} />}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectCard;