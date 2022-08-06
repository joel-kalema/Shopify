import React from 'react';
import {connect} from 'react-redux'
import { addToCart } from '../../redux/actions/actions_types';
import './All.css';


class Products extends React.Component {
    render() {
        console.log(this.props.products)
        const {products} = this.props.products        
        return(
            <>
                {products.length > 0 ? (
                    products.map(prod => (
                        <div className="card">
                            <div className="card_img">
                                <img src={prod.gallery[0]} />
                            </div>
                            <div className="about">
                                <div onClick={() => addToCart(prod.id)} className='bay_product'>
                                    <img src='Vector02.png' alt='' />
                                </div>
                                <p>{prod.name}</p>
                                <h4>{prod.prices[0].currency.symbol} {prod.prices[0].amount}</h4>
                            </div>
                        </div>
                ))
                ) : <p>fetching Data</p>}
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    cart: state.shop.cart
  })
  
const mapDispatch = (dispatch) => ({
    addToCart : (id) => dispatch(addToCart(id))
})
  
  export default connect(mapStateToProps, mapDispatch)(Products);