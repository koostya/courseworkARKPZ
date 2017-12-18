import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hideCreditModal, confirmCreditModal } from '../actions/modal/index'
 
class CreditModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sum: 0
        }
    }

    inputHandler = (e) => {
        this.setState({
            sum: e.target.value
        })
    }

    render() {
        const { user, creditorID } = this.props

        return(
            <div className="credit_modal_wrap">
                <div 
                    className="credit_modal_close_bg"
                    onClick={() => this.props.dispatch(hideCreditModal())}
                >
                </div>
                <div className="credit_modal_inner">
                    <div className="title">
                        How much do you need ?
                    </div>
                    <input
                        type="number"
                        className="credit_modal_input"
                        onChange={(e) => this.inputHandler(e)}
                        value={this.state.sum}
                    />
                    <button
                        className="confirm_modal_but"
                        onClick={() => this.props.dispatch(confirmCreditModal(user, creditorID, this.state.sum))}
                    >
                        Confirm
                    </button>
                </div>
            </div>
        );
    }
}

export default connect(state => ({
    user: localStorage.getItem('user'),
    creditorID: state.modal.creditorID
})
)(CreditModal)
