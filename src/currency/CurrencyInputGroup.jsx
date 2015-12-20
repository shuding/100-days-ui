/**
 * Created by shuding on 12/18/15.
 * <ds303077135@gmail.com>
 */

import React from 'react';

import styles from './CurrencyInputGroup.less';

export default class CurrencyInputGroup extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <input type="text" value={this.props.value} onChange={this.props.onchangevalue || (()=>{})}/>
                <select onChange={this.props.onchangetype || (()=>{}) }>
                    {
                        ["XBT", "USD", "EUR", "GBP"].map(type => <option selected={type == this.props.type}
                                                                         value={type}>{type}</option>)
                    }
                </select>
            </div>
        );
    }
}
