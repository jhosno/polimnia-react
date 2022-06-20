import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import Bottons from '../fragments/Bottons';



const ItemsShow = () => {
    const { id } = useParams()
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(!loading)
        const getItem = async () => {
            try {
                const url = `http://localhost:4000/items/${id}`
                const consulta = await fetch(url)
                const resultado = await consulta.json()
                setItem(resultado)
                console.log(item)

            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }
        getItem()
    }, [])
    return (
        loading ? <p>Cargando... </p> : Object.keys(item).length == 0 ? <p>No hay nada que mostrar </p> :

            (
                <div className="w-full mb-12 px-4">

                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
                        <div className="rounded-t mb-0 px-4 py-3 border-0 ">
                            <div className="flex flex-wrap items-center flex-row">
                                <div className="relative w-full px-4 max-w-full flex-grow flex-1 flex-row flex justify-between">
                                    <h3 className="font-semibold text-lg text-blueGray-700">Inventario | {item.name} </h3>
                                    <div>
                                    <Bottons message="Editar" type="warning" to={`/items/edit/${item.id}`}></Bottons>

                                        <Bottons message="Eliminar" type="error"></Bottons>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block w-full overflow-x-auto p-5 bg-slate-100">
                            <p><span className='font-bold text-gray-800 uppercase'>Descripción :</span> {item.description}</p>
                            <p><span className='font-bold text-gray-800 uppercase'>Precio unitario :</span> {item.price_unit}</p>
                            <p><span className='font-bold text-gray-800 uppercase'>Costo unitario :</span> {item.cost_unit}</p>
                            <p><span className='font-bold text-gray-800 uppercase'>tags :</span> {item.tag}</p>
                            <p><span className='font-bold text-gray-800 uppercase'>Cantidad :</span> {item.amount}</p>
                            <p><span className='font-bold text-gray-800 uppercase'>Compuesto :</span> {item.composite}</p>
                        </div>
                    </div>


                </div>

            )
        
    );
};

export default ItemsShow;