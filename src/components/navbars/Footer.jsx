import React from 'react';
import LogoDark from '../../assets/logos/UnionDark.png';
import Icon from '../icons/Icon';

const Footer = () => {
    return (
        <div className="mt-12 sm:mt-16 md:mt-20 px-4 sm:px-8 md:px-16">
            <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 p-4">
                        <div className="flex items-center space-x-2">
                            <img src={LogoDark} alt="Logo" className="h-6 w-6 sm:h-8 sm:w-8" />
                            <h1 className="text-base sm:text-lg md:text-xl font-bold">Khoa</h1>
                        </div>
                        <a
                            className="font-mono no-underline text-black text-sm sm:text-base md:text-lg font-medium"
                            href="http://localhost:5173/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            http://localhost:5173/
                        </a>
                    </div>
                    <div>
                        <p className="font-mono mt-2 sm:ml-4 text-sm sm:text-base">
                            Frontend Engineer & React Native developer based in Bangladesh
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-4">
                    <div className="text-base sm:text-lg md:text-xl font-mono">Social Media</div>
                    <div className="flex gap-4 sm:gap-6 justify-center items-center">
                        <a
                            href="https://www.facebook.com/khoa.tran.950366/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                        >
                            <Icon name="FaFacebook" className="w-6 h-6 sm:w-8 sm:h-8 hover:text-rose-500 transition-colors" />
                        </a>
                        <a
                            href="https://github.com/tnnkhoa3006"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <Icon name="FaGithub" className="w-6 h-6 sm:w-8 sm:h-8 hover:text-rose-500 transition-colors" />
                        </a>
                        <a
                            href="https://www.instagram.com/kt_jayit/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <Icon name="FaInstagram" className="w-6 h-6 sm:w-8 sm:h-8 hover:text-rose-500 transition-colors" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/khoa-tr%E1%BA%A7n-b10b86374/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <Icon name="FaLinkedin" className="w-6 h-6 sm:w-8 sm:h-8 hover:text-rose-500 transition-colors" />
                        </a>
                        {/* Removed empty Twitter link */}
                    </div>
                </div>
            </div>
            <div className="border-t-[1px] border-rose-300 mt-6 pt-4">
                <div className="flex justify-center items-center">
                    <p className="text-xs sm:text-sm font-mono">© 2025 Khoa Tran. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;