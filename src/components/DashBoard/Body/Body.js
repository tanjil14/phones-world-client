import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import MyBooking from '../../../Pages/MyOrder/MyBooking';
import AddedService from '../../AddedService/AddedService';
import useAuth from '../../../hooks/useAuth';
import './Body.css';
import { Nav, NavDropdown, NavLink } from 'react-bootstrap';
import ManageOrder from '../ManageOrder/ManageOrder';
import AddReview from '../AddReview/AddReview';
import Pay from '../Payment/Pay';
import ManageProduct from '../ManageProduct/ManageProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../../AdminRoute/AdminRoute';

const Body = () => {
    let { path, url } = useRouteMatch();
    const { contexts } = useAuth();
    const defImg = 'https://randomuser.me/api/portraits/men/60.jpg';
    return (
        <div>
            <div>

                <div className='dashboard-header'>
                    <Link style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }} to={`/home`}>Home</Link>
                    {!contexts.admin ?
                        <>
                            <Link style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }} to={`${url}/myBooking`}>My Order</Link>

                            <Link style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }} to={`${url}/pay`}>Pay</Link>

                            <Link style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }} to={`${url}/addreview`}>Review</Link>
                        </> :
                        <>
                            <Link style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }} to={`${url}/allorders`}>Manage All Orders</Link>

                            <Link style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }} to={`${url}/manageproduct`}>Manage Products</Link>

                            <Link style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }} to={`${url}/addedservice`}>Add Product</Link>

                            <Link style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }} to={`${url}/makeAdmin`}>Make Admin</Link>
                        </>
                    }
                    {!contexts.user.email ? (
                        <>
                            {/* <Nav.Link as={NavLink} to="/signup" className="text-white">
                                Sign Up
                            </Nav.Link> */}
                            <Nav.Link as={NavLink} to="/login" className="text-white">
                                Log in
                            </Nav.Link>
                        </>
                    ) : (
                        <>
                            <NavDropdown
                                title={
                                    <img
                                        style={{
                                            width: "45px",
                                            borderRadius: "50%",
                                        }}
                                        src={contexts.user.photoURL ? contexts.user.photoURL : defImg}
                                        alt=""
                                    />
                                }
                            >
                                <div className="text-center">
                                    <h6>{contexts?.user?.displayName}</h6>
                                    <p className="m-0 mb-2">{contexts.user.email}</p>
                                    <button onClick={contexts.logOut} className="btn btn-danger fw-bold">
                                        Sign Out
                                    </button>
                                </div>
                            </NavDropdown>
                        </>
                    )}
                </div>
                <Switch>
                    <Route exact path={path}>
                        <div className='fw-bold text-center'>
                            <h1 className='mt-5'>Welcome To Phone's World Dashboard</h1>
                            <h4>Please select an option to view pages.</h4>
                        </div>
                    </Route>
                    <Route path={`${path}/myBooking`}>
                        <MyBooking></MyBooking>
                    </Route>
                    <AdminRoute path={`${path}/addedservice`}>
                        <AddedService></AddedService>
                    </AdminRoute>
                    <AdminRoute path={`${path}/allorders`}>
                        <ManageOrder></ManageOrder>
                    </AdminRoute>
                    <Route path={`${path}/addreview`}>
                        <AddReview></AddReview>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <AdminRoute path={`${path}/manageproduct`}>
                        <ManageProduct></ManageProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                </Switch>
            </div>
        </div>
    );
};

export default Body;