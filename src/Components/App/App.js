import React from 'react';
import './App.css';

import Category from '../Category/Category';
import FlashCard from '../FlashCard/FlashCard';

import { data } from '../../Data.json';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cat1: data[0].category,
            cat2: data[1].category
        }
    }
    render() {
        return (
            <div>
                {/* <Category /> */}

                <FlashCard />
            </div>
        );
    }
}

export default App;


/* 
****** TODO ******

- create module/object to pull category name & Q/A data (test ver)
- randomize order of cards in 'deck'

Categories:
    dynamic generate variables - 
    var k = 'value';
    var i = 0;
    for(i = 1; i < 5; i++) {
        eval('var ' + k + i + '= ' + i + ';');
    }
    
    create array & loop in render

*/
