// Holds answers and passes them click events. Animates when next/prev card is chosen.

import Answer from '../Answer/Answer';
import ArrowContainer from '../../Containers/ArrowContainer/ArrowContainer';

function FlashCard(props) {

// title field not rendered. not dynamic, different styling    
    function createAnswers(card) { 
        return Object.entries(card).filter(([key]) => key != 'title')
            .map(([key, value]) => <Answer prompt={key} answer={value} isRevealed={false}/>)
    }

    return (
        <div>
            <p>{props.category}</p>
            <p>{props.card.title}</p>
            {createAnswers(props.card)}
            {/* <ArrowContainer />
            <ArrowContainer /> */}
        </div>
    );
};

export default FlashCard;