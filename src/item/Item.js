import React from 'react';


const Item = (props) => {
    return (
            <div>
                <h2>Item Name: {props.item.displayName}</h2> 
                <h3>Durability: {props.item.durability}</h3>
                <h3>Enhancement Level: {props.item.enhancement}</h3>
            </div>
    );
};

export default Item;