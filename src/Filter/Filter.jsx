import React from "react";

export const Filter = ({ filterName, toSearch }) => {
    return <div>Filter
        <input
            type="text"
            value={filterName}
            placeholder="name"
            onChange={evt => { toSearch(evt.target.value) }}
        />
    </div>

}   