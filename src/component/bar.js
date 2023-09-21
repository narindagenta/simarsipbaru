import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RxLayers, RxDashboard } from 'react-icons/rx';
import { BiLogOut } from 'react-icons/bi';
import { HiOutlineUsers } from 'react-icons/hi';
import Icon from '../images/logopolos.png';

export const Bar = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleLogClick = (e) => {
    // Prevent the event from propagating to parent elements
    e.stopPropagation();

    // Toggle the modal when the "Keluar" link is clicked
    setShowModal(!showModal);
  };

  const handleModalClose = () => {
    // Close the modal when needed
    setShowModal(false);
  };

  const handleSubmit = () => {
    navigate('/');
  };

  return (
    <div className="row sticky-top">
      <div id="sidebar" className="sidebar">
        <div className="col-10 d-flex flex-shrink-0 p-3 justify-content-center align-items-center w-100">
          <ul className="nav nav-pills flex-column mt-5 ms-3 w-100">
            <li className="nav-item mb-3 " title="Dashboard">
              <a id="dash" href="/dashboard" className="nav-link text-white" aria-current="page">
                <RxDashboard className="me-2 col-12 col-md-3 " />
                <span className="col-md-4 d-none d-md-block w-100">Dashboard</span>
              </a>
            </li>
            <li className="nav-item mb-3 " title="Tambah Arsip">
              <a id="tambah" href="/tambah" className="nav-link text-white ">
                <RxLayers className="me-2 col-12 col-md-3" />
                <span className="col-md-4 d-none d-md-block w-100">Tambah Arsip</span>
              </a>
            </li>
            <li className="nav-item mb-3 " title="Manajemen User">
              <a id="user" href="/user" className="nav-link text-white">
                <HiOutlineUsers className="me-2 col-12 col-md-3" />
                <span className="col-md-4 d-none d-md-block w-100">Manage User</span>
              </a>
            </li>
            <li className="nav-item mb-3">
              <a className="nav-link text-white" onClick={handleLogClick} title="Keluar">
                <BiLogOut className="me-2 col-12 col-md-3 " />
                <span className="col-md-4 d-none d-md-block w-100">Keluar</span>
                {showModal && (
                  <div className="modal d-block" tabIndex="-1" role="dialog" onClick={handleModalClose}>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                      <div className="modal-content text-dark">
                        <div className="modal-header">
                          <div className='row align-items-center'>
                            <div className='col-auto'>
                              <img src={Icon} className='logopop' alt='Icon' />
                            </div>
                            <div className='col'>
                              <h5 className="modal-title">Peringatan</h5>
                            </div>
                          </div>
                        </div>
                        <div className="modal-body">
                          <h6>Anda yakin untuk keluar?</h6>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" onClick={handleModalClose}>
                            Tidak
                          </button>
                          <button type="button" className="btn btn-danger" onClick={handleSubmit}>
                            Ya
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Bar;