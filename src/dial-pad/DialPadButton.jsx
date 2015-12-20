/**
 * Created by shuding on 12/11/15.
 * <ds303077135@gmail.com>
 */

import React from 'react';

import styles from './DialPadButton.less';

import phone from './phone.png';

export class DialPadButton extends React.Component {
    render() {
        return <div>
            <div className={styles.digitButton} onClick={()=>{if(this.props.onClick)this.props.onClick(this.props.digit);}}>
                <span><span>{this.props.digit}</span><small>{this.props.letters || ' '}</small></span>
            </div>
        </div>;
    }
}

export class DialPadCallButton extends React.Component {
    render() {
        return <div className={styles.digitButton + ' ' + styles.callButton}>
            <img src={phone} />
        </div>;
    }
}
