import { useEffect,useState } from 'react';
import {FaEdit} from 'react-icons/fa';
import {MdOutlineDeleteOutline} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import {IoLocationOutline} from 'react-icons/io5';
import {BsPlusSquare} from 'react-icons/bs'
import coba from '../images/coba.PNG';
import {BiShow} from 'react-icons/bi';
import Icon from '../images/logopolos.png';



export const User = () => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate()
    const handleTambah = async (event) => {
        navigate('/user/tambahuser')
    }
    const handleEditClick = () => {
        // Show the modal when the edit icon is clicked
        setShowModal(true);
      };
    const handleModalClose = () => {
        // Close the modal when needed
        setShowModal(false);
      };
    const handleHapus = () => {

    }

    useEffect(()=>{
        document.getElementById('user').classList.add('act')
        document.getElementById('user').classList.remove('text-white')
        
        
    },[])

    return(
        <div className="container-fluid">
            <div className="row justify-content-between align-item-center m-2">
                <div className='bg-white m-2 rounded p-3 col-12 col-md-8 justify-content-start '>
                    <h3 className='p-2'>Manajemen User</h3>
                    <div className='table-responsive'>
                    <table class="table table-hover text-center">
                    <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Username</th>
                          <th scope="col" >Password</th>
                          <th scope="col" >Role</th>
                          <th scope="col" >Satker</th>
                          <th scope='col' >Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td >1</td>
                          <td>Anjani</td>
                          <td >
                            <BiShow/>
                          </td>
                          <td>Admin</td>
                          <td>disinfolahtaau</td>
                          <td >
                            <FaEdit className='ms-2' data-toggle="tooltip" data-placement="bottom" title="Edit User"  />
                            <MdOutlineDeleteOutline className='ms-2' data-toggle="tooltip" data-placement="bottom" title="Delete User" onClick={handleEditClick} />
                            {showModal && (
                                <div className="modal d-block" tabIndex="-1" role="dialog" >
                                  <div className="modal-dialog modal-dialog-centered" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                          <div className='row align-items-center'>
                                            <div className='col-auto'>
                                              <img src={Icon} className='logopop' alt='Icon' />
                                            </div>
                                            <div className='col'>
                                              <h5 className="modal-title">Hapus User</h5>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="modal-body">
                                            {/* Add your modal content here */}
                                            <h6>Anda Yakin Ingin Menghapus User ini?</h6>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" onClick={handleModalClose}>
                                              Tidak
                                            </button>
                                            <button type="button" className="btn btn-danger" onClick={handleHapus}>
                                              Ya
                                            </button>
                                        </div>
                                    </div>
                                  </div>
                                </div>
                             )}
                          </td>
                        </tr>
                      </tbody>
                </table>
                      </div>
                </div>
                <div className='col-md-3 col-12 p-2 justify-content-end'>
                    <div className='row bg-white m-3 rounded p-3 justify-content-center'>
                        <img src={coba} className="rounded-circle profil object-fit-cover" />
                        <span className='text-dark text-center d-none d-md-block'>DISINFOLAHTAAU</span>
                        <div className='row text-gray justify-content-center text-center align-items-center d-none d-md-block loc'>
                            <IoLocationOutline className='col-3 h-50'/>
                            <span className='col-9 w-50 '>Jakarta</span>
                        </div>
                    </div>
                    <div className='row bg-white m-3 rounded p-3 '>
                        <button className='btn btn-success p-2 d-flex align-items-center justify-content-center' onClick={handleTambah}>
                            <BsPlusSquare className='m-2'/>
                            <span className=''>Tambah User</span>
                        </button>
                    </div>
                </div>
            </div>            
        </div>
    )
}