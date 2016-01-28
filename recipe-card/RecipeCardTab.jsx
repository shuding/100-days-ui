import React from 'react';

import styles from './RecipeCardTab.less';

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      index: 0,
      left:  0,
      width: 0
    };
  }

  select(ev, index) {
    let width = ev.target.getBoundingClientRect().width;
    let left  = ev.target.offsetLeft;
    this.setState({
      index: index,
      width: width,
      left:  left
    });
  }

  componentDidMount() {
    this.setState({
      width: this.refs.firstTab.getDOMNode().offsetWidth
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.tab}>
          {
            this.props.tabs.map((tab, index) => <a href="javascript:;"
                                                   key={tab}
                                                   onClick={ev => this.select(ev, index)}
                                                   ref={index == 0 ? 'firstTab' : undefined}>{tab}</a>)
          }
          <div className={styles.select} style={{width: this.state.width + 'px', left: this.state.left + 'px'}}></div>
        </div>
        <div className={styles.content}>
          {
            this.props.contents.filter((content, index) => index == this.state.index)
          }
        </div>
      </div>
    );
  }
}

