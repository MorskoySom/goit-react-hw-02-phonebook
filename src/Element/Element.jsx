import React from "react";

export const Element = ({ info: { name, number, id }, toDelete }) => {
    return (<div>
        <p>{name} : {number}</p>
        <button onClick={() => toDelete(id)}>Delete</button>
    </div>)
}

