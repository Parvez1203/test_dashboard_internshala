import React from 'react';
import '../stylesheets/Applicant.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

function Applicant(props) {
    return (
        <div className = "applicant">
            <span><AccountCircleIcon className="applicant_icons"/></span>
            <div className = "applicant_info">
                <span className="name">
                  {props.name}
                </span>

    <p>Applied For <span className="role">{props.role}</span></p>
            </div>
            
            <span><EmailIcon className="applicant_icons"/></span>
            <span><PhoneIcon className="applicant_icons"/></span>
        </div>
    )
}

export default Applicant
