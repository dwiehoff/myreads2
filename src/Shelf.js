import React, { Component } from 'react';
import Book from './Book'

class Shelf extends Component {
	render() {
		let shelfName = ((shelf) => {
			switch (shelf) {
				case 'currentlyReading' : return 'Currently Reading'; break;
				case 'wantToRead' : return 'Want to Read'; break;
				case 'read' : return 'Finished Reading'; break;
				default: return '';
			}
		})(this.props.shelf);
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title"> { shelfName } </h2>
	            <div className="bookshelf-books">
	                <ol className="books-grid">
	                  {
	                  	this.props.books.filter( 
							book => book.shelf === this.props.shelf
	                  	)
	                  	.map(
							book => (
								<li key={book.id}>
									<Book book={book} shelf={this.props.shelf} moveBook={this.props.moveBook} />
								</li>
							)
	                  	)
	                  }
	                </ol>
	           	</div>
	        </div>
		)
	}
}

export default Shelf;