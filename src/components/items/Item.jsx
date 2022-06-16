import React from 'react';
import { useNavigate } from 'react-router-dom';


const Item = ({item}) => {
    const {name, price_unit, description, amount, id} = item
    const url = 'http://localhost:4000/items/'
    return (
        <tr>
            <td>{name}</td>
            <td>{description}</td>
            <td>{price_unit}</td>
            <td>{amount}</td>
            <td>
                <a href="">{url + id}</a>
            </td>
        </tr>
    );
};

export default Item;