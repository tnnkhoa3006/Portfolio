import React from 'react'
import { useNavigate } from "react-router-dom";
import ProjectCard from '../../cards/projectCard';

const ProjectBody = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='px-16 gap-10 mt-40'>
                <div className='flex items-center gap-2'>
                    <span className='text-rose-500 text-4xl pb-2 font-semibold'>/</span>{' '}
                    <span className='text-4xl font-medium font-mono'>Projects</span>
                    <div onClick={() => navigate('/projects')} className='flex items-center p-1 gap-2 text-lg ml-auto cursor-pointer border-b-[2px] border-rose-500 hover:text-rose-500 transition-all duration-300'>
                        <span>View all</span>
                        <span className='font-mono'>~~&gt;</span>
                    </div>
                </div>
                <div className='flex mt-10'>
                    <ProjectCard limit={3} />
                </div>
            </div>
        </div>
    )
}

export default ProjectBody
