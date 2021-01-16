import React from 'react'
import router from 'next/router'

const ViewAll = ({data,deleteRow}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <h4>SubCategories</h4>
                <div className="col-md-8">
                <div className="table-responsive">
                        <table className="table">
                        <thead>
                            <tr>
                            <th scope="col" width="200">Subcategory name</th>
                            <th scope="col" width="200">Category name</th>
                            <th scope="col">Image</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data && data.map((subcategory,i)=>(
                                    <tr key={i}>
                                        <td>{subcategory.name}</td>
                                        <td>{subcategory.category.name}</td>
                                        <td><img height="80" width="80" src={subcategory.image} alt={subcategory.slug} /></td>
                                        <td>
                                            <button onClick={()=>router.push(`/admin/subcategory/${subcategory._id}`)} className="btn btn-sm btn-primary">update</button>
                                            {" "}
                                            <button onClick={()=>deleteRow(subcategory._id)} className="btn btn-sm btn-danger">remove</button>
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