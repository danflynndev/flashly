// Displays the answer type i.e. 'Method' and changes to show answer when isRevealed == true
import { useState, useEffect } from 'react';
import { capitalizeFirst, capitalizeEvery } from '../../util/functions';
import './Answer.css';

function Answer(props) {
    const [isRevealed, setIsRevealed] = useState(false);

    function clickHandler(e) {
        e.target.classList.add('transition');
        return setTimeout(() => {
            e.target.classList.remove('transition');
            return isRevealed ? setIsRevealed(false) : setIsRevealed(true);
        }, 150)
        
    }

    useEffect(() => {
        setIsRevealed(false);
    }, [props.title])

    const question = <p onClick={clickHandler}>{props.prompt}</p>
    const answer = <p>{props.answer}</p>
    let className = 'Answer';
    className = (isRevealed) ? className += ' revealed' : className;
    return (
        <p className='Answer' onClick={clickHandler}>{isRevealed ? props.answer : props.prompt}</p>
    );
}

export default Answer;

/* TODO:
  extract logic out into container component
*/