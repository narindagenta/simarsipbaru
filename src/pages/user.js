import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { BsPlusSquare } from "react-icons/bs";
import coba from "../images/coba.PNG";
import { BiShow } from "react-icons/bi";
import Icon from "../images/logopolos.png";
import { HiUserCircle } from "react-icons/hi";

export const User = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const handleTambah = async (event) => {
    navigate("/user/tambahuser");
  };
  const handleHapusClick = () => {
    // Show the modal when the edit icon is clicked
    setShowModal(true);
  };
  const handleModalClose = () => {
    // Close the modal when needed
    setShowModal(false);
  };
  const handleHapus = () => {};
  const handleEdit = () => {
    navigate("/updateuser");
  };

  const handleDetail = () => {
    document.getElementById("detail").classList.remove("d-none");
    document.getElementById("table").classList.add("col-md-9");
  };

  const handleTutupDetail = () => {
    document.getElementById("detail").classList.add("d-none");
    document.getElementById("table").classList.remove("col-md-9");
  };

  useEffect(() => {
    document.getElementById("user").classList.add("act");
    document.getElementById("user").classList.remove("text-white");
  }, []);

  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center m-2">
        <div id="table" className="bg-white rounded p-3 col-12">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="m-0">Manajemen User</h1>
            <button
              className="btn btn-success d-flex align-items-center"
              onClick={handleTambah}
            >
              <BsPlusSquare className="m-2" />
              <span className="d-none d-md-inline">Tambah User</span>
            </button>
          </div>
          <div className="table-responsive mt-3">
            <table class="table table-hover text-center">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Username</th>
                  <th scope="col">Password</th>
                  <th scope="col">Role</th>
                  <th scope="col">Satker</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr onClick={handleDetail}>
                  <td>1</td>
                  <td>Anjani</td>
                  <td>
                    <BiShow />
                  </td>
                  <td>Admin</td>
                  <td>disinfolahtaau</td>
                  <td>
                    <FaEdit
                      className="ms-2"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Edit User"
                      onClick={handleEdit}
                    />
                    <MdOutlineDeleteOutline
                      className="ms-2"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Delete User"
                      onClick={handleHapusClick}
                    />
                    {showModal && (
                      <div
                        className="modal d-block"
                        tabIndex="-1"
                        role="dialog"
                      >
                        <div
                          className="modal-dialog modal-dialog-centered"
                          role="document"
                        >
                          <div className="modal-content">
                            <div className="modal-header">
                              <div className="row align-items-center">
                                <div className="col-auto">
                                  <img
                                    src={Icon}
                                    className="logopop"
                                    alt="Icon"
                                  />
                                </div>
                                <div className="col">
                                  <h5 className="modal-title">Hapus User</h5>
                                </div>
                              </div>
                            </div>
                            <div className="modal-body">
                              {/* Add your modal content here */}
                              <h6>Anda Yakin Ingin Menghapus User ini?</h6>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={handleModalClose}
                              >
                                Tidak
                              </button>
                              <button
                                type="button"
                                className="btn btn-danger"
                                onClick={handleHapus}
                              >
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
        <div
          id="detail"
          className="d-none col-12 col-md-3 p-2 justify-content-end"
        >
          <div className="row bg-white m-2 rounded p-3 justify-content-between align-items-center d-flex">
            <div className="row justify-content-start">
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={handleTutupDetail}
              ></button>
            </div>
            <div className="row m-0">
              <ul className="">
                <li className="row justify-content-between align-items-center">
                  <label for="code" className="col-md-5 col-form-label">
                    ID
                  </label>
                  <div className="col-md-7">
                    <span className="">: 1</span>
                  </div>
                </li>
                <li className="row justify-content-between align-items-center">
                  <label for="code" className="col-md-5 col-form-label">
                    Username
                  </label>
                  <div className="col-md-7">
                    <span className="">: Anjani</span>
                  </div>
                </li>
                <li className="row justify-content-between align-items-center">
                  <label for="code" className="col-md-5 col-form-label">
                    Role
                  </label>
                  <div className="col-md-7">
                    <span className="">: Admin</span>
                  </div>
                </li>
                <li className="row justify-content-between align-items-center">
                  <label for="code" className="col-md-5 col-form-label">
                    Satker
                  </label>
                  <div className="col-md-7">
                    <span className="">: Disinfolahta</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="row bg-white m-3 rounded p-3 ">
            <button
              className="btn btn-success p-2 d-flex align-items-center justify-content-center"
              onClick={handleTutupDetail}
            >
              <BsPlusSquare className="m-2" />
              <span className="">Tambah User</span>
            </button>
          </div> */}
        </div>
        {/* <div className='col-md-3 col-12 p-2 justify-content-end'>
                    { <div className='row bg-white m-3 rounded p-3 justify-content-center'>
                        <img src={coba} className="rounded-circle profil object-fit-cover" />
                        <span className='text-dark text-center d-none d-md-block'>DISINFOLAHTAAU</span>
                        <div className='row text-gray justify-content-center text-center align-items-center d-none d-md-block loc'>
                            <IoLocationOutline className='col-3 h-50'/>
                            <span className='col-9 w-50 '>Jakarta</span>
                        </div>
                    </div> }
                    <div className='row bg-white m-3 rounded p-3 '>
                        <button className='btn btn-success p-2 d-flex align-items-center justify-content-center' onClick={handleTambah}>
                            <BsPlusSquare className='m-2'/>
                            <span className=''>Tambah User</span>
                        </button>
                    </div>
                </div> */}
      </div>
    </div>
  );
};
