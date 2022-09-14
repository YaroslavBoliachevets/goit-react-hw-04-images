
import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal';
import Loader from './Loader';
const axios = require('axios');



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
    const { query, page, perPage} = this.state;

    const url = `https://pixabay.com/api/?q=${query}&page=${page}&key=29629491-d8b1867e90b1ff8305b24c06e&image_type=photo&orientation=horizontal&per_page=${perPage}`;

    if (prevState.page !== page || prevState.query !== query) {
      this.setState({ status: 'pending' });
      try {
        await axios.get(url).then(r => {
          if (r.status === 200) {
            this.setState(prevState => ({
              page,
              items: [...prevState.items, ...r.data.hits],
              status: 'resolved',
            }));
            this.isShowLoadBtn(r);
            if(this.state.items.length === 0) {
              this.setState({status:"rejected"});
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

  isShowLoadBtn = r => {
    if (this.state.perPage * this.state.page < r.data.total) {
      return this.setState({ showLoadBtn: true });
    }

    return this.setState({ showLoadBtn: false });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  galleryClick = id => {
    this.toggleModal();
    const itemIMG = this.state.items.find(item => {
      return item.id === id;
    });
    this.setState({ largeImg: itemIMG });
  };

  render() {
    const {query, page, items, status, showLoadBtn, showModal, largeImg} = this.state;
    return (
      <>
        <Searchbar onSubmit={this.formSubmitHandler} />

        <ImageGallery
          query={query}
          page={page}
          items={items}
          onClick={this.galleryClick}
        />

        {status === 'pending' && (
          <Loader/>
        )}

        {showLoadBtn && status !== 'pending' && (
          <Button onClick={this.loadMore} />
        )}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img
              src={largeImg.largeImageURL}
              alt={largeImg.tags}
            ></img>
          </Modal>)}

          {status === "rejected" && <h1>Empty request</h1>}
      </>
    );
  }
}

export default App;
