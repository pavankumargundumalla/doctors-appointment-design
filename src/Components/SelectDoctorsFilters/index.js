import React from 'react'

import './index.css'

const SelectDoctorsFilters = () => {

    
  return (
    <div className='filters-doctors-container'>
        <select>
            <option value="" hidden>Expertise</option>
            <option>Hair Care</option>
            <option>Skin Care</option>
            <option>Weight Loss</option>
            <option>General Health</option>
        </select>
       
        <select>
            <option value=""  hidden>Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>

        <select>
            <option value="" hidden>Fees</option>
            <option>RS:0 - RS:500</option>
            <option>RS:500 - RS:1000</option>
            <option>RS:1000 - RS:2000</option>
            <option>RS:2000 - RS:5000</option>
            <option>RS:5000 - RS:10000</option>
        </select>

        <select>
            <option hidden>Languages</option>
            <option>Telugu</option>
            <option>Hindi</option>
            <option>English</option>
            <option>Marati</option>
            <option>Tamil</option>
            <option>Malayalam</option>
        </select>

        <select>
            <option hidden>All Filters</option>
        </select>

    </div>
  )
}

export default SelectDoctorsFilters