/**
 * Created by shuding on 12/11/15.
 * <ds303077135@gmail.com>
 */

import React from 'react';

import styles from './ProductViewNumberIncrementer.less';

export default class ProductViewNumberIncrementer extends React.Component {
    constructor(props) {
        super(props);
        let { value, min, max, onChange } = props;
        this.state = {
            value,
            min,
            max,
            onChange
        };
    }

    static getProps() {
        return {};
    }

    handleDec() {
        if (this.state.value > this.state.min) {
            if (this.state.onChange) this.state.onChange(this.state.value - 1);
            this.setState({value: this.state.value - 1});
        }
    }

    handleInc() {
        if (this.state.value < this.state.max) {
            if (this.state.onChange) this.state.onChange(this.state.value + 1);
            this.setState({value: this.state.value + 1});
        }
    }

    render() {
        return <span className={styles.numberIncrementer}>
            <button onClick={() => {this.handleDec();}}>&lt;</button><span>{
            this.state.value < 10 ? '0' + this.state.value : this.state.value
        }</span><button onClick={() => {this.handleInc();}}>&gt;</button>
        </span>;
    }
}
