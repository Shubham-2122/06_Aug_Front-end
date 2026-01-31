import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletUser, readData } from '../SliceData/userSlice'
import { Link } from 'react-router-dom'

function UserData() {

    const { users, loading } = useSelector((state) => state.users)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(readData())
    }, [])

    console.log(users)

    return (
        <div>
            <h1>Hello user data</h1>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#id</th>
                            <th scope="col">name</th>
                            <th scope="col">email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users && users.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>
                                            <button className='btn btn-info'>View</button>
                                            <Link to={`/edit/${data.id}`} className='btn btn-success mx-2'>Edit</Link>
                                            <button className='btn btn-danger' onClick={()=>dispatch(deletUser(data.id))}>Delete</button>
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

export default UserData
