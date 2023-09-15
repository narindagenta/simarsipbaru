export const Tabel = () => {

    return(
        <div className="container-fluid">
            <div className="row bg-white m-3 rounded p-3 ">
                <h1>Arsip</h1>
                <table class="table table-hover">
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
                        <tr>
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