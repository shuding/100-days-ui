/**
 * Created by shuding on 12/11/15.
 * <ds303077135@gmail.com>
 */

import React from 'react';

import styles from './DialPadContactCard.less';

export default class DialPadContactCard extends React.Component {
    formatNumber(num, match) {
        if (!num) {
            return {__html: ''};
        }
        let str = num, cnt = 0, ret = '+';
        if (match) {
            str = str.replace(match, s => `<strong>${s}</strong>`);
        }
        for (let i = 0; i < str.length; ++i) {
            ret += str[i];
            if (/\d/.test(str[i])) {
                ++cnt;
                if ([2, 6, 9].indexOf(cnt) > -1) {
                    ret += ' ';
                }
            }
        }
        return {__html: ret};
    }

    render() {
        return <div className={styles.container}>
            <div className={styles.avator} style={{backgroundImage: `url(${this.props.avator})`}}></div>
            <div>
                <h3>{this.props.name || ''}</h3>
                <p dangerouslySetInnerHTML={this.formatNumber(this.props.number, this.props.match)}/>
            </div>
        </div>;
    }
}
