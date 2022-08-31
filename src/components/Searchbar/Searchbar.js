import React, { Component } from 'react';
import {
  Searchbar,
  SearchForm,
  SearchFromButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.module';

import { MdSearch } from 'react-icons/md';

class Searcher extends Component {
  state = {
    request: '',
  };

  handleChange = e => {
    this.setState({request : e.currentTarget.value})
  }

  onSubmit = e =>{
    e.preventDefault();
    if (this.state.request.trim() === '') {return}
    this.props.onSubmit(this.state.request.toLowerCase());
    this.reset();
  }

  reset() {
    this.setState({request: ''});
  }

  render() {
    return (
      <>
        <Searchbar>
          <SearchForm onSubmit={this.onSubmit}>
            <SearchFromButton type="submit">
              <MdSearch size={24} />
              <SearchFormButtonLabel>Search</SearchFormButtonLabel>
            </SearchFromButton>

            <SearchFormInput
              type="text"
              autocomplete="off"
              placeholder="Search images and photos"
              onChange={this.handleChange}
              value={this.state.request}
            />
          </SearchForm>
        </Searchbar>
      </>
    );
  }
}

export default Searcher;
