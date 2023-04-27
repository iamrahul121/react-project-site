import React, { useState } from 'react'
import ServiceData from '../Api/ServicesApi'

const Services = () => {
    const [service, setService] = useState(ServiceData)
    return (
        <div className='container service_container' id='services'>
            <div className="row">
                <h2 className='main_heading text-center p-2'> How To Send Money</h2>

                {
                    service.map((val) => {
                        return (
                            <div className="col-12 col-md-6 col-lg-4 service">
                                <div className='service_box'>
                                <i class={`icon_style  ${val.img}`}></i>
                                    <h4 className='heading4'>{val.title}</h4>
                                    <p className='para'> {val.desc} </p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Services