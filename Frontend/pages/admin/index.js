import React from 'react'
import Admin from '../../Components/Admin'
import Head from 'next/head'
import AdminLayout from '../../Components/AdminLayout'

const index = () => {
    return (
        <Admin>
            <Head>
                <title>Welcome to Admin panel</title>
            </Head>
            <AdminLayout/>
        </Admin>
    )
}

export default index
