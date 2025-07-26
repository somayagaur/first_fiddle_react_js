import React from 'react'


function Press() {
  return (
    <>
      <div className="container-fluid b4">
        <div className="row">
          <div className="col-md-12 text-white bannerTxt" >
            <h1>PRESS RELEASE</h1>
          </div>
        </div>
      </div>
      <br/><br /><br />
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <i className="fa-regular fa-newspaper" style={{ fontSize: '1cm' }} ></i>
            <span className='pressIcon'>OFFLINE</span>
            <hr />

          </div>
        </div>
      </div>
      <div className="container">
        <div className="row" style={{ margin: '20px 0' }}>
          <div className="col-md-3">
            <img src="https://pn-paul.netlify.app/image/1.png" alt="" className="w-100" />
          </div>
          <div className="col-md-3">
            <img src="https://pn-paul.netlify.app/image/2.png" alt="" className="w-100" />
          </div>
          <div className="col-md-3">
            <img src="https://pn-paul.netlify.app/image/3.png" alt="" className="w-100" />
          </div>
          <div className="col-md-3">
            <img src="https://pn-paul.netlify.app/image/4.png" alt="" className="w-100" />
          </div>
        </div>
        <div className="row" style={{ margin: '20px 0' }}>
          <div className="col-md-3">
            <img src="https://pn-paul.netlify.app/image/5.png" alt="" className="w-100" />
          </div>
          <div className="col-md-3">
            <img src="https://pn-paul.netlify.app/image/6.png" alt="" className="w-100" />
          </div>
          <div className="col-md-3">
            <img src="https://pn-paul.netlify.app/image/7.png" alt="" className="w-100" />
          </div>
          <div className="col-md-3">
            <img src="https://pn-paul.netlify.app/image/8.png" alt="" className="w-100" />
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="card presscard">

          <div className="row mt-5 mb-5">

            <h3 className="text-center">ONLINE MENTIONS</h3>
            <div className="col-md-1"></div>
            <div className="col-md-4 aos-init aos-animate" data-aos="zoom-in-down" data-aos-delay="400" data-aos-duration="2000">
              <img src="https://pn-paul.netlify.app/image/et-prime.jpg" className="w-100 mt-2" alt="" /></div>
            <div className="col-md-1"></div>
            <div className="col-md-5" style={{ overflowY: 'auto', height: '10cm' }}>
              <p className="mt-4 ms-2"> FEB 18, 2020</p>
              <h4 className="ms-2">ET PRIME</h4>

              {/* 1 */}
              <p className="go ms-2">"Go big, or go home: Lazeez Affaire to Lord of the Drinks, Priyank Sukhija's success recipe for dining</p>
              <p className="read ms-2">READ FULL ARTICLE</p>
              <hr />

              <p className="mt-4 ms-2"> JUL 16, 2018</p>
              <h4 className="ms-2">AIN</h4>

              {/* 2 */}
              <p className="go ms-2">"First Fiddle Restaurants aims top-line growth by 2020; to opt for franchising route to expansion"</p>
              <p className="read ms-2">READ FULL ARTICLE</p>
              <hr />

              <p className="mt-4 ms-2"> MAY 20, 2019</p>
              <h4 className="ms-2">BUSINESS LINE</h4>

              {/* 3 */}
              <p className="go ms-2">"First Fiddle opens outlet in Chennai"</p>
              <p className="read ms-2">READ FULL ARTICLE</p>
              <hr />

              <p className="mt-4 ms-2"> OCT 20, 2010</p>
              <h4 className="ms-2">BUSINESS STANDARD</h4>

              {/* 4 */}
              <p className="go ms-2">"First Fiddle Restaurants aims top-line growth by 2020; to opt for franchising route to expansion"</p>
              <p className="read ms-2">READ FULL ARTICLE</p>
              <hr />

              <p className="mt-4 ms-2"> NOV 20, 2018</p>
              <h4 className="ms-2">CHENNAI ONLINE</h4>

              {/* 5 */}
              <p className="go ms-2">"Happy Hour"</p>
              <p className="read ms-2">READ FULL ARTICLE</p>
              <hr />

              <p className="mt-4 ms-2"> FEB 18, 2020</p>
              <h4 className="ms-2">BUSINESS TODAY</h4>

              {/* 6 */}
              <p className="go ms-2">"Fly High While Experiencing Newly Launched Dragonfly"</p>
              <p className="read ms-2">READ FULL ARTICLE</p>
              {/* <hr> */}

              <p className="mt-4 ms-2"> AUG 28, 2020</p>
              <h4 className="ms-2">BUSINESS WORLD</h4>

              {/* 7 */}
              <p className="go ms-2">"LORD OF THE DRINKS LAUNCHES IN SOUTH INDIA WITH CHENNAI’S LARGEST RESTO-BAR"</p>
              <p className="read ms-2">READ FULL ARTICLE</p>
              <hr />

              {/* SAME AS 1-7  */}

              <p className="mt-4 ms-2"> FEB 18, 2020</p>
              <h4 className="ms-2">ET PRIME</h4>

              {/* 1 */}
              <p className="go ms-2">"Go big, or go home: Lazeez Affaire to Lord of the Drinks, Priyank Sukhija's success recipe for dining</p>
              <p className="read ms-2">READ FULL ARTICLE</p>
              <hr/>

              <p className="mt-4 ms-2"> JUL 16, 2018</p>
              <h4 className="ms-2">AIN</h4>

              {/* 2 */}
              <p className="go ms-2">"First Fiddle Restaurants aims top-line growth by 2020; to opt for franchising route to expansion"</p>
              <p className="read ms-2">READ FULL ARTICLE</p>
              <hr/>

              <p className="mt-4 ms-2"> MAY 20, 2019</p>
              <h4 className="ms-2">BUSINESS LINE</h4>
              
              {/* 3 */}
              <p className="go ms-2">"First Fiddle opens outlet in Chennai"</p>
              <p className="read ms-2">READ FULL ARTICLE</p>
              <hr/>

              <p className="mt-4 ms-2"> OCT 20, 2010</p>
              <h4 className="ms-2">BUSINESS STANDARD</h4>
              
              {/* 4 */}
              <p className="go ms-2">"First Fiddle Restaurants aims top-line growth by 2020; to opt for franchising route to expansion"</p>
              <p className="read ms-2">READ FULL ARTICLE</p>
              <hr/>

              <p className="mt-4 ms-2"> NOV 20, 2018</p>
              <h4 className="ms-2">CHENNAI ONLINE</h4>

              {/* 5 */}
              <p className="go ms-2">"Happy Hour"</p>
              <p className="read ms-2">READ FULL ARTICLE</p>
              <hr/>

              <p className="mt-4 ms-2"> FEB 18, 2020</p>
              <h4 className="ms-2">BUSINESS TODAY</h4>

              {/* 6 */}
              <p className="go ms-2">"Fly High While Experiencing Newly Launched Dragonfly"</p>
              <p className="read ms-2">READ FULL ARTICLE</p>
              <hr/>

              <p className="mt-4 ms-2"> AUG 28, 2020</p>
              <h4 className="ms-2">BUSINESS WORLD</h4>

              {/* 7 */}
              <p className="go">"LORD OF THE DRINKS LAUNCHES IN SOUTH INDIA WITH CHENNAI’S LARGEST RESTO-BAR"</p>
              <p className="read ms-2">READ FULL ARTICLE</p>
              <hr/>

            </div>
          </div>  
        </div>
      </div>

            </>
            )
}

export default Press;