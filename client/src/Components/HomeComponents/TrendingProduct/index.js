import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./index.scss"
import { Link } from 'react-router-dom'
function TrendingProduct() {
    const [data, setData] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        axios.get("http://localhost:5050/products").then((response) => {
            setData(response.data)
        })
    }, [])

    const deleteFunc = (id) => {
        axios.delete(`http://localhost:5050/products/${id}`).then(() => {
            axios.get("http://localhost:5050/products").then((response) => {
                setData(response.data)
            })
        }

        )
    }

    function handleartiran() {

        setData([...data.sort((a, b) => (a.name > b.name) ? 1 : (b.name > a.name) ? -1 : 0)])

    }
    function handleazaldan() {

        setData([...data.sort((a, b) => (b.name > a.name) ? 1 : (a.name > b.name) ? -1 : 0)])

    }


    return (
        <>

            <div className='trendingproduct_main'>
                <div className='trendingproduct'>
                    <div className='trendingproduct_yazi'>
                        <div className='pe'>
                            <p>Popular Item in the market</p>
                        </div>
                        <div className='ikihas'>
                            <h2>Trending</h2>
                            <h2 id='pro'>Product</h2>
                        </div>
                        <div className='ot'>
                            <button onClick={() => handleartiran()}>  Coxdan aza price sort </button>
                            <button onClick={() => handleazaldan()}>  Coxdan aza price sort </button>

                            <input type={"text"} placeholder="Emin" onChange={(e) => { setSearch(e.target.value) }} />
                        </div>

                    </div>
                    <div className='products'>
                        {
                            data.filter(data => data.name.toLowerCase().includes(search.toLowerCase())).map((element, index) => {
                                return (

                                    <div className='card' key={index}>
                                        <img src={element.imgUrl} alt="product" />
                                        <p>{element.type}</p>
                                        <h3>{element.name}</h3>
                                        <h5>${element.price}</h5>
                                        <div className='butonlar'>
                                            <Link to={`/products/${element._id}`} ><button>More Details</button></Link>
                                            <button onClick={() => deleteFunc(element._id)} className="fa-solid fa-x"></button>
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>
                    <div className='Addbtn'>
                        <Link to={"/addpage"}><button>Add new product</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrendingProduct