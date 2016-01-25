/**
 * Created by shuding on 1/20/16.
 * <ds303077135@gmail.com>
 */

import React from 'react';

import FitnessCardMenuBtn from './FitnessCardMenuBtn';
import FitnessCardActCard from './FitnessCardActCard';
import styles from './FitnessCard.less';
import bgBeginner from './bg-beginner.jpg';
import bgAdvanced from './bg-advanced.jpg';
import bgExpert   from './bg-expert.jpg';
import timerIcon from './timer.png';
import fireIcon from './fire.png';
import arrowIcon from './arrow.png';
import heartIcon from './heart.png';

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      selectIndex: 0
    };
  }

  selectHandler(index) {
    this.setState({
      selectIndex: index
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.sideBtn}>
          <img src={arrowIcon}/>
        </div>
        <div className={styles.board}>
          <div className={styles.boardContent}>
            <div className={styles.titleCol}>
              <h2>Adele Eileen</h2>
              <h1>Faster Stronger Better</h1>
            </div>
            <div className={styles.ctrlCol}>
              <div className={styles.activities}>
                <FitnessCardActCard label="Duration" number="13" icon={timerIcon}/>
                <FitnessCardActCard label="Approx.cal" number="70" icon={fireIcon}/>
              </div>
              <FitnessCardMenuBtn text="Beginner" bg={bgBeginner} onClick={()=>{this.selectHandler(0);}}
                                  selected={this.state.selectIndex == 0}/>
              <FitnessCardMenuBtn text="Advanced" bg={bgAdvanced} onClick={()=>{this.selectHandler(1);}}
                                  selected={this.state.selectIndex == 1}/>
              <FitnessCardMenuBtn text="Expert" bg={bgExpert} onClick={()=>{this.selectHandler(2);}}
                                  selected={this.state.selectIndex == 2}/>
            </div>
          </div>
          <div className={styles.boardFooter}>Start Workout</div>
        </div>
        <div className={styles.sideBtn}>
          <img src={heartIcon}/>
        </div>
      </div>
    );
  }
}
