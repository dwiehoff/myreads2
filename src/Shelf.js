import React, { Component } from 'react';

class Shelf extends Component {
	render() {
		let shelfName = '';
		shelfName = switch (this.props.shelf) {
			case 'currentlyReading' : 'Currently Reading'; break;
			case 'wantToRead' : 'Want to Read'; break;
			case 'read' : 'Finished Reading'; break;
			default: 'error';
		}
		return (
			<h2 className="bookshelf-title">{shelfName}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                      {
                      	this.props.books.filter( 
							book => book.shelf === this.props.shelf
                      	)
                      	.map(
							book => (
								<li key={book.id}> <Book book={book} moveBook={this.props.moveBook} /> </li>
							)
                      	)
                      }
                    </ol>
               	</div>
		)
	}
}

export default Shelf;