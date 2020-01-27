import React from 'react'
import list from './list'
import { render } from "@testing-library/react"

class cardClass extends React.Component {
    render() {
        return (
        <div class="Card">
            <button type="button">delete</button>
            <h3>{this.props.title}</h3>
            <p>{this.props.content}</p>
        </div>
        )
    }
}

export default cardClass;
    