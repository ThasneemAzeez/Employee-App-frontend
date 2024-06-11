import React, { useState } from 'react'

const Form = () => {
    const [data,setData]=useState(
        
         {
              
        "name":"",
        "id":"",
        "job":"",
        "address":""
            
         }
        
    )
    const InputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.name})

        }
    
    const readvalue=()=>{
        console.log(data)
    }
  return (
    <div>
        <div className="container">
            <row>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">ID</label>
                            <input type="text" className="form-control" name='id' value={data.id} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">job</label>
                            <input type="text" className="form-control" name='job' value={data.job} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Address</label>
                            <input type="text" className="form-control" name='address' value={data.address} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readvalue}>submit</button>
                        </div>
                    </div>
                </div>
            </row>
        </div>
    </div>
  )
}

export default Form