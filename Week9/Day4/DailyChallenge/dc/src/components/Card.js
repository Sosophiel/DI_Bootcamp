import React from 'react'
import './Card.css'

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title : props.title,
            icon : props.icon,
            value: props.value
        }
    }

    render() {
        return (
            <div className='card'>
                <p>{this.state.title}</p>

                <h1>{this.state.value}</h1>
            </div>
        )
    }
}
export default Card