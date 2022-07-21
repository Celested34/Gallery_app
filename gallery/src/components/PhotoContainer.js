import React from 'react';
import Photo from './Photo'

const PhotoContainer = props => {
    const results = props.data;

    return(
        <div className='photo-container'>
            <h2>{props.query}</h2>
            <ul>
                {photos}
            </ul>
        </div>
    )

    


}

export default PhotoContainer; 