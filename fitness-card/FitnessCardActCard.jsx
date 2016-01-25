/**
 * Created by shuding on 1/26/16.
 * <ds303077135@gmail.com>
 */

import React from 'react';

import styles from './FitnessCardActCard.less';

export default class extends React.Component {
  render() {
    return (
      <div style={{backgroundImage: `url(${this.props.icon})`}} className={styles.act}>
        <p className={styles.label}>{this.props.label}</p>
        <p className={styles.number}>{this.props.number}</p>
      </div>
    );
  }
}
