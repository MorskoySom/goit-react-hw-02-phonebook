import React from "react";
import { Component } from "react";

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