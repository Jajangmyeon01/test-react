import React, { Component } from 'react';
import Navbar from './src/components/navbar.jsx';
import Counters from './src/components/counters.jsx';


class App extends Component {

  state = {  
    counters: [
        {id: 1, value: 4},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0}
    ]
};

constructor () {
  super();
  console.log('App - Constructor');
 
}
componentDidMount(){
  // Ajax Call
  console.log('App - Mounted');
}

handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    console.log(this.state.counters[0]);
    this.setState({counters})
}


handleReset = () => {
    const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;  
    });
    this.setState({ counters }); 
};



handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters});
};

  render() { 
    console.log('App - Rendered');
    return (
      <React.Fragment>
      <Navbar totalCounters ={this.state.counters.filter(c => c.value > 0).length}/>
        <main className="Container">
          <Counters counters = {this.state.counters} onReset = {this.handleReset} onIncrement = {this.handleIncrement} onDelete = {this.handleDelete}/>
        </main>
        </React.Fragment>
    );
  }
}
 

export default App
