import { HiOutlineUsers } from 'react-icons/hi2';
import { CgFileDocument } from 'react-icons/cg';
import { BsShop } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { Tabel } from './tabel';
import { useEffect } from 'react';

export const Dashboard = () => {
  const navigate = useNavigate();

  function handleJumlah() {
    navigate('/tabel');
  }

  function handleUsers() {
    navigate('/user');
  }

  function handleCategory() {
    navigate('/category');
  }

  useEffect(() => {
    document.getElementById('dash').classList.add('act');
    document.getElementById('dash').classList.remove('text-white');
  }, []);

  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center mt-3">
        <div className="col-md-3 col-12 mb-3">
          <div className="card m-3" onClick={handleJumlah}>
            <div className="card-body text-center">
              <CgFileDocument className="fs-2" />
              <p className="fs-6 d-none d-md-block">Jumlah Arsip</p>
              <h3 className="d-none d-md-block fs-4">120</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12 mb-3">
          <div className="card m-3" onClick={handleJumlah}>
            <div className="card-body text-center">
              <BsShop className="fs-2" />
              <p className="fs-6 d-none d-md-block">Arsip Baru</p>
              <h3 className="d-none d-md-block fs-4">120</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12 mb-3">
          <div className="card m-3" onClick={handleUsers}>
            <div className="card-body text-center">
              <HiOutlineUsers className="fs-2" />
              <p className="fs-6 d-none d-md-block">Pengguna</p>
              <h3 className="d-none d-md-block fs-4">120</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12 mb-3">
          <div className="card m-3" onClick={handleCategory}>
            <div className="card-body text-center">
              {/* Placeholder icon */}
              {/* Replace with your desired icon */}
              <HiOutlineUsers className="fs-2" />
              <p className="fs-6 d-none d-md-block">Kategori</p>
              <h3 className="d-none d-md-block fs-4">120</h3>
            </div>
          </div>
        </div>
        <Tabel />
      </div>
    </div>
  );
};
