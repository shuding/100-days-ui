/**
 * Created by shuding on 1/5/16.
 * <ds303077135@gmail.com>
 */

import React from 'react';

import styles from './AuthorQuoteSidebar.less';

export default class AuthorQuoteSidebar extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div className={styles.container}>
                <div className={styles.bg}>{
                    this.props.children
                }</div>
                <div className={styles.quoteMark}>&ldquo;</div>
                <div className={styles.pagination}><span onClick={this.props.onLeft}>&lt;</span><span onClick={this.props.onRight}>&gt;</span></div>
            </div>
        );
    }
};
