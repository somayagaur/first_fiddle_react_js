import React from 'react'

function Carrers() {
  return (
    <>
      <div className="container-fluid b6">
        <div className="row">
          <div className="col-md-12 text-white bannerTxt">
            <h1>CAREERS</h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center carrer">
            <p>COME WORK<b>
              WITH US!
            </b></p>
          </div>
          <p className='pcarrer'>
            First Fiddle is all about innovation, creativity and understanding ever-changing consumer needs. The work environment enables both professional and personal growth.
          </p>
        </div>
      </div>
      {/* first container end */}

      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center  carrer">
            <p>HOW TO<b>
              APPLY!
            </b></p>
          </div>
          <p className='pcarrer' >
            First Fiddle is all about innovation, creativity and understanding ever-changing consumer needs. The work environment enables both professional and personal growth
          </p>
        </div>
      </div>
      {/* Second container end */}

      <div className="container">
        <div className="row mt-4">
          <div className="col-md-5 mt-3 ms-3">
            <h4 className="mt-5 mb-1">
              Steep learning curve
            </h4>
            <p className='pcarrer'>
              Talent and merit are rewarded at First Fiddle Restaurants. Add value, and see yourself grow!
            </p>

            <h4 className="mt-5 mb-1">
              Growth opportunities
            </h4>
            <p className='pcarrer'>
              Talent and merit are rewarded at First Fiddle Restaurants. Add value, and see yourself grow!
            </p>

            <h4 className="mt-5 mb-1">
              Exciting work environment
            </h4>
            <p className='pcarrer'>
              Work in a highly motivated environment with talented people. A positive work environment, ensures a productive and happy you.
            </p>
          </div>
          <div className="col-md-6 mt-5 ms-1">
            <div className="card carrercard" >
              <h5 className="mt-2 ms-4">Share your Details</h5>
              <div className="card-body">
                <form action="">

                  {/* form start */}
                  <div className="mb-4">
                    <label>Name:</label>
                    <input type="text" name="" className="form-control" placeholder="Name*" />
                  </div>

                  <div className="mb-4">
                    <label>Email:</label>
                    <input type="email" name="" className="form-control" placeholder="Email*" />
                  </div>

                  <div className="mb-4">
                    <label>Phone</label>
                    <input type="number" name="" className="form-control" placeholder="Phone*" />
                  </div>

                  <div className="mb-5 mt-4">
                    <label>Message</label>
                    <input type="text" name="" className="form-control" placeholder="Message*" />
                  </div>
                  <div className="d-md-flex justify-containt-md-cente">
                    <button type="submit" className="btn btn-warning text-white">SUBMIT</button>
                  </div>

                </form>
                {/* form end */}
              </div>
            </div>
          </div>
        </div>
      </div><br></br>
    </>
  )
}

export default Carrers
