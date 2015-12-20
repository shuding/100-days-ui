/**
 * Created by shuding on 12/10/15.
 * <ds303077135@gmail.com>
 */

import React from 'react';

import styles from "./LoginFormTab.less";

export default class LoginFormTab extends React.Component {
    render() {
        var { items } = this.props;
        return <div>
            {
                items.length ? <ul className={styles.tabContainer}>
                    { items.map((tab) => <li className={tab.active ? styles.active : ''}>
                        <a href={tab.href}>{tab.text}</a>
                    </li>) }
                </ul> : ''
            }
        </div>;
    }
}
