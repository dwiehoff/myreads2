import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import { Link } from 'react-router-dom'

class SearchPage extends Component {
	// query holds search query string, search holds results array of books from API
	state = {
		query: '',
		search: []
	}

	updateQuery = (q) => {
		this.setState({
			query: q
		})
		// get books from search when query string is truthy (i.e., not something like '')
		if (q) {
			BooksAPI.search(q).then((search) => {
				if (!search.error) // as long as the search ran successfully
					this.setState({ search }) // search => search: search
				else
					this.setState({ search: [] })
			})
		} else {
			this.setState({ search: [] })
		}
	}	

	render() {

		return (

			<div className="search-books">
	            <div className="search-books-bar">
	              <Link className="close-search" to="/">Close</Link>
	              <div className="search-books-input-wrapper">
	                <input 
	                	type="text"
	                	placeholder="Search by title or author"
	                	value={this.state.query}
	                	onChange={(e) => this.updateQuery(e.target.value)}
	                /> {/* e.target.value = value of element; when changed, handle by updating query */}

	              </div>
	            </div>
	            <div className="search-books-results">
	              <ol className="books-grid">
	              	{this.state.search.map(search => {
						let alreadyAddedBook = this.props.books.filter(
              				book => book.id === search.id
              			); // has the book already been added to one of the shelves? ... then let the Book Component know about it
	              		return (
	              			
		              		<li key={search.id}>
		              			<Book book={search}
		              				  moveBook={this.props.moveBook}
		              				  shelf={(alreadyAddedBook.length > 0) ? (alreadyAddedBook[0].shelf) : null}
		              			/>
		              		</li>
	              	);})}
	              </ol>
	            </div>
	        </div>

		)
	}
}

export default SearchPage;