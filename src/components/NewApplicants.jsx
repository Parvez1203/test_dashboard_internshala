import React from 'react';
import '../stylesheets/NewApplicants.css';
import image from './image.png'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Applicant from './Applicant';

function NewApplicants() {
    return (
        <div data-testid="NewApplicants" className="NewApplicants">
            <p className = "welcome_text">Hello, Parvez Mir <br /> you have 8 new NewApplicants today!</p>
            <div className="img_container">
                <img src={image} alt="" />
            </div>
            <div className="ApplicantsList">
                <div className="text">
                    <p>New Applicants</p>
                    <ChevronRightIcon />
                </div>

                <div className="applicants">
                    <Applicant name = "rahul judal" role = "web-developer"/>
                    <Applicant name = "john doe" role = "Ios-developer"/>
                    <Applicant name = "sarah winters" role = "Jr.developer"/>
                    <Applicant name = "daniel redclief" role = "manager"/>
                    <Applicant name = "Robert downy jr." role = "android-developer"/>
                    <Applicant name = "Hemant mishra" role = "project manager"/>
                    <Applicant name = "rahul dave" role = "web-developer"/>
                    <Applicant name = "sneha patel" role = "Ios-developer"/>
                    
                </div>
            </div>
        </div>
    )
}

export default NewApplicants
