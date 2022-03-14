// container handles logic passing info to FlashCard,
// as well as next/prev card (using parent to update sibing state)
    // click on arrow triggers function (in App) to effect whats passed here into FlashCard
    // App <-(updateCard) <-- Arrow (onClick)
    //    \--> Deck (current card) -> FlashCard
import React, { useState } from 'react';
import FlashCard from "../FlashCard/FlashCard";

function Deck(props) {
    const [shuffledDeck, setShuffledDeck] = useState(shuffleDeck(props.deck.cards));
    const [currentCard, setCurrentCard] = useState(shuffledDeck[0]);


    function shuffleDeck(cards) {

        return cards.map((e, i, cards) => cards[Math.floor(Math.random() * cards.length)]);
    };

    function getNewCard(currentCard) { // passed to Arrows as click handler??
        const newIndex = shuffledDeck.findIndex(obj => obj == currentCard)
        return setCurrentCard(shuffledDeck[newIndex]);
    }

    return (
        <FlashCard category={props.deck.categoryName} card={currentCard} />
    )
}

export default Deck;