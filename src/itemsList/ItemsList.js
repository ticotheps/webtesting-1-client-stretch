import React from 'react';
import axios from 'axios';

import Item from '../item/Item';

class ItemsList extends React.Component {
    state = {
        items: []
    };

    render() {
        console.log(this.state.items);
        return (
            <div>
                <h1>Check out this List of Cool Weapons!</h1>
                <ul>
                    {this.state.items.map(item => (
                        <Item key={item.id} item={item} />
                    ))}
                </ul>
            </div>
        );
    }

    componentDidMount() {
        const endpoint = 'http://localhost:5000/api/items';
        const token = localStorage.getItem('jwt');

        const reqOptions = {
            headers: {
                authorization: token,
            }
        };

        axios
            .get(endpoint, reqOptions)
            .then(res => {
                this.setState({ items: res.data.items })
            });
    }
}

export default ItemsList;