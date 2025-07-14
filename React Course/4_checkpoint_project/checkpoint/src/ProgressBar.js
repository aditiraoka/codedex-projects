import React from "react";
export default function ProgressBar(props) {
    return (
        <div>
            <h1>Progress Bar</h1>
            <div className="progress-bar" style={{ width: "50%", alignItems: "center" }}>
                <div
                style={{
                    width: `${props.progress}%`,
                    backgroundColor: "#007bff",
                    height: "24px",
                    borderRadius: "4px",
                }}
                ></div>
            </div>
            <p>{props.progress}% Complete</p>
        </div>
    );
}