import React from 'react'
import IntroduceBody from './bodydivs/IntroduceBody.jsx'
import ProjectBody from './bodydivs/ProjectBody.jsx'
import Footer from '../navbars/Footer.jsx'
import SkillsBody from './bodydivs/SkillsBody.jsx'

const HomeBody = () => {
  return (
    <div>
      <IntroduceBody />
      <ProjectBody />
      <SkillsBody />
      <Footer />
    </div>
  )
}

export default HomeBody
