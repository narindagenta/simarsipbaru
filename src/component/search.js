import { ImSearch } from 'react-icons/im';
// import { Tabel } from '../pages/tabel';
import { useState } from 'react';

export const SearchTable = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
  
    const handleSearch = (e) => {
      const query = e.target.value;
      setSearchQuery(query);
      onSearch(query); // Panggil fungsi onSearch dan teruskan nilai pencarian
    }
    
    return(
        <div className="input-group">
                <input
                  id="search"
                  type="text"
                  placeholder="Cari Arsip"
                  className="form-control"
                  value={searchQuery}
                  onChange={handleSearch}
                />
                <span className="input-group-text">
                  <ImSearch />
                </span>
                {/* <Tabel searchQuery={searchQuery}/> */}
        </div>
    )
}