import {useNavigate, Link, useLocation} from 'react-router-dom';
import {RxLayers, RxDashboard} from "react-icons/rx";
import {BiLogOut} from "react-icons/bi";
import { useState, useEffect } from 'react';
import {HiOutlineUsers} from 'react-icons/hi'

export const Bar = () => {
    const navigate = useNavigate()
    const location = useLocation
    const [activeLink, setActiveLink]=useState('/')
    function handleSubmit() {
        navigate('/')
    }
  
    
    return(
        <div className="row  sticky-top">
            <div id="sidebar" className="sidebar">
                <div className="col-10 d-flex  flex-shrink-0 p-3 justify-content-center align-items-center w-100 ">
                <ul class="nav nav-pills flex-column mt-5 ms-3 w-100">
                    <li class="nav-item mb-3 ">
                        <a id="dash" href="/dashboard" className="nav-link text-white" aria-current="page">
                            <RxDashboard className="me-2 col-12 col-md-3 "/>
                            <span className="col-md-4 d-none d-md-block w-100">Dashboard</span>
                        </a>
                    </li>
                    <li  className={`nav-item mb-3 ${activeLink === '/tambah' ? 'act' : ''}`}>
                        <a id="tambah" href="/tambah" className="nav-link mb-3 text-white ">
                            <RxLayers className="me-2 col-12 col-md-3"/>
                            <span className="col-md-4 d-none d-md-block w-100">Tambah Arsip</span>
                        </a>
                    </li>
                    <li className={`nav-item mb-3 ${activeLink === '/tambah' ? 'act' : ''}`}>
                        <a id="user" href="/user" class="nav-link mb-3 text-white">
                            <HiOutlineUsers className="me-2 col-12 col-md-3"/>
                            <span className="col-md-4 d-none d-md-block w-100">Manage User</span>
                        </a>
                    </li>
                    <li className="nav-item mb-3">
                        <a class="nav-link mb-3 text-white" onClick={handleSubmit}>
                            <BiLogOut className="me-2 col-12 col-md-3 " />
                            <span className="col-md-4 d-none d-md-block w-100">Keluar</span>
                        </a>
                    </li>

                </ul>
                </div>
            </div>
        </div>

    )
}
export default Bar;