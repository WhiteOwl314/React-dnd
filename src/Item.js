import React from 'react';

function Item({item}) {

    return (
        <div className="item">
            {item.name}
        </div>
    )
}

export default Item;