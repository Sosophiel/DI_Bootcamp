import React from 'react';


class Color extends React.Component {
    constructor(){
        super()
        this.state = {favoriteColor:'Red'};
    }

    componentDidMount() {
        setTimeout(() => this.setState({favoriteColor:'Yellow'}),3000);
    }

    shouldComponentUpdate() {
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
       // document.getElementById('color').innerHTML = 'Before the update, the favorite was ' + prevState.favoriteColor;
        return prevState.favoriteColor
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(snapshot !== null) {
            document.getElementById('color').innerHTML = 'Before the update, the favorite was ' + snapshot + '<br>The updated favorite color is ' + this.state.favoriteColor;
        }
    }

    changeColor = () => {
        this.setState({favoriteColor:'Blue'});
    }

    render() {
        return (
            <>
            <h1> My favorite color is {this.state.favoriteColor}</h1>
            <button type="button" onClick={this.changeColor}>Change color</button>

            <div id="color"></div>
            </>
        )
    }
    
}


export default Color