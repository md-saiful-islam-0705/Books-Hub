import { Outlet } from 'react-router-dom'
import NavBar from '../components/Navbar/NavBar'

const MainLayout = () => {
  return (
    <>
      <div className="container mx-auto" >
        <NavBar />
        <Outlet />
      </div>
    </>
  )
}

export default MainLayout