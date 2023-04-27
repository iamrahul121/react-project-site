import React from 'react'
// import HeroImage from '../img/hero4.jpg'
import HeroImg from '../img/hero2.jpg'

const Home = () => {
  return (
    <>
      <header>
        <section className='container' id='header'>
          <div className="row flexbox">
            <div className="col-12 col-lg-6 header_left">
              <h1>Online Payment Made<br /> <span>Easy For You</span> </h1>
              <p>Looking for a best payment method for your Website? Online Store or for your business?  You are at the right place. Use our app, we accept mulyiple payment method like UPI, Mastercard and many more.</p>

              <h4>Get early access for you</h4>
              <div className="news_letter">
                <input type="email" placeholder='Enter Email' />
                <button>Get Quote</button>
              </div>
            </div>
            <div className="col-12 col-lg-6 header_right">
              {/* <img src={HeroImage} alt="Hero Image" className='img-fluid img_one' /> */}
              <img src={HeroImg} alt="Hero Image" className='img-fluid img_two' />
            </div>
          </div>
        </section>
      </header>
    </>
  )
}

export default Home