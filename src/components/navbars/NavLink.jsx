import React from 'react'
import LabelLink from '../navlinks/LabelLink.jsx'

const NavLink = () => {
  return (
    <div className="flex space-x-4">
      <LabelLink label="Home" link="/" />
      <LabelLink label="About" link="/about" />
      <LabelLink label="Projects" link="/projects" />
      <LabelLink label="Experience" link="/experience" />
      <LabelLink label="Contact" link="/contacts" />
    </div>
  )
}

export default NavLink
