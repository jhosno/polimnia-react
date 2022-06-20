import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Bottons from '../fragments/Bottons';



const ItemsShow = () => {
    const { id } = useParams()
    const [item, setItem] = useState()
    useEffect(() => {
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
        }
        getItem()
    }, [])
    return (
        <div className="w-full mb-12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
                <div className="rounded-t mb-0 px-4 py-3 border-0 ">
                    <div className="flex flex-wrap items-center flex-row">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1 flex-row flex justify-between">
                            <h3 className="font-semibold text-lg text-blueGray-700">Inventario | {item} </h3>
                            <div>
                                <Bottons message="Editar" type="warning"></Bottons>
                                <Bottons message="Eliminar" type="error"></Bottons>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="block w-full overflow-x-auto p-5 bg-slate-100">

                </div>
            </div>
        </div>
    );
};

export default ItemsShow;