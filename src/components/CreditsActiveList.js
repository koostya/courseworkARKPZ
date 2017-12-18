import React, { Component } from 'react'
import { connect } from 'react-redux'
import CreditsActiveItem from './CreditsActiveItem'

import { getRequestsActive } from '../actions/requests/requests'
 
class CreditsActiveList extends Component {

    componentDidMount() {
        this.props.dispatch(getRequestsActive(this.props.nickname))
    }

    render() {
        const { nickname, active } = this.props
        return(
            <div className="credits_active_list">
                <table className="requests_table">
                    <thead>
                        <tr>
                            <th>Who:</th>
                            <th>How much:</th>
                            <th>Pay:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {active.map((req, i) => {
                            return <CreditsActiveItem 
                                        key={i}
                                        user={req.user}
                                        quantity={req.quantity}
                                        id={req.id}
                                    />
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default connect(state => ({
    nickname: localStorage.getItem('user'),
    active: state.request.active
})
)(CreditsActiveList)
