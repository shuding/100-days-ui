/**
 * Created by shuding on 1/20/16.
 * <ds303077135@gmail.com>
 */

import React from 'react';

import styles from './FitnessCardMenuBtn.less';

export default class extends React.Component {
  render() {
    return (
      <div className={styles.button + ' ' + (this.props.selected ? styles.selected : '')} aria-label={this.props.text} type="button"
           alt={this.props.text} onClick={this.props.onClick}>
        <div style={{backgroundImage: `url(${this.props.bg})`}}></div>
        <span>{this.props.text}</span>
      </div>
    );
  }
}
