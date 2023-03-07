import React from 'react';
import BuggyCounter from './component/BuggyCounter';
import ErrorBoundary from './component/ErrorBoundary'
import Color from './component/Color';
import './App.css';

class Child extends React.Component { 
  componentWillUnmount() {
      alert('The component name Header is about to be unmounted');
  }

  render() {
      return <h1> Hello World !</h1>;
  }
}

class App extends React.Component {
  state = { show: true };

  delete = () => {
    this.setState({ show: false });
  };

  render(){
    let comp;
    if (this.state.show) {
      comp = <Child />;
    }

    return (
      <div>
      <p>
        <b>
          Click on the numbers to increase the counters.
          <br />
          The counter is programmed to throw when it reaches 5. This simulates a JavaScript error in a component.
        </b>
      </p>
      <hr />
      <ErrorBoundary>
        <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
      <hr />
        <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <hr />
      <p>This counter is not inside of boundary. So if crashes, all other components are deleted.</p>
      <BuggyCounter />

      <h1>Exercise 2</h1>
      <Color/>

      <h1>Exercise 3</h1>
      <div>
        {comp}
        <button onClick={this.delete}>Delete header
        </button>
      </div>
    </div>
    );
  }

}

export default App;
