import React, {Component} from 'react';

function Categories({items, onItemClick}) {

    const [activeItem, setActiveItem] = React.useState(null);

    const onSelectItem = (index) => {
        setActiveItem(index);
    };

    let elems = items && items.map((item, index) => {
        return(
            <li className={activeItem === index ? 'active':''} key={`${item}__${index}`} onClick={() => onSelectItem(index)}> {item} </li>
        )
    });

    return (
        <div className="categories">
            <ul>
                <li className={activeItem === null ? 'active':''} onClick={()=> onSelectItem(null)}>Все</li>
                {elems}
            </ul>
        </div>
    );
}

export default Categories;
