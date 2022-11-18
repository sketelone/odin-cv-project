import React, {Component} from "react";
import Info from "./components/Info";
import Education from "./components/Education";
import Experience from "./components/Experience";

class App extends Component {
  constructor() {
    super();
    this.state = {
      edit: true
    };
  }

  onEdit = (e) => {
    e.preventDefault();
    this.setState({
      edit: true
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      edit: false
    })
  };

  render() {

    const {edit} = this.state;

    const appStyle = {
      fontFamily: 'Arial, Helvetica, sans-serif',
      padding: '20px',
      display: 'grid',
      justifyItems: 'center',
      gap: '20px',
    }

    const buttonStyle = {
      background: 'transparent',
      width: '200px',
      fontSize: '24px',
      fontWeight: 'bold',

    }

    return (
      <div className="App" style={appStyle}>
        <Info edit={edit}/>
        <Education edit={edit}/>
        <Experience edit={edit}/>
        <button style={buttonStyle} onClick={this.onEdit}>
            EDIT
        </button>        
        <button style={buttonStyle} onClick={this.onSubmit}>
            SUBMIT
        </button>
      </div>
    );
  }
}

export default App;
