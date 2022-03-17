import React from 'react';
import './App.css';

import CategoryList from '../CategoryList/CategoryList';
import Deck from '../Deck/Deck';
// import FlashCard from '../FlashCard/FlashCard';

import { categories } from '../../Data';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: categories,
            activeDeck: categories[0]
        }

        //this.createCategories = this.createCategories.bind(this);
        this.setActiveDeck = this.setActiveDeck.bind(this);
    }

    setActiveDeck(name) {
        const index = this.state.categories.findIndex(element => element.categoryName == name)
        this.setState({ activeDeck: this.state.categories[index] })
    }

    render() {
        return (
            <div className="App">
                <h1>Flashly</h1>
                <CategoryList categories={this.state.categories} setActiveDeck={this.setActiveDeck}/> 
                
                <Deck deck={this.state.activeDeck} />
            </div>
        );
    }
}

export default App;


/* 
****** TODO ******

General:
    c̶r̶e̶a̶t̶e̶ ̶m̶o̶d̶u̶l̶e̶/̶o̶b̶j̶e̶c̶t̶ ̶t̶o̶ ̶p̶u̶l̶l̶ c̶a̶t̶e̶g̶o̶r̶y̶ ̶n̶a̶m̶e̶ ̶&̶ ̶Q̶/̶A̶ ̶d̶a̶t̶a̶ ̶(̶t̶e̶s̶t̶ ̶v̶e̶r̶)
    r̶a̶n̶d̶o̶m̶i̶z̶e̶ ̶o̶r̶d̶e̶r̶ ̶o̶f̶ ̶c̶a̶r̶d̶s̶ ̶i̶n̶ ̶'̶d̶e̶c̶k̶'̶
    i̶m̶p̶o̶r̶t̶ ̶a̶l̶l̶ ̶c̶s̶s̶ ̶m̶o̶d̶u̶l̶e̶s̶ ̶-̶ ̶h̶o̶w̶ ̶d̶o̶e̶s̶ ̶t̶h̶a̶t̶ ̶w̶o̶r̶k̶?̶ ̶specific to webpack
    c̶a̶p̶i̶t̶a̶l̶i̶z̶e̶ ̶u̶t̶i̶l̶ ̶f̶u̶n̶c̶t̶i̶o̶n̶

Categories:
    d̶y̶n̶a̶m̶i̶c̶ ̶g̶e̶n̶e̶r̶a̶t̶e̶ ̶v̶a̶r̶i̶a̶b̶l̶e̶s̶ ̶-̶ ̶
        var k = 'value';
        var i = 0;
        for(i = 1; i < 5; i++) {
            eval('var ' + k + i + '= ' + i + ';');
        }
    
    c̶r̶e̶a̶t̶e̶ ̶a̶r̶r̶a̶y̶ ̶&̶ ̶l̶o̶o̶p̶ ̶i̶n̶ ̶r̶e̶n̶d̶e̶r̶ -> do not change
    g̶e̶n̶e̶r̶a̶t̶e̶ ̶u̶n̶i̶q̶u̶e̶ ̶k̶e̶y̶ ̶p̶r̶o̶p̶ > used category name
    c̶h̶a̶n̶g̶e̶ ̶c̶o̶l̶o̶r̶ ̶w̶h̶e̶n̶ ̶s̶e̶l̶e̶c̶t̶e̶d̶


Arrows:
    container for logic
    icons for display
    o̶n̶e̶ ̶c̶o̶m̶p̶o̶n̶e̶n̶t̶ ̶w̶i̶t̶h̶ ̶i̶n̶d̶i̶c̶a̶t̶o̶r̶ ̶(̶n̶e̶x̶t̶,̶ ̶p̶r̶e̶v̶)̶ ̶t̶o̶ ̶d̶i̶c̶a̶t̶e̶ a̶r̶r̶o̶w̶ d̶i̶r̶e̶c̶t̶i̶o̶n̶ ̶&̶ ̶b̶e̶h̶a̶v̶i̶o̶r̶
    get rid of empty contaner component?????

Answer:
    clicking & flipping logic
    needs container? 


***** NOTES *****
do i need to add an ID field to the data?
    if so, need to update in FlashCard, currently using index 

what about a header where on hover, each letter rotates in a cascade

*** Feedback topics ***
structure ie. component tree & delegation

***** CSS *****
- grid gaps do not play well with percentages, causes not to respect parent padding
*/
