import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal';
import Loader from './Loader';
import getImages from 'services/api';

class App extends Component {
  state = {
    page: 1,
    perPage: 12,
    query: '',
    items: [],
    showLoadBtn: false,
    status: 'idle',
    showModal: false,
    idModalImg: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.page !== page || prevState.query !== query) {
      this.setState({ status: 'pending' });

      try {
        await getImages(this.state).then(responce => {
          if (responce.status === 200) {
            this.setState(prevState => ({
              page,
              items: [...prevState.items, ...responce.data.hits],
              status: 'resolved',
            }));
            this.isShowLoadBtn(responce);

            if (responce.data.hits.length === 0) {
              this.setState({ status: 'rejected' });
            }
          }
        });
      } catch (error) {
        console.error(error);
        this.setState({ status: 'rejected' });
      }
    }
  }

  formSubmitHandler = query => {
    return this.setState({ page: 1, query, items: [] });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  isShowLoadBtn = responce => {
    if (this.state.perPage * this.state.page < responce.data.total) {
      return this.setState({ showLoadBtn: true });
    }

    return this.setState({ showLoadBtn: false });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  galleryClick = ({tags, largeImageURL}) => {
    this.toggleModal();
    this.setState({ largeImageURL, tags });
  };

  render() {
    const { query, page, items, status, showLoadBtn, showModal, largeImageURL, tags } =
      this.state;
    return (
      <>
        <Searchbar onSubmit={this.formSubmitHandler} />

        <ImageGallery
          query={query}
          page={page}
          items={items}
          onClick={this.galleryClick}
        />

        {status === 'pending' && <Loader />}

        {showLoadBtn && status !== 'pending' && (
          <Button onClick={this.loadMore} />
        )}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={tags}></img>
          </Modal>
        )}

        {status === 'rejected' && <h1>Empty request</h1>}
      </>
    );
  }
}

export default App;
