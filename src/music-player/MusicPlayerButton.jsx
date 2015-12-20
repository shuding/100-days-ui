/**
 * Created by shuding on 12/16/15.
 * <ds303077135@gmail.com>
 */

import React from 'react';

import styles from './MusicPlayerButton.less';

import pauseBtn from './pause.png';
import repeatBtn from './repeat.png';
import shuffleBtn from './shuffle.png';

export default class MusicPlayerButton extends React.Component {
    render() {
        let btn;
        switch (this.props.type) {
            case 'pause':
                btn = pauseBtn;
                break;
            case 'repeat':
                btn = repeatBtn;
                break;
            case 'shuffle':
                btn = shuffleBtn;
                break;
        }
        return (<span className={styles.container + ' ' + styles[this.props.type]}>
            <img src={btn}/>
        </span>);
    }
}