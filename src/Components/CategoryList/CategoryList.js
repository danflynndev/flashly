import { useState } from 'react';
import Category from '../Category/Category';
import './CategoryList.css';

function CategoryList(props) {
    const [active, setActive] = useState(props.categories[0].categoryName);

    function setActiveLi(name) {
        if (active != name) {
           return setActive(name)
        }
    }
    function createCategories() {
        return props.categories.map(category => {
            const isActive = (active === category.categoryName) ? true : false;
            return <Category name={category.categoryName} updateDeck={props.setActiveDeck} setActive={setActiveLi} isActive={isActive} key={category.categoryName} />
        })
    }

    return (
        <ul className='CategoryList'>
            {createCategories()}
        </ul>
    )
}

export default CategoryList;