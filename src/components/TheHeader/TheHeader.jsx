import { NavLink } from 'react-router-dom'
import {useEffect} from 'react'
import Logo from '../Logo/Logo'
import logo from '../../assets/logo.svg'
import './TheHeader.scss'
import useLocationHook from '../../utils/hooks/useLocationHook'

function TheHeader() {

useEffect(() => {
    
 const location = useLocationHook();
}, []);
    console.log(location)
    return (
        <header className="header">
            <section className="header__main">
                <Logo src={logo} />
                <nav className="header__menu">
                    <ul className="header__menu-block">
                        <li className="header__menu-link">
                            <NavLink
                                to="/"
                                className={` header__NavLink  ${location.path}==='/' && header__NavLink_active`}
                            />
                            Главная
                        </li>
                        <li className="header__menu-link">
                            <NavLink
                                to="/about"
                                className={` header__NavLink  ${location.path}==='/about' && header__NavLink_active`}
                            />
                            О нас{' '}
                        </li>
                        <li className="header__menu-link">
                            <NavLink
                                to="/blog"
                                className={` header__NavLink  ${location.path}==='/blog' && header__NavLink_active`}
                            />
                            Блог
                        </li>
                        <li className="header__menu-link">
                            <NavLink
                                to="/contacts"
                                className={` header__NavLink  ${location.path}==='/contacts' && header__NavLink_active`}
                            />
                            Контакты
                        </li>
                    </ul>
                </nav>
            </section>
        </header>
    )
}

export default TheHeader
