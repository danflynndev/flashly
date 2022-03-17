import './Category.css';

function Category(props) {
    function handleClick(e) {
        props.updateDeck(props.name);

        props.setActive(props.name)
    }
    let className = 'Category';
    className = props.isActive ? className += ' active' : className;

    return <li className={className} onClick={handleClick}>{props.name}</li>;
}

export default Category;