import React from 'react';
import '../stylesheets/Referals.css';
import TelegramIcon from '@material-ui/icons/Telegram';
import CallMadeIcon from '@material-ui/icons/CallMade';
import Button from '@material-ui/core/Button';

function Referals() {
    return (
        <div className="referals">
             <div className="heading_section">
                 <div className="title">Referals and Campaigns Stats</div>
                 <div className="heading_section_right">
                     <div className="red_logo">
                        <TelegramIcon />
                     </div>
                     <div className="text_red_and_white ">
                        <span className="red">40 Campaigns sent in total</span><br/>
                        <span className="white">4 Campaigns sent in last month</span>
                     </div>
                 </div>
             </div>

             <div className="figures_section">
                <div className="block">
                    <span className="lable">
                        Users's Reached
                    </span>

                    <span className="growth">
                    <div  style = {{color : "skyblue"}}>
                      <span ><CallMadeIcon className="up_icon"/></span>
                       <span>0.5%</span>
                      </div>
                    </span>

                    <span className="figure">
                           0662
                    </span>
                </div>

                <div className="block">
                    <span className="lable">
                        Applications
                    </span>

                    <span className="growth">
                    <div  style = {{color : "skyblue"}}>
                      <span ><CallMadeIcon className="up_icon"/></span>
                       <span>0.53%</span>
                      </div>
                    </span>

                    <span className="figure">
                           7876
                    </span>
                </div>

                <div className="block">
                    <span className="lable">
                        Referals
                    </span>

                    <span className="growth">
                    <div  style = {{color : "skyblue"}}>
                      <span ><CallMadeIcon className="up_icon"/></span>
                       <span>0.25%</span>
                      </div>
                    </span>

                    <span className="figure">
                           2343
                    </span>
                </div>

                <div className="block">
                    <span className="lable">
                        Shares
                    </span>

                    <span className="growth">
                    <div  style = {{color : "skyblue"}}>
                      <span ><CallMadeIcon className="up_icon"/></span>
                       <span>0.37%</span>
                      </div>
                    </span>

                    <span className="figure">
                           6754
                    </span>
                </div>
                 

             </div>

             <div className="btn_fields">
                 <div className="primary_btn">
                 <Button variant="contained" color="primary" className = "btn">
                        Start a new Campaign now
                    </Button>
                 </div>

                 <div className="secondary_btn">
                 <Button variant="contained" color="secondary" className = "btn">
                       Pause All Remaining Campaigns
                    </Button>
                 </div>
             </div>
        </div>
    )
}

export default Referals
