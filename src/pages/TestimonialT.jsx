const Test = () => {
    return(
        <>
        
    {/* <!-- Full Screen Search Start --> */}
    <div className="modal fade" id="searchModal" tabindex="-1">
        <div className="modal-dialog modal-fullscreen">
            <div className="modal-content" style={{ background: 'rgba(9, 30, 62, 0.7)' }}>
                <div className="modal-header border-0">
                    <button type="button" className="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body d-flex align-items-center justify-content-center">
                    <div className="input-group" style={{ maxWidth: '600px' }}>
                        <input type="text" className="form-control bg-transparent border-primary p-3" placeholder="Type search keyword"/>
                        <button className="btn btn-primary px-4"><i className="bi bi-search"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Full Screen Search End -->


    <!-- Hero Start --> */}
    <div className="container-fluid bg-primary py-5 hero-header mb-5">
        <div className="row py-3">
            <div className="col-12 text-center">
                <h1 className="display-3 text-white animated zoomIn">Testimonial</h1>
                <a href="" className="h4 text-white">Home</a>
                <i className="far fa-circle text-white px-2"></i>
                <a href="" className="h4 text-white">Testimonial</a>
            </div>
        </div>
    </div>
    {/* <!-- Hero End -->


    <!-- Testimonial Start --> */}
    <div className="container-fluid bg-primary bg-testimonial py-5 mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ marginTop: '90px' }}>
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <div className="owl-carousel testimonial-carousel rounded p-5 wow zoomIn" data-wow-delay="0.6s">
                        <div className="testimonial-item text-center text-white">
                            <img className="img-fluid mx-auto rounded mb-4" src="assets/img/testimonial-1.jpg" alt=""/>
                            <p className="fs-5">Dolores sed duo clita justo dolor et stet lorem kasd dolore lorem ipsum. At lorem lorem magna ut et, nonumy labore diam erat. Erat dolor rebum sit ipsum.</p>
                            <hr className="mx-auto w-25"/>
                            <h4 className="text-white mb-0">Client Name</h4>
                        </div>
                        <div className="testimonial-item text-center text-white">
                            <img className="img-fluid mx-auto rounded mb-4" src="assets/img/testimonial-2.jpg" alt=""/>
                            <p className="fs-5">Dolores sed duo clita justo dolor et stet lorem kasd dolore lorem ipsum. At lorem lorem magna ut et, nonumy labore diam erat. Erat dolor rebum sit ipsum.</p>
                            <hr className="mx-auto w-25"/>
                            <h4 className="text-white mb-0">Client Name</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Testimonial End -->
    

    <!-- Newsletter Start --> */}
    <div className="container-fluid position-relative pt-5 wow fadeInUp" data-wow-delay="0.1s" style={{zIndex: '1'}}>
        <div className="container">
            <div className="bg-primary p-5">
                <form className="mx-auto" style={{ maxWidth: '600px' }}>
                    <div className="input-group">
                        <input type="text" className="form-control border-white p-3" placeholder="Your Email"/>
                        <button className="btn btn-dark px-4">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    {/* <!-- Newsletter End -->
    

    <!-- Footer Start --> */}
    <div className="container-fluid bg-dark text-light py-5 wow fadeInUp" data-wow-delay="0.3s" style={{ marginTop: '-75px' }}>
        <div className="container pt-5">
            <div className="row g-5 pt-4">
                <div className="col-lg-3 col-md-6">
                    <h3 className="text-white mb-4">Quick Links</h3>
                    <div className="d-flex flex-column justify-content-start">
                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Home</a>
                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Latest Blog</a>
                        <a className="text-light" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h3 className="text-white mb-4">Popular Links</h3>
                    <div className="d-flex flex-column justify-content-start">
                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Home</a>
                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Latest Blog</a>
                        <a className="text-light" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h3 className="text-white mb-4">Get In Touch</h3>
                    <p className="mb-2"><i className="bi bi-geo-alt text-primary me-2"></i>123 Street, New York, USA</p>
                    <p className="mb-2"><i className="bi bi-envelope-open text-primary me-2"></i>info@example.com</p>
                    <p className="mb-0"><i className="bi bi-telephone text-primary me-2"></i>+012 345 67890</p>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h3 className="text-white mb-4">Follow Us</h3>
                    <div className="d-flex">
                        <a className="btn btn-lg btn-primary btn-lg-square rounded me-2" href="#"><i className="fab fa-twitter fw-normal"></i></a>
                        <a className="btn btn-lg btn-primary btn-lg-square rounded me-2" href="#"><i className="fab fa-facebook-f fw-normal"></i></a>
                        <a className="btn btn-lg btn-primary btn-lg-square rounded me-2" href="#"><i className="fab fa-linkedin-in fw-normal"></i></a>
                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href="#"><i className="fab fa-instagram fw-normal"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid text-light py-4" style={{ background: '#051225'}}>
        <div className="container">
            <div className="row g-0">
                <div className="col-md-6 text-center text-md-start">
                    <p className="mb-md-0">&copy; <a className="text-white border-bottom" href="#">Your Site Name</a>. All Rights Reserved.</p>
                </div>
                <div className="col-md-6 text-center text-md-end">
                    <p className="mb-0">Designed by <a className="text-white border-bottom" href="https://htmlcodex.com">HTML Codex</a></p>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Footer End -->


    <!-- Back to Top --> */}
    <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded back-to-top"><i className="bi bi-arrow-up"></i></a>

        </>
    )
}
export default Test;