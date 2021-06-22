import React from "react";
import '../stylesheets/navbar.css'
import PolymerIcon from '@material-ui/icons/Polymer';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import FolderIcon from '@material-ui/icons/Folder';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ChatIcon from '@material-ui/icons/Chat';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Navbar() {
  function toggle_active(e){
      const selector = document.querySelectorAll('.link');
      console.log(selector);
      selector.forEach(item => {
          if(item.classList.contains('active')){
              item.classList.remove('active')
          }
      })
      
      e.target.classList.toggle('active')    
  }

  return (
    <div>
      <div className="nav">
        <PolymerIcon className = "logo-icon" />
        
        <div className="navigations">
           <div className="upper_link_section">
            <span className = "link active" onClick = {toggle_active}> <HomeIcon className = 'icon'/> </span>  
            <span className = "link" onClick = {toggle_active}> <InsertChartIcon className = 'icon'/> </span>
            <span className = "link" onClick = {toggle_active}> <CameraAltIcon className = 'icon'/> </span>
            <span className = "link" onClick = {toggle_active}> <FolderIcon className = 'icon' /> </span>
            <span className = "link" onClick = {toggle_active}> <EventAvailableIcon className = 'icon'/> </span>
            <span className = "link" onClick = {toggle_active}> <PeopleAltIcon className = 'icon'/> </span>
            <span className = "link" onClick = {toggle_active}> <ChatIcon className = 'icon'/> </span>
            <span className = "link" onClick = {toggle_active}> <ExitToAppIcon className = 'icon'/> </span>
           </div>

           <div className="setting_icon_div"> 
             <span className = "link" onClick = {toggle_active}> <SettingsIcon className = 'icon '/> </span>
           </div>
        </div>

      </div>
    </div>
  );
}

export default Navbar;
