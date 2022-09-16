import React, { useState,} from 'react';

const PictureLoad = (props) => {

  const [selectedImage, setSelectedImage] = useState('');

  const handlePicture = (picture) => {
    props.onPictureLoaded(picture)
  }

  return (
    <div >

      <br />
      {selectedImage && (
        <div>
        <img alt="not fount" className='img' src={URL.createObjectURL(selectedImage)} />
        <br />
        <button  onClick={()=>setSelectedImage(null)}>Annuler</button>
        </div>
      )}
      <br />
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          setSelectedImage(event.target.files[0]);
          handlePicture(event.target.files[0])
        }}
      />


    </div>
  );
};

export default PictureLoad;