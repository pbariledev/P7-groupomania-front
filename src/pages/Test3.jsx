import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Test = () => {

  const [image, setImage] = useState('');


  const userId= JSON.parse(localStorage.getItem('userId'))
  const jwtToken= JSON.parse(localStorage.getItem('token'))
  const[data, setData] = useState([])
    useEffect(()=>{
      fetchData()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[data])

  const fetchData = () => {
      axios
          .get(`http://localhost:5000/api/auth/myprofil/${userId}`,
          {headers: { Authorization : `Bearer ${jwtToken}`}})
          .then((res)=> {
            setImage(res.data.imageUrl)
          })
          .catch((err)=>{
              console.log(err)
          })
  }
  
  const imgHandler = (e) =>{
    const reader = new FileReader(); // renvoi un nouvelle objet reader
    reader.onload= () =>{ //opération de lecture du fichier
      if(reader.readyState === 2){ //si la lecture est complete
         setImage(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0]) //permet de lire le contenu du fichier choisi
  }
  const onSubmit = (e) => {
    e.preventDefault();

    console.log(useState);
    const imageUrl= data.email;

    axios.put(
        `http://localhost:5000/api/auth/myprofil/${userId}`,
        {imageUrl},
        {headers: { Authorization : `Bearer ${jwtToken}`}}
    )
        .then ((res)=>{
            alert ('compte mis à jourr!')
            console.log(data)
        })
        .catch((err) => {
            console.log( err.response.data)
            alert ('erreur de mise a jour')
        });
}


  return (
    <div className='page'>
    <form className="container" onSubmit={onSubmit}>
      <label htmlFor="input" className='imageUpload'>
        <h2 className='heading'> choisissez votre photo</h2>
        <div className="img-holder">
          <img src={image} alt="" id="img" className="img" />
        </div>
        <input type="file" name="imageUpload" id="input" accept="image/*" onChange={imgHandler}/>
        <div className="label">
        </div>
      </label>
      <input type="submit" />
    </form>
</div>
);
};

export default Test;