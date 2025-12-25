import React, { useEffect, useState } from 'react'
import Aheader from '../Acoman/Aheader'
import Apages from '../Acoman/Apages'
import axios from 'axios'
import { toast } from 'react-toastify'

function ServiceMange() {

  // all product get
  const [service, setservice] = useState([])

  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3000/services")
    // console.log(res.data)
    setservice(res.data)
  }

  useEffect(() => {
    fetchdata()
  }, [])

  // single data show state
  const [data,setdata] = useState({
    id: "",
            name: "",
            img: "",
            logo: "",
            desc: ""
  })
  // single product get
  const singlservice = async (id) => {
    const res = await axios.get(`http://localhost:3000/services/${id}`)
    console.log(res.data)
    setdata(res.data)
  }

  // delete service
  const deleteservice =async(id)=>{
    const res = await axios.delete(`http://localhost:3000/services/${id}`)
    console.log(res.data)
    fetchdata()
    toast.success('service deleted..')
  }

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
                // console.log(data)
                return (
                  <tr className='text-center' key={index}>
                    <th scope="row">{data.id}</th>
                    <td>{data.name}</td>
                    <td><img src={data.img} style={{ width: "100px" }} alt="" /></td>
                    <td>
                      <button className='btn btn-info' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => singlservice(data.id)}>View</button>
                      <button className='btn btn-success mx-2'>Edit</button>
                      <button className='btn btn-danger' onClick={()=>deleteservice(data.id)}>Delete</button>
                    </td>
                  </tr>
                )
              })
            }

          </tbody>
        </table>
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <div className="col-12 wow mx-auto fadeInUp" data-wow-delay="0.1s">
                  <div className="service-item rounded d-flex h-100">
                    <div className="service-img rounded">
                      <img className="img-fluid" src={data.img} alt />
                    </div>
                    <div className="service-text rounded p-5">
                      <div className="btn-square rounded-circle mx-auto mb-3" style={{ overflow: "hidden" }}>
                        <img className="img-fluid" src={data.logo} alt="Icon" />
                      </div>
                      <h4 className="mb-3">{data.id}</h4>
                      <h4 className="mb-3">{data.name}</h4>
                      <p className="mb-4">{data.desc}</p>
                      <a className="btn btn-sm" href><i className="fa fa-plus text-primary me-2" />Read More</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ServiceMange
