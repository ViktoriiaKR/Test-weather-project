import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchData } from './../../../services/store/actions/index.js';
import './style.scss';

const mapStateToProps = state => {
  return {
      state
  };
};

const mapDispatchToProps = {
    fetchData
};

const SearchCity = (props) => {
    const [ searchVal, setSearchVal] = useState('');

    function searchByInput(e) {
        let value = e.target.value;
        setSearchVal(value);
    }; 

    const handleSearch = () => {
        props.fetchData(searchVal);
    };

    return (
            <div className="search-box">
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter the name of the city..."
                        onChange={searchByInput}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchCity);