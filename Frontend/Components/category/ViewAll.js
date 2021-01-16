import React from 'react'
import router from 'next/router'

const ViewAll = ({data,deleteRow}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <h4>Categories</h4>
                <div className="col-md-8">
                <div className="table-responsive">
                        <table className="table">
                        <thead>
                            <tr>
                            <th scope="col" width="200">Name</th>
                            <th scope="col">Image</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data && data.map((category,i)=>(
                                    <tr key={i}>
                                        <td>{category.name}</td>
                                        <td><img height="80" width="80" src={category.image} alt={category.slug} /></td>
                                        <td>
                                            <button onClick={()=>router.push(`/admin/category/${category._id}`)} className="btn btn-sm btn-primary">update</button>
                                            {" "}
                                            <button onClick={()=>deleteRow(category._id)} className="btn btn-sm btn-danger">remove</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                        </table>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll
