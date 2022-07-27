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
                            <li><NavLink to="/all">ALL</NavLink></li>
                            <li><NavLink to="/clothes">CLOTHES</NavLink></li>
                            <li><NavLink to="/tech">TECH</NavLink></li>
                        </ul>
                    </nav>
                    <div>
                        <h1>Icon</h1>
                    </div>
                    <div>
                        <h1>Basket</h1>
                    </div>
                </header>
            </>
        )
    }
}

export default Nav;
