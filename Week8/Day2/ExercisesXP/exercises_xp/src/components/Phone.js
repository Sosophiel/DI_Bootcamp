import React from 'react';


    class Phone extends React.Component {
        constructor(props){
            super(props)
            this.state = {
                brand: "Samsung",
                model: "Galaxy S20",
                color: "black",
                year: 2020
            }
    }
    changeRandomColor = () => {
        let {colors} = this.props
        let randomColor = colors[Math.floor(Math.random() * colors.length)]
        this.setState({color:randomColor})
    }
        render() {
        return (
            <>
            <h1> My phone is a {this.state.brand} </h1>
            <h3>It is a {this.state.color} {this.state.model} {this.state.year} </h3>
            <button type="button" onClick={this.changeRandomColor}>Change color</button>
            </>
            )
}
}

    export default Phone