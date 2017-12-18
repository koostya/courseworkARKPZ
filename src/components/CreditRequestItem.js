import React, { Component } from 'react'
import { connect } from 'react-redux'
import { acceptRequest } from '../actions/requests/requests'
 
class CreditsRequestItem extends Component {
    render() {
        return(
            <tr>
                <td>{this.props.user}</td>
                <td>{this.props.quantity}</td>
                <td className="accept_but_wrap">
                    <button
                        onClick={() => this.props.dispatch(acceptRequest(this.props.user, this.props.creditorID))}
                    >
                        Yes
                    </button>
                </td>
            </tr>
        );
    }
}

export default connect(state => ({
})
)(CreditsRequestItem)
