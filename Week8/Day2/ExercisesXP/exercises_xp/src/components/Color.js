import React from 'react';


class Color extends React.Component {
    constructor(){
        super()
        this.state = {favoriteColor:'Red'};
    }

    componentDidMount() {
        setTimeout(() => this.setState({favoriteColor:'Yellow'}
        ),3000);
    }

    changeColor = () => {
        this.setState({favoriteColor:'Blue'}
        
        );

    }
        render() {
        return (
            <>
            <h1> My favorite color is {this.state.favoriteColor}</h1>
            <button type="button" onClick={this.changeColor}>Change color</button>
            </>
            )
    }
    
}


export default Color