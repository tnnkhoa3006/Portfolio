import Icon from '../icons/Icon.jsx'

const SideBar = () => {
  return (
    <div className="fixed flex flex-col h-screen items-center w-16 space-y-8">
      <div className='flex w-full justify-center pt-20'>
        <div className='dark:bg-gray-500 bg-gray-400 w-[2px] h-[240px]'></div>
      </div>
      <div className='flex flex-col w-full items-center space-y-4'>
        <a href="https://www.facebook.com/khoa.tran.950366/" target="_blank" rel="noopener noreferrer"><Icon name="FaFacebook" /></a>
        <a href="https://github.com/tnnkhoa3006" target="_blank" rel="noopener noreferrer"><Icon name="FaGithub" /></a>
        <a href="https://www.instagram.com/kt_jayit/" target="_blank" rel="noopener noreferrer"><Icon name="FaInstagram" /></a>
      </div>
    </div>
  )
}

export default SideBar
