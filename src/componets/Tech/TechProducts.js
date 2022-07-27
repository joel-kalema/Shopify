import React from 'react';
import Products from '../All/product';

class Tech extends React.Component {
    render() {
        return(
            <>
                <h1>TECH</h1>
                <div className="cards">
                    {this.props.posts.splice(-1, 2).map((product) => (
                        <Products posts={product} key={product.id} popUp={this.props.popUp} />
                ))}
                </div>
            </>
        )
    }
}

export default Tech;

