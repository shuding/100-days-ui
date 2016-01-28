import React from 'react';

import styles from './RecipeCard.less';

import RecipeCardCol from './RecipeCardCol';
import RecipeCardTab from './RecipeCardTab';

import mainImg from './main.jpg';

export default class extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.mainImg}>
          <h2>swipe to start cooking</h2>
          <img src={mainImg}/>
        </div>
        <div className={styles.recipe}>
          <div className={styles.header}>
            <h1>SuperFood Salad</h1>
            <p>With quinoa & roasted sweet potato</p>
            <div className={styles.row}>
              <RecipeCardCol name="serves" value="3"/>
              <RecipeCardCol name="time" value="40"/>
              <RecipeCardCol name="level" value="2/5"/>
            </div>
          </div>
          <div className={styles.content}>
            <RecipeCardTab
              tabs={['ingredients', 'steps']}
              contents={[
                <div>
                  <p>1 bunch of fresh coriander</p>
                  <p>1 ripe avocado</p>
                  <p>1 punnet of salad cress</p>
                  <p>20 g feta cheese</p>
                  <p>700 g sweet potatoes</p>
                  <p>1 pinch of dried chilli flakes</p>
                  <p>1 pinch of ground coriander</p>
                  <p>1 small pinch of ground cinnamon</p>
                  <p>olive oil</p>
                  <p>sea salt</p>
                  <p>freshly ground black pepper</p>
                  <p>200 g quinoa</p>
                  <p>320 g broccoli</p>
                  <p>35 g mixed nuts, such as walnuts, almonds and Brazil nuts</p>
                  <p>1 pomegranate</p>
                  <p>extra virgin olive oil</p>
                  <p>2 limes, juice of</p>
                  <p>1 splash of balsamic vinegar</p>
                  <p>40 g mixed sprouts</p>
                  <p>1 punnet cress, (use a mixture of varieties if possible)</p>
                  <p>1 fresh red chilli</p>
                </div>,
                <div>
                  <p>Preheat the oven to 200ºC/400ºF/gas 6. Scrub and chop the sweet potatoes into 2.5cm chunks. Place into a roasting tray with the chilli flakes, ground coriander and cinnamon, a drizzle of olive oil and a little salt and pepper, then toss well. Spread out into an even layer and place in the hot oven for 15 to 20 minutes, or until golden and crisp. </p>
                  <p>...</p>
                </div>
              ]}/>
          </div>
        </div>
      </div>
    );
  }
}

