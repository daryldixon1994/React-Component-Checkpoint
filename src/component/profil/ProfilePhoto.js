import React from 'react';
import Photo from './photo.JPG';
const ProfilePhoto = () => {
    return (
        <div>
            <img src={Photo} alt="photo_de_profil" width="250px"/>
        </div>
    )
}

export default ProfilePhoto;