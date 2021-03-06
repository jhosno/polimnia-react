import React from 'react';
import ItemsForm from './ItemsForm';
import Bottons from "../fragments/Bottons"



const ItemsCreate = () => {
    return (
        <div className='items-center flex justify-center'>
            <div className='w-full lg:w-8/12 px-4'>
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                    <div className="rounded-t bg-white mb-0 px-6 py-6">
                        <div className="text-center flex justify-between">
                            <h6 className="text-slate-700 text-xl font-bold">Nuevo ítem</h6>
                            <Bottons message={'cosas'} type={'info'} />

                        </div>
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <div>
                            <ItemsForm></ItemsForm>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ItemsCreate;