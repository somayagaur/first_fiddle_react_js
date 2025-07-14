import React from "react";

function Footer() {
    return (
        <>
            <footer className="container-fluid">
                <div className="row">
                    {/* row start */}
                    <div className="col-md-1"></div>
                    <div className="col-md-3">
                        <img src="https://pn-paul.netlify.app/image/ff-logo-02.png" className="FooterImg" />
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-6">
                        <h1 className="text-light mt-4 FooterH1">
                            <span className="footerHead">CONTACT </span>
                            <span className="text-white">US</span>
                        </h1>
                        <p className="FooterText">
                            We're a team focusing on redefining the way the hospitality industry works by bringing in
                            concept based restaurants across India.
                            We are truly committed to catering to the ever-changing cosmopolitan taste of the customer and
                            revolutioning the F & B industry!
                        </p>
                        <div className="row">
                            <div className="col-md-6">
                                <h6>Address</h6>
                                <p className="text-light">
                                    S-357 2nd floor, Block S, Panchsheel Park South, Panchsheel Park, New Delhi, Delhi
                                    110017
                                </p>
                                <div className="row">
                                    <div className="col-md-6">
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
                            <div className="col-md-6">
                                <h6>Enquiry</h6>
                                <p className="text-light pfooter">
                                    "Email: "
                                    <b className="bfooter">
                                        <a href="">customercare@firstfiddle.in</a>
                                    </b>
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="container-fluid bg-dark" >
                        <div className="row">
                            <center>
                                <div className="col-md-4">
                                </div>
                                <div className="col-md-8 text-light">
                                    <p className="mt-3 footertext">EMPLOYEE POLICIES |PRIVACY POLICY |TERMS AND CONDITIONS |
                                        BLOG | APP
                                        <b className="bfootertext Foot">COPY RIGHT © 2025 FIRST FIDDLE
                                             PRIVATE LIMITED </b>
                                    </p>
                                </div>
                            </center>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    )
}

export default Footer;