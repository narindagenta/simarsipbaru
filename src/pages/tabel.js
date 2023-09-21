import {useNavigate} from 'react-router-dom';
import {TiArrowSortedDown} from 'react-icons/ti';

export const Tabel = () => {
  const navigate = useNavigate()
  function handleDetail() {
    navigate('/tabel/detail')
  }

    return(
        <div className="container-fluid">
            <div className="row bg-white m-3 rounded p-3 ">
              <div className="d-flex justify-content-between align-items-center">
                <h1 className="m-0">Arsip</h1>
                <button
                  className="btn btn-dark d-flex align-items-center"
                  // onClick={handleTambah}
                  >
                  <TiArrowSortedDown className="m-2" />
                  <span className="d-none d-md-inline">Urutkan</span>
                </button>
              </div>
                <div className='table-responsive mt-3'>
                <table class="table table-hover text-center">
                    <thead>
                        <tr>
                          <th scope="col">Tanggal</th>
                          <th scope="col" >Jenis</th>
                          <th scope="col">Indeks Kategory</th>
                          <th scope="col">Judul</th>
                          <th scope="col" >Instansi Sumber</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr onClick={handleDetail} >
                          <td scope="row">15/09/2023</td>
                          <td >buku</td>
                          <td>Doktrin</td>
                          <td>ketentuan tentang...</td>
                          <td >disinfolahtaau</td>
                        </tr>
                      </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}