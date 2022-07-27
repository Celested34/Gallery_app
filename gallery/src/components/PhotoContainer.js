
//import dependencies
import React from 'react';

//import components
import Photo from './Photo';

//creates photo container component
let PhotoContainer = (props)  => {

    const PhotoContainer = props.data
    let photoData;
    if(PhotoContainer.length > 0) {
        photoData = PhotoContainer.map(photos => 
            <Photo 
                photoId={photos.id}
                key={photos.secret}
                alt={photos.title}
                secretId={photos.secret}
                serverId={photos.server}
            />
        )
    } 
    

    return (
        <div className="photo-container">
        <h2>Gallery App</h2>
            <ul>
                {photoData}
            </ul>
        </div>
    )};

export default PhotoContainer;