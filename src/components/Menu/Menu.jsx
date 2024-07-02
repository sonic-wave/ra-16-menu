import { NavLink } from "react-router-dom";

export default function Menu() {
    const navItems = [
        { label: 'Главная', link: '/' },
        { label: 'Дрифт-такси', link: '/drift' },
        { label: 'Time Attack', link: '/timeattack' },
        { label: 'Forza Karting', link: '/forza' },
    ]

    const active = ({ isActive }) => isActive ? 'menu__item menu__item-active' : 'menu__item';


    return (
        <div className="menu">
            {navItems.map(({ label, link }) => (
                <NavLink className={active} key={label} to={link}>{label}</NavLink>
            ))}
        </div>
    )
}