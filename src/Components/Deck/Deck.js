// container handles logic passing info to FlashCard,
// as well as next/prev card (using parent to update sibing state)
    // click on arrow triggers function (in App) to effect whats passed here into FlashCard
    // App <-(updateCard) <-- Arrow (onClick)
    //    \--> Deck (current card) -> FlashCard
import React, { useState, useEffect } from 'react';
import FlashCard from "../FlashCard/FlashCard";
import { shuffle } from '../../util/functions';
import ArrowContainer from '../../Containers/ArrowContainer/ArrowContainer';
import Arrow from '../Arrow/Arrow';
import './Deck.css';

function Deck(props) {
    const [shuffledDeck, setShuffledDeck] = useState(shuffle(props.deck.cards));
    const [currentCard, setCurrentCard] = useState(shuffledDeck[0]);

    useEffect(() => { 
        setShuffledDeck(shuffle(props.deck.cards));
    }, [props.deck])
    useEffect(()=> { 
        setCurrentCard(shuffledDeck[0])
    }, [shuffledDeck])

    function getNewCard(direction) { // candidate for refactoring
        // og attempt -> refactored to use in/decrement index (didnt work back to this)
        let newIndex;
        const currentIndex = shuffledDeck.findIndex(obj => obj == currentCard);
        const maxIndex = shuffledDeck.length -1;
        const step = direction === 'next' ? 1 : -1;
        if (currentIndex === 0 && step === -1) newIndex = maxIndex;
        else if (currentIndex === maxIndex && step === 1) newIndex = 0;
        else newIndex = currentIndex + step;
        return setCurrentCard(shuffledDeck[newIndex]);
    }

    return (
        <div className='Deck'>
            <FlashCard category={props.deck.categoryName} card={currentCard} getNewCard={getNewCard} />
        </div>
    )
}

export default Deck;