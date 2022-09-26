
import {
  Gallery,
  ImageGalleryItem,
  ImageGalleryItemImage,
} from './ImageGallery.module';

function ImageGallery({items, onClick}) {
  return (
    <>
      <Gallery>
        {items.map(item => (
          <ImageGalleryItem
            key={item.id}
            onClick={() => onClick(item)}
          >
            <ImageGalleryItemImage src={item.webformatURL} alt={item.tags} />
          </ImageGalleryItem>
        ))}
      </Gallery>
    </>
  );
}

export default ImageGallery;
