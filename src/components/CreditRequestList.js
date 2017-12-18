import React, { Component } from 'react'
import { connect } from 'react-redux'

import CreditsRequestItem from './CreditRequestItem'

import { getRequests } from '../actions/requests/requests'
import { request } from 'http';
 
class CreditRequestList extends Component {

    componentDidMount() {
        this.props.dispatch(getRequests(this.props.nickname))
    }

    render() {
        const { nickname, requests } = this.props
        console.log('requests', requests)
        return(
            <div className="credits_request_list">
                {requests.length > 0 ?
                    <table className="requests_table">
                        <thead>
                            <tr>
                                <th>Who:</th>
                                <th>How much:</th>
                                <th>Accept ?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requests.map((req, i) => {
                                if(!req.active) {
                                    return <CreditsRequestItem 
                                                key={i}
                                                user={req.user}
                                                quantity={req.quantity}
                                                creditorID={req.creditor}
                                            />
                                }
                            })}
                        </tbody>
                    </table>
                    :
                    ''
                }
            </div>
        );
    }
}

export default connect(state => ({
    nickname: localStorage.getItem('user'),
    requests: state.request.requests
})
)(CreditRequestList)

