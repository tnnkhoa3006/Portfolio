import React from 'react';
import ProjectCard from '../components/cards/projectCard';
import Footer from '../components/navbars/Footer';

const Projects = () => {
  return (
    <div className="md:pt-16">
      <div className="border-b-[1px] border-rose-500">
        <div className="mb-12 sm:mb-16 md:mb-20 md:px-16">
          <div className="flex flex-col gap-4 py-4">
            <div className="flex sm:flex-row items-center gap-2">
              <div className="flex items-center gap-2">
                <span className="text-rose-500 text-xl sm:text-2xl md:text-3xl font-semibold">/</span>
                <span className="text-xl sm:text-2xl md:text-3xl font-medium font-mono">Projects</span>
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
              <p className="font-mono text-sm sm:text-base">All of my projects</p>
            </div>
          </div>
          <div className="mt-6 sm:mt-8">
            <ProjectCard />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;