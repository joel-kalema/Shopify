import React from 'react';
import { Link } from "react-router-dom";
import './All.css';

class Products extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        const { products } = this.props.posts
        // console.log(this.props.posts)
        return(
            <>
                {products.map((prod) => (
                    <Link to={`/product/${prod.name}`}>
                        <div className="card" key={prod.id} onClick={() => {this.props.popUp(prod)}}>
                            <div className="card_img">
                                <img src={prod.gallery[0]} />
                            </div>
                            <div className="about">
                                <div className='bay_product'>
                                    <img src='Vector02.png' alt='' />
                                </div>
                                <p>{prod.name}</p>
                                <h4>{prod.prices[0].currency.symbol} {prod.prices[0].amount}</h4>
                            </div>
                        </div>
                    </Link>
                ))}
            
            </>
        )
    }
}

export default Products;