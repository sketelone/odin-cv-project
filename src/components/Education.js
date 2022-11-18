import React, {Component} from "react";

class Education extends Component {
    constructor(props) {
        super(props);

        this.state = {
            school: {text: ""},
            title: {text: ""},
            date: {text: ""},
          };
    }

    handleChange = (e) => {
        // console.log(e)
        if (e.target.id === "school") {
            this.setState({
                school: {
                text: e.target.value,
                }
            });
        } else if (e.target.id === "title") {
            this.setState({
                title: {
                text: e.target.value,
                }
          });
        } else if (e.target.id === "date") {
            this.setState({
                date: {
                text: e.target.value,
                }
            });
        }
        // console.log(this.state)
      };

    render() {
        const {school, title, date} = this.state;

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
                            <legend>Education</legend>
                            <label htmlFor="school">School Name</label>
                            <input type="text" id="school" onChange={this.handleChange} value={school.text}/>
                            <label htmlFor="title">Major/Degree</label>
                            <input type="text" id="title" onChange={this.handleChange} value={title.text} />
                            <label htmlFor="date">Graduation Year</label>
                            <input type="text" id="date" onChange={this.handleChange} value={date.text} />
                        </fieldset>
                    </form>
                </div>
            )
        } else {
            // console.log(this.props.edit);
            return (
                <div style={formStyle}>
                    <fieldset style={fieldStyle}>
                        <legend>Education</legend>
                        <h4>School Name</h4>
                        <p>{school.text}</p>
                        <h4>Major/Degree</h4>
                        <p>{title.text}</p>
                        <h4>Graduation Year</h4>
                        <p>{date.text}</p>
                    </fieldset>
                </div>

            )
        }
    }
}

export default Education;