import React, { Component } from 'react'
import { connect } from 'react-redux'

 
class CreditsActiveItem extends Component {
    render() {
        return(
            <tr>
                <td>{this.props.user}</td>
                <td>{this.props.quantity}</td>
                <td className="accept_but_wrap pay_but_wrap">
                    <button
                    >
                        Pay
                    </button>
                </td>
            </tr>
        );
    }
}

export default connect(state => ({
})
)(CreditsActiveItem)
