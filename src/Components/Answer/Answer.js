// Displays the answer type i.e. 'Method' and changes to show answer when isRevealed == true

function Answer(props) {
    return (
        props.isRevealed ? <p>{props.answer}</p> : <p>{props.prompt}</p>
    );
}

export default Answer;