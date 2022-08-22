import React from "react";
import './cart.css';
import {connect} from "react-redux/es/exports";

class Cart extends React.Component {
    render () {
        console.log(this.props.cart)
        return (
            <div>
                <div className="cart">
                <h2 className="cart_title">CART</h2>
                    {
                        this.props.cart.map((itm) => (
                            <div className="cartItems">
                                <div className="cart_datails">
                                    <h3>{itm.name}</h3>
                                    <p>{itm.brand}</p>
                                    {itm.attributes.map((att) => (
                                        <div>
                                            <h4>{att.name}</h4>
                                        <div className='sizes'>
                                            {att.items.map((itm)=>(<p className='size_item'>{itm.displayValue}</p>))}
                                        </div>
                                    </div>))}
                                </div>
                                <div className="cart_qty">
                                    <button type="button">+</button>
                                    <p>{itm.qty}</p>
                                    <button type="button">-</button>
                                </div>
                                <div className="cart_img">
                                    <img src={itm.gallery[0]} />
                                </div>
                            </div>
                        ))
                    }
                    <div className="cart_total">
                        {this.props.cart.map((qt, sum) =>
                            (<p>{ sum += qt.qty}</p>)
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cart: state.shop.cart
})

export default connect(mapStateToProps)(Cart)