import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage'
import MainPage from './MainPage'

class BooksApp extends Component {
  state = {
    books: []
  }

  getBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  componentDidMount() { // called after component has been rendered => filling in data
    this.getBooks()
  }

  moveBook = (book, shelf) => { // why this syntax?
    BooksAPI.update(book, shelf);

    this.getBooks()
  }

  render() {
    return (
      <div className="app">
        {/*<MainPage
          books={this.state.books} // => props property
          moveBook={this.moveBook} // passing method to MainPage
        />*/}
        <SearchPage />
      </div>
    )
  }
}

export default BooksApp
