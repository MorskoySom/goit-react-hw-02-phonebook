import React from "react";
import { Filt } from "./Filter.styled";

export const Filter = ({ filterName, toSearch }) => {
    return <Filt>Filter
        <input
            type="text"
            value={filterName}
            placeholder="name"
            onChange={evt => { toSearch(evt.target.value) }}
        />
    </Filt>
}   