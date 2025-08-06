import React from 'react'
import Group36 from '../../../assets/stickers/Group36.png'
import SkillCard from '../../cards/skillCard'
import skillsData from '../../../datas/skillsData'

const SkillsBody = () => {
    return (
        <div className='px-16 gap-10 mt-40'>
            <div className='flex items-center gap-2'>
                <span className='text-rose-500 text-4xl pb-2 font-semibold'>/</span>{' '}
                <span className='text-4xl font-medium font-mono'>Skills</span>
                <div onClick={() => navigate('/skills')} className='flex items-center p-1 gap-2 text-lg ml-auto cursor-pointer border-b-[2px] border-rose-500 hover:text-rose-500 transition-all duration-300'>
                </div>
            </div>
            <div className='flex items-center justify-between mt-10'>
                <div className='w-1/3'>
                    <img src={Group36} alt="Group 36" />
                </div>
                <div className='w-2/3 flex flex-col gap-4'>
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
            </div>
        </div>
    )
}

export default SkillsBody
