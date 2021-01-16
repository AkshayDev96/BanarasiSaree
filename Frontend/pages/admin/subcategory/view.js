import React from 'react'
import Admin from '../../../Components/Admin'
import Head from 'next/head'
import AdminLayout from '../../../Components/AdminLayout'
import ViewAll from '../../../Components/subcategory/ViewAll'
import {GetSubCategories,RemoveSubcategory} from '../../../actions/subcategory'

const ViewSubCategories = () => {
    const [subcategories,setSubCategories] = React.useState([])

    const loadData=()=>{
        GetSubCategories()
        .then((res)=>{
            if(res.data.success && res.data.subcategories){
                setSubCategories(res.data.subcategories)
            }else{
                setSubCategories([])
            }
        }).catch(()=>setSubCategories([]))
    }

    const removeItemFromUI = (id)=>{
        let filter = subcategories.length>0?subcategories.filter((c)=>c._id!==id):[]
        setSubCategories(filter)
    }


    React.useEffect(()=>{
        loadData()
    },[])

    const deleteRow =(id)=>{
        RemoveSubcategory(id).then((res)=>{
            if(res.data && res.data.success && res.data.message){
                removeItemFromUI(id)
                alert(res.data.message)
            }else if(res.data && res.data.error){
                alert(res.data.error)
            }
        }).catch(()=>alert('Somthing went wrong'))
    }

    return (
        <Admin>
         <Head>
            <title>View subcategory | Admin Panel</title>
        </Head>
            <AdminLayout>
               <ViewAll data={subcategories} deleteRow={deleteRow} />
            </AdminLayout>
        </Admin>
    )
}

export default ViewSubCategories
