import React from 'react';
import styles from './voting.css';

class Voting extends React.Component {
    constructor() {
        super()
        this.state = {
            languages : [
                {name: "Php", votes: 0},
                {name: "Python", votes: 0},
                {name: "JavaSript", votes: 0},
                {name: "Java", votes: 0}
            ]}
    }
  
        incrementVote = (i)=>{
            i.votes++;
            this.setState({})
        }
    

        render () {
            const {languages} = this.state
            return(
            <>
            <h1>Vote your language</h1>
            <ul>
            {
             languages.map(language => (
                <li>{language.votes} {language.name}  <a href="#" onClick={() => this.incrementVote(language)}>Click Here</a></li>
            ))}
            </ul>
            </>
        )
     }
    }
     export default Voting