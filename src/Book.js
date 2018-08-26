import React, { Component } from 'react';
import ShelfChanger from './ShelfChanger'

class Book extends Component {
	render() {
		return (
			<div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${(this.props.book.imageLinks) ? this.props.book.imageLinks.smallThumbnail : ''}")`}}></div> {/* when a thumbnail is available, it is displayed */}
                <ShelfChanger shelf={this.props.shelf} book={this.props.book} moveBook={this.props.moveBook} />
              </div>
              <div className="book-title">{this.props.book.title}</div>
              <div className="book-authors">{(this.props.book.authors) ? (this.props.book.authors.join('; ')) : ''}</div> {/* when authors available, displays them separated by semicolon */}
        </div>
		)
	}
}

export default Book;