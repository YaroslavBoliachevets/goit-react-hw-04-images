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
          {this.props.items.map(item => (
            <ImageGalleryItem
              key={item.id}
              onClick={() => this.props.onClick(item)}
            >
              <ImageGalleryItemImage src={item.webformatURL} alt={item.tags} />
            </ImageGalleryItem>
          ))}
        </Gallery>
      </>
    );
  }
}

export default ImageGallery;
