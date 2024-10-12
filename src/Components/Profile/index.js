import React from 'react'

import Navbar from '../Navbar'
import AppointmentForm from '../AppointmentForm'
import LittleAboutMe from '../LittleAboutMe'

import './index.css'

const Profile = () => {
  return (
    <div>
        <Navbar/>
        <div className='profile-and-followers-cont'>
            <div>
              <img src="https://res.cloudinary.com/ramcharan/image/upload/v1728571539/appointment-design/profile-image_sodkgg.png" alt="profile-image" className='profile-image'/>
            </div>
            <div className='profile-details'>
              <h4>Dr.Bruce Wills</h4>
              <p>Gynecologist</p>
              <div className='rating-section'>
                <p>4.2</p>
                <p><i className="star">⭐</i><i className="star">⭐</i><i className="star">⭐</i><i className="star">⭐</i></p>
              </div>
            </div>
            <div className='follower-stats'>
              <div className='stat-item'><p>Followers</p><span>850</span></div>
              <div className='stat-item'><p>Following</p><span>18K</span></div>
              <div className='stat-item'><p>Posts</p><span>250</span></div>
            </div>
            <div>
              <button className='book-apointment-btn'>Book an Appointment</button>
            </div>  
        </div> 







        <div className='containers-screens'>
            <LittleAboutMe/>
            <AppointmentForm/>
        </div>
    </div>
  )
}

export default Profile