import React from 'react';
import ImageWebBook from '../assets/projects/webook.jpg';
import ImageInstagramClone from '../assets/projects/instagram-clone.png';
import ImagePixly from '../assets/projects/pixly.png';

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
    },
    {
        title: "Pixly",
        description: "A professional pixel art & animation editor that runs on both web and desktop (Tauri v2). Supports multi-layer drawing, frame-by-frame animation, onion skinning, and high-quality GIF export.",
        linkdemo: "",
        linkgithub: "https://github.com/tnnkhoa3006/pixly",
        image: ImagePixly,
        technologies: [
            "React",
            "TypeScript",
            "Vite",
            "Zustand",
            "Tauri v2",
            "Rust",
            "CSS",
        ],
    }
];

export default ProjectData;
