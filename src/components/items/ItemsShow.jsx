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
                let url = `${import.meta.env.VITE_API_URL}items/${id}`
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
                <div className='items-center flex justify-center'>
                    <div className='w-full lg:w-8/12 px-4'>
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                            <div className="rounded-t bg-white mb-0 px-6 py-6">
                                <div className="text-center flex justify-between">
                                    <h6 className="text-slate-700 text-xl font-bold">Nuevo Ítem</h6>
                                    <Bottons message={'cosas'} type={'info'} />

                                </div>
                            </div>
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <div>
                                    <ItemsForm item={item} setItem={setItem}></ItemsForm>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )
    );
};

export default ItemsShow;