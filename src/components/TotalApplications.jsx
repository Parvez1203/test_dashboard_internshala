import React from 'react';
import '../stylesheets/TotalApplications.css';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CallMadeIcon from '@material-ui/icons/CallMade';

function TotalApplications() {
    return (
        <div className="total_applications">
            <div className="box">
               <div className="content" id="content1">
                  <span>Total applications</span>
                  <span className="icon"><MoreHorizIcon /></span>
                  <span className="figure">7896</span>
                  <span className="circle" style = {{border: "5px solid rgb(136, 62, 165) .content:hover .circle"}}>100%</span>
                  <div className="up-down" style = {{color : "purple"}}>
                      <span ><CallMadeIcon className="up_icon"/></span>
                       <span>0.5%</span>
                      </div>
               </div>
            </div>

            <div className="box">
            <div className="content" id="content2">
            <span>Total applications</span>
                  <span className="icon"><MoreHorizIcon /></span>
                  <span className="figure">7896</span>
                  <span className="circle" style = {{border: "5px solid rgb(0, 153, 255)"}}>100%</span>
                  <div className="up-down" style = {{color : "skyblue"}}>
                      <span ><CallMadeIcon className="up_icon"/></span>
                       <span>0.5%</span>
                      </div>
               </div>
            </div>

            <div className="box">
            <div className="content" id="content3">
            <span>Total applications</span>
                  <span className="icon"><MoreHorizIcon /></span>
                  <span className="figure">7896</span>
                  <span className="circle"  style = {{border: "5px solid rgb(182, 20, 82)"}} >100%</span>
                  <div className="up-down" style = {{color : "pink"}}>
                      <span ><CallMadeIcon className="up_icon"/></span>
                       <span>0.5%</span>
                      </div>
               </div>
            </div>
        </div>
    )
}

export default TotalApplications
