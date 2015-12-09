/**
 * Created by shuding on 12/10/15.
 * <ds303077135@gmail.com>
 */

import React from 'react';

import LoginFormTab from './LoginFormTab';
import {LoginFormInput, LoginFormCheckbox, LoginFormSubmit} from './LoginFormInput';

import styles from "./LoginForm.less";

export default class LoginForm extends React.Component {
    static getProps() {
        return {};
    }

    render() {
        return <div className={styles.container}>
            <div className={styles.containerContent}>
                <div>
                    <LoginFormTab items={[{text:'Sign In', href:'#', active: true}, {text:'Sign Up', href:'#'}]}/>
                    <div>
                        <LoginFormInput label='username' type='username' value='Paul Flavius' />
                        <LoginFormInput label='password' type='password' value='Paul Flavius' />
                        <LoginFormCheckbox label='Keep me Signed in' />
                        <LoginFormSubmit label='Sign In' />
                    </div>
                    <div className={styles.footer}>
                        <a>Forgot Password?</a>
                    </div>
                </div>
            </div>
        </div>;
    }
};
