import React from 'react'

const Footer = () => {

  const scrollToTop = (id) => {
    document.querySelector("#"+id).scrollIntoView({behavior:"smooth"})
  }

  return (
    <footer>
      <div className="container footer" id='footer'>
        <div className="row">
          <div className="col-12 col-lg-10 mx-auto">
            <div className="row">
              <div className="col-6 col-lg-4 box1">
                <h3 className='text-center'>TechyFame</h3>
                <p className='newpara'>Let’s work together and I will help you by all my best. Fore More details contact us. Our sale team help you.</p>

              </div>

              <div className="col-6 col-lg-4 box1 text-center">
                <h4 className='heading4'>Links</h4>
                <ul className='para'>
                  <li onClick={()=> scrollToTop('nav')}>Home</li>
                  <li onClick={()=> scrollToTop('about')} >About</li>
                  <li onClick={()=> scrollToTop('contact')} >Contact</li>
                  <li onClick={()=> scrollToTop('services')}>Services</li>
                </ul>
              </div>

              <div className="col-6 col-lg-4 box1 text-center">
                <h4 className='heading4'>Follow Us</h4>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
            <hr/>
            <div className="text-center">
              Copyrights 2023 @ TechyFame
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer