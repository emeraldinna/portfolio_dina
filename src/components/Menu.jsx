import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
        <NavLink to="." style={({ isActive }) => isActive ? {color: 'black', textDecoration: 'none'} : {}}>
            DINA BERKGAUT
        </NavLink>
        <NavLink to="photography">Photography</NavLink>
        <NavLink to="animation">Animation</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="contact">Contact</NavLink>
    </nav>
  )
}

export default Menu;