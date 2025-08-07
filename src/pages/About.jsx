import React from 'react';
import Kamenriderw from '../assets/profiles/kamenriderw.jpg';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import skillsData from '../datas/skillsData';
import funFactsData from '../datas/funFactsData';
import SkillCard from '../components/cards/skillCard';
import Footer from '../components/navbars/Footer';

const About = () => {
  return (
    <>
      <div className="border-b-[1px] border-rose-500">
        <div className="flex flex-col mb-12 sm:mb-16 md:mb-20 md:px-16">
          <div className="flex flex-col gap-2 py-4">
            <div className="flex sm:flex-row items-center gap-2">
              <div className="flex items-center gap-2">
                <span className="text-rose-500 text-xl sm:text-2xl md:text-3xl font-semibold">/</span>
                <span className="text-xl sm:text-2xl md:text-3xl font-medium font-mono">About-me</span>
              </div>
              <div
                onClick={() => window.history.back()}
                className="flex items-center p-2 sm:p-3 gap-2 text-sm sm:text-base md:text-lg ml-auto cursor-pointer border-[1px] border-rose-500 rounded-md hover:bg-rose-500 hover:text-white transition-all duration-300"
                aria-label="Go back"
              >
                <span className="font-mono">&lt;~~</span>
                <span>Back</span>
              </div>
            </div>
            <div className="flex items-center">
              <p className="font-mono text-sm sm:text-base">Who am I?</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 sm:gap-6 py-4">
            <div className="w-full md:w-1/3">
              <img
                className="rounded-lg w-full h-64 sm:h-80 object-cover"
                src={Kamenriderw}
                alt="Khoa Tran"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col gap-4 w-full md:w-2/3 my-auto">
              <div className="flex flex-col gap-3 text-sm sm:text-base md:text-lg font-mono">
                <div>
                  Hi! I’m a passionate IT student on a journey to become a professional Full-Stack Web Developer, focusing on the MERN Stack (MongoDB, Express.js, React.js, and Node.js).
                </div>
                <div>
                  Ever since I started learning how to code, I've been fascinated by how technology can solve real-world problems, connect people, and bring ideas to life. That curiosity has driven me to keep learning, building, and pushing myself through hands-on projects and daily practice.
                </div>
                <div>
                  On the frontend, I work mainly with React and modern libraries like Redux, Tailwind CSS, and Axios. On the backend, I build RESTful APIs using Express.js, MongoDB, and JWT for authentication. I’ve also integrated third-party services such as Cloudinary, Firebase, and Socket.IO to create more interactive and robust applications.
                </div>
                <div>
                  But for me, development is not just about writing functional code – it’s about creating real value for users. I care deeply about clean architecture, code readability, performance, and user experience. I also enjoy collaborating in teams using tools like Git, GitHub, Trello, and Notion to manage workflows efficiently.
                </div>
                <div>
                  In the long run, I aim to become a well-rounded developer who understands every part of the product lifecycle – from UI/UX design and development to deployment and optimization. I'm also excited to explore areas like DevOps, CI/CD pipelines, and modern deployment platforms like Docker or Vercel.
                </div>
                <div>
                  Outside of coding, I enjoy sharing knowledge, working in teams, and constantly learning from others. I believe success in tech doesn't come just from talent – it comes from consistency, curiosity, and the willingness to grow every day.
                </div>
              </div>
              <div
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Tran-Nguyen-Ngoc-Khoa-CV.pdf'; // Adjust path for production
                  link.download = 'cv-khoa.pdf';
                  link.click();
                }}
                className="flex w-fit items-center gap-2 cursor-pointer border-[1px] border-rose-500 rounded-lg p-3 sm:p-4 hover:bg-rose-500 hover:text-white transition-all duration-300"
                aria-label="Download CV"
              >
                <PictureAsPdfIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="font-mono text-sm sm:text-base">DOWNLOAD CV</span>
              </div>
            </div>
          </div>
          <div className="mt-6 sm:mt-8">
            <div className="flex items-center gap-2">
              <span className="text-rose-500 text-xl sm:text-2xl md:text-3xl font-semibold">/</span>
              <span className="text-xl sm:text-2xl md:text-3xl font-medium font-mono">Skills</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-4">
              {Object.entries(skillsData).map(([key, values]) => (
                <SkillCard
                  key={key}
                  title={key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
                  skills={values}
                />
              ))}
            </div>
          </div>
          <div className="mt-6 sm:mt-8">
            <div className="flex items-center gap-2">
              <span className="text-rose-500 text-xl sm:text-2xl md:text-3xl font-semibold">/</span>
              <span className="text-xl sm:text-2xl md:text-3xl font-medium font-mono">Fun-facts</span>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-4 p-4">
              {funFactsData.map((fact, index) => (
                <div
                  key={index}
                  className="flex w-full sm:w-auto min-w-[120px] border-[1px] border-rose-500 p-2 sm:p-3 rounded-lg"
                >
                  <p className="mb-0 text-sm sm:text-base font-mono">{fact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;