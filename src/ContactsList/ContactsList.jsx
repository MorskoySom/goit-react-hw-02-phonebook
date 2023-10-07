import React from "react";
import { Element } from "Element/Element";

export const ContactList = ({ persons, toDelete }) => {
    return (<ul>{persons.map(person => (
        <li key={person.id}>
            <Element info={person} toDelete={toDelete} />
        </li>
    ))}
    </ul>)
}