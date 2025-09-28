import { NavLink } from 'react-router-dom'

const MainMenu = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <ul className="nav">
            <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/heroes">Heroes</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default MainMenu