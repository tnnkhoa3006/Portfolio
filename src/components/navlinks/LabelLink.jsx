import React from 'react'

const LabelLink = ({ label, link }) => {
  return (
    <div>
      <a href={link} className="text-gray-600 no-underline hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
        <span className='text-rose-700'>#</span>{label}
      </a>
    </div>
  )
}

export default LabelLink
