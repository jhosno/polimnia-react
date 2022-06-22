import { useEffect, useState } from 'react';
import Item from './Item';


const ItemsIndex = () => {
    const [items, setitems] = useState([])
    let url = `${import.meta.env.VITE_API_URL}items/`
    useEffect(async () => {

        const consulta = await fetch(url)
        const resultado = await consulta.json()
        console.log(resultado)
        setitems(resultado)
    }, [])
    const handleSubmitDelete = async id => {
        console.log('Delete...' + id)
        const confirmValue = confirm("'tas segurx que quieres eliminar esta vaina?")
        if (confirmValue) {
            try {
                const consulta = await fetch(`http://localhost:4000/items/${id}`,
                    {
                        method: 'DELETE',
                    })
                const resultado = await consulta.json()
                console.log(consulta)
                const clearItems = items.filter(item => item.id != id)
                setitems(clearItems)
            } catch (error) {
                console.log(error)
            }
        }
    }
    return (
        <div className="w-full mb-12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3 className="font-semibold text-lg text-blueGray-700">Inventario</h3>
                        </div>
                    </div>
                </div>
                <div className="block w-full overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                    #
                                </th>
                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                    Ítem
                                </th>
                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                    Descripción
                                </th>
                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                    Precio Unitario
                                </th>
                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                    Cantidad
                                </th>
                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                    Acciones
                                </th>
                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                </th>
                            </tr>
                        </thead>
                        <tbody>


                            {items.map(item => (
                                <Item item={item} key={item.id} handleSubmitDelete={handleSubmitDelete} />
                            ))}


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ItemsIndex;