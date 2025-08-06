import LogoDark from '../../assets/logos/UnionDark.png'
import NavLink from './NavLink'
import Icon from '../icons/Icon.jsx'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className='w-full fixed top-0 h-16 bg-[rgb(215,230,240)] flex items-center'>
      <div className='flex w-[calc(100%-theme(spacing.20))] items-center pl-20 justify-between h-full'>
        <div className='flex items-center space-x-2'>
            <img onClick={() => navigate('/')} src={LogoDark} alt="Logo" className='h-5 w-5 cursor-pointer' />
            <h1 className='text-lg font-bold'>Khoa</h1>
        </div>
        <div className='flex items-center justify-center'>
            <NavLink />
        </div>
        <div>
            <Icon name='FaCog' />
        </div>
      </div>
    </div>
  )
}

export default Header
