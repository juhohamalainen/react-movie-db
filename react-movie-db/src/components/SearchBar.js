import React, { useState } from "react";

function SearchBar(props) {
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.searchMovies(title);
    setTitle("");
  };

  return (
    <div className="row">
      <div className="col-md-8 offset-md-2">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search movies..."
              value={title}
              onChange={handleChange}
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
