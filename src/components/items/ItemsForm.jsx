import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import * as Yup from 'yup'
import Alerts from '../fragments/Alerts';
import { useNavigate } from "react-router-dom"



const ItemsForm = ({ item }) => {

    const navigate = useNavigate();
    const handleSubmit = async (values) => {
        
        try {
            let url = 'http://localhost:4000/items'
            let respuesta
            if (item.id) {
                
                
                 respuesta = await fetch(`${url}/${item.id}`,
                    {
                        method: 'PUT',
                        body: JSON.stringify(values),
                        headers: {
                            'Content-type': 'application/json',
                        },
                    })
            } else {
                console.log('Creando...')
                 respuesta = await fetch(url,
                    {
                        method: 'POST',
                        body: JSON.stringify(values),
                        headers: {
                            'Content-type': 'application/json',
                        },
                    })
    
                }
                const resultado = await respuesta.json()
                //Si estatus es igual a 201, todo OK
                console.log(respuesta.status)
      
            navigate('/items') 
        } catch (error) {
            console.log(error)
        }
    }
    const ItemsSchema = Yup.object().shape({
        name: Yup.string().required('El nombre del producto es obligatorio')
            .min(3, 'El Nombre es muy corto')
            .max(20, 'El Nombre es muy largo'),
        amount: Yup.number().positive('Debe ser un número positivo').integer('Debe ser un número entero, sin decimal').typeError('El valor debe ser un número'),
        price_unit: Yup.number().round('floor').positive('Debe ser un número positivo').typeError('El valor debe ser un número'),
        cost_unit: Yup.number().round('floor').positive('Debe ser un número positivo').typeError('El valor debe ser un número'),
        tag: '',
        description: Yup.string()
            .min(3, 'La descripción es muy corta'),
        composite: Yup.boolean()
    })
    //cliente?.nombre ?? ""
    //Si existe nombre en cliente colocalo, sino, si d undefined pon vacio
    return (

        <Formik
            initialValues={
                {
                    name: item?.name ?? '',
                    amount: item?.amount ?? '',
                    price_unit: item?.price_unit ?? '',
                    cost_unit: item?.cost_unit ?? '',
                    tag: item?.tag ?? '',
                    description: item?.description ?? '',
                    composite: item?.composite ?? 'false'
                }
            }
            enableReinitialize={true}
            validationSchema={ItemsSchema}
            onSubmit={async (values, { resetForm }) => { await handleSubmit(values); resetForm() }}
        >

            {(prop) => {
                const { errors, touched, values } = prop
                return (
                    <Form className='mt-5 flex flex-wrap flex-col'>
                        <div className="flex flex-wrap my-3">
                            <div className="w-full lg:w-6/12 pr-4">
                                <div className=''>
                                    <label htmlFor="name" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Nombre</label>
                                    <Field
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Nombre del ítems"
                                    />

                                    {errors.name && touched.name ?
                                        (<Alerts message={errors.name} type='error' />) : null
                                    }
                                </div>

                            </div>
                            <div className="w-full lg:w-6/12">
                                <div className=''>
                                    <label htmlFor="amount" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Cantidad</label>
                                    <Field
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        type="text"
                                        name="amount"
                                        id="amount"
                                        placeholder="cantidad"
                                    />
                                    {errors.amount && touched.amount ?
                                        (<Alerts message={errors.amount} type='error' />) : null
                                    }
                                </div>

                            </div>
                        </div>


                        <div className="flex flex-wrap my-3">
                            <div className="w-full lg:w-6/12 pr-4">

                                <div className=''>
                                    <label htmlFor="price_unit" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Precio unitario</label>
                                    <Field
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        type="text"
                                        name="price_unit"
                                        id="price_unit"
                                        placeholder="Precio unitario"
                                    />
                                    {errors.price_unit && touched.price_unit ?
                                        (<Alerts message={errors.price_unit} type='error' />) : null
                                    }
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12">

                                <div className=''>
                                    <label htmlFor="cost_unit" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Costo unitario</label>
                                    <Field
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        type="text"
                                        name="cost_unit"
                                        id="cost_unit"
                                        placeholder="Costo unitario"
                                    />
                                    {errors.cost_unit && touched.cost_unit ?
                                        (<Alerts message={errors.cost_unit} type='error' />) : null
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap my-3">
                            <div className="w-full lg:w-6/12 pr-4 ">

                                <div className=''>
                                    <label htmlFor="tag" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Etiquetas</label>
                                    <Field
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        type="text"
                                        name="tag"
                                        id="tag"
                                        placeholder="Etiquetas del producto"
                                    />
                                    {errors.tag && touched.tag ?
                                        (<Alerts message={errors.tag} type='error' />) : null
                                    }
                                    {/*Listar, seleccionar y crear nuevas etiquetas
                                https://formik.org/docs/guides/arrays
                                */}
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">

                                <div className='my-4'>
                                    <label htmlFor="composite" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Compuesto</label>
                                    <Field
                                        type="checkbox"
                                        name="composite"
                                        id="composite"

                                    />
                                    {`${values.composite}`}
                                    {errors.composite && touched.composite ?
                                        (<Alerts message={errors.composite} type='error' />) : null
                                    }
                                </div>


                                {/*Si composite es true abrir un nuevo campo que permite listar y seleccionar los items que componen el elemento*/}
                            </div>
                        </div>

                        <div className='my-4'>
                            <label htmlFor="description" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Descripción</label>
                            <Field
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                as='textarea'
                                type="text"
                                name="description"
                                id="description"
                                placeholder="Descripción del producto"
                            />
                            {errors.description && touched.description ?
                                (<Alerts message={errors.description} type='error' />) : null
                            }
                        </div>
                        <Field
                            className="bg-indigo-700 hover:bg-indigo-600 active:bg-indigo-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 cursor-pointer"
                            type="submit"
                            value={item?.name ? "Actualizar": "Agregar"}
                        />
                    </Form>
                )
            }
            }

        </Formik>



    );
};
ItemsForm.defaultProps = {
    item: {}
}

export default ItemsForm;