import React, { useEffect, useState } from 'react'
import Aheader from '../Acoman/Aheader'
import Apages from '../Acoman/Apages'
import axios from 'axios'

function ServiceMange() {

  // all product get
  const [service, setservice] = useState([])

  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3000/services")
    console.log(res.data)
    setservice(res.data)
  }

  useEffect(() => {
    fetchdata()
  }, [])

  return (
    <div>
      <Aheader />
      <Apages title="Service Managmenet" data="Service" />

      <div className="container">
        <h1>hello this Service ManageMent</h1>
        <table className="table my-5">
          <thead>
            <tr className='text-center'>
              <th scope="col">#id</th>
              <th scope="col">Name</th>
              <th scope="col">Imgae</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              service && service.map((data, index) => {
                console.log(data)
                return (
                  <tr className='text-center' key={index}>
                    <th scope="row">{data.id}</th>
                    <td>{data.name}</td>
                    <td><img src={data.img} style={{ width: "100px" }} alt="" /></td>
                    <td>
                      <button className='btn btn-info'>View</button>
                      <button className='btn btn-success mx-2'>Edit</button>
                      <button className='btn btn-danger'>Delete</button>
                    </td>
                  </tr>
                )
              })
            }

          </tbody>
        </table>

      </div>
    </div>
  )
}

export default ServiceMange
