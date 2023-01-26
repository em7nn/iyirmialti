import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./index.scss"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function AddPageComponents() {
    const navigate = useNavigate()
    return (
        <>
            <div className='wree'>
                <div className='addin'>
                    <Formik
                        initialValues={{ imgUrl: '', type: '', name: '', price: '' }}
                        validationSchema={Yup.object({
                            imgUrl: Yup.string()
                                .required('Required'),
                            type: Yup.string()
                                .required('Required'),
                            name: Yup.string()
                                .required('Required'),
                            price: Yup.string()
                                .required('Required'),

                        })}
                        onSubmit={(values) => {
                           axios.post("http://localhost:5050/products",values).then(()=>{
                            navigate("/")
                           })
                        }}
                    >
                        <Form className='form'>
                            <label htmlFor="imgUrl">imgUrl</label>
                            <Field name="imgUrl" type="text" />
                            <ErrorMessage name="imgUrl" />

                            <label htmlFor="type">Type</label>
                            <Field name="type" type="text" />
                            <ErrorMessage name="type" />

                            <label htmlFor="name">Name</label>
                            <Field name="name" type="text" />
                            <ErrorMessage name="name" />

                            <label htmlFor="price">Price</label>
                            <Field name="price" type="number" />
                            <ErrorMessage name="price" />

                            <button type="submit">Submit</button>
                        </Form>
                    </Formik>
                    <div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AddPageComponents