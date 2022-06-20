import React from 'react';

const PurchaseIndex = () => {
    return (
        <div className="w-full mb-12 px-4">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                        <h3 className="font-semibold text-lg text-blueGray-700">Inventario | +nombre del item en cuestion+</h3>
                        <Bottons message="Editar" type="warning"></Bottons>
            <Bottons message="Eliminar" type="error"></Bottons>
                    </div>
                </div>
            </div>
            <div className="block w-full overflow-x-auto">
                cuerpo del mensaje
            </div>
        </div>
    </div>
    );
};

export default PurchaseIndex;