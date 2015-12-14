/**
 * Created by shuding on 12/14/15.
 * <ds303077135@gmail.com>
 */

import React from 'react';

import styles from './CreditCardPaymentInput.less';

export default class CreditCardPaymentInput extends React.Component {
    render() {
        return <label className={styles.label}>
            {this.props.label || '\u00A0'}
            {
                this.props.type === '_month' ? <select>
                    {
                        ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
                            .map(month => <option value={month}
                                                  selected={month === this.props.value ? 'selected' : ''}>{month}</option>)
                    }
                </select> : this.props.type === '_year' ? <select>
                    {
                        Array.from(new Array(20), (x, i) => <option value={i + 2000}
                                                                    selected={i + 2000 == this.props.value ? 'selected' : ''}>{i + 2000}</option>)
                    }
                </select> : this.props.type === '_card' ? <input type="text" value={this.props.value.match(/\d{4}/g).join('     ')}/> :
                    <input type={this.props.type} value={this.props.value}/>
            }
        </label>;
    }
};
