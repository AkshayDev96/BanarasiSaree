import React from 'react'
import {isAuth,signout} from '../actions/auth'
import router from 'next/router'
import Link from 'next/link'
import Router from 'next/router'
import NProgress from 'nprogress'
import '../node_modules/nprogress/nprogress.css'

Router.onRouteChangeStart = url =>NProgress.start()
Router.onRouteChangeComplete = url =>NProgress.done()
Router.onRouteChangeError = url =>NProgress.done()

const AdminLayout = ({children}) => {
    return (
        <div>
            <div id="throbber" style={{display:"none",minHeight:120}}></div>
            <div id="noty-holder"></div>
            <div id="wrapper">
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        {/* <!-- Brand and toggle get grouped for better mobile display --> */}
        <div className="navbar-header" style={{content: 'inherit'}}>
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" href="/admin">
                <h4 style={{color:'#fff'}}>Banarasi Saree</h4>
            </Link>
        </div>
        {/* <!-- Top Menu Items --> */}
        <ul className="nav navbar-right top-nav">
            <li className="dropdown" style={{minWidth: 190,margin:'3px 10px 0'}}>
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">{isAuth().email} <b className="fa fa-angle-down"></b></a>
                <ul className="dropdown-menu">
                    <li><a href="#"><i className="fa fa-fw fa-user"></i> Edit Profile</a></li>
                    <li><a href="#"><i className="fa fa-fw fa-cog"></i> Change Password</a></li>
                    <li className="divider"></li>
                    <li onClick={()=>signout(()=>router.replace('/signin'))} style={{cursor:'pointer'}}><a><i className="fa fa-fw fa-power-off"></i> Logout</a></li>
                </ul>
            </li>
        </ul>
        {/* <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens --> */}
        <div className="collapse navbar-collapse navbar-ex1-collapse">
            <ul className="nav navbar-nav side-nav">
                <li>
                    <a href="#" data-toggle="collapse" data-target="#submenu-1"><i className="fa fa-fw fa-rocket"></i>Categories <i className="fa fa-fw fa-angle-down pull-right"></i></a>
                    <ul id="submenu-1" className="collapse">
                        <li><Link href="/admin/category/new"><a><i className="fa fa-angle-double-right"></i> New category</a></Link></li>
                        <li><Link href="/admin/category/view"><a><i className="fa fa-angle-double-right"></i> View all</a></Link></li>
                    </ul>
                </li>
                <li>
                    <a href="#" data-toggle="collapse" data-target="#submenu-2"><i className="fa fa-fw fa-rocket"></i>SubCategories <i className="fa fa-fw fa-angle-down pull-right"></i></a>
                    <ul id="submenu-2" className="collapse">
                        <li><Link href="/admin/subcategory/new"><a><i className="fa fa-angle-double-right"></i> New subcategory</a></Link></li>
                        <li><Link href="/admin/subcategory/view"><a><i className="fa fa-angle-double-right"></i> View all</a></Link></li>
                    </ul>
                </li>
                {/* <li>
                    <a href="#" data-toggle="collapse" data-target="#submenu-2"><i className="fa fa-fw fa-star"></i>  MENU 2 <i className="fa fa-fw fa-angle-down pull-right"></i></a>
                    <ul id="submenu-2" className="collapse">
                        <li><a href="#"><i className="fa fa-angle-double-right"></i> SUBMENU 2.1</a></li>
                        <li><a href="#"><i className="fa fa-angle-double-right"></i> SUBMENU 2.2</a></li>
                        <li><a href="#"><i className="fa fa-angle-double-right"></i> SUBMENU 2.3</a></li>
                    </ul>
                </li> */}
                {/* <li>
                    <a href="investigaciones/favoritas"><i className="fa fa-fw fa-user-plus"></i>  MENU 3</a>
                </li>
                <li>
                    <a href="sugerencias"><i className="fa fa-fw fa-paper-plane-o"></i> MENU 4</a>
                </li>
                <li>
                    <a href="faq"><i className="fa fa-fw fa fa-question-circle"></i> MENU 5</a>
                </li> */}
            </ul>
        </div>
        {/* <!-- /.navbar-collapse --> */}
        </nav>
                <div id="page-wrapper">
                <div className="container-fluid">
                    {/* <!-- Page Heading --> */}
                    <div className="row" id="main" >
                        {/* <div className="col-sm-12 col-md-12 well" id="content"> */}
                            {children}
                        {/* </div> */}
                    </div>
                    {/* <!-- /.row --> */}
                </div>
                {/* <!-- /.container-fluid --> */}
            </div>
            {/* <!-- /#page-wrapper --> */}
            </div>
        </div>
    )
}

export default AdminLayout
