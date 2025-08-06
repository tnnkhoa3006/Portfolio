import React from 'react';
import ImageWebBook from '../assets/projects/webook.jpg';
import ImageInstagramClone from '../assets/projects/instagram-clone.png';

const ProjectData = [
    {
        title: "WebBook",
        description: "A web application for managing and sharing books.",
        linkdemo: "",
        linkgithub: "https://github.com/tnnkhoa3006/WEB_JS.git",
        image: ImageWebBook,
        technologies: [
            "JavaScript",
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Tailwind CSS",
        ],
    },
    {
        title: "Instagram Clone",
        description: "A clone of the Instagram app with basic features.",
        linkdemo: "https://clone-instagram-phi.vercel.app/",
        linkgithub: "https://github.com/tnnkhoa3006/CLONE_INSTAGRAM.git",
        image: ImageInstagramClone,
        technologies: [
            "JavaScript",
            "React",
            "Redux",
            "Node.js",
            "Express",
            "MongoDB",
            "Tailwind CSS",
            "socket.io",
            "Cloudinary",
            "webRTC",
        ],
    }
];

export default ProjectData;
