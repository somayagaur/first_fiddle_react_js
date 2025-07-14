import React from 'react'

function Contact() {
  return (
    <>
    <div className="container-fluid b5">
        <div className="row">
          <div className="col-md-12 text-white bannerTxt">
            <h1 >CONTACT US</h1>
          </div>
        </div>
    </div>
    
    <div className="container">
        
        <div className="row">
            
            <div className="col-md-6 mt-4">
                <h2 className="mt-4 mb-4 contacth2">SEND US MESSAGE</h2>
                <form action="">
                  {/* form start */}
                    <div className="mb-3">
                        
                        <input type="text" name="" className="form-control" placeholder="Name*"/>
                    </div>

                    <div className="mb-3">
                        
                        <input type="email" name="" className="form-control" placeholder="Email*"/>
                    </div>

                    <div className="mb-3">
                        
                        <input type="number" name="" className="form-control" placeholder="Phone*"/>
                    </div>

                    <div className="mb-3">
                        
                        <input type="text" name="" className="form-control" placeholder="Message*"/>
                    </div>
                    <button type="submit" className="btn btn-warning text-white">SUBMIT</button>
                </form>
                {/* form end */}
            </div>
            
            <div className="col-md-5 ms-1 mt-4">
                <h2 className="mt-4 mb-4 contacth2">CONTACT INFO</h2>
                <h6 className='contacth6'>Address</h6>
                <p>6, Chanakyapuri Shopping Complex, 48, Malcha Marg, New Delhi<br/> 110021</p>
                <h6 className='contacth6'>For Franchise Enquiry</h6>
                <p>MOBILE:<u className='contactu'> <b>+91 9313663486</b></u></p>
                <p>EMAIL: <b className='contacth6'>franchise@firstfiddle.in</b></p>
                <h6 className='contacth6'>For HR Enquiry</h6>
                <p>MOBILE: <b className='contacth6'><u className='contactu'> +91 9999304427</u></b></p>
                <p>EMAIL: <b className='contacth6'><u className='contactu'>hr@firstfiddle.in</u></b></p>
                <h6 className='contacth6'>For Other Enquiry</h6>
                <p>PHONE: <b className='contacth6'><u className='contactu'>7676380000 </u></b></p>
                <p>EMAIL: <b className='contacth6'><u className='contactu'>customercare@firstfiddle.in</u></b></p>
                <p>Open: Monday - Saturday 10:30 - 19:30</p>
                
            </div>
        </div>
    </div><br/>
    {/* container end */}
    <br/>
    </>
  )
}

export default Contact
