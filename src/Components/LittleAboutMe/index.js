// import React from 'react';
// import './index.css';

// const LittleAboutMe = () => {
//   return (
//     <div>
//         <div className="doctor-profile-container">
//         {/* About Section */}
//           <div className="about-section">
//             <div className="about-header">
//             <h2>A Little About Me</h2>
//             <button className="follow-button">Follow +</button>
//             </div>
//             <p className="about-description">
//             Hello, I am Dr. Bruce Willis, a Gynecologist in Sanjivni Hospital, Surat. 
//             I love to work with all my hospital staff and senior doctors. 
//             Completed my graduation in Gynecology from XYZ University. 
//             <span className="read-more">Read More</span>
//             </p>

//             <div className="languages">
//               <p>Language Spoken</p>
//               <div className="language-tags">
//                   <span>English</span>
//                   <span>Hindi</span>
//                   <span>Telugu</span>
//               </div>
//             </div>

//             <div className="social-icons">
//               {/* Icons would be added using font-awesome or custom SVGs */}
//               <i className="fab fa-facebook"></i>
//               <i className="fab fa-instagram"></i>
//               <i className="fab fa-youtube"></i>
//               <i className="fab fa-twitter"></i>
//             </div>
//         </div>

//         </div>
    
//       {/* Specialization Section */}
//       <div className="specialization-section">
//         <h2>I Specialize In</h2>
//         <div className="specialization-icons">
//           <div className="specialization-item">
//             <img src="https://res.cloudinary.com/ramcharan/image/upload/v1728571540/appointment-design/specialize-in-1_nezc0z.png" alt="Women's Health" />
//             <p>Women's Health</p>
//           </div>
//           <div className="specialization-item">
//             <img src="https://res.cloudinary.com/ramcharan/image/upload/v1728571538/appointment-design/specialize-in-2_x69628.png" alt="Skin Care" />
//             <p>Skin Care</p>
//           </div>
//           <div className="specialization-item">
//             <img src="https://res.cloudinary.com/ramcharan/image/upload/v1728571538/appointment-design/specialize-in-3_eytofm.png" alt="Hair Care" />
//             <p>Immunity</p>
//           </div>
//           <div className="specialization-item">
//             <img src="https://res.cloudinary.com/ramcharan/image/upload/v1728571539/appointment-design/specialize-in-4_kwyjp9.png" alt="Immunity" />
//             <p>Hair Care</p>
//           </div>
//         </div>
//       </div>







//       {/* rest of containers */}






//       {/* <div className="doctor-details-container">
      
      

      




//       </div> */}


//         {/* Concerns Section */}
//             <div className="concerns-section">
//               <h2>The Concerns I Treat</h2>
//                 <div className="concern-tags">
//                     <span>Skin Treatment</span>
//                     <span>Pregnancy</span>
//                     <span>Period Doubts</span>
//                     <span>Endometriosis</span>
//                     <span>Pelvic Pain</span>
//                     <span>Ovarian Cysts</span>
//                     <span>+ 5 More</span>
//                 </div>
//             </div>

    

//         {/* Work Experience Section */}
//         <div className="work-experience-section">
//             <h2>My Work Experience</h2>
//             <p className="experience-header">I HAVE BEEN IN PRACTICE FOR : 7+ YEARS</p>
//             <div className="experience-list">
//             <div className="experience-item">
//                 <i className="fas fa-hospital"></i>
//                 <div>
//                 <p>Midtown Medical Clinic</p>
//                 <p>Senior doctor (2016 - PRESENT)</p>
//                 </div>
//             </div>
//             <div className="experience-item">
//                 <i className="fas fa-hospital"></i>
//                 <div>
//                 <p>Midtown Medical Clinic</p>
//                 <p>Senior doctor (2010 - 2015)</p>
//                 </div>
//             </div>
//             </div>
//         </div>



    
//       {/* Reviews Section */}
//       <div className="reviews-section">
//         <h2>Featured Reviews (102)</h2>
//         <div className="review-item">
//           <div className="review-header">
//             <img src="https://res.cloudinary.com/ramcharan/image/upload/v1728571539/appointment-design/profile-image2_fzv5mm.png" alt="User" className="review-avatar"/>
//             <div>
//               <p>Alicent Hightower</p>
//               <p>Consulted for Skin Care</p>
//             </div>
//             <p className="review-date">20 January 2023</p>
//           </div>
//           <p className="review-text">
//             Might be a bit early to confirm but yes I can see noticeable difference in my hairfall.
//             Will write again after using it for longer periods.
//           </p>
//           <div className="review-rating">
//             <span>★★★★★</span>
//           </div>
//         </div>

//         <div className="review-item">
//           <div className="review-header">
//             <img src="https://res.cloudinary.com/ramcharan/image/upload/v1728571539/appointment-design/profile-image2_fzv5mm.png" alt="User" className="review-avatar"/>
//             <div>
//               <p>Alicent Hightower</p>
//               <p>Consulted for Pregnancy</p>
//             </div>
//             <p className="review-date">20 January 2023</p>
//           </div>
//           <p className="review-text">
//             Might be a bit early to confirm but yes I can see noticeable difference. Will write again after using it for longer periods.
//           </p>
//           <div className="review-rating">
//             <span>★★★★★</span>
//           </div>
//         </div>
//       </div>



//     </div>
//   );
// };

// export default LittleAboutMe;



import React from 'react';
import './index.css';

const LittleAboutMe = () => {
  return (
    <div className="doctor-profile-container">
      {/* About Section */}
      <div className="about-section">
        <div className="about-header">
          <h2>A Little About Me</h2>
          <button className="follow-button">Follow +</button>
        </div>
        <p className="about-description">
          Hello, I am Dr. Bruce Willis, a Gynecologist in Sanjivni Hospital, Surat.
          I love to work with all my hospital staff and senior doctors.
          Completed my graduation in Gynecology from XYZ University.
          <span className="read-more"> Read More</span>
        </p>

        <div className="languages">
          <p>Languages Spoken</p>
          <div className="language-tags">
            <span>English</span>
            <span>Hindi</span>
            <span>Telugu</span>
          </div>
        </div>

        <div className="social-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-twitter"></i>
        </div>
      </div>

      {/* Specialization Section */}
      <div className="specialization-section">
        <h2>I Specialize In</h2>
        <div className="specialization-icons">
          <div className="specialization-item">
            <img src="https://res.cloudinary.com/ramcharan/image/upload/v1728571540/appointment-design/specialize-in-1_nezc0z.png" alt="Women's Health" />
            <p>Women's Health</p>
          </div>
          <div className="specialization-item">
            <img src="https://res.cloudinary.com/ramcharan/image/upload/v1728571538/appointment-design/specialize-in-2_x69628.png" alt="Skin Care" />
            <p>Skin Care</p>
          </div>
          <div className="specialization-item">
            <img src="https://res.cloudinary.com/ramcharan/image/upload/v1728571538/appointment-design/specialize-in-3_eytofm.png" alt="Immunity" />
            <p>Immunity</p>
          </div>
          <div className="specialization-item">
            <img src="https://res.cloudinary.com/ramcharan/image/upload/v1728571539/appointment-design/specialize-in-4_kwyjp9.png" alt="Hair Care" />
            <p>Hair Care</p>
          </div>
        </div>
      </div>

      {/* Concerns Section */}
      <div className="concerns-section">
        <h2>The Concerns I Treat</h2>
        <div className="concern-tags">
          <span>Skin Treatment</span>
          <span>Pregnancy</span>
          <span>Period Doubts</span>
          <span>Endometriosis</span>
          <span>Pelvic Pain</span>
          <span>Ovarian Cysts</span>
          <span>+ 5 More</span>
        </div>
      </div>

      {/* Work Experience Section */}
      <div className="work-experience-section">
        <h2>My Work Experience</h2>
        <p className="experience-header">I HAVE BEEN IN PRACTICE FOR : 7+ YEARS</p>
        <div className="experience-list">
          <div className="experience-item">
            <i className="fas fa-hospital"></i>
            <div>
              <p>Midtown Medical Clinic</p>
              <p>Senior doctor (2016 - PRESENT)</p>
            </div>
          </div>
          <div className="experience-item">
            <i className="fas fa-hospital"></i>
            <div>
              <p>Midtown Medical Clinic</p>
              <p>Senior doctor (2010 - 2015)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="reviews-section">
        <h2>Featured Reviews (102)</h2>
        <div className="review-item">
          <div className="review-header">
            <img src="https://res.cloudinary.com/ramcharan/image/upload/v1728571539/appointment-design/profile-image2_fzv5mm.png" alt="User" className="review-avatar" />
            <div>
              <p>Alicent Hightower</p>
              <p>Consulted for Skin Care</p>
            </div>
            <p className="review-date">20 January 2023</p>
          </div>
          <p className="review-text">
            Might be a bit early to confirm but yes I can see noticeable difference in my hairfall.
            Will write again after using it for longer periods.
          </p>
          <div className="review-rating">
            <span>★★★★★</span>
          </div>
        </div>

        <div className="review-item">
          <div className="review-header">
            <img src="https://res.cloudinary.com/ramcharan/image/upload/v1728571539/appointment-design/profile-image2_fzv5mm.png" alt="User" className="review-avatar" />
            <div>
              <p>Alicent Hightower</p>
              <p>Consulted for Pregnancy</p>
            </div>
            <p className="review-date">20 January 2023</p>
          </div>
          <p className="review-text">
            Might be a bit early to confirm but yes I can see noticeable difference.
            Will write again after using it for longer periods.
          </p>
          <div className="review-rating">
            <span>★★★★★</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LittleAboutMe;
