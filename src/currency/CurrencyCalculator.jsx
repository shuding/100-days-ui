/**
 * Created by shuding on 12/18/15.
 * <ds303077135@gmail.com>
 */

import React from 'react';

import CurrencyInputGroup from './CurrencyInputGroup';

import styles from './CurrencyCalculator.less';

var exchangeRates = {
    'XBT': 0.0024,
    'USD': 1.0841,
    'EUR': 1.0000,
    'GBP': 0.7266
};

export default class CurrencyCalculator extends React.Component {
    constructor () {
        super();
        this.state = {
            inputValue: 1,
            inputType: 'XBT',
            outputValue: 253.75,
            outputType: 'USD'
        };
    }

    handleChange(type, event) {
        switch (type) {
            case 'input-value':
                this.state.inputValue = event.target.value;
                this.state.outputValue = this.state.inputValue / exchangeRates[this.state.inputType] * exchangeRates[this.state.outputType];
                this.state.outputValue = this.state.outputValue.toFixed(2).toString();
                break;
            case 'input-type':
                this.state.inputType = event.target.value;
                this.state.outputValue = this.state.inputValue / exchangeRates[this.state.inputType] * exchangeRates[this.state.outputType];
                this.state.outputValue = this.state.outputValue.toFixed(2).toString();
                break;
            case 'output-value':
                this.state.outputValue = event.target.value;
                this.state.inputValue = this.state.outputValue / exchangeRates[this.state.outputType] * exchangeRates[this.state.inputType];
                this.state.inputValue = this.state.inputValue.toFixed(2).toString();
                break;
            case 'output-type':
                this.state.outputType = event.target.value;
                this.state.inputValue = this.state.outputValue / exchangeRates[this.state.outputType] * exchangeRates[this.state.inputType];
                this.state.inputValue = this.state.inputValue.toFixed(2).toString();
                break;
        }
        this.setState();
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.result}>
                    <strong><sup>$</sup>253.96</strong>
                    <small>-0/70%</small>
                </div>
                <div className={styles.convert}>
                    <CurrencyInputGroup type={this.state.inputType} value={this.state.inputValue}
                                        onchangevalue={(e) => {this.handleChange('input-value', e);}}
                                        onchangetype={(e) => {this.handleChange('input-type', e);}}/> =
                    <CurrencyInputGroup type={this.state.outputType} value={this.state.outputValue}
                                        onchangevalue={(e) => {this.handleChange('output-value', e);}}
                                        onchangetype={(e) => {this.handleChange('output-type', e);}}/>
                </div>
            </div>
        );
    }
}
