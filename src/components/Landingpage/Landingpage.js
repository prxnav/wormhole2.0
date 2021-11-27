import React from "react";
import "./Landingpage.css"

function Landingpage(){
    return(
        <div className="background">
            <div className="wrapper">
                <div className="heading">
                    <h1>Wormhole App</h1>
                    <p>Simple, private file sharing</p>
                </div>
                <div className="file-drop">
                    <input type="file" placeholder="Select files to send"/>
                </div>
            </div>
        </div>
    )    
}


export default Landingpage;