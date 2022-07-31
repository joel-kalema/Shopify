import React from "react";
import './Detail.css';

class Detail extends React.Component {
    render() {
        const data =this.props.data;
        return (
            <>
                <div className="datail">
                    <div className="img_detail">{data.gallery.map((img) => (<img src={img} />))}</div>
                    <div className="pricipal_img"><img src={data.gallery[0]} /></div>
                    <div className="detail_name">
                        <h3>{data.name}</h3>
                        <p>{data.brand}</p>
                        <div>
                            {data.attributes.map((att) => (
                                <div>
                                    <h4>{att.name}</h4>
                                    <div>{att.items.map((itm)=>(<p>{itm.displayValue}</p>))}</div>
                                </div>))
                            }
                        </div>
                        <div>
                            <h3>Price</h3>
                            <h3>{data.prices[0].currency.symbol}{data.prices[0].amount}</h3>
                        </div>
                        <button type="button" onClick={() => {console.log(this.props.popUp(data))}}>ADD TO CARD</button>
                        <p>{data.description}</p>
                    </div>
                </div>
            </>
        )
    }
}

export default Detail;