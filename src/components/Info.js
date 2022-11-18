import React, {Component} from "react";
import uniqid from "uniqid";
import Layout from "./Layout";
import Form from "./Form";

class Info extends Component {
    constructor(props) {
        super(props);

        this.state = {
            info: [
                {name: "name", text: "", id: uniqid()},
                {name: "email", text: "", id: uniqid()},
                {name: "phone", text: "", id: uniqid()},
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
                        <Layout fields={this.state.info} />
                    </fieldset>
                </div>

            )
        }
    }
}

export default Info;