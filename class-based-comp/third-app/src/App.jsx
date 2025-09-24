import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = { displayBio: false };
    this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  }

  toggleDisplayBio() {
    this.setState({ displayBio: !this.state.displayBio });
  }

  render() {
    return (
      <div>
        <h1>Welcome to ReactJS</h1>
        {this.state.displayBio ? (
          <div>
            <h3>React is one of the best JavaScript Libraries</h3>
            <button onClick={this.toggleDisplayBio}>Show Less</button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}>Read More</button>
          </div>
        )}
      </div>
    );
  }
}

export default App;