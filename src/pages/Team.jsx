import React from 'react'

function Team() {
  return (
    <>
      <div className="container-fluid b3">
        <div className="row">
          <div className="col-md-12 text-white bannerTxt">
            <h1>MEET THE TEAM</h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mt-3">
          <div className="col-md-5 mt-4">
            <img src="https://pn-paul.netlify.app/image/priyank-our%20team.jpg" alt="" style={{ height: '13.49cm' }} className="w-100" />

          </div>

          <div className="col-md-7">
            <h2 className="mt-4">Priyank Sukhija</h2>
            <h6>C.E.O & M.D.</h6>

            <p className="b">
              A 19-year-old dropout kid, who was just setting up his first venture, envisioned what nobody thought would make him a business tycoon in the hospitality industry. Once he began, there was no stopping this entrepreneur from reaching the heights he has reached today. It is the passion and creative streak of Priyank Sukhija that has made him the most watched-out restaurateur of today’s time. Coming from a family of lawyers, he ventured into the business world on his own with Lazeez Affaire in 1999 and has never looked back since.
            </p>


            <button className="btn btn-warning">Read more...</button>
            <div className="row">
              <div className="col-md-6 mb-5">
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
              </div>
            </div>

          </div>

        </div>
        {/* row end */}

      </div><br />
      {/* conatainer end */}

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow ms-2 mb-4 photo1" data-aos="flip-right">

              <h4 className="teamh4" >Y. P. ASHOK</h4>
              <p className="teamp">chairman</p>


            </div>
            {/* card end */}
          </div>
          <div className="col-md-4">
            <div className="card shadow ms-2 mb-4 photo2" data-aos="flip-left">

              <h4 className="teamh4" >B.R. SACHDEVA</h4>
              <p className="teamp">Director Finance & Legal</p>


            </div>
            {/* card end */}
          </div>

          <div className="col-md-4">
            <div className="card shadow ms-2 mb-4 photo3" data-aos="flip-up">

              <h4 className="teamh4" >SAGAR BAJAJ</h4>
              <p className="teamp">Corporate Chef</p>


            </div>
            {/* card end */}
          </div>

        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow ms-2 mb-4 photo4" data-aos="flip-down">

              <h4 className="teamh4" >JAY SHANKAR NATRAJ</h4>
              <p className="teamp" >Franchise Lead</p>


            </div>
            {/* card end */}
          </div>
          <div className="col-md-4">
            <div className="card shadow ms-2 mb-4 photo5">

              <h4 className="teamh4" >VIBHUTI SOOD</h4>
              <p className="teamp" >PR And Communications Head</p>


            </div>
            {/* card end */}
          </div>


        </div>
      </div><br></br>
    </>
  )
}

export default Team
