import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Link, useParams } from 'react-router-dom'
import Footer from '../../../../Layouts/Footer'
import Navbar from '../../../../Layouts/Navbar'
import "./index.scss"
function DetailPage() {
    const { id } = useParams()
    const [data, setData] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:5050/products/${id}`).then((response)=>{
            setData(response.data)
        })
    },[])

    return (
        <HelmetProvider>
           <Helmet>
            <title>Detail Page</title>
           </Helmet>
           <Navbar/>
           <div className='product'>
           <div className='card'>
                <img src={data.imgUrl} alt="product" />
                <p>{data.type}</p>
                <h3>{data.name}</h3>
                <h5>${data.price}</h5>
                <Link to="/"><button>Go back</button></Link>
            </div>
           </div>
            <Footer/>
        </HelmetProvider>
    )
}

export default DetailPage