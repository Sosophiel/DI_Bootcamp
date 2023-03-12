import React from 'react';
import QuoteData from './QuoteData';
import './quote.css'

class Quote extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            color: '',
            quote: '',
            author: ''
        }
    }
    changeRandomColor = () => {
        let {colors} = this.props
        let randomColor = colors[Math.floor(Math.random() * colors.length)]
        this.setState({color:randomColor})

    }    

    getRandomQuote = () => {
        let randomQuote = QuoteData[Math.floor(Math.random() * QuoteData.length)]
        this.setState({quote:randomQuote.quote, author:randomQuote.author})
    }

    getQuote = () => { 
        this.changeRandomColor()
        this.getRandomQuote()
    }


    render() {

        return (
            <>  
            <div className='card'> 
                <h1> {this.state.quote} </h1>
                <p> {this.state.author}</p>
                <button onClick={() => this.getQuote()}>New quote</button>
                
            </div>
            </>
        )
    }
}


    export default Quote