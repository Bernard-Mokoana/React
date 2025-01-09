
import Headers from './components/Header/Headers'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'

function Layout() {
  return (
    <>
    <Headers />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout