import React, {useState} from "react";
export default function ProgressBar(props) {
    const [showTooltip, setShowTooltip] = useState(false);
    function handleMouseEnter(){
        setShowTooltip(true);
    }
    function handleMouseLeave(){
        setShowTooltip(false);
    }

    return (
        <div>
            <h1>Progress Bar</h1>
            <div className="progress-bar" style={{ width: "50%", alignItems: "center" }}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div
                style={{
                    width: `${props.progress}%`,
                    backgroundColor: "#007bff",
                    height: "24px",
                    borderRadius: "4px",
                }}>
                </div>
                
            </div>
            {showTooltip && <div className="tooltip">You still have {100 - props.progress}% to go!</div>}
            <p>{props.progress}% Complete</p>
        </div>
    );
}