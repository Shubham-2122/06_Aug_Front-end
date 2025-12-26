import React, { useEffect, useState } from 'react'
import Aheader from '../Acoman/Aheader'
import Apages from '../Acoman/Apages'
import axios from 'axios'

function TeamManage() {

    const [team, setteam] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/team")
        console.log(res.data)
        setteam(res.data)
    }

    return (
        <div>
            <Aheader />
            <Apages title="Team Management" data="Team" />
            <div className="container">
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
                            team && team.map((data,index)=>{
                                return(
                                    <tr scope="row" key={index} className='text-center'>
                                        <td>{data.id}</td>
                                        <td>{data.name}</td>
                                        <td>{data.role}</td>
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

export default TeamManage
