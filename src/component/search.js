import { ImSearch } from 'react-icons/im';
import { Tabel } from '../pages/tabel';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SearchTable = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
  
    const handleSearch = (e) => {
      navigate('/tabel')
      console.log(searchTerm)
      return(
        <Tabel searchTerm={searchTerm} className="d-none d-md-none"/>
      )
      
      
      // onSearch(query); // Panggil fungsi onSearch dan teruskan nilai pencarian
    }
    
    return(
        <div className="input-group">
                <input
                  id="search"
                  type="text"
                  placeholder="Cari Arsip"
                  className="form-control"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span className="input-group-text">
                  <ImSearch onClick={handleSearch} />
                </span> 
        </div>
    )
}