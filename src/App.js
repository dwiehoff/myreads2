import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage'
import MainPage from './MainPage'
import { Route } from 'react-router-dom'

class BooksApp extends Component { // accessed both by Main and Search page, holding all books as array
  state = {
    books: []
  }

  getBooks = () => { // gets all books from API and saves them to the state
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  componentDidMount() { // called after component has been rendered => filling in data
    this.getBooks()
  }

  moveBook = (book, shelf) => { // shifts books around shelves and updates view
    BooksAPI.update(book, shelf);

    this.getBooks()
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <MainPage
            books={this.state.books} // => props property
            moveBook={this.moveBook} // passing method to MainPage
          />
        )}/>
        <Route path="/add" render={() => (
          <SearchPage
            moveBook={this.moveBook}
            books={this.state.books}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
