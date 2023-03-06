import React from 'react';
import styles from './exercise4.css';

class Exercise4 extends React.Component {


    render() {


        const style_header = {
          color: "white",
          backgroundColor: "DodgerBlue",
          padding: "10px",
          fontFamily: "Arial"
        };
        return (
          <>
            <h1 style={{color: style_header.color, backgroundColor:style_header.backgroundColor, padding: style_header.padding, fontFamily:style_header.fontFamily}}>This is a header</h1>
            <p className={styles.para}>
              Paragraph
            </p>
            <a href='https://www.google.fr'>Link</a>
            <form>
              <label>Name</label>
              <input type="text" name="name"/>
              <input type="submit" value="Submit"/>
            </form>

            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt=""/>
            <ul>
              <li>One</li>
              <li>Two</li>
              <li>Three</li>
            </ul>
          </>
        );
      }

}


export default Exercise4
