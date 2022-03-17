// Holds answers and passes them click events. Animates when next/prev card is chosen.

import Answer from '../Answer/Answer';
import Arrow from '../Arrow/Arrow';
import './FlashCard.css';


function FlashCard(props) {

// title field not rendered. not dynamic, different styling    
    function createAnswers(card) { 
        return Object.entries(card).filter(([key]) => key != 'title')
            .map(([key, value], index) => <Answer title={card.title} prompt={key} answer={value} key={index}/>) // requires unique key props
    }

    return (
        <div className='FlashCard'>
            <p>{props.category}</p>
            <div className='FlashCard-top'>
                <Arrow dir="back" getNewCard={props.getNewCard}/>
                <p className='FlashCard-title'>{props.card.title}</p>
                <Arrow dir="next" getNewCard={props.getNewCard}/>
            </div>
            <div className='FlashCard-fields'>
                {createAnswers(props.card)}
            </div>
            
        </div>
    );
};

export default FlashCard;