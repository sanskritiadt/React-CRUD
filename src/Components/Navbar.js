import Approuter from '../Approuter'
function Navbar() {
    return (
        <div className='main mt-5'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand">React Crud Operations</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="http://localhost:3000/Create">Create</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://localhost:3000/Update">Update</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://localhost:3000/Read">Read</a>
                        </li>
        
                    </ul>
                </div>
            </nav>
            <Approuter></Approuter>
        </div>
    )
}
export default Navbar;