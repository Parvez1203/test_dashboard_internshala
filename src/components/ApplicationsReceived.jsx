import React from 'react';
import '../stylesheets/ApplicationsReceived.css';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {AreaChart, Area, XAxis, YAxis, ResponsiveContainer,Tooltip } from 'recharts';

function ApplicationsReceived() {
    const pdata = [
        {
            month: "Jan",
            ranges: 0,
            amount: 256
        },
        {
            month: "Fab",
            ranges: 2344,
            amount: 3443
        },
        {
            month: "Mar",
            ranges: 45,
            amount: 344
        },
        {
            month: "Apr",
            ranges: 45,
            amount: 644
        },
        {
            month: "May",
            ranges: 45,
            amount: 2344
        },
        {
            month: "Jun",
            ranges: 45,
            amount: 566
        },
        {
            month: "Jul",
            ranges: 4000,
            amount: 3245
        },
        
       
    ]
    return (
        <div className="applications_recieved">
            <div className="texts">
                <span className="title">Applications Received</span>
                <ul className="right_text">
                    <li className="links">This Year</li>
                    <li className="links">This Week</li>
                    <li className="links">Today</li>
                    <li className="link"><span><CloudDownloadIcon /></span> Download Report</li>
                    <li className="links" id="link_icon"><MoreVertIcon /></li>
                </ul>
            </div>

            <div className="chart">
                <ResponsiveContainer width="90%" height="90%" aspect={3}>
                    <AreaChart data={pdata}>
                        <XAxis dataKey="month" interval={"preserveStartEnd"} />
                        <YAxis dataKey = "ranges"/>
                        <Tooltip />
                        <Area dataKey="amount" fill="#8884d8"/>
                    </AreaChart>

                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default ApplicationsReceived;
