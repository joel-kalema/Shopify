import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css';

class Nav extends React.Component {
    render() {
        return (
            <>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/">ALL</NavLink></li>
                            <li><NavLink to="/clothes">CLOTHES</NavLink></li>
                            <li><NavLink to="/tech">TECH</NavLink></li>
                        </ul>
                    </nav>
                    <div>
                        <img src="VSF.png" alt="logo"/>
                    </div>
                    <div>
                        <img src="Vector.png" alt=""/>
                    </div>
                </header>
            </>
        )
    }
}

export default Nav;
