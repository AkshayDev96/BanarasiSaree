import React from 'react'
import Admin from '../../../Components/Admin'
import Head from 'next/head'
import AdminLayout from '../../../Components/AdminLayout'
import {GetCategories,DeleteCategoryById} from '../../../actions/category'
import ViewAll from '../../../Components/category/ViewAll'


const ViewCategories = () => {
    const [categories,setCategories] = React.useState([])

    const loadData=()=>{
        GetCategories()
        .then((res)=>{
            if(res.data.success && res.data.categories){
                setCategories(res.data.categories)
            }else{
                setCategories([])
            }
        }).catch(()=>setCategories([]))
    }

    React.useEffect(()=>{
        loadData()
    },[])

    const removeItemFromUI = (id)=>{
        let filter = categories.length>0 ?categories.filter((c)=>c._id!==id):[]
        setCategories(filter)
    }

    const deleteRow =(id)=>{
        loadData()
        DeleteCategoryById(id).then((res)=>{
            if(res.data && res.data.success && res.data.message){
                alert(res.data.message)
                removeItemFromUI(id)
            }
        }).catch(()=>alert('Somthing went wrong'))
    }

    return (
        <Admin>
         <Head>
            <title>View category | Admin Panel</title>
        </Head>
            <AdminLayout>
               <ViewAll data={categories} deleteRow={deleteRow} />
            </AdminLayout>
        </Admin>
    )
}

export default ViewCategories
