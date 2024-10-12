import { Component } from "react";

import { Link } from "react-router-dom";

import Navbar from '../Navbar/index'
import FindDoctorsCont from "../FindDoctorsCont";
import SelectDoctorsFilters from '../SelectDoctorsFilters'

import './index.css'
import ProfileCard from "../ProfileCard";

class Home extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <FindDoctorsCont/>
                <SelectDoctorsFilters/>
                <div className="profile-cards-container">
                    <Link to="/profile" className="profile-link"><ProfileCard/></Link>              
                    <Link to="/profile" className="profile-link"><ProfileCard/></Link>              
                    <Link to="/profile" className="profile-link"><ProfileCard/></Link>              
                </div>
            </div>
        )
    }
}

export default Home