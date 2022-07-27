import React from 'react';
import Products from './product';
import './All.css';

class All extends React.Component {
    render() {
        return(
            <>
                <h2>All</h2>
                <div className="cards">
                    {this.props.posts.splice(-3, 1).map((product) => (
                        <Products posts={product} key={product.id} popUp={this.props.popUp} />
                    ))}
                </div>
            </>
        )
    }
}

export default All;

