/**
 * Created by shuding on 12/11/15.
 * <ds303077135@gmail.com>
 */

import React from 'react';

import { DialPadButton, DialPadCallButton } from './DialPadButton';
import DialPadContactCard from './DialPadContactCard';

import styles from './DialPad.less';

import avator1 from './avator-1.jpg';
import avator2 from './avator-2.jpg';
import avator3 from './avator-3.jpg';

export default class DialPad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number:     "",
            numberSize: "48px",
            contacts:   [{
                name:   "Derek Teal",
                number: "400742723233",
                avator: avator1
            }, {
                name:   "Simon Burtton",
                number: "400742554784",
                avator: avator2
            }, {
                name:   "Penny Bart",
                number: "400742143020",
                avator: avator3
            }],
            digits:     [
                ["1", ""], ["2", "ABC"], ["3", "DEF"], ["4", "GHI"], ["5", "JKL"], ["6", "MNO"], ["7", "PQRS"], ["8", "TUV"], ["9", "WXYZ"], ["*", ""], ["0", "+"], ["#", ""]
            ]
        };
    }

    static getProps() {
        return {};
    }

    handleUpdate(number) {
        var newState = {
                        number,
            numberSize: "48px"
        };
        if (number.length > 8) {
            newState.numberSize = "36px";
        }
        if (number.length > 12) {
            newState.numberSize = "28px";
        }
        if (number.length > 15) {
            newState.numberSize = "22px";
        }
        this.setState(newState);
    }

    handleInput(num) {
        if (this.state.number.length < 18) {
            this.handleUpdate(this.state.number + num);
        }
    }

    handleClear() {
        if (this.state.number.length) {
            this.handleUpdate(this.state.number.substr(0, this.state.number.length - 1));
        }
    }

    render() {
        return <div className={styles.container}>
            <div className={styles.contactsContainer}><div>{
                this.state.contacts.map(contact => <DialPadContactCard {...contact} match={this.state.number}/>)
            }</div></div>
            <div className={styles.dialPadContainer}>
                <div className={styles.dialPadIndicator}>
                    <span className={styles.dialPadNumberControl}>+</span>
                <span className={styles.dialPadNumberDisplay}
                      style={{fontSize: this.state.numberSize}}>{this.state.number}</span>
                    <span className={styles.dialPadNumberControl} onClick={()=>{this.handleClear()}}>×</span>
                </div>
                <div className={styles.dialPadNumbers}>{
                    this.state.digits.map(digit => <DialPadButton onClick={(x)=>{this.handleInput(x)}} digit={digit[0]}
                                                                  letters={digit[1]}/>)
                }
                </div>
                <DialPadCallButton />
            </div>
        </div>;
    }
};
