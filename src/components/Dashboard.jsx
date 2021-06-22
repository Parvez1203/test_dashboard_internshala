import React from 'react';
import '../stylesheets/Dashboard.css';
import DashboardHeadingSection from './DashboardHeadingSection';
import TotalApplications from './TotalApplications';
import NewApplicants from './NewApplicants';
import ApplicationsReceived from './ApplicationsReceived';
import Measures from './Measures';
import Referals from './Referals';
import OpenPositions from './OpenPositions';

function Dashboard() {
    return (
        <div className="dashboard">
            {/* header section starts */}
            <DashboardHeadingSection />

            {/* header section ends */}

            {/* data section starts */}
            <div className="data_section">
                <div className="left_section">
                    <TotalApplications />

                    <div className="second_row">
                        <ApplicationsReceived />
                        <Measures />
                    </div>

                    <div className="third_row">
                      <Referals />
                      <OpenPositions />
                    </div>
                    
                </div>

                <div className="right_section">
                    <NewApplicants />
                </div>

                {/* 

                 

            {/* data section ends */}
            </div>
        </div>
    )
}

export default Dashboard;
