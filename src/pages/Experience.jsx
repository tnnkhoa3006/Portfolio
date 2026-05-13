import React from 'react';
import ExperienceData from '../datas/experienceData';
import Footer from '../components/navbars/Footer';

const Experience = () => {
    return (
        <div className="md:pt-16">
            <div className="border-b-[1px] border-rose-500">
                <div className="mb-12 sm:mb-16 md:mb-20 md:px-16">
                    <div className="flex flex-col gap-4 py-4">
                        <div className="flex sm:flex-row items-center gap-2">
                            <div className="flex items-center gap-2">
                                <span className="text-rose-500 text-xl sm:text-2xl md:text-3xl font-semibold">/</span>
                                <span className="text-xl sm:text-2xl md:text-3xl font-medium font-mono">Experience</span>
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
                            <p className="font-mono text-sm sm:text-base">My journey & experience</p>
                        </div>
                    </div>
                    <div className="mt-6 sm:mt-8 flex flex-col gap-6">
                        {ExperienceData.map((exp, index) => (
                            <div
                                key={index}
                                className="relative flex flex-col sm:flex-row gap-4 sm:gap-6 border-[1px] border-rose-500 rounded-lg p-4 sm:p-6 hover:bg-rose-500/5 transition-all duration-300"
                            >
                                <div className="flex flex-col sm:w-1/4">
                                    <span className="text-rose-500 font-mono text-sm sm:text-base font-semibold">{exp.period}</span>
                                    <span className="text-gray-500 font-mono text-xs sm:text-sm">{exp.company}</span>
                                </div>
                                <div className="flex flex-col gap-3 sm:w-3/4">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-mono">{exp.title}</h3>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{exp.description}</p>
                                    <ul className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech, i) => (
                                            <li
                                                key={i}
                                                className="bg-rose-200 dark:bg-rose-900/30 px-3 py-1 rounded-lg text-sm font-mono"
                                            >
                                                {tech}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Experience;
