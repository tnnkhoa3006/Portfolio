import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/navbars/Header.jsx'
import SideBar from './components/navbars/SideBar.jsx'

const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <SideBar />
        <main className="flex-1 p-6 ml-16 mt-16 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default MainLayout
