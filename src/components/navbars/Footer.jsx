import React from 'react'
import LogoDark from '../../assets/logos/UnionDark.png'
import Icon from '../icons/Icon'

const Footer = () => {
    return (
        <div className='mt-20'>
            <div className='flex'>
                <div className='w-1/2'>
                    <div className='flex gap-14 p-4'>
                        <div className='flex items-center space-x-2'>
                            <img src={LogoDark} alt="Logo" className='h-5 w-5' />
                            <h1 className='text-lg font-bold'>Khoa</h1>
                        </div>
                        <a className='font-mono no-underline text-black text-lg font-medium' href="http://localhost:5173/" target="_blank" rel="noopener noreferrer">http://localhost:5173/</a>
                    </div>
                    <div>
                        <p className='font-mono ml-16'>Frontend Engineer & React Native developer based in Bangladesh</p>
                    </div>
                </div>
                <div className='w-1/2 flex flex-col items-center justify-center gap-4'>
                    <div className='text-xl font-mono'>
                        Social Media
                    </div>
                    <div className='flex gap-4 justify-center items-center'>
                        <a href="https://www.facebook.com/khoa.tran.950366/" target="_blank" rel="noopener noreferrer"><Icon name="FaFacebook" /></a>
                        <a href="https://github.com/tnnkhoa3006" target="_blank" rel="noopener noreferrer"><Icon name="FaGithub" /></a>
                        <a href="https://www.instagram.com/kt_jayit/" target="_blank" rel="noopener noreferrer"><Icon name="FaInstagram" /></a>
                        <a href="https://www.linkedin.com/in/khoa-tr%E1%BA%A7n-b10b86374/" target="_blank" rel="noopener noreferrer"><Icon name='FaLinkedin' /></a>
                        <a href="" target="_blank" rel="noopener noreferrer"><Icon name='FaTwitter' /></a>
                    </div>
                </div>
            </div>
            <div className='border-t-[1px] border-rose-300 mt-4 pt-4'>
                <div className='flex justify-center items-center mt-4'>
                    <p className='text-sm font-mono'>© 2025 Khoa Tran. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
