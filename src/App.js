// import logo from './logo.svg';
// import lego from './jquery.png';
import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />

//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>

//       </header>

//     </div>



//   );
// }


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }

  }

  increment = () => {
    this.setState({ count: this.state.count + 1 })
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <div class="d-flex justify-content-center">

      
      <div className=" flex-column mt-5 ">
        

          <button type="button" class="btn btn-outline-primary  rounded-0"
            onClick={this.increment}>+1</button>


          <button type="button" class="btn btn-outline-primary  rounded-0 btn-spacing" 
            
            onClick={this.decrement}>-1</button>


         
      
        <div class="h4 text-white bg-secondary text-center py-1 mt-2 state-width ">
         {this.state.count}</div>
      </div>
      </div>
    )
  }
}

export default App;
