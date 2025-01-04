import React from "react";

const ErrorMessage = (props) => {
    const {mode} = props;

    return (
        <span className="ErrorMessage">
            Please select a {mode} mode!
        </span>
    );
}

export default ErrorMessage;