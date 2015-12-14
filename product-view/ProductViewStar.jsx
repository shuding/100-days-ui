/**
 * Created by shuding on 12/11/15.
 * <ds303077135@gmail.com>
 */

import React from 'react';

import StarOn from './star-on.png';
import StarOff from './star-off.png';

export default class ProductViewStar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { star: props.star };
    }
    static getProps() {
        return {};
    }
    handleClick(star) {
        this.setState({ star });
    }
    render() {
        return <span style={{cursor: 'pointer'}}> {
            [0,0,0,0,0].map((c, index) => {
                let bindClick = ((star) => {
                    return () => {
                        this.handleClick(star)
                    };
                })(index + 1);
                return index < this.state.star ? <img src={StarOn} onClick={bindClick}/> : <img src={StarOff} onClick={bindClick}/>;
            })
        } </span>;
    }
};
