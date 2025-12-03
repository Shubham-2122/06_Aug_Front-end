import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UseCard() {

    const [prod, setprod] = useState([])

    useEffect(() => {
        product()
    }, [])

    const product = async () => {
        const res = await axios.get("https://fakestoreapi.com/products")
        // console.log(res.data)
        setprod(res.data)
    }

    return (
        <div>
            <h1>Hello this product</h1>
            <div className="container">
                <div className="row">
                    {
                        prod && prod.map((data, index) => {
               
                            return (
                                <div className="col-md-4" key={index}>
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img src={data.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                              <h5 className="card-title">{data.id}</h5>
                                            <h5 className="card-title">{data.title}</h5>
                                            <p className="card-text">{data.description.slice(0,100)}</p>
                                            <button className='btn btn-success'>Buy now</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default UseCard
