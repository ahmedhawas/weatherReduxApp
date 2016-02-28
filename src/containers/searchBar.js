import React, {Component} from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};

    this._handleInputChange = this._handleInputChange.bind(this);
  }

  _handleInputChange(event) {
    this.setState({term: event.target.value});
  }

  _handleFormSubmit(event) {
    event.preventDefault();
    // fetch weather data
  }

  render() {
    return (
      <form onSubmit={this._handleFormSubmit} className="input-group">
        <input
          placeholder="Get a 5 day forecast for your favourite cities"
          value={this.state.term}
          onChange={this._handleInputChange}/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Search
          </button>
        </span>
      </form>
    )
  }
}
