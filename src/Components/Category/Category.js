
function Category(props) {
    function handleClick(e) {
        props.updateDeck(e.target.textContent) // has no value
    }

    return (
        <button onClick={handleClick}>{props.name}</button>
    )
}

export default Category;