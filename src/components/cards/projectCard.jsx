import React from 'react'
import ProjectData from '../../datas/projectData'
import BoxLink from '../navlinks/BoxLink'

const ProjectCard = ({ limit }) => {
    const projects = limit ? ProjectData.slice(0, limit) : ProjectData;
    return (
        <div className="grid grid-cols-4 gap-4 px-4 mx-auto">
            {projects.map((project, index) => (
                <div key={index} className="flex flex-col border-[1px] border-gray-400 p-2 h-full">
                    <img src={project.image} alt={project.title} className="w-full h-auto" />
                    <ul className="flex flex-wrap gap-2 p-2">
                        {project.technologies.map((tech, i) => (
                            <li key={i} className="bg-rose-200 p-2 rounded-lg text-lg font-mono">{tech}</li>
                        ))}
                    </ul>

                    <div className="flex flex-col gap-2 p-2 flex-grow">
                        <h3 className="text-2xl font-bold font-mono">{project.title}</h3>
                        <p className="text-gray-700">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 p-2 mt-auto">
                        <BoxLink icon="FaGithub" title="GitHub" link={project.linkgithub} />
                        <BoxLink icon="FaExternalLinkAlt" title="Demo" link={project.linkdemo} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProjectCard
