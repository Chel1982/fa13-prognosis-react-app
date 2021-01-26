import React from "react";
import {connect} from "react-redux";
import Register from "./Register";

class RegisterContainer extends React.Component {
    render() {
        return(
            <div>
                <Register/>
            </div>
        )
    }
}

export default connect(null, null)(RegisterContainer);