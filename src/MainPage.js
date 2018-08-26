import React, { Component } from 'react';
import Shelf from './Shelf'
import Book from './Book'
import { Link } from 'react-router-dom'

class MainPage extends Component {
	render() { // {/* new array which suits following condition (i.e., is on shelf); prop coming from App.js, forwarded to Book.js */}
		return (

			<div className="list-books">
	            <div className="list-books-title">
	              <h1>MyReads</h1>
	            </div>
	            <div className="list-books-content">
	              <div>
	                <div className="bookshelf">
	                  <Shelf shelf="currentlyReading" moveBook={this.props.moveBook} />
	                </div>
	                <div className="bookshelf">
	                  <Shelf shelf="wantToRead" moveBook={this.props.moveBook} />
	                </div>
	                <div className="bookshelf">
	                  <h2 className="bookshelf-title">Read</h2>
	                  <div className="bookshelf-books">
	                    <ol className="books-grid">
	                      {
	                      	this.props.books.filter( 
								book => book.shelf === 'read'
	                      	)
	                      	.map( 
								book => (
									<li key={book.id}> <Book book={book} moveBook={this.props.moveBook} /> </li>
								)
	                      	)
	                      }
	                    </ol>
	                  </div>
	                </div>
	              </div>
	            </div>
	            <div className="open-search">
	              <Link to="/add">Add a book</Link> {/* Link handler imported from react-router-dom */}
	            </div>
	          </div>

		)
	}
}

export default MainPage;