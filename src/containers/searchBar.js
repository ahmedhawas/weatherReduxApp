import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};

    this._handleInputChange = this._handleInputChange.bind(this);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  _handleInputChange(event) {
    this.setState({term: event.target.value});
  }

  _handleFormSubmit(event) {
    event.preventDefault();
    // fetch weather data
    const searchTerms = this.state.term.split(",");
    if (searchTerms.length > 1) {
      this.props.fetchWeather(searchTerms[0], searchTerms[1]);
    } else {
      this.props.fetchWeather(searchTerms[0], '');
    }
    this.setState({term: ''});
  }

  render() {
    return (
      <form onSubmit={this._handleFormSubmit} className="input-group">
        <input
          className="form-control"
          placeholder="Get a 5 day forecast for your favourite cities (city, country)"
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
