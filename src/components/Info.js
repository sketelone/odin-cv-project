import React, {Component} from "react";

class Info extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: {text: ""},
            email: {text: ""},
            phone: {text: ""},
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
        } else if (e.target.id === "email") {
            this.setState({
                email: {
                text: e.target.value,
                }
            });
        } else if (e.target.id === "phone") {
            this.setState({
                phone: {
                text: e.target.value,
                }
            });
        }
        // console.log(this.state)
      };

    render() {
        const {name, email, phone} = this.state;

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
                            <legend>General Information</legend>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" onChange={this.handleChange} value={name.text} placeholder={name.text}/>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={this.handleChange} value={email.text} placeholder={email.text}/>
                            <label htmlFor="phone">Phone Number</label>
                            <input type="text" id="phone" onChange={this.handleChange} value={phone.text} placeholder={phone.text}/>
                        </fieldset>
                    </form>
                </div>
            )
        } else {
            // console.log(this.props.edit);
            return (
                <div style={formStyle}>
                    <fieldset style={fieldStyle}>
                        <legend>General Information</legend>
                        <h4>Name</h4>
                        <p>{name.text}</p>
                        <h4>Email</h4>
                        <p>{email.text}</p>
                        <h4>Phone Number</h4>
                        <p>{phone.text}</p>
                    </fieldset>
                </div>

            )
        }
    }
}

export default Info;