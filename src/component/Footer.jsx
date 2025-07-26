import React from "react";

function Footer() {
    return (
        <>
            <footer className="container-fluid footerRow h-100">
                <div className="container-fluid footer-top ">
                    <div className="row px-5">
                        <div className="col-md-4 d-flex justify-content-center align-items-start">
                            <img className="footer-logo mt-3" alt="First Fiddle Logo" src="https://pn-paul.netlify.app/image/ff-logo-02.png" />
                        </div>
                        <div className="col-md-8 mt-3 mt-md-0">
                            <h2 className="footer-heading FooterH1"><span className="footerHead">CONTACT</span> US</h2>
                            <p className="footer-text">We're a team focusing on redefining the way the hospitality industry works by bringing in concept based restaurants across India. We are truly committed to catering to the ever-changing cosmopolitan taste of the customer and revolutionizing the F &amp; B industry!</p>
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <h6 className="footer-subhead">ADDRESS</h6>
                                    <p className="footer-text mb-1">S-357 2nd floor, Block S, Panchsheel Park South,
                                        <br />Panchsheel Park, New Delhi, Delhi 110017</p>
                                </div>
                                <div className="col-md-6">
                                    <h6 className="footer-subhead">ENQUIRY</h6>
                                    <p className="footer-text mb-1">Email: <span className="footer-email">customercare@firstfiddle.in</span>
                                    </p>
                                </div>
                            </div>
                            <div className="footer-icons mt-4">
                                <button className="footerbtn">
                                    <a href="#">
                                        <i className="fa-brands fa-facebook  icon"></i>
                                    </a>
                                </button>
                                <button className="footerbtn">
                                    <a href="#">
                                        <i class="fa-brands fa-instagram  icon"></i>
                                    </a>
                                </button>
                                <button className="footerbtn">
                                    <a href="#">
                                        <i className="fa-brands fa-whatsapp  icon"></i>
                                    </a>
                                </button>
                                <br />
                                <br />
                            </div>
                        </div>

                        
                    </div>
                </div>
                <div className="container-fluid bg-dark w-100" >
                    <div className="row">
                        <center>
                            
                            <div className="col-md-12 text-light">
                                <p className="mt-3 footertext">EMPLOYEE POLICIES |PRIVACY POLICY |TERMS AND CONDITIONS |
                                    BLOG | APP
                                    <b className="bfootertext Foot">COPY RIGHT © 2025 FIRST FIDDLE
                                        PRIVATE LIMITED </b>
                                </p>
                            </div>
                        </center>
                    </div>
                </div>




            </footer>
        </>

    )
}

export default Footer;