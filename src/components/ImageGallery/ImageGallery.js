import React, { Component } from 'react';
import axios from 'axios';
import { ImageGallery } from './ImageGallery.module';

class Gallery extends Component {

  state = {
    request: null,
  }

  async componentDidUpdate(prevProps, prevState) {
    const axios = require('axios');
    const request = this.props.request;
      try {
        fetch(`https://pixabay.com/api/?key=29629491-d8b1867e90b1ff8305b24c06e&q=${request}`).then(r=>console.log(r))

      } catch (error) {
        console.error(error);
      }


      console.log('gallery request', this.props.request)
  }

  render() {
    return (
      <>
        <ImageGallery>
          <li>Images {this.props.request}</li>
        </ImageGallery>
      </>
    );
  }
}

export default Gallery;
