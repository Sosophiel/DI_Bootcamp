import React from 'react';

const clickMe = () => alert('I was clicked');

class Events extends React.Component {
    constructor(props){
        super(props)
        this.state = {size:'small'}
    }

    render() {
        return (
            <>
            <div> 
            <button type="button" onClick={clickMe}>Click me</button>
            </div>
            </>
    )
}
}

export default Events