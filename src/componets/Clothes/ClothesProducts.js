import React from 'react';
import {connect} from 'react-redux'
import { fetchProduct } from '../../redux/actions/actions_types';
import Products from '../All/product';

class Clothes extends React.Component {
    componentDidMount() {
        this.props.fetchData()
      }

    render() {
        return(
            <>
                <h2>All</h2>
                <div className="cards">
                    {this.props.products.splice(-2, 1).map((product) => (
                    <Products products={product} />
                    ))}
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    products : state.shop.products
  })
  
  const mapDispatch = (dispatch) => ({
    fetchData : () => dispatch(fetchProduct())
  })
  
  export default connect(mapStateToProps, mapDispatch)(Clothes);

