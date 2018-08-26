import React, { Component } from 'react';
import Shelf from './Shelf'
import { Link } from 'react-router-dom'

class MainPage extends Component {
	render() { // {/* new array which suits following condition (i.e., is on shelf); prop coming from App.js, forwarded to Book.js */}
		return (

			<div className="list-books">
	            <div className="list-books-title">
	              <h1>My Books</h1>
	            </div>
	            <div className="list-books-content">
	              <div>
	                  <Shelf shelf="currentlyReading" books={this.props.books} moveBook={this.props.moveBook} />
	                
	                  <Shelf shelf="wantToRead" books={this.props.books} moveBook={this.props.moveBook} />
	                
	                  <Shelf shelf="read" books={this.props.books} moveBook={this.props.moveBook} />
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