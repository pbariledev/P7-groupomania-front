import React, { Component } from 'react';
import ImgProfilDefault from '../assets/ProfilPictureDefault.png'

class LoadingPicgModal extends Component {
  state={
    profileImg: ImgProfilDefault
  }
  imgHandler = (e) =>{
    const reader = new FileReader();
    reader.onload= () =>{
      if(reader.readyState === 2){        this.setState({profileImg: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }

  render() {
    const {profileImg}= this.state


    return (
      <div className='page'>
          <form className="container">
            <label htmlFor="input" className='imageUpload'>
              <h2 className='heading'> choisissez votre photo</h2>
              <div className="img-holder">
                <img src={profileImg} alt="" id="img" className="img" />
              </div>
              <input type="file" name="imageUpload" id="input" accept="image/*" onChange={this.imgHandler} />
              <div className="label">
              </div>
            </label>
            <input type="submit" />
          </form>
      </div>
    );
  }
}

export default LoadingPicgModal;