import React from 'react';


 const carinfo = {name: "Ford", model: "Mustang"};

//     class Car extends React.Component {
//         render() {
//     return(
//         <>
//         <h1>This car is a{carinfo.model}</h1>
//         </>
//     )
//     }
// }
 

class Car extends React.Component {
    constructor(){
        super()
        this.state = {color:'Blue'};
    }
        render() {
        return (
            <h1> This car is a {this.state.color} {carinfo.model}</h1>)
    }
    
}



    export default Car


    



