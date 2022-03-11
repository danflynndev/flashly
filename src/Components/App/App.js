import React from 'react';
import './App.css';

import Category from '../Category/Category';
import Deck from '../Deck/Deck';
// import FlashCard from '../FlashCard/FlashCard';

import { categories } from '../../Data';
console.log(categories)
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: categories,
            activeDeck: categories[0].deck
        }

        this.createCategories = this.createCategories.bind(this);
        this.setActiveDeck = this.setActiveDeck.bind(this);
    }

    createCategories() {
        return this.state.categories.map(category => <Category name={category.categoryName} updateDeck={this.setActiveDeck} />)
    }

    setActiveDeck(name) {
        const index = this.state.categories.findIndex(element => element.categoryName == name)
        this.setState({ activeDeck: this.state.categories[index].deck })
    }

    render() {
        return (
            <div>
                {this.createCategories()}
                
                <Deck deck={this.activeDeck} />
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
    d̶y̶n̶a̶m̶i̶c̶ ̶g̶e̶n̶e̶r̶a̶t̶e̶ ̶v̶a̶r̶i̶a̶b̶l̶e̶s̶ ̶-̶ ̶
        var k = 'value';
        var i = 0;
        for(i = 1; i < 5; i++) {
            eval('var ' + k + i + '= ' + i + ';');
        }
    
    c̶r̶e̶a̶t̶e̶ ̶a̶r̶r̶a̶y̶ ̶&̶ ̶l̶o̶o̶p̶ ̶i̶n̶ ̶r̶e̶n̶d̶e̶r̶ -> do not change
    generate unique key prop
    change color when selected

*/
