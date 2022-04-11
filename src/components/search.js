import React from 'react';
import '/node_modules/font-awesome/css/font-awesome.min.css';

const SearchBarForm = ({searchstr, handleSearch}) => (
    <form method="get">
        <label htmlFor="search_header">
        <span className="visually-hidden">Search Expenses</span>
        </label>
        <input type="text" className="search_btn" id="search_header" placeholder="&#xF002; Search Expenses" name="search"  onKeyUp={handleSearch}/>
       
    </form>
)
export default SearchBarForm;

