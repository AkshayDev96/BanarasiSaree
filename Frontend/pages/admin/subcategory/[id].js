import React from 'react'
import Admin from '../../../Components/Admin'
import Head from 'next/head'
import AdminLayout from '../../../Components/AdminLayout'
import {GetSubCategoryById} from '../../../actions/subcategory'
import UpdateForm from '../../../Components/subcategory/UpdateSubCategory'

const UpdateSubCategory = (props) => {
    const {subcategory} = props
    return (
        <Admin>
        <Head>
            <title>Update subcategory | Admin Panel</title>
        </Head>
            <AdminLayout>
              <UpdateForm subcategory={subcategory} />
            </AdminLayout>
        </Admin>
    )
}


UpdateSubCategory.getInitialProps=({query})=>{
    const {id} = query
    return GetSubCategoryById(id).then((data)=>{
        if(data.error || data.data.error){
            console.log(data.data.error);
        }else{
            return{subcategory:data.data.subcategory,query}
        }
        return{}
    })
}

export default UpdateSubCategory
