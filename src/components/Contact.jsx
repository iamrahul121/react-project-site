import React, {useState} from 'react'
import ContactImg from '../img/hero3.jpg'

const Contact = () => {
  const [data, setData] = useState({
    fullName : "",
    email : "",
    subject : "",
    message : ""
  })

  const ContactHandler = (event) => {
    
    let name = event.target.name;
    let value = event.target.value;
    setData({...data, [name] : value})
  }

  const SubmitData = async (event) => {
    event.preventDefault()
    const {fullName, email, subject, message} = data;
    if(fullName && email && subject && message){
    const res = fetch('https://techyfame2-default-rtdb.firebaseio.com/userData.json',
    {
    method :  "POST",
    Headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify({
      fullName,
      email,
      subject,
      message,
    })
  }
    )
    if(res){
      setData({
        fullName : "",
        email : "",
        subject : "",
        message : ""
      })
      alert("Thank you for Submission. We will contact you shortly")

    }
    else{
      alert("Pls Fill Data")
    }
  }
  else{
    alert("Pls Fill Details")
  }
  }

  return (
    <section>
      <div className="container contact_container" id='contact'>
        <div className="row">
          <div className="col-12 col-lg-6 mx-auto">
            <h3>Contact Us</h3>
            <p className='contact_para'>Please fill out the form for contact me. Or WhatsApp between 9am to 8pm. ET, Monday to Saturday.</p>
            <figure>
              <img src={ContactImg} alt="" />
            </figure>

          </div>
          <div className="col-12 col-lg-6 mx-auto contact">
            <form method='POST' className='inp'>
              <input type="text" placeholder='Full Name' name='fullName' 
              value={data.fullName} onChange = {ContactHandler} />

              <input type="email" placeholder='Enter Your Email' name='email' 
              value={data.email} onChange = {ContactHandler}/>

              <input type="text" placeholder='Subject' name='subject'
              value={data.subject} onChange = {ContactHandler}/>

              <textarea name="message" id="" className='messagebox' placeholder='Your Message'
              value={data.message} onChange = {ContactHandler}></textarea>
              <button type='submit' className='nav_btn btnnew' onClick={SubmitData}>Submit</button>
            </form>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact