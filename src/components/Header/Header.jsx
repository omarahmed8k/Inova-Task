import { NavLink } from 'react-router-dom'
import logo from '../../assets/svgs/logo.svg'
import './Header.scss'

export default function Header() {
    const routes = [
        { path: '/', name: 'Home' },
        { path: '/news', name: 'News' },
        { path: '/courses', name: 'Courses' },
        { path: '/ebook', name: 'E-books' },
        { path: '/contact', name: 'Contact Us' },
    ]
    return (
        <>
            <div className="container">
                <div className='header'>
                    <img src={logo} alt='logo' />
                    <a href="#">Sign In or Sign Up</a>
                </div>
            </div>

            <div className="header-nav">
                <div className="container">
                    <div className="nav-link">
                        {routes.map((route, index) => (
                            <NavLink key={index} to={route.path}>{route.name}</NavLink>
                        ))}
                    </div>
                    <div className="nav-cart">
                        <i className="fas fa-shopping-cart"></i>
                        <a href="#">Cart</a>
                    </div>
                </div>
            </div>
        </>
    )
}
