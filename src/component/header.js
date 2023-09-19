import React from 'react';
import { ImSearch } from 'react-icons/im';
import { CgProfile } from 'react-icons/cg';

export const Header = () => {
  return (
    <header className="">
      <div className="row">
        <div className="col-12 col-md-12">
          <div className="row bg-dark d-flex flex-column justify-content-end align-items-end">
            <div className="d-flex col-3 col-md-3 bg-white rounded-pill justify-content-center m-2 me-5">
              <a
                href="/profile"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="User"
                className="p-2 d-flex justify-content-center align-items-center text-dark"
              >
                <CgProfile className="prof" />
                <span className="ms-1 d-none d-md-block" id="username">
                  DISINFOLAHTAAU
                </span>
              </a>
            </div>
          </div>
          <div className="row d-flex flex-column bg-white align-items-end justify-content-between">
            <div className="col-8 col-md-4 pe-3 d-flex align-items-center justify-content-end p-2">
              <div className="input-group">
                <input
                  id="search"
                  type="text"
                  placeholder="Cari Arsip"
                  className="form-control"
                />
                <span className="input-group-text">
                  <ImSearch />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
