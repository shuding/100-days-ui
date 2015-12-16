/**
 * Created by shuding on 12/10/15.
 * <ds303077135@gmail.com>
 */

import React from 'react';

import styles from "./LoginFormInput.less";

export class LoginFormInput extends React.Component {
    render() {
        var { label, type, value } = this.props;
        return <div className={styles.inputLabelContainer}>
            <label>
                <p>{label}</p>
                <input type={type} value={value} autocomplete="off"/>
            </label>
        </div>;
    }
}

export class LoginFormCheckbox extends React.Component {
    render() {
        var { label } = this.props;
        return <div className={styles.checkboxLabelContainer}>
            <label>
                <input type='checkbox'/>
                <p>{label}</p>
            </label>
        </div>;
    }
}

export class LoginFormSubmit extends React.Component {
    render() {
        var { label } = this.props;
        return <div className={styles.inputLabelContainer}>
            <label>
                <input type='submit' value={label}/>
            </label>
        </div>;
    }
}
