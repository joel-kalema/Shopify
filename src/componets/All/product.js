import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import { loadCarrentItem } from '../../redux/actions/actions_types';
import { addToCart } from '../../redux/actions/actions_types';
import './All.css';


class Products extends React.Component {
    render() {
        console.log(this.props.prod)
        console.log(this.props.cart)
        const {products} = this.props.products        
        return(
            <>
                {products.length > 0 ? (
                    products.map(prod => (
                        <Link to={`/product/${prod.id}`}>
                            <div onClick={() => this.props.loadCarrentItem(prod)} className="card">
                                <div className="card_img">
                                    <img src={prod.gallery[0]} />
                                </div>
                                <div className="about">
                                    <div className='bay_product'>
                                        <img onClick={() => this.props.addToCart(prod)} src='Vector02.png' alt='' />
                                    </div>
                                    <p>{prod.name}</p>
                                    <h5>{prod.prices[0].currency.symbol} {prod.prices[0].amount}</h5>
                                </div>
                            </div>
                        </Link>
                ))
                ) : <p>fetching Data</p>}
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    loadCarrentItem : (item) => dispatch(loadCarrentItem(item)),
    addToCart : (id) => dispatch(addToCart(id))
})
  
  export default connect(null, mapDispatchToProps)(Products);