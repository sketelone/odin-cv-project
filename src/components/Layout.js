import React from 'react';


const Layout = (props) => {
    // console.log(props)
    const {fields} = props;

    const headerStyle = {
        textTransform: 'capitalize',
    }

    return(
        <div>
            {fields.map((field) => {
                return (
                    <div key={field.id}>
                        <h4 style={headerStyle} >{field.name}</h4>
                        <p >{field.text}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Layout;