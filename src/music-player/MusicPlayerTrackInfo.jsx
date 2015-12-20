/**
 * Created by shuding on 12/16/15.
 * <ds303077135@gmail.com>
 */

import React from 'react';

import styles from './MusicPlayerTrackInfo.less';

export default class MusicPlayerTrackInfo extends React.Component {
    render () {
        return (
            <div className={styles.container}>
                <p className={styles.artist}>{this.props.artist}</p>
                <p className={styles.album}>{this.props.album}</p>
                <p className={styles.title}>{this.props.title}</p>
            </div>
        );
    }
}
