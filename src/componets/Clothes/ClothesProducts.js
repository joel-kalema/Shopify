import React from 'react';
import Products from '../All/product';

class Clothes extends React.Component {
    render() {
        return(
            <>
                <h2>CLOTHES</h2>
                ¨{
                    this.props.posts.length > 0 ? (
                        <div className="cards">
                    {this.props.posts.splice(-2, 1).map((product) => (
                        <Products posts={product} key={product.id} popUp={this.props.popUp} />
                    ))}
                </div>
                    ):(
                        <><h1>Error</h1></>
                    )
                }
                
            </>
        )
    }
}

export default Clothes;

