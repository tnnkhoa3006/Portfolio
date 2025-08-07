import React from 'react';

const SkillCard = ({ title, skills }) => {
    return (
        <div className="dark:bg-zinc-900 border-[1px] border-rose-500 rounded-xl p-4 sm:p-5">
            <h3 className="text-base sm:text-lg md:text-xl font-bold font-mono mb-2 sm:mb-3">{title}</h3>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                    <span
                        key={index}
                        className="bg-rose-50 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full font-mono"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default SkillCard;