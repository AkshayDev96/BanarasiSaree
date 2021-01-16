import React from 'react'
import Admin from '../../../Components/Admin'
import Head from 'next/head'
import AdminLayout from '../../../Components/AdminLayout'
import {GetCategoryById} from '../../../actions/category'
import UpdateForm from '../../../Components/category/UpdateCategory'

const UpdateCategory = (props) => {
    const {category} = props
    return (
        <Admin>
        <Head>
            <title>Update category | Admin Panel</title>
        </Head>
            <AdminLayout>
              <UpdateForm category={category} />
            </AdminLayout>
        </Admin>
    )
}


UpdateCategory.getInitialProps=({query})=>{
    const {id} = query
    return GetCategoryById(id).then((data)=>{
        if(data.error || data.data.error){
            console.log(data.data.error);
        }else{
            return{category:data.data.category,query}
        }
        return{}
    })
}

export default UpdateCategory
