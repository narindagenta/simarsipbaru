export const Profile = () => {
    return(
        <div className="container-fluid">
            <div className="row bg-white m-3 rounded p-3">
                <h1 className="p-2">Detail Profile</h1>
                <div className="row mt-2">
                    <h4 className="bg-dark text-white p-2 ps-4 rounded">Identitas User</h4>

                    <ul>
                    <li className="mb-3 row">
                        <label for="code" class="col-sm-2 col-form-label">ID</label>
                        <div class="col-sm-9 m-2">
                            <span className="catalog">: 01</span>
                        </div>
                    </li>
                    
                    <li className="mb-3 row">
                        <label for="catalog" class="col-sm-2 col-form-label">Username</label>
                        <div class="col-sm-9 m-2">
                            <span className="catalog">: Narinda</span>
                        </div>
                    </li>
                    
                    <li className="mb-3 row">
                        <label for="tittle" class="col-sm-2 col-form-label">Role</label>
                        <div class="col-sm-9 m-2">
                            <span className="tittle">:  IAdmin</span>
                        </div>
                    </li>
                    
                    <li className="mb-3 row">
                        <label for="Release_date" class="col-sm-2 col-form-label">Satker</label>
                        <div class="col-sm-9 m-2">
                            <span className="Release_date">:  UnhanRI</span>
                        </div>
                    </li>
                    </ul>

                </div>
            </div>            
        </div>
    )
}