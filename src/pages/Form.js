import React from "react";

export default function Form() {
    return (
        <form>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <label>
                Email:
                <input type="text" email="email"/>
            </label>
            <label>
                Message:
                <input type="text" message="message"/>
            </label>
        </form>
    );
}