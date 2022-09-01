import React, { useState} from 'react';

const Test = () => {
  const [selectedImage, setSelectedImage] = useState('');

  return (
    <div>
      <h1>Télécharger et afficher une image</h1>
      {selectedImage && (
        <div>
        <img alt="not fount" className='img' src={URL.createObjectURL(selectedImage)} />
        <br />
        <button onClick={()=>setSelectedImage(null)}>Annuler</button>
        </div>
      )}
      <br />
     
      <br /> 
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default Test;