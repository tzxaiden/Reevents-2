import React, { Component } from 'react';
import request from 'superagent'; // https://github.com/visionmedia/superagent
import Dropzone from 'react-dropzone'; // https://github.com/react-dropzone/react-dropzone


const CLOUDINARY_UPLOAD_PRESET = 'xvk3kpv2';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dltxga2hl/image/upload';



class DropForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadedFileCloudinaryUrl: '',
    };
  }

  onImageDrop(files) {
    this.setState({
      uploadedFileCloudinaryUrl: files[0],
    });
    this.handleImageUpload(files[0]);
  }

  // for more info: https://css-tricks.com/image-upload-manipulation-react/
  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }
      if (response.body.secure_url !== '') {
        this.props.updateUrl(response.body.secure_url);
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url,
        });
      }
    });
  }

  fileUpload(){
    return(
      <div className="file-upload">
        <Dropzone
          className="dropzone"
          multiple={false}
          accept="image/*"
          onDrop={this.onImageDrop.bind(this)}>
          <i className="fa fa-camera" aria-hidden="true"></i>
          <h3 className='addEventImageText'>ADD EVENT IMAGE</h3>
          <p className='eventImageText'>Choose a image.</p>
        </Dropzone>
      </div>
    );
  }

  displayFile() {
    return(
      <div>
        {this.state.uploadedFileCloudinaryUrl === '' ?
          null
          :
          <img id="event-form-img" src={this.state.uploadedFileCloudinaryUrl} />
        }
      </div>
    );
  }

  render() {
    const displayType = this.state.uploadedFileCloudinaryUrl ? this.displayFile() : this.fileUpload();
    return(
      <div>
        {displayType}
      </div>
    );
  }
}
export default DropForm;
