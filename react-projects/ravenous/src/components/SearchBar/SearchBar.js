import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // refers to the search term located in the search input
            term: '',
            // referes to the location to search near the location input
            location: '',
            sortBy: 'best_match'
        };

        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li
                className={this.getSortByClass(sortByOptionValue)}
                // this will allow us to both bind to the current value of this
                // but also bind the current sortByOptionValue as the first
                // argument to the method call, ensuring the method is called
                // with the appropriate value when clicked
                onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
                key={sortByOptionValue}
            >
                {sortByOption}
            </li>;
        });
    }

    /**
     * Returns the current CSS class for a sorting option. This method will
     * useful in providing visual feedback to the users
     * 
     * @param {String} sortByOption
     * @return {String}
     */
    getSortByClass(sortByOption) {
        if (this.state.sortBy === sortByOption) {
            return 'active';
        } return '';
    }

    handleSortByChange(sortByOption) {
        this.setState({
            sortBy: sortByOption
        });
    }

    handleTermChange(event) {
        this.setState({
            term: event.target.value
        });
    }

    handleLocationChange(event) {
        this.setState({
            location: event.target.value
        });
    }

    handleSearch(event) {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        event.preventDefault();
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>

                <div className="SearchBar-fields">
                    <input type="text" placeholder="Search Businesses" onChange={this.handleTermChange} />
                    <input type="text" placeholder="Where?" onChange={this.handleLocationChange} />
                </div>

                <div className="SearchBar-submit">
                    <a href="#" onClick={this.handleSearch}>Let's Go</a>
                </div>
            </div>
        );
    }
}

export default SearchBar;