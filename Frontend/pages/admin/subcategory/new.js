import React from 'react'
import Admin from '../../../Components/Admin'
import Head from 'next/head'
import AdminLayout from '../../../Components/AdminLayout'
import CreateSubCategory from '../../../Components/subcategory/CreateSubCategory'

const NewSubCategory = () => {
    return (
        <Admin>
        <Head>
            <title>New subcategory | Admin Panel</title>
        </Head>
            <AdminLayout>
                <CreateSubCategory/>
            </AdminLayout>
        </Admin>
    )
}

export default NewSubCategory
