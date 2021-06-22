import React from 'react';
import '../stylesheets/OpenPositions.css';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Doughnut } from 'react-chartjs-2';


function OpenPositions() {
    const data = {
        
        datasets: [
          {
            data: ["12", "19", "15" ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
             
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              
            ],
            borderWidth: 1,
            maintainAspectRatio: false,
          },
        ],
      };
    return (
        <div className='OpenPosition'>
            <div className="heading_text">
                  <span>Open Positions By Department</span>
                  <span className="icon"><MoreHorizIcon /></span>
                </div>

            <div className="do-chart">
               <Doughnut data={data} className="the_chart"/>
             
            </div>
        </div>
    )
}

export default OpenPositions
