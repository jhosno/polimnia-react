import { useEffect, useState } from 'react';
import Item from './Item';


const ItemsIndex = () => {
    const [items, setitems] = useState([])
    const url = 'http://localhost:4000/items/'
    useEffect(async () => {

        const consulta = await fetch(url)
        const resultado = await consulta.json()
        console.log(resultado)
        setitems(resultado)
    }, [])
    return (
        <div>
            items index
            <table>
                <thead>
                    <tr>
                        <td>Nombre</td>
                        <td>Descrip</td>
                        <td>Precio</td>
                        <td>Cantidad</td>
                        <td>Acciones</td>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <Item item={item} key={item.id}/>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ItemsIndex;