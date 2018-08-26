import React, {Component} from 'react';

class ShelfChanger extends Component {
	render() {
		return (
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
		)
	}
}

export default ShelfChanger;