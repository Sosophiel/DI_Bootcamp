import React from 'react';



class WithJSX extends React.Component {

    render() {
      const myelement = <h1>I Love JSX!</h1>;
      const sum = 5 + 5
        return (
          <><h1>{myelement}</h1>
          <h2>React is {sum} times better with JSX</h2>
          </>
          
        );
      }

}


export default WithJSX
