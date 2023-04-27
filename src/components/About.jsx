import React, { useState } from 'react'
import AboutApi from '../Api/AboutApi'
import AboutImg from '../img/hero.jpg'

const About = () => {
  const [aboutData, setAboutData] = useState(AboutApi)
  return (
    <>
      <div className="container about_container" id='about'>
        <div className="row">
          <div className="col-12 col-lg-6 about_left">
            <img src={AboutImg} alt="About Img" />
          </div>

          <div className="col-12 col-lg-6 about_right">
            <h3 className='main_heading'>How to use the App?</h3>
              {
                aboutData.map((elm) => {
                  return (
                    <div className="about_flex" key={elm.id}>
                      <div className="col_2">
                        <h4 className='heading4'>{elm.title}</h4>
                        <p className='para'>{elm.desc}</p>
                      </div>
                    </div>
                  )
                }
                )
              }
          </div>
        </div>
      </div>
    </>
  )
}

export default About