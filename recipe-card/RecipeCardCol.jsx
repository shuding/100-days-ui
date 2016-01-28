import React from 'react';

import styles from './RecipeCardCol.less';

export default class extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <span>{this.props.name}: </span>
        {
          this.props.name == 'time' ?
            <span>{this.props.value}<sub>min</sub></span> :
            <span>{this.props.value}</span>
        }
      </div>
    );
  }
}

