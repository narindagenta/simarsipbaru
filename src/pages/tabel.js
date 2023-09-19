import {useNavigate} from 'react-router-dom';

export const Tabel = () => {
  const navigate = useNavigate()
  function handleDetail() {
    navigate('/dashboard/detail')
  }

    return(
        <div className="container-fluid">
            <div className="row bg-white m-3 rounded p-3 ">
                <h1 className='p-2'>Arsip</h1>
                <table class="table table-hover text-center">
                    <thead>
                        <tr>
                          <th scope="col">Tanggal Terbit</th>
                          <th scope="col">Jenis</th>
                          <th scope="col">Indeks Kategory</th>
                          <th scope="col">Judul</th>
                          <th scope="col">Instansi Sumber</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr onClick={handleDetail} >
                          <th scope="row">15/09/2023</th>
                          <td>buku</td>
                          <td>Doktrin</td>
                          <td>ketentuan tentang...</td>
                          <td>disinfolahtaau</td>
                        </tr>
                      </tbody>
                </table>
            </div>
        </div>
    )
}