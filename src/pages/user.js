import { useEffect } from 'react';
import {FaEdit} from 'react-icons/fa';
import {MdOutlineDeleteOutline} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import {FaCircleUser} from 'react-icons/fa6';
import {IoLocationOutline} from 'react-icons/io5';
import {BsPlusSquare} from 'react-icons/bs'
import coba from '../images/coba.PNG';


export const User = () => {
    const navigate = useNavigate()
    const handleTambah = async (event) => {
        navigate('/user/tambahuser')
    }



    useEffect(()=>{
        document.getElementById('user').classList.add('act')
        document.getElementById('user').classList.remove('text-white')
    },[])
    return(
        <div className="container-fluid">
            <div className="row justify-content-between align-item-center m-2">
                <div className='bg-white m-2 rounded p-3 col-8 col-md-8 justify-content-start '>
                    <h3>Manajemen User</h3>
                    <table class="table table-hover">
                    <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Username</th>
                          <th scope="col" className='d-none d-md-block'>Password</th>
                          <th scope="col" >Role</th>
                          <th scope="col" >Satker</th>
                          <th scope='col' className='d-none d-md-block'>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Anjani</td>
                          <td className='d-none d-md-block'>********</td>
                          <td>Admin</td>
                          <td>disinfolahtaau</td>
                          <td className='d-none d-md-block'>
                            <FaEdit className='ms-2' />
                            <MdOutlineDeleteOutline className='ms-2'/>
                          </td>
                        </tr>
                      </tbody>
                </table>
                </div>
                <div className='col-md-3 col-3 p-2 justify-content-end'>
                    <div className='row bg-white m-3 rounded p-3 justify-content-center'>
                        <img src={coba} className="rounded-circle profil object-fit-cover" />
                        <span className='text-dark text-center d-none d-md-block'>DISINFOLAHTAAU</span>
                        <div className='row text-gray justify-content-center text-center align-items-center d-none d-md-block loc'>
                            <IoLocationOutline className='col-3 h-50'/>
                            <span className='col-9 w-50 '>Jakarta</span>
                        </div>
                    </div>
                    <div className='row bg-white m-3 rounded p-3 '>
                        <button className='btn btn-success p-2' onClick={handleTambah}>
                            <BsPlusSquare/>
                            <span className='d-none d-md-block'>Tambah User</span>
                        </button>
                    </div>
                </div>
            </div>            
        </div>
    )
}