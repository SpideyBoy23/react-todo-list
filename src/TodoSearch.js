import React from 'react';
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {

    const onSerachValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return(
        <input 
            placeholder="Search TODO's..."
            onChange={onSerachValueChange}
            value={searchValue}
        >
        </input>
    ); 
};

export { TodoSearch };