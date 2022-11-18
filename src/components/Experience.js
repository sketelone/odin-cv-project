import React, {Component} from "react";
import uniqid from "uniqid";
import Layout from "./Layout";
import Form from "./Form";

class Experience extends Component {
    constructor(props) {
        super(props);

        this.state = {
            info: [
                {name: "company", text: "", id: uniqid()},
                {name: "position", text: "", id: uniqid()},
                {name: "tasks", text: "", id: uniqid()},
                {name: "startDate", text: "", id: uniqid()},
                {name: "endDate", text: "", id: uniqid()},
            ]
        };
    }

    handleChange = (e) => {
        const nextInfo = this.state.info.map(item => {
            if (e.target.id === item.name) {
                return {
                    ...item,
                    text: e.target.value,
                };
            } else {
                return item;
            };
        });
        // console.log(nextInfo)
        this.setState({
            info: nextInfo
        });
    };

    render() {
        const info = this.state.info;

    const formStyle = {
        display: 'grid',
        padding: '30px',
        boxShadow: '0 3px 3px rgba(0,0,0,0.2)'
    }

    const fieldStyle = {
        display: 'grid',
        width: '400px',
        padding: '30px'
    }

    // console.log(this.props.edit)
    if(this.props.edit) {
        return (
            <div>
                <form style={formStyle}>
                    <fieldset style={fieldStyle}>
                        <legend>Experience</legend>
                        <Form handler={this.handleChange} fields={this.state.info}/>
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
                    <Layout fields={this.state.info} />
                </fieldset>
            </div>

        )
    }
}
}

export default Experience;