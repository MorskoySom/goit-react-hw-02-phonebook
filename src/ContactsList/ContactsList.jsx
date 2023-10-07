import React from "react";
import { Element } from "Element/Element";

export const ContactList = ({ persons }) => {
    return (<ul>{persons.map(person => (
        <li key={person.id}>
            <Element info={person} />
        </li>
    ))}
    </ul>)
}