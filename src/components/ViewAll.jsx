import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewAll = () => {
    const[data,setData]=useState([])
    
const fetchData=(
    ()=>{
        axios.get(
            ""
        ).then(
            (response)=>{
                setData(response.data)
            }
        ).catch()
    }
)
useEffect(()=>{fetchData()},[])
    
    return (
        <div>
            <div className="container">
                <div className="row col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">ID</th>
                                <th scope="col">Job</th>
                                <th scope="col">Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(
                                    (value,index)=>{
                                      return  <tr>
                                        <th scope="row">{value.name}</th>
                                        <td>{value.id}</td>
                                        <td>{value.job}</td>
                                        <td>{value.address}</td>
                                    </tr>
                                    }
                                )
                            }
                           
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ViewAll