// import React from 'react'

function Home() {
  return (
    <>
      {/* slider div start */}
      <div className="carousel slide" id="a1">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#a1" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#a1" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#a1" data-bs-slide-to="2"></button>
        </div>
        {/*carousel-indicators end*/}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://pn-paul.netlify.app/image/slider1.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://pn-paul.netlify.app/image/slider22.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://pn-paul.netlify.app/image/slidwr33.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        {/* carousel-inner end */}
        <button className="carousel-control-prev" type="button" data-bs-target="#a1" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#a1" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>


      <div className="container">
        <h1 className="text-center mt-3">WELCOME TO <b> FIRST FIDDLE</b></h1>
        <br />
        <div className="row">

          <div className="col-md-7 b">
            <p>First Fiddle Restaurants, one of India's most prominent F&B companies in the casual dining
              sector, is headed by Priyank Sukhija. Starting the journey from Lazeez Affair in 1999 to Miso Sexy
              and Bougie in 2022, we have created wave after wave in the industry with over 30+ restaurants,
              brands, and franchises across India.</p>

            <center>
              <button className="btn btn-warning btn-lg mt-5 mb-3 text-light">JOIN THE JOURNEY</button>
            </center>
          </div>
          <div className="col-md-5">
            <img src="https://pn-paul.netlify.app/image/first.jpg" alt="" className="Img" />
          </div>
        </div>
        {/* row end */}
      </div>
      {/* Container End */}

      <div className="container-fluid c">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 text-center text-white " >
            <h1 className="d ">MEDIA MENTIONS</h1>
            <p className="e">We've been making splashes and headlines since 1999 for our innovative concepts and aesthetic ideations, experimental gastronomic affairs, and exotic mixology. We’ve made our way from the heart of the country into the hearts of its people!</p>

            <center>
              <button className="btn btn-warning btn-lg mt-5 mb-3 text-light">Know more</button>
            </center>
          </div>
          <div className="col-md-2"></div>
        </div>
        {/* row end */}
      </div>

      <div className="container">
        <h1 className="text-center a mt-5">EXPLORE <b>OUR BRANDS</b></h1>
        <br />
        <div className="row">
          <div className="col-md-3 mb-3">
            <img src="https://pn-paul.netlify.app/image/ffpic1.jpg" alt="" className="w-100" />

          </div>
          <div className="col-md-3 mb-3">
            <img src="https://pn-paul.netlify.app/image/ffpic1.jpg" alt="" className="w-100" />

          </div>
          <div className="col-md-3 mb-3">
            <img src="https://pn-paul.netlify.app/image/ffpic1.jpg" alt="" className="w-100" />

          </div>
          <div className="col-md-3 mb-3">
            <img src="https://pn-paul.netlify.app/image/ffpic1.jpg" alt="" className="w-100" />

          </div>



        </div>
        {/* row end */}

      </div>
      {/* conatainer end */}


      <div className="container-fluid c">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 text-center text-white " >
            <h1 className="d ">EXPERIENCE OUR CONCEPTS</h1>
            <p className="e">Moving beyond just offering Indian, international, and fusion cuisines, our restaurants
              create magic with our special events, mood-setting music, Insta-worthy aesthetics, and
              tongue-tingling signatures! Head over to experience it for yourself!</p>

            <center>
              <button className="btn btn-warning btn-lg mt-5 mb-3 text-white">Know more</button>
            </center>
          </div>
          <div className="col-md-2"></div>
        </div>
        {/* row end */}
      </div>
      {/* container-fluid */}


    </>
  )
}

export default Home
