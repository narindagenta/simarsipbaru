import React, { useEffect, useState } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

export const Update = () => {
  const [viewPdf, setViewPdf] = useState(null);
  const [catalogValue, setCatalogValue] = useState("");
  const [serialNumberValue, setSerialNumberValue] = useState("");
  const [file_numberValue, setFileNumberValue] = useState(""); // Fixed typo here
  const newplugin = defaultLayoutPlugin();

  const handleChangePdf = (e) => {
    document.getElementById("pdf-viewer").classList.remove("d-none");
    let selectedFile = e.target.files[0];
    console.log(selectedFile.size);
    if (selectedFile) {
      let reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onload = (e) => {
        setViewPdf(e.target.result);
      };
    } else {
      setViewPdf(null);
    }
  };

  useEffect(() => {
    // You can add any initialization logic here
  }, []);

  useEffect(() => {
    generateArchiveCode();
  }, [catalogValue, serialNumberValue, file_numberValue]);

  function generateArchiveCode() {
    // Check if either serialNumberValue or file_numberValue is filled, but not both
    if (serialNumberValue && file_numberValue) {
      alert("You can't fill both serial number and file number.");
      setSerialNumberValue(""); // Clear serialNumberValue
      setFileNumberValue(""); // Clear file_numberValue
    } else {
      // Combine catalog and book numbers to generate the archive code
      const archiveCode = `${catalogValue}/${serialNumberValue || file_numberValue}`;

      // Display the archive code in the span element if it exists
      const archiveCodeElement = document.getElementById("archive_code");
      if (archiveCodeElement) {
        archiveCodeElement.textContent = `: ${archiveCode}`;
        console.log("Archive Code:", archiveCode);
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to update the archive data here
    console.log("Form submitted with data:", {
      catalogValue,
      serialNumberValue,
      file_numberValue,
      viewPdf,
      // Add other form fields as needed
    });
  };

  return (
    <div className="container-fluid">
      <div className="row bg-white m-3 rounded p-3">
        <h3>A. Identitas</h3>
        <form onSubmit={handleSubmit}>
          <ul>
            <li className="mb-3 row">
              <label htmlFor="archive_code" className="col-sm-2 col-form-label">
                Kode Arsip
              </label>
              <div className="col-sm-9 m-2">
                <span id="archive_code">: </span>
              </div>
            </li>
            <li className="mb-3 row">
              <label htmlFor="catalog" className="col-sm-2 col-form-label">
                Indek Katalog
              </label>
              <div className="col-sm-9">
                <select
                  id="catalog"
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e) => setCatalogValue(e.target.value)}
                  value={catalogValue}
                >
                  {/* ... */}
                </select>
              </div>
            </li>
            <li className="mb-3 row">
              <label htmlFor="serial_number" className="col-sm-2 col-form-label">
                No Buku
              </label>
              <div className="col-sm-3 me-5">
                <input
                  type="number"
                  className="form-control"
                  id="serial_number"
                  placeholder="masukkan no buku"
                  value={serialNumberValue}
                  onChange={(e) => setSerialNumberValue(e.target.value)}
                />
              </div>
              <label htmlFor="file_number" className="col-sm-2 col-form-label ms-4">
                No Berkas
              </label>
              <div className="col-sm-3">
                <input
                  type="number"
                  className="form-control"
                  id="file_number"
                  placeholder="masukkan no berkas"
                  value={file_numberValue}
                  onChange={(e) => setFileNumberValue(e.target.value)}
                />
              </div>
            </li>
            {/* Add other form fields as needed */}
          </ul>
        </form>
      </div>
      <div className="row bg-white m-3 rounded p-3">
        <h3>B. Lokasi</h3>
        <form>
        <ul>
    <li className="mb-3 row">
                <label for="building" class="col-sm-2 col-form-label">Gedung</label>
                <div class="col-sm-3 me-5">
                    <select id="Building" class="form-select" aria-label="Default select example">
                        <option selected>Pilih Gedung</option>
                        <option value="1">Gedung 1</option>
                    </select>
                </div>
                <label for="room" class="col-sm-2 col-form-label ms-4">Ruang</label>
                <div class="col-sm-3">
                    <select id="room" class="form-select" aria-label="Default select example">
                        <option selected>Pilih Ruang</option>
                        <option value="1">Ruang 1</option>
                        <option value="2">Ruang 2</option>
                    </select>
                </div>
            </li>
            <li className="mb-3 row">
                <label for="rollopack" class="col-sm-2 col-form-label">Roll O Pack</label>
                <div class="col-sm-9">
                    <select id="rollopack" class="form-select" aria-label="Default select example">
                        <option selected>Pilih roll o pack</option>
                        <option value="1">R-1</option>
                        <option value="2">R-2</option>
                        <option value="3">R-3</option>
                        <option value="4">R-4</option>
                        <option value="5">R-5</option>
                        <option value="6">R-6</option>
                        <option value="7">R-7</option>
                        <option value="8">R-8</option>
                        <option value="9">R-9</option>
                        <option value="10">R-10</option>
                        <option value="11">R-11</option>
                        <option value="12">R-12</option>
                        <option value="13">R-13</option>
                        <option value="14">R-14</option>
                        <option value="15">R-15</option>
                        <option value="16">R-16</option>
                        <option value="17">R-17</option>
                        <option value="18">R-18</option>
                        <option value="19">R-19</option>
                        <option value="20">R-20</option>
                        <option value="21">R-21</option>
                        <option value="22">R-22</option>
                        <option value="23">R-23</option>
                        <option value="24">R-24</option>
                        <option value="25">R-25</option>
                        <option value="26">R-26</option>
                        <option value="27">R-27</option>
                        <option value="28">R-28</option>
                        <option value="29">R-29</option>
                        <option value="30">R-30</option>
                        <option value="31">R-31</option>
                    </select>
                </div>
            </li>
            <li className="mb-3 row">
                <label for="cabinet" class="col-sm-2 col-form-label">Lemari</label>
                <div class="col-sm-9">
                <select id="cabinet" class="form-select" aria-label="Default select example">
                    <option selected>Pilih Lemari</option>
                    <option value="1">L1</option>
                    <option value="2">L2</option>
                    <option value="3">L3</option>
                    <option value="4">L4</option>
                    <option value="4">L5</option>
                </select>
                </div>
            </li>
            <li className="mb-3 row">
                <label for="rack" class="col-sm-2 col-form-label">Rak</label>
                <div class="col-sm-9">
                    <input type="text" className="form-control" id="rack" placeholder="Masukkan Rak"/>
                </div>
            </li>
            <li className="mb-3 row">
                <label for="box" class="col-sm-2 col-form-label">Box</label>
                <div class="col-sm-9">
                    <input type="text" className="form-control" id="box" placeholder="Masukkan Box"/>
                </div>
            </li>
            <li className="mb-3 row">
                <label for="scan" class="col-sm-2 col-form-label">File Scan</label>
                <div class="col-sm-9">
                    <input onChange={handleChangePdf} type="file" className="form-control" id="scan" placeholder="Pilih File" accept=".pdf"/>
                </div>
            </li>
            <li className="mb-3 row justify-content-center align-items-center">
            <div className='pdf-view d-none col-sm-9 ' id='pdf-viewer' style={{ paddingLeft: '50px' }}>
                        <Worker workerUrl='https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js'>
                            {viewPdf && <>
                                <div className="view">
                                <Viewer fileUrl={viewPdf} plugins={[newplugin]} />
                                </div>
                            </>
                            }
                            {!viewPdf && <></>}
                        </Worker>
                    </div>
            </li>
        </ul>
        </form>
      </div>
      <div className="row d-flex flex-column justify-content-between align-items-end">
        <input
          className="col-md-1 col-2 me-5 mt-2 mb-2 btn btn-primary"
          type="submit"
          value="Update"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};
