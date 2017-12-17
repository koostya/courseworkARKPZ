import React, { Component } from 'react';
import { connect } from 'react-redux';

class NotFound extends Component {
    
    render() {
        return (
            <div className="notfound">
                <div className="inner">
                    404
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

export default connect(
    mapStateToProps
)(NotFound)