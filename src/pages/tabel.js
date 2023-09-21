import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { TiArrowSortedDown } from "react-icons/ti";

export const Tabel = ({ data }) => {
  const navigate = useNavigate();
  // const [searchQuery, setSearchQuery] = useState("");
  // const [filteredData, setFilteredData] = useState(data);

  // useEffect(() => {
  //   // Filter data berdasarkan pencarian
  //   const filtered = data.filter((item) =>
  //     item.name.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  //   setFilteredData(filtered);
  // }, [data, searchQuery]);

  function handleDetail() {
    navigate("/tabel/detail");
  }
  /*const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  )*/

  return (
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
        <div className="table-responsive mt-3">
          <table class="table table-hover text-center">
            <thead>
              <tr>
                <th scope="col">Tanggal</th>
                <th scope="col">Jenis</th>
                <th scope="col">Indeks Kategory</th>
                <th scope="col">Judul</th>
                <th scope="col">Instansi Sumber</th>
              </tr>
            </thead>
            <tbody>
              <tr onClick={handleDetail}>
                <td scope="row">15/09/2023</td>
                <td>buku</td>
                <td>Doktrin</td>
                <td>ketentuan tentang...</td>
                <td>disinfolahtaau</td>
              </tr>
              <tr onClick={handleDetail}>
                <td scope="row">16/09/2023</td>
                <td>buku</td>
                <td>orgas</td>
                <td>a</td>
                <td>disinfolahtaau</td>
              </tr>
              <tr onClick={handleDetail}>
                <td scope="row">17/09/2023</td>
                <td>buku</td>
                <td>sprin</td>
                <td>organisasi</td>
                <td>setum</td>
              </tr>

              {/* {filteredData.map((item) => (
                <tr
                  key={item.id}
                  onClick={() => handleDetail(item.id)}
                  style={{ cursor: "pointer" }}
                >
                  <td scope="row">{item.date}</td>
                  <td>{item.jenis}</td>
                  <td>{item.indeksKategori}</td>
                  <td>{item.judul}</td>
                  <td>{item.instansiSumber}</td>
                </tr>
              ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
