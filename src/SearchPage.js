import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchPage extends Component {
	state = {
		query: '',
		search: []
	}

	updateQuery = (q) => {
		this.setState({
			query: q
		})
		this.getBooksFromSearch(q);
	}

	getBooksFromSearch = (q) => {
		if (q) {
			BooksAPI.search(q).then((search) => {
				if (!search.error)
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
	              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
	              <div className="search-books-input-wrapper">
	                {/* ...  */
	                }
	                <input 
	                	type="text"
	                	placeholder="Search by title or author"
	                	value={this.state.query}
	                	onChange={(e) => this.updateQuery(e.target.value)}
	                />

	              </div>
	            </div>
	            <div className="search-books-results">
	              <ol className="books-grid">
	              	{this.state.search.map(search => (
	              		<li key={search.id}>
	              			<Book book={search} />
	              		</li>
	              	))}
	              </ol>
	            </div>
	        </div>

		)
	}
}

export default SearchPage;