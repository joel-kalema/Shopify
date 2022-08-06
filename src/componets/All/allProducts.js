import {connect} from 'react-redux'
import React from 'react';
import Products from './product';
import { fetchProduct } from '../../redux/actions/actions_types';
import './All.css';

class All extends React.Component {
    componentDidMount() {
        this.props.fetchData()
      }
    render() {
        return(
            <>
                <h2>All</h2>
                <div className="cards">
                    {this.props.products.splice(-3, 1).map((product) => (
                        <Products key={product.id} products={product}  />
                    ))}
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    products : state.shop.products,
    cart: state.shop.cart
  })
  
  const mapDispatch = (dispatch) => ({
    fetchData : () => dispatch(fetchProduct()),
  })
  
  export default connect(mapStateToProps, mapDispatch)(All);

