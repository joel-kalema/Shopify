import React from 'react';
import {connect} from 'react-redux'
import { fetchProduct } from '../../redux/actions/actions_types';
import Products from '../All/product';

class Tech extends React.Component {
    componentDidMount() {
        this.props.fetchData()
      }

    render() {
        return(
            <>
                <h1>TECH</h1>
                <div className="cards">
                    {this.props.products.splice(-1, 2).map((product) => (
                        <Products products={product}/>
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
  
  export default connect(mapStateToProps, mapDispatch)(Tech);

