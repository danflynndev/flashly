// Holds answers and passes them click events. Animates when next/prev card is chosen.

import Answer from '../Answer/Answer';

function FlashCard(props) {
    

    return (
        <div>
            <Answer isRevealed={true} />
            <Answer isRevealed={false} />
        </div>
    );
};

export default FlashCard;