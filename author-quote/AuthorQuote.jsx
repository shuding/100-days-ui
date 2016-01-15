/**
 * Created by shuding on 1/5/16.
 * <ds303077135@gmail.com>
 */

import React from 'react';
import AuthorQuoteSidebar from './AuthorQuoteSidebar';
import AuthorQuoteContent from './AuthorQuoteContent';

import styles from './AuthorQuote.less';
import bg1 from 'elements/AuthorQuote/pic-1.jpg';
import bg2 from 'elements/AuthorQuote/pic-2.jpg';

export default class AuthorQuote extends React.Component {
    constructor() {
        super();

        this.state = {
            page:    2,
            current: 0
        };
        this.setState();
    }

    leftHandler() {
        this.state.current = (this.state.current - 1 + this.state.page) % this.state.page;
        this.setState();
    }

    rightHandler() {
        this.state.current = (this.state.current + 1) % this.state.page;
        this.setState();
    }

    render() {
        console.log(this.state);
        return (
            <div className={styles.container}>
                <div className={styles.sidebar}>
                    <AuthorQuoteSidebar onLeft={() => this.leftHandler()}
                                        onRight={() => this.rightHandler()}>
                        <div style={{marginLeft: this.state.current * -100 + '%'}}>
                            <img src={bg1}/>
                            <img src={bg2}/>
                        </div>
                    </AuthorQuoteSidebar>
                </div>
                <div className={styles.content}>
                    <div className={styles['content-wrapper']} style={{marginLeft: this.state.current * -100 + '%'}}>
                        <AuthorQuoteContent likes={420} liked={false}
                                            quote="Don’t you think that if I were wrong, I’d know it?"
                                            author="Sheldon Cooper"
                                            color="#18A0FF"/>
                        <AuthorQuoteContent likes={123} liked={true} quote="I never guess." author="Sherlock Holmes"
                                            color="#222222"/>
                    </div>
                </div>
            </div>
        );
    }
};
