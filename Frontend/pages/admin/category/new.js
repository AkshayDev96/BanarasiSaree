import React from 'react'
import Admin from '../../../Components/Admin'
import Head from 'next/head'
import AdminLayout from '../../../Components/AdminLayout'
import CreateCategory from '../../../Components/category/CreateCategory'

const NewCategory = () => {
    return (
        <Admin>
        <Head>
            <title>New category | Admin Panel</title>
        </Head>
            <AdminLayout>
                <CreateCategory/>
            </AdminLayout>
        </Admin>
    )
}

export default NewCategory
