import React, { Component } from 'react';

class Book extends Component {
	render() {
		return (
			<div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${(this.props.book.imageLinks) ? this.props.book.imageLinks.smallThumbnail : ''}")`}}></div> {/* when a thumbnail is available, it is displayed */}
                <div className="book-shelf-changer">
                  <select value={(this.props.shelf) ? (this.props.shelf) : ((this.props.book.shelf) ? (this.props.book.shelf) : 'none')} onChange={(e) => this.props.moveBook(
					this.props.book, e.target.value
                  )}> {/* defined in App.js, passed through MainPage.js; fn call to prevent immediate running; sets shelves both for books searched and on shelves */}
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">-- None --</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{this.props.book.title}</div>
              <div className="book-authors">{(this.props.book.authors) ? (this.props.book.authors.join('; ')) : ''}</div> {/* when authors available, displays them separated by semicolon */}
            </div>
		)
	}
}

export default Book;