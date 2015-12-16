/**
 * Created by shuding on 12/16/15.
 * <ds303077135@gmail.com>
 */

import React from 'react';

import styles from './MusicPlayerProgress.less';

export default class MusicPlayerProgress extends React.Component {
    constructor(props) {
        super(props);
        let { current, total } = props;
        this.state = {
            current,
            total
        };
    }

    format(sec) {
        // formats time like X:XX from seconds
        return ~~(sec / 60) + ':' + (sec % 60 > 9 ? sec % 60 : '0' + sec % 60);
    }

    handleClick(ev) {
        let box = ev.currentTarget.getBoundingClientRect();
        this.setState({current: ~~((ev.clientX - box.left) / box.width * this.state.total)});
    }

    render() {
        //console.log(this.props);
        return (
            <div>
                <div className={styles.time}>
                    <span>{this.format(this.state.current)}</span>
                    <span>{this.format(this.state.total)}</span>
                </div>
                <div className={styles.barContainer} onClick={(ev) => {this.handleClick(ev);}}>
                    <div className={styles.bar}>
                        <div style={{ width: (this.state.current / this.state.total * 100) + "%" }}></div>
                    </div>
                </div>
            </div>
        );
    }
}
