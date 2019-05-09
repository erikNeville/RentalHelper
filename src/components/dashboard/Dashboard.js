import React, { Component } from 'react'
import RentalList from '../rentals/RentalList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component {
    render() {

        const { rentals } = this.props;

        return (
            <div className="dashboard container">
                <h4>Rental List</h4>
                <div className="row">
                    <div className="col s12 m8">
                        <RentalList rentals={rentals} />
                    </div>
                    <div className="col s12 m3 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        rentals: state.firestore.ordered.rentals
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'rentals' }
    ])
)(Dashboard)