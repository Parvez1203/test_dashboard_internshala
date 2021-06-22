import React from 'react';
import '../stylesheets/Measures.css';
import LinearProgress from '@material-ui/core/LinearProgress';

function Measures() {
    return (
        <div className="measures">
            <div className="title">
                Total Applications
            </div>

            <ul className="measurements">
                <li className="measurement">Applications <span className="span1"><LinearProgress variant="determinate" value={50}  /></span></li>
                <li className="measurement">Applications <span className="span1"><LinearProgress variant="determinate" value={70} /></span></li>
                <li className="measurement">Applications <span className="span1"><LinearProgress variant="determinate" value={30} color={"secondary"} /></span></li>
                <li className="measurement">Applications <span className="span1"><LinearProgress variant="determinate" value={60} color={"secondary"}/></span></li>
                <li className="measurement">Applications <span className="span1"><LinearProgress variant="determinate" value={20} /></span></li>
            </ul>
        </div>
    )
}

export default Measures;
