import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import { loadCarrentItem } from '../../redux/actions/actions_types';
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
                                        <img src='Vector02.png' alt='' />
                                    </div>
                                    <p>{prod.name}</p>
                                    <h4>{prod.prices[0].currency.symbol} {prod.prices[0].amount}</h4>
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
})
  
  export default connect(null, mapDispatchToProps)(Products);