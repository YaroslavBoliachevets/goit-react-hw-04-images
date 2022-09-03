import React, { Component } from 'react';
import { ImageGallery, ImageGalleryItem, ImageGalleryItemImage } from './ImageGallery.module';

class Gallery extends Component {

  state = {
    request: null,
    images: null,
  }

  async componentDidUpdate(prevProps, prevState) {
    const axios = require('axios');
    const request = this.props.request;
    const url = `https://pixabay.com/api/?q=${request}&page=1&key=29629491-d8b1867e90b1ff8305b24c06e&image_type=photo&orientation=horizontal&per_page=12`;
    

    if (prevProps.request !== request) {
      try {
        console.log('запрос', );
        
        axios.get(url).then(r=> {console.log(r.data.hits); this.setState({images: r.data.hits})})
      } catch (error) {
        console.error(error);
      }
    }
  }

  render() {
    return (
      <>
        <ImageGallery>
          {this.state.images && 
          this.state.images.map(i => <ImageGalleryItem key={i.id}><ImageGalleryItemImage src={i.webformatURL} alt=""/></ImageGalleryItem> )}

        </ImageGallery>
      </>
    );
  }
}

export default Gallery;
