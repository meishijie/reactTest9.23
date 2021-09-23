import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Name from './Name';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React1212234241',
    };
  }
  handleClick = () => {
    console.log('ok');
  };
  render() {
    return (
      <div>
        <Hello
          initstate={[0, 2]}
          name={this.state.name}
          onClick={this.handleClick}
        />
        <Name initstate={{ name: 'mei', sex: 'male', age: 20 }} />
        <p>Start editing to see some magic happen :)</p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
