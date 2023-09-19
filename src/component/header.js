
import Icon from '../images/logopolos.png';
// import {RxLayers, RxDashboard} from "react-icons/rx";
// import {ImSearch} from "react-icons/im";
import {CgProfile} from 'react-icons/cg'

export const Header = () => {


    return(
    <header className=''>
        <div className='row'>
            <div className='col-2 col-md-2 d-flex justify-content-between align-items-center headerlogo'>
                <a href="/" class="col-6 align-items-center justify-content-center link-dark text-decoration-none m-1">
                    <img src={Icon} alt="icon" className="icon p-2 ms-4" />
                </a>
                <h3 className=' col-6 tulis mt-1 text-white d-none d-md-block w-75'>SIM ARSIP</h3>
            </div>

            <div className='col-10 col-md-10'>
                <div className='row bg-dark d-flex flex-column justify-content-end align-items-end'>
                    <div class="d-flex col-2 col-md-3 bg-white rounded-pill justify-content-center m-2 me-5">
                        <a href='/profile' data-bs-toggle="tooltip" data-bs-placement="bottom" title="Account" className='p-2 d-flex justify-content-center align-items-center text-dark'>
                            <CgProfile className="prof"/><span className='ms-1 d-none d-md-block' id='username'>DISINFOLAHTAAU</span>
                        </a>
                    </div>
                </div>
                <div className='row d-flex flex-column align-items-end justify-content-between'>
                    <div className='col-3 pe-5 d-flex align-items-center justify-content-end m-2'>
                        <input id="search" type="text" placeholder="Cari Arsip" className='form-control' />
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
}

export default Header;