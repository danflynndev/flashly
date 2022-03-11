// Displays the answer type i.e. 'Method' and changes to show answer when isRevealed == true

function Answer(props) {

    return (
        props.isRevealed ? <p>New length of array as a number.</p> : <p>Return value</p>
    );
}

export default Answer;