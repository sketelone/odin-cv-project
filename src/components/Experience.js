import React, {Component} from "react";

class Experience extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: {text: ""},
            position: {text: ""},
            tasks: {text: ""},
            dateBegun: {text: ""},
            dateEnd: {text: ""},
          };
    }

    handleChange = (e) => {
        // console.log(e)
        if (e.target.id === "name") {
            this.setState({
                name: {
                text: e.target.value,
                }
            });
        } else if (e.target.id === "position") {
            this.setState({
                position: {
                text: e.target.value,
                }
            });
        } else if (e.target.id === "tasks") {
            this.setState({
                tasks: {
                text: e.target.value,
                }
            });
        } else if (e.target.id === "dateBegun") {
            this.setState({
                dateBegun: {
                text: e.target.value,
                }
            });
            } else if (e.target.id === "dateEnd") {
            this.setState({
                dateEnd: {
                text: e.target.value,
            }
            });
        }
        // console.log(this.state)
      };

    render() {
        const {name, position, tasks, dateBegun, dateEnd} = this.state;

        const formStyle = {
            display: 'grid',
            padding: '30px',
            boxShadow: '0 3px 3px rgba(0,0,0,0.2)'
        }

        const fieldStyle = {
            display: 'grid',
            width: '400px',
            padding: '30px',
            gap: '20px'
        }

        // console.log(this.props.edit)
        if(this.props.edit) {
            return (
                <div>
                    <form style={formStyle}>
                        <fieldset style={fieldStyle}>
                            <legend>Experience</legend>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" onChange={this.handleChange} value={name.text} />
                            <label htmlFor="position">Position</label>
                            <input type="position" id="position" onChange={this.handleChange} value={position.text} />
                            <label htmlFor="tasks">Tasks</label>
                            <input type="text" id="tasks" onChange={this.handleChange} value={tasks.text} />
                            <label htmlFor="dateBegun">From</label>
                            <input type="date" id="dateBegun" onChange={this.handleChange} value={dateBegun.text} />
                            <label htmlFor="dateEnd">To</label>
                            <input type="date" id="dateEnd" onChange={this.handleChange} value={dateEnd.text} />
                        </fieldset>
                    </form>
                </div>
            )
        } else {
            // console.log(this.props.edit);
            return (
                <div style={formStyle}>
                    <fieldset style={fieldStyle}>
                        <legend>Experience</legend>
                        <h4>Name</h4>
                        <p>{name.text}</p>
                        <h4>Position</h4>
                        <p>{position.text}</p>
                        <h4>Description</h4>
                        <p>{tasks.text}</p>
                    </fieldset>
                </div>

            )
        }
    }
}

export default Experience;