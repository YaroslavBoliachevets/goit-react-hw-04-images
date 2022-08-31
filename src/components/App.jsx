import React, {Component} from 'react';
import Searcher from './Searchbar';
import Gallery from './ImageGallery/ImageGallery';



class App extends Component {
  state = {
    request: '',
    page: 1,
  }

  formSubmitHandler = request => {
    this.setState({request});
  }

  render() {
    return (
      <>
        <Searcher onSubmit={this.formSubmitHandler}/>
        <Gallery request={this.state.request}/>
      </>
    );
  }
  
};

export default App;
