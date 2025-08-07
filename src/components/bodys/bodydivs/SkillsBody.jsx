import React from 'react';
import { useNavigate } from 'react-router-dom';
import Group36 from '../../../assets/stickers/Group36.png';
import SkillCard from '../../cards/skillCard';
import skillsData from '../../../datas/skillsData';

const SkillsBody = () => {
    const navigate = useNavigate();
    return (
        <div className="md:px-16 mt-12 sm:mt-16 md:mt-24">
            <div className="flex sm:flex-row items-center gap-2">
                <div className="flex items-center gap-2">
                    <span className="text-rose-500 text-xl sm:text-2xl md:text-3xl font-semibold">/</span>
                    <span className="text-xl sm:text-2xl md:text-3xl font-medium font-mono">Skills</span>
                </div>
                <div
                    onClick={() => navigate('/skills')}
                    className="flex items-center p-2 sm:p-3 gap-2 text-sm sm:text-base md:text-lg ml-auto cursor-pointer border-[1px] border-rose-500 rounded-md hover:bg-rose-500 hover:text-white transition-all duration-300"
                    aria-label="View all skills"
                >
                    <span>View all</span>
                    <span className="font-mono">~~&gt;</span>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between mt-6 sm:mt-8 gap-4">
                <div className="w-full md:w-1/3">
                    <img
                        src={Group36}
                        alt="Group 36"
                        className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
                    />
                </div>
                <div className="w-full md:w-2/3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-0 sm:p-4">
                        {Object.entries(skillsData).map(([key, values]) => (
                            <SkillCard
                                key={key}
                                title={key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
                                skills={values}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsBody;