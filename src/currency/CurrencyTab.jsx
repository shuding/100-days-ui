/**
 * Created by shuding on 12/18/15.
 * <ds303077135@gmail.com>
 */

import React from 'react';

import styles from './CurrencyTab.less';

export default class CurrencyTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tab:         props.tab || [],
            selectedTab: props.tab.reduce((prev, curr, index) => {
                return curr.active ? index : prev;
            })
        };
    }

    handleSelect(curTab) {
        for (let tab of this.state.tab) {
            tab.active = false;
        }
        curTab.active          = true;
        this.state.selectedTab = this.state.tab.indexOf(curTab);
        this.setState();
    }

    render() {
        return (
            <div className={styles.container}>
                <ul>
                    {
                        this.state.tab.map((tab) => <li onClick={()=>{ this.handleSelect(tab); }}
                                                        className={styles[tab.name] + ' ' + styles[tab.active ? 'active' : 'inactive']}/>)
                    }
                </ul>
                <span style={{marginLeft: this.state.selectedTab * 100 + 'px'}}/>
            </div>
        );
    }
}
