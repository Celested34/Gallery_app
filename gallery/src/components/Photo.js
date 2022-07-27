
//import dependencies
import React from 'react';

//creates main nav component with three buttons
let Photo = (props) => {
    let secret = props.secretId;
    let photoId = props.photoId;
    let serverId = props.serverId;
    
    //returns the photo
    return (
        <div className="photo-container">
                <ul>
                    <li>
                        <img src={`https://live.staticflickr.com/${serverId}/${photoId}_${secret}_w.jpg`} alt=""/>
                    </li>
                </ul> 
        </div>
    )
}

export default Photo;
