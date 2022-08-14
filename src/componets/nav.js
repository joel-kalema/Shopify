import React from "react";
import {connect} from 'react-redux'
import { NavLink } from "react-router-dom";
import { fetchProduct } from "../redux/actions/actions_types";
import '../App.css';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

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
                        <div className="add_cart"><h3>{this.props.cart.length}</h3></div>
                        <img src="Vector.png" alt=""/>
                    </div>
                </header>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    cart: state.shop.cart
})
    
  export default connect(mapStateToProps)(Nav);
