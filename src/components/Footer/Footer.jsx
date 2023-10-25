import { NavLink } from 'react-router-dom'
import logo from '../../assets/svgs/logo.svg'
import './Footer.scss'

export default function Footer() {

    const socials = [
        {
            name: 'Facebook',
            icon: <i className="fab fa-facebook-f"></i>
        },
        {
            name: 'Twitter',
            icon: <i className="fab fa-twitter"></i>
        },
        {
            name: 'Instagram',
            icon: <i className="fab fa-instagram"></i>
        }
    ]

    const mainRoutes = [
        {
            name: 'News',
            path: '/news'
        },
        {
            name: 'Tournaments',
            path: '/tournaments'
        },
        {
            name: 'Courses',
            path: '/courses'
        },
        {
            name: 'E-Books',
            path: '/ebooks'
        }
    ]

    const subRoutes = [
        {
            name: 'Privacy policies',
            path: '/privacy-policies'
        },
        {
            name: 'Terms & Conditions',
            path: '/terms-conditions'
        },
        {
            name: 'Contact Us',
            path: '/contact'
        },
    ]



    return (
        <div className='footer'>
            <div className="container">
                <div className="footer-head">
                    <img src={logo} alt="logo" />
                    <div className="newsetter-label">
                        <p>Join our</p>
                        <h6>Newsetter</h6>
                    </div>
                    <div className="newsetter-input">
                        <input type="text" placeholder="What your are Looking for?" />
                        <button>Subscribe</button>
                    </div>
                </div>
                <div className="footer-body">
                    <div className="footer-about">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesett ing industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>

                        <h6>
                            Follow us on
                        </h6>

                        <ul>
                            {socials.map((social, index) => (
                                <li key={index}>
                                    {social.icon}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="footer-links">
                        {mainRoutes.map((route, index) => (
                            <div key={index}>
                                <NavLink to={route.name}>{route.name}</NavLink>
                            </div>
                        ))}
                    </div>
                    <div className="footer-links">
                        {subRoutes.map((route, index) => (
                            <div key={index}>
                                <NavLink to={route.name}>{route.name}</NavLink>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="footer-rights">
                <p>
                    2023 LOGO. All Rights Reserved.
                </p>
            </div>
        </div>
    )
}
