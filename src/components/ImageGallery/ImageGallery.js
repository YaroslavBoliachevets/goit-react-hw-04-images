import React, { Component } from 'react';
import {
  Gallery,
  ImageGalleryItem,
  ImageGalleryItemImage,
} from './ImageGallery.module';

class ImageGallery extends Component {
  render() {
    return (
      <>
        <Gallery>
          {this.props.items.map(i => (
            <ImageGalleryItem
              key={i.id}
              onClick={() => this.props.onClick(i.id)}
            >
              <ImageGalleryItemImage src={i.webformatURL} alt={i.tags} />
            </ImageGalleryItem>
          ))}
        </Gallery>
      </>
    );
  }
}

export default ImageGallery;
