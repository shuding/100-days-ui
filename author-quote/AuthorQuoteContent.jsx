/**
 * Created by shuding on 1/5/16.
 * <ds303077135@gmail.com>
 */

import React from 'react';

import styles from './AuthorQuoteContent.less';

export default class AuthorQuoteContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            likes: props.likes || 0,
            liked: props.liked || false
        };
    }

    clickHandler() {
        if (this.state.liked) {
            this.state.likes--;
        } else {
            this.state.likes++;
        }
        this.state.liked = !this.state.liked;
        this.setState();
    }

    render() {
        return (
            <div className={styles.container} style={{backgroundColor: this.props.color || '#18A0FF'}}>
                <div>
                    <div className={styles.button + ' ' + (this.state.liked ? styles.checked : '')} onClick={()=>{this.clickHandler()}}><span>❤</span><span>{this.state.likes}</span></div>
                    <div className={styles.quote}>{this.props.quote}</div>
                    <div className={styles.author}>- {this.props.author}</div>
                </div>
            </div>
        );
    }
};
