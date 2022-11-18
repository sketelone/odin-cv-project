import React from 'react';


const Layout = (props) => {
    // console.log(props)
    const {fields} = props;

    const headerStyle = {
        textTransform: 'capitalize',
        margin: '0px'
    }

    const containerStyle = {
        display: 'grid',
        padding: '20px',
        gap: '20px'
    }

    // const divStyle = {
    //     display: 'grid',
    //     gap: '10px'
    // }

    return(
        <div style={containerStyle}>
            {fields.map((field) => {
                if (field.name.includes("Date")) {
                    return (
                        <div key={field.id}>
                            <h4 style={headerStyle}>{field.name.slice(0,-4) + " " + field.name.slice(-4)}</h4>
                            <p >{field.text}</p>
                        </div>
                    )
                } else {
                    return (
                        <div key={field.id}>
                            <h4 style={headerStyle} >{field.name}</h4>
                            <p >{field.text}</p>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default Layout;