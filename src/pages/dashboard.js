import { TbListTree } from 'react-icons/tb';
import { HiOutlineUsers } from 'react-icons/hi2';
import { CgFileDocument } from 'react-icons/cg';
import { BsShop } from 'react-icons/bs';
import {useNavigate} from 'react-router-dom';
import { Tabel } from './tabel';
import { useEffect } from 'react';

export const Dashboard = () => {
    const navigate = useNavigate()
    function handleJumlah() {
        navigate('/tabel')
      }

    function handleUsers() {
      navigate('/user')
    }
    
    function handleCategory() {
        navigate('/category')
      }

      useEffect(()=>{
        document.getElementById('dash').classList.add('act')
        document.getElementById('dash').classList.remove('text-white')
    },[])


    return(
        <div className="container-fluid">
            <div className="row d-flex  justify-content-center align-items-center mt-5">
                <div class="col-md-2 col-2 card  m-3 " onClick={handleJumlah}>
                    <div class="card-body row d-flex  justify-content-center align-items-center text-center">
                        <div className='col-md-3 col-3'>
                            <CgFileDocument className=' fs-1 '/>
                        </div>
                        <div className='col-md-9 col-3 justify-content-center align-items-center '>
                            <p class="fs-6 d-none d-md-block ">Jumlah Arsip</p>
                            <h3 class="d-none d-md-block fs-4">120</h3>
                        </div>
                      
                    </div>
                </div>
                <div class="col-md-2 col-2 card  m-3 " onClick={handleJumlah}>
                    <div class="card-body row d-flex  justify-content-center align-items-center text-center ">
                        <div className='col-md-3 col-3'>
                            <BsShop className='fs-1 '/>
                        </div>
                        <div className='col-md-9 col-3 justify-content-center align-items-center '>
                            <p class="fs-6 d-none d-md-block ">Arsip Baru</p>
                            <h3 class="d-none d-md-block fs-4">120</h3>
                        </div>
                      
                    </div>
                </div>
                <div class="col-md-2 col-2 card b m-3" onClick={handleUsers}>
                    <div class="card-body row d-flex  justify-content-center align-items-center text-center ">
                        <div className='col-md-3 col-3'>
                            <HiOutlineUsers className='fs-1 '/>
                        </div>
                        <div className='col-md-9 col-3 justify-content-center align-items-center'>
                            <p class="fs-6 d-none d-md-block ">Pengguna</p>
                            <h3 class="d-none d-md-block fs-4">120</h3>
                        </div>
                      
                    </div>
                </div>
                <div class="col-md-2 col-2 card  m-3" onClick={handleCategory}>
                    <div class="card-body row d-flex  justify-content-center align-items-center text-center ">
                        <div className='col-md-3 col-3 '>
                            <TbListTree className='fs-1'/>
                        </div>
                        <div className='col-md-9 col-3 justify-content-center align-items-center'>
                            <p class="fs-6 d-none d-md-block ">Kategori</p>
                            <h3 class="d-none d-md-block fs-4">120</h3>
                        </div>
                      
                    </div>
                </div>
                <Tabel/>
            </div>
        </div>
    )
}

