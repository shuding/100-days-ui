/**
 * Created by shuding on 12/16/15.
 * <ds303077135@gmail.com>
 */

import React from 'react';

import MusicPlayerTrackInfo from './MusicPlayerTrackInfo.jsx';
import MusicPlayerProgress from './MusicPlayerProgress.jsx';
import MusicPlayerButton from './MusicPlayerButton.jsx';

import styles from './MusicPlayer.less';

export default class MusicPlayer extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.cover}></div>
                <div className={styles.content}>
                    <div className={styles.contentHeader}>
                        <MusicPlayerTrackInfo artist="Muse" album="The 2nd Law" title="Madness"/>
                        <MusicPlayerButton type="pause"/>
                    </div>
                    <div className={styles.controlContainer}>
                        <MusicPlayerProgress current={117} total={279} />
                        <div className={styles.controlBtns}>
                            <MusicPlayerButton type="repeat"/>
                            <MusicPlayerButton type="shuffle"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
