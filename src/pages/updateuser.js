import React, { useState } from 'react';
import { BiHide, BiShow } from 'react-icons/bi';
import validator from 'validator';
import Icon from '../images/logopolos.png';
import {FiCheckCircle} from "react-icons/fi"

export const UpdateUser = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showModal, setShowModal] = useState(false)

  const handleModalOpen = () => {
    // Close the modal when needed
    setShowModal(true);
  };
  const handleModalClose = () => {
    // Close the modal when needed
    setShowModal(false);
  };


  const validatePassword = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setPasswordErrorMessage('');
    } else {
      setPasswordErrorMessage('Password Lemah');
    }
  };

  const validateConfirmPassword = (value) => {
    if (value === password) {
      setConfirmPasswordErrorMessage('');
    } else {
      setConfirmPasswordErrorMessage('Konfirmasi Password Tidak Sama');
    }
  };

  const togglePasswordVisibility = (field) => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else if (field === 'confirmPassword') {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  return (
    <div className="container-fluid">
        <div className="row m-3 p-1 rounded bg-dark">  
            <h1 className="text-white text-center">Update Arsip</h1></div>
      <div className="row bg-white m-3 rounded p-4 ">
        <h3 className='mb-3'>Tambah User</h3>
        <ul>
          <li className="mb-3 row">
            <label htmlFor="username" className="col-sm-2 col-form-label">
              Username
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Masukkan Username"
              />
            </div>
          </li>

          <li className="mb-3 row">
            <label htmlFor="level_user_label" className="col-sm-2 col-form-label">
              Role
            </label>
            <div className="col-sm-9">
              <select
                id="level_user_label"
                className="form-select"
                style={{ width: '200px' }}
                aria-label="Default select example"
              >
                <option selected>Pilih Role</option>
                <option value="1">Admin</option>
                <option value="2">Operator</option>
                <option value="3">Rusak</option>
              </select>
            </div>
          </li>

          <li className="mb-3 row">
            <label htmlFor="satkr" className="col-sm-2 col-form-label">
              Satker
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                id="satkr"
                placeholder="Masukkan Satker"
              />
            </div>
          </li>

          <li className="mb-3 row">
            <label htmlFor="password" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-9">
              <div className="d-flex justify-content-start align-items-center">
                <input
                  type={showPassword ? <BiShow/> : <BiHide/>}
                  className="form-control"
                  id="password"
                  placeholder="Masukkan Password"
                  style={{ width: '200px' }}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    validatePassword(e.target.value);
                  }}
                />
                <span
                  onClick={() => togglePasswordVisibility('password')}
                  style={{
                    cursor: 'pointer',
                    fontWeight: 'normal',
                    fontSize: '10px',
                    color: 'black',
                    marginLeft: '10px',
                    display: 'inline-block',
                    marginTop: '5px',
                  }}
                >
                  {showPassword ? <BiShow className='fs-5'/> : <BiHide className='fs-5'/>}
                </span>
              </div>
              <span
                style={{
                  fontWeight: 'normal',
                  fontSize: '10px',
                  color: 'red',
                  marginTop: '5px',
                  display: 'block',
                }}
              >
                {passwordErrorMessage}
              </span>
            </div>
          </li>

          <li className="mb-3 row">
            <label htmlFor="confirmPassword" className="col-sm-2 col-form-label">
              Konfirmasi Password
            </label>
            <div className="col-sm-9">
              <div className="d-flex justify-content-start align-items-center">
                <input
                  type={showConfirmPassword ? <BiShow/> : <BiHide/>}
                  className="form-control"
                  id="confirmPassword"
                  style={{ width: '200px' }}
                  placeholder="Masukkan Password"
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    validateConfirmPassword(e.target.value);
                  }}
                />
                <span
                  onClick={() => togglePasswordVisibility('confirmPassword')}
                  style={{
                    cursor: 'pointer',
                    fontWeight: 'normal',
                    fontSize: '10px',
                    color: 'black',
                    marginLeft: '10px',
                    display: 'inline-block',
                    marginTop: '5px',
                  }}
                >
                  {showConfirmPassword ? <BiShow className='fs-5'/> : <BiHide className='fs-5'/>}
                </span>
              </div>
              <span
                style={{
                  fontWeight: 'normal',
                  fontSize: '10px',
                  color: 'red',
                  marginTop: '5px',
                  display: 'block',
                }}
              >
                {confirmPasswordErrorMessage}
              </span>
            </div>
          </li>
        </ul>
      </div>

      <div className="row d-flex flex-column justify-content-between align-items-end">
        <input
          className="col-md-1 me-5 mt-2 mb-2 btn btn-primary"
          type="submit"
          value="Submit"
          onClick={handleModalOpen}
        />
      </div>
      {showModal && (
                                <div className="modal d-block" tabIndex="-1" role="dialog" >
                                  <div className="modal-dialog modal-dialog-centered" role="document">
                                    <div className="modal-content">
                                    <div className="modal-header d-flex justify-content-between align-items-center">
                                      <div className='row align-items-center'>
                                        <div className='col-auto'>
                                          <img src={Icon} className='logopop' alt='Icon' />
                                        </div>
                                        <div className='col'>
                                          <h4 className="modal-title">Sim Arsip</h4>
                                        </div>
                                      </div>
                                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleModalClose}></button>
                                    </div>
                                        <div className="modal-body text-center">
                                            {/* Add your modal content here */}
                                            <FiCheckCircle className="fs-1 text-success "/>
                                            <h5 className="p-2 m-2">Berhasil Mengupdate User</h5>
                                        </div>
                                        
                                    </div>
                                  </div>
                                </div>
                             )}
    </div>
  );
};
