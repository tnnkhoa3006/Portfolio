import React from 'react'
import Kamenriderw from '../assets/profiles/kamenriderw.jpg'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import skillsData from '../datas/skillsData'
import funFactsData from '../datas/funFactsData'
import SkillCard from '../components/cards/skillCard'
import Footer from '../components/navbars/Footer';

const About = () => {
  return (
    <>
      <div className='border-b-[1px] border-rose-500'>
        <div className='flex flex-col mb-40'>
          <div className='flex flex-col gap-2 px-4 py-2'>
            <div className='flex items-center gap-2'>
              <span className='text-rose-500 text-4xl pb-2 font-semibold'>/</span>{' '}
              <span className='text-4xl font-medium font-mono'>About-me</span>
              <div onClick={() => window.history.back()} className='flex items-center p-1 gap-2 text-lg ml-auto cursor-pointer border-b-[2px] border-rose-500 hover:text-rose-500 transition-all duration-300'>
                <span className='font-mono'>&lt;~~</span>
                <span>Back</span>
              </div>
            </div>
            <div className='flex items-center'>
              <p className='font-mono'>Who am I?</p>
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-4 px-4 py-2'>
            <div className='flex w-1/3'>
              <img className='rounded-lg w-full h-full object-cover' src={Kamenriderw} alt="kamen rider" />
            </div>
            <div className='flex flex-col gap-4 w-2/3 my-auto'>
              <div className='flex flex-col gap-2 text-lg font-mono'>
                <div>
                  An extremely positive individual & who can stay focused and motivated. Responsible, dependable, and takes great pride in all my work. Can work both independently and in a team, which has been proven from past work experience and academic experiences.
                </div>
                <div>
                  In my previous role as a React Frontend Developer at RBS Tech LTD Company, RBS Tech LTD is a construction-based company located in Mirpur 12, Dhaka. We have a small team to develop program management tools for managing whole construction projects. We implemented more than 50 features for this project, like chat modules, kanban boards with real-time drag-and-drop features, projects, tasks, requisitions, VAT, TAX, invoice management, data grid view, calendar view, user permissions, multilevel user permissions segment, etc. I was responsible for developing and maintaining multiple web applications that received high praise for their performance and user experience. I have a deep understanding of React’s core principles and best practices, and I am proficient in using Redux for state management. Additionally, I have experience working with RESTful APIs and integrating third-party libraries to enhance functionality
                </div>
                <div>
                  I am highly skilled in HTML, CSS, JavaScript, and Typescript, and I have a strong understanding of responsive design principles. I am also experienced in using version control systems such as Git and have a solid understanding of Agile development methodologies. My ability to collaborate effectively with cross-functional teams and my strong problem-solving skills have been instrumental in delivering successful projects on time and within budget.
                </div>
              </div>
              <div className='flex w-fit items-center gap-2 cursor-pointer border-[1px] border-rose-500 rounded-lg p-2 hover:bg-rose-500 hover:text-white transition-all duration-300'>
                <PictureAsPdfIcon />
                <span className='font-mono'>DOWNLOAD CV</span>
              </div>
            </div>
          </div>
          <div className='mt-10'>
            <div className='flex items-center gap-2'>
              <span className='text-rose-500 text-4xl pb-2 font-semibold'>/</span>{' '}
              <span className='text-4xl font-medium font-mono'>Skills</span>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
              {Object.entries(skillsData).map(([key, values]) => (
                <SkillCard
                  key={key}
                  title={key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                  skills={values}
                />
              ))}
            </div>
          </div>
          <div className='flex flex-col mt-10 gap-20'>
            <div className='flex items-center gap-2'>
              <span className='text-rose-500 text-4xl pb-2 font-semibold'>/</span>{' '}
              <span className='text-4xl font-medium font-mono'>Fun-facts</span>
            </div>
            <div className='flex flex-wrap gap-2'>
              {funFactsData.map((fact, index) => (
                <div key={index} className='flex w-fit border-[1px] border-rose-500 p-2 mb-2 rounded-lg'>
                  <p className='mb-0 text-lg font-mono'>{fact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About
