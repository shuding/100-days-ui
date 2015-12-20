/**
 * Created by shuding on 12/18/15.
 * <ds303077135@gmail.com>
 */

import React from 'react';

import CurrencyTab from './CurrencyTab';
import CurrencyChart from './CurrencyChart';
import CurrencyCalculator from './CurrencyCalculator';
import styles from './Currency.less';

export default class Currency extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <CurrencyTab tab={[{active: true, name: 'BTC'}, {name: 'USD'}, {name: 'EUR'}, {name: 'GBP'}]} />
                <CurrencyChart />
                <CurrencyCalculator />
            </div>
        );
    }
}
