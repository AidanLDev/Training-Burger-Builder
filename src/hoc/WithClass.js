import React from 'react'

const withClass = props => (
    <div className={props.class}>
        {props.children}
    </div>
);

export default withClass;