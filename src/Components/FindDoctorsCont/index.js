import React from 'react'

import './index.css'

const FindDoctorsCont = () => {
  return (
    <div className='find-doctors-container'>
        <div className='find-doctors-input-conts'>
            <h3>Find Expert Doctors For An In-Clinic Session Here</h3>
            <div>
                <input type='text' className='select-location' placeholder='select location'/>
                <input type='text' placeholder='eg. Doctor,specialization,clinic,name' className='doctor-input'/>
            </div>
        </div>
    </div>
  )
}

export default FindDoctorsCont