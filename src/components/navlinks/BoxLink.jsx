import React from 'react'
import Icon from '../icons/Icon'

const BoxLink = ({ icon, title, link }) => {
    return (
        <a
            target="_blank"
            rel="noopener noreferrer"
            href={link}
            className='flex w-fit items-center gap-2 cursor-pointer border-[1px] border-rose-500 rounded-lg p-2 hover:bg-rose-500 hover:text-white transition-all duration-300 no-underline'
        >
            <Icon name={icon} className='text-2xl' color='gray' />
            <span className='hover:text-white text-black font-mono font-semibold'>{title}</span>
        </a>
    )
}

export default BoxLink
