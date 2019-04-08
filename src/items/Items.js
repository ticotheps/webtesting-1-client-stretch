import React from 'react';
import axios from 'axios';

class Items extends React.Component {
    state = {
        items: []
    };

    render() {
        return (
            <div>
                <ul>
                    {this.state.items.map(item => (
                        <h2 key={item.id}>Item Name: {item.displayName}</h2> 
                        <h3 key={item.id}>Durability: {item.durability}</h3>
                        <h3 key={item.id}>Enhancement Level: {item.enhancement}</h3>
                    ))}
                </ul>
            </div>
        );
    }

    componentDidMount() {
        const endpoint = 'http://localhost:5000/api/items';

        axios
            .get(endpoint, reqOptions)
            .then(res => {
                this.setState({ items: res.data.items })
            });
    }
}

export default Items;