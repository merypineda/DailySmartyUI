import React, { Component } from 'react';

import { connect } from 'react-redux'
// import * as actions from '../actions';

class ResultPosts extends Component {
    render() {
        return (
            <ul className="result-posts">
                <div className="results-posts__wrapper">
                    <ul className="results-posts__posts">
                        Result Go Here

                    </ul>
                </div>

            </ul>
        );
    }
}

function mapStateToProps(state) {
    return { state }
}

export default connect(mapStateToProps)(ResultPosts);