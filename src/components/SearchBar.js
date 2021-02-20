import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  change = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onTermSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <form onSubmit={this.onFormSubmit}>
          <div className="ui fluid icon input">
            <input
              type="text"
              placeholder="Search ..."
              value={this.state.term}
              onChange={this.change}
            />
            <i className="search icon"></i>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
