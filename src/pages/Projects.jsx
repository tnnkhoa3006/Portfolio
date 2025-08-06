import React from 'react'
import ProjectCard from '../components/cards/projectCard'
import Footer from '../components/navbars/Footer'

const Projects = () => {
  return (
    <div>
      <div className='border-b-[1px] border-rose-500'>
        <div className='mb-40'>
          <div className='flex flex-col gap-2 px-4 py-2'>
            <div className='flex items-center gap-2'>
              <span className='text-rose-500 text-4xl pb-2 font-semibold'>/</span>{' '}
              <span className='text-4xl font-medium font-mono'>Projects</span>
              <div onClick={() => window.history.back()} className='flex items-center p-1 gap-2 text-lg ml-auto cursor-pointer border-b-[2px] border-rose-500 hover:text-rose-500 transition-all duration-300'>
                <span className='font-mono'>&lt;~~</span>
                <span>Back</span>
              </div>
            </div>
            <div className='flex items-center'>
              <p className='font-mono'>All of my projects</p>
            </div>
          </div>
          <div>
            <ProjectCard />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Projects
