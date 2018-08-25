import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage'
import MainPage from './MainPage'

class BooksApp extends Component {
  state = {
    books: [],
    query: '',
    search: []
  }

  componentDidMount() { // called after component has been rendered => filling in data
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  moveBook = (book, shelf) => { // why this syntax?
    BooksAPI.update(book, shelf);
  }

  render() {
    return (
      <div className="app">
        <MainPage
          books={this.state.books} // => props property
          moveBook={this.moveBook} // passing method to MainPage
        />
      </div>
    )
  }
}

export default BooksApp
