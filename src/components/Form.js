import React from 'react';


const Form = (props) => {
    // console.log(props)
    const {handler, fields} = props;

    const headerStyle = {
        textTransform: 'capitalize',
    }

    const containerStyle = {
        display: 'grid',
        padding: '20px',
        gap: '20px'
    }

    const divStyle = {
        display: 'grid',
        gap: '10px'
    }

    return(
        <div style={containerStyle}>
            {fields.map((field) => {
                if (field.name.includes("Date")) {
                    return (
                        <div style={divStyle} key={field.id}>
                            <label style={headerStyle} htmlFor={field.name}>{field.name.slice(0,-4) + " " + field.name.slice(-4)}</label>
                            <input type="date" id={field.name} onChange={handler} value={field.text}/>
                        </div>

                    );
                } else {
                    return (
                        <div style={divStyle} key={field.id}>
                            <label style={headerStyle} htmlFor={field.name}>{field.name}</label>
                            <input type="text" id={field.name} onChange={handler} value={field.text}/>
                        </div>
                    )

                }
            })}
        </div>
    )
}

export default Form;