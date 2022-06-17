import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import * as Yup from 'yup'
import Alerts from '../fragments/Alerts';
import {useNavigate} from "react-router-dom"



const ItemsForm = () => {
    const navigate = useNavigate();
    const handleSubmit = async (values) => {
        
        try {
            const url = 'http://localhost:4000/items'
            const respuesta = await fetch(url,
                {
                    method: 'POST',
                    body: JSON.stringify(values),
                    headers: {
                        'Content-type': 'application/json',
                    },
                })

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
        amount: Yup.number('El valor debe ser un número').positive('Debe ser un número positivo').integer('Debe ser un número entero, sin decimal'),
        price_unit: Yup.number('El valor debe ser un número').round('floor').positive('Debe ser un número positivo'),
        cost_unit: Yup.number('El valor debe ser un número').round('floor').positive('Debe ser un número positivo'),
        tag: '',
        description: Yup.string()
            .min(3, 'El Nombre es muy corto'),
        composite: Yup.boolean()
    })
    return (
        <div className='px-4 md:px-10 mx-auto w-full'>
        
            <Formik
                initialValues={
                    {
                        name: '',
                        amount: '',
                        price_unit: '',
                        cost_unit: '',
                        tag: '',
                        description: '',
                        composite: 'false'
                    }
                }
                validationSchema={ItemsSchema}
                onSubmit={async (values, {resetForm}) => {await handleSubmit(values); resetForm()}}
            >

                {(prop) => {
                    const { errors, touched } = prop
                    return (
                        <Form>

                            <div>
                                <label htmlFor="name">Nombre</label>
                                <Field
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Nombre del ítems"
                                />
                                <ErrorMessage
                                    name='name'
                                />
                                {errors.name && touched.name ?
                                    (<Alerts message={errors.name} type='error' />) : null
                                }
                            </div>
                            <div>
                                <label htmlFor="amount">Cantidad</label>
                                <Field
                                    type="text"
                                    name="amount"
                                    id="amount"
                                    placeholder="cantidad"
                                />
                                {errors.amount && touched.amount ?
                                    (<Alerts message={errors.amount} type='error' />) : null
                                }
                            </div>
                            <div>
                                <label htmlFor="price_unit">Precio unitario</label>
                                <Field
                                    type="text"
                                    name="price_unit"
                                    id="price_unit"
                                    placeholder="Precio unitario"
                                />
                                <ErrorMessage
                                    name='price_unit'
                                />
                            </div>
                            <div>
                                <label htmlFor="cost_unit">Costo unitario</label>
                                <Field
                                    type="text"
                                    name="cost_unit"
                                    id="cost_unit"
                                    placeholder="Costo unitario"
                                />
                                <ErrorMessage
                                    name='cost_unit'
                                />
                            </div>
                            <div>
                                <label htmlFor="tag">Etiquetas</label>
                                <Field
                                    type="text"
                                    name="tag"
                                    id="tag"
                                    placeholder="Etiquetas del producto"
                                />
                                <ErrorMessage
                                    name='tag'
                                />
                                {/*Listar, seleccionar y crear nuevas etiquetas
                            https://formik.org/docs/guides/arrays
                            */}
                            </div>
                            <div>
                                <label htmlFor="description">Descripción</label>
                                <Field
                                    as='textarea'
                                    type="text"
                                    name="description"
                                    id="description"
                                    placeholder="Descripción del producto"
                                />
                                <ErrorMessage
                                    name='description'
                                />
                            </div>
                            <div>
                                <label htmlFor="composite">Compuesto</label>
                                <Field
                                    type="checkbox"
                                    name="composite"
                                    id="composite"
                                    placeholder="Es un ítem compuesto"
                                />
                                <ErrorMessage
                                    name='composite'
                                />
                            </div>
                            {/*Si composite es true abrir un nuevo campo que permite listar y seleccionar los items que componen el elemento*/}
                            <Field
                                type="submit"
                                value="Agregar"
                            />
                        </Form>
                    )
                }
                }

            </Formik>
        </div>
    );
};

export default ItemsForm;