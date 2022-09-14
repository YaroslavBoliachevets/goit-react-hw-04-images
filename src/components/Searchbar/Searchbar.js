import React, { Component } from 'react';
import {
  Searcher,
  SearchForm,
  SearchFromButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.module';

import { MdSearch } from 'react-icons/md';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({query : e.currentTarget.value})
  }

  onSubmit = e =>{
    e.preventDefault();
    if (this.state.query.trim() === '') {return}
    
    this.props.onSubmit(this.state.query.toLowerCase());
    this.reset();
  }

  reset() {
    this.setState({query: ''});
  }

  render() {
    return (
      <>
        <Searcher>
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
              value={this.state.query}
            />
          </SearchForm>
        </Searcher>
      </>
    );
  }
}

export default Searchbar;
