import React from 'react';
import '../stylesheets/Dashboard_heading_section.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

function DashboardHeadingSection() {
    const today = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return (
        <div className = "heading_section">
            <div className="heading_and_date">
                <span className="heading">
                    Dashboard
                   </span>

                <span className="date">
                    {days[today.getDay()] + ', '} <span className="date_blue">{today.getDate() + ' ' + months[today.getMonth()] + ' ' + today.getFullYear()} </span>
                </span>
            </div>

            <div className="right_section">
                <div className="profile">
                    <span className = "notification"><NotificationsIcon />  <span className="indicator"></span></span>
                   
                    <span>Parvez mir</span>
                    <span><Avatar className="Avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuCe1SMBI0RPkDKP0E_We4fqaHAsCP2QPQXA&usqp=CAU"/></span>
                    <span> <ExpandMoreIcon className = "expandIcon"/></span>
                </div>

                <div className="add_and_search">
                    <Button variant="contained" color="primary" className = "add_btn">
                        + Add
                    </Button>

                    <div className="search">
                        <SearchIcon className="search_icon"/>
                        <input type="text" className="search_bar" placeholder="Search for Application here" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DashboardHeadingSection
