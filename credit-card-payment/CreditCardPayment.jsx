/**
 * Created by shuding on 12/14/15.
 * <ds303077135@gmail.com>
 */

import React from 'react';

import CreditCardPaymentInput from './CreditCardPaymentInput';

import styles from './CreditCardPayment.less';
import visa from './visa.png';

export default class CreditCardPayment extends React.Component {
    render() {
        return <div className={styles.container}>
            <div className={styles.header}>
                <div>Payment<br/>details</div>
                <div><img src={visa}/></div>
            </div>
            <div className={styles.content}>
                <div className={styles.row}>
                    <CreditCardPaymentInput label="Cardholder’s Name" value="Johny Relative" type="text" />
                    <CreditCardPaymentInput label="Card Number" value="4478632299238990" type="_card" />
                </div>
                <div className={styles.row}>
                    <CreditCardPaymentInput label="Expire Date" value="July" type="_month" />
                    <CreditCardPaymentInput label="" value="2017" type="_year" />
                    <CreditCardPaymentInput label="CVV" value="63" type="text" />
                </div>
            </div>
        </div>;
    }
};
