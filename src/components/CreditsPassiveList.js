import React, { Component } from 'react'
import { connect } from 'react-redux'
import CreditsPassiveItem from './CreditsPassiveItem'
 
class CreditsActiveList extends Component {
    render() {
        const { nickname } = this.props

        return(
            <div className="credits_passive_list">
                {

                }
                <CreditsPassiveItem />
            </div>
        );
    }
}

export default connect(state => ({
})
)(CreditsActiveList)
