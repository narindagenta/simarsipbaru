import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin, DefaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import {BsPlusSquare} from 'react-icons/bs';
import { useNavigate } from "react-router-dom";


export const Detail = () =>{
    const navigate = useNavigate();


    const handleupdate = () =>{

        navigate('/updatearsip')
    }
    
    return(
        <div className="container-fluid">
            <div className="row bg-white m-3 rounded p-3">
                <div className="d-flex justify-content-between align-items-center p-2">
                  <h1 className="m-0 ">Detail Arsip</h1>
                  <button className="btn btn-success d-flex align-items-center" onClick={handleupdate} >
                    <BsPlusSquare className="m-2" />
                    <span className="d-none d-md-inline">Update Arsip</span>
                  </button>

                </div>
                <div className="row mt-3">
                    <h4 className="bg-dark text-white p-2 ps-4 rounded">Identitas Arsip</h4>
                    <ul>
                    <li className="mb-3 row">
                        <label for="code" class="col-sm-2 col-form-label">Kode Arsip</label>
                        <div class="col-sm-9 m-2">
                            <span className="catalog">: 01/203</span>
                        </div>
                    </li>
                    <li className="mb-3 row">
                        <label for="catalog" class="col-sm-2 col-form-label">Indeks Katalog</label>
                        <div class="col-sm-9 m-2">
                            <span className="catalog">: 01. Doktrin</span>
                        </div>
                    </li>
                    <li className="mb-3 row">
                        <label for="tittle" class="col-sm-2 col-form-label">Judul</label>
                        <div class="col-sm-9 m-2">
                            <span className="tittle">:  Ini Judul</span>
                        </div>
                    </li>
                    <li className="mb-3 row">
                        <label for="Release_date" class="col-sm-2 col-form-label">Tanggal Surat</label>
                        <div class="col-sm-9 m-2">
                            <span className="Release_date">:  12 Agustus 2023</span>
                        </div>
                    </li>
                    <li className="mb-3 row">
                        <label for="timestamp" class="col-sm-2 col-form-label">Tanggal Input</label>
                        <div class="col-sm-9 m-2">
                            <span className="timestamp">:  18 September 2023 14:53</span>
                        </div>
                    </li>
                    <li className="mb-3 row">
                        <label for="condition_id" class="col-sm-2 col-form-label">Kondisi Arsip</label>
                        <div class="col-sm-9 m-2">
                            <span className="condition_id">:  Baik</span>
                        </div>
                    </li>
                    <li className="mb-3 row">
                        <label for="type" class="col-sm-2 col-form-label">Jenis Arsip</label>
                        <div class="col-sm-9 m-2">
                            <span className="type">:  Berkas</span>
                        </div>
                    </li>
                    <li className="mb-3 row">
                        <label for="class" class="col-sm-2 col-form-label">Kelas Arsip</label>
                        <div class="col-sm-9 m-2">
                            <span className="class">:  Rahasia</span>
                        </div>
                    </li>
                    <li className="mb-3 row">
                        <label for="agency" class="col-sm-2 col-form-label">Asal Instansi</label>
                        <div class="col-sm-9 m-2">
                            <span className="agency">:  Disinfolahta</span>
                        </div>
                    </li>
                    </ul>
                </div>
                <div className="row mt-2">
                    <h4 className="bg-dark text-white p-2 ps-4 rounded">Lokasi Penyimpanan Arsip</h4>
                    <ul>
                    <li className="mb-3 row">
                        <label for="building" class="col-sm-2 col-form-label">No Gedung</label>
                        <div class="col-sm-9 m-2">
                            <span className="building">: 01</span>
                        </div>
                    </li>
                    <li className="mb-3 row">
                        <label for="room" class="col-sm-2 col-form-label">Ruang</label>
                        <div class="col-sm-9 m-2">
                            <span className="room">:  02</span>
                        </div>
                    </li>
                    <li className="mb-3 row">
                        <label for="rollopack" class="col-sm-2 col-form-label">Roll O Pack</label>
                        <div class="col-sm-9 m-2">
                            <span className="rollopack">:  R-1</span>
                        </div>
                    </li>
                    <li className="mb-3 row">
                        <label for="cabinet" class="col-sm-2 col-form-label">Lemari</label>
                        <div class="col-sm-9 m-2">
                            <span className="cabinet">:  L1</span>
                        </div>
                    </li>
                    <li className="mb-3 row">
                        <label for="rack" class="col-sm-2 col-form-label">Rak</label>
                        <div class="col-sm-9 m-2">
                            <span className="rack">:  Baik</span>
                        </div>
                    </li>
                    <li className="mb-3 row">
                        <label for="box" class="col-sm-2 col-form-label">Box</label>
                        <div class="col-sm-9 m-2">
                            <span className="box">:  tahun 2019</span>
                        </div>
                    </li>
                    <li className="mb-3 row">
                        <div className='pdf-view d-none col-sm-9 ' id='pdf-viewer'>
                            <Worker workerUrl='https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js'>
                                {/*arcive.file && <>
                                    <Viewer fileUrl={beritaState.file} plugins={[newplugin]} />
                                </>
                                }
                            {archive.file && <></>*/}
                            </Worker>
                            </div>
                    </li>

                    </ul>
                    </div>
                
                

            </div>            
        </div>
    )
}