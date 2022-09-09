import React, { useState,} from 'react';

const LoadingPicgModal = () => {
  const [selectedImage, setSelectedImage] = useState('');

  const handlePicture = (e) => {
    e.preventDefault();
    console.log(selectedImage)
  }

  return (
    <form form action="" onSubmit={handlePicture}>

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
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />


    </form>
  );
};

export default LoadingPicgModal;