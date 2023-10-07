import React from "react";
import { Component } from "react";

export class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }
    render() {
        return (
            <div>
                <div>
                    <p>Name</p>
                    <input type="text" name="name" />
                </div>
                <div>
                    <p>Number</p>
                    <input type="tel" name="number" />
                </div>
                <p>
                    <button>Add contact</button>
                </p>
            </div>
        )
    }

}