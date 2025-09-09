import { Link, NavLink } from "react-router"

export default function Header(){
    return(
        <header className="main-header">
            <div className="container">
                <div className="logo-menu">
                    <h1><Link to="/">Mini <span className="txt-primary-color">Project</span></Link></h1>
                    <nav className="main-menu">
                        <button className="toggle-menu" style={{display:'none'}}>Toggle Menu</button>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/features">Features</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}