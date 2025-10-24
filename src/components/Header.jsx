import {Link} from 'react-router-dom';
const Header = () =>{
    return(
        <>
             {/* <!-- Spinner Start --> */}
    {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-grow text-primary m-1" role="status">
            <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-dark m-1" role="status">
            <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-secondary m-1" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div> */}
    {/* <!-- Spinner End -->


    <!-- Topbar Start --> */}
    <div className="container-fluid bg-light ps-5 pe-0 d-none d-lg-block">
        <div className="row gx-0">
            <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
                <div className="d-inline-flex align-items-center">
                    <small className="py-2"><i className="far fa-clock text-primary me-2"></i>Opening Hours: Mon - Tues : 6.00 am - 10.00 pm, Sunday Closed </small>
                </div>
            </div>
            <div className="col-md-6 text-center text-lg-end">
                <div className="position-relative d-inline-flex align-items-center bg-primary text-white top-shape px-5">
                    <div className="me-3 pe-3 border-end py-2">
                        <p className="m-0"><i className="fa fa-envelope-open me-2"></i>info@example.com</p>
                    </div>
                    <div className="py-2">
                        <p className="m-0"><i className="fa fa-phone-alt me-2"></i>+012 345 6789</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Topbar End -->


    <!-- Navbar Start --> */}
     <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
                <a href="index.html" className="navbar-brand p-0">
                    <h1 className="m-0 text-primary"><i className="fa fa-tooth me-2"></i>DentCare</h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        <Link to="About" className="nav-item nav-link">About</Link>
                        <Link to="Service" className="nav-item nav-link">Service</Link>
                        <div className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                            <div className="dropdown-menu m-0">
                                <Link to="Pricing" className="dropdown-item">Pricing Plan</Link>
                                <Link to="Dentist" className="dropdown-item">Our Dentist</Link>
                                <Link to="Test" className="dropdown-item">Testimonial</Link>
                                <Link to="Appoint" className="dropdown-item">Appointment</Link>
                            </div>
                        </div>
                        <Link to="Cont" className="nav-item nav-link">Contact</Link>
                    </div>
                    <button type="button" className="btn text-dark" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search"></i></button>
                    <Link to="AppointmentButton" className="btn btn-primary py-2 px-4 ms-3">Appointment</Link>
                </div>
            </nav>
    {/* {/* <!-- Navbar End --> */}
        </>

    )
}
export default Header;