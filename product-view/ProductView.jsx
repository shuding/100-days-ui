/**
 * Created by shuding on 12/10/15.
 * <ds303077135@gmail.com>
 */

import React from 'react';

import styles from "./ProductView.less";
import ProductViewStar from "./ProductViewStar";
import ProductViewNumberIncrementer from "./ProductViewNumberIncrementer";

import arrow from "./arrow.png";

export default class ProductView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            star:     4,
            quantity: 3,
            price:    320.00
        };
    }

    static getProps() {
        return {};
    }

    quantityHandler(newQuantity) {
        this.setState({quantity: newQuantity});
    }

    render() {
        let quantityHandlerWrapper = (v) => {
            this.quantityHandler(v);
        };

        return <div className={styles.container}>
            <a className={styles.back}><img src={arrow} /></a>
            <header>
                <div className={styles.productPreview}>
                    <h2 className={styles.productName}>NOOK</h2>

                    <h3 className={styles.productSubtitle}>Lounge Chair</h3>
                    <h4 className={styles.productPrice}>${this.state.price.toFixed(2)}</h4>

                    <div className={styles.productImage}></div>
                </div>
                <div className={styles.productDetails}>
                    <p>Designer Karim Rashid continues to put his signature spin on all genres of design through various
                        collaborations with top-notch companies. Another one to add to the win column is his work with
                        Italian manufacturer Chateau d’Ax. </p>

                    <p><strong>In stock.</strong> <a href="javascript:;">Buy Extended Warranty</a></p>

                    <div className={styles.productReview}>
                        <ProductViewStar star={this.state.star}/> (4.67 - 172 reviews)
                    </div>
                    <div className={styles.productQuantity}>
                        <span>Quantity</span>
                        <span className={styles.productQuantityIncrementer}>
                            <ProductViewNumberIncrementer value={this.state.quantity} min={0} max={99}
                                                          onChange={quantityHandlerWrapper}/>
                        </span>
                    </div>
                </div>
            </header>
            <footer>
                <div>
                    <small>Total Price</small>
                    <p>${(this.state.quantity * this.state.price).toFixed(2)}</p>
                </div>
                <div>
                    <a href="javascript:;">Add to Cart</a>
                </div>
            </footer>
        </div>;
    }
};
