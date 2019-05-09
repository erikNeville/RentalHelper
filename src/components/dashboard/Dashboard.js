import React, { Component } from 'react'
import RentalList from '../rentals/RentalList'
import Notifications from './Notifications'
import { connect } from 'react-redux'

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
    console.log(state)
    return {
        rentals: state.rental.rentals
    }
}

export default connect(mapStateToProps, null)(Dashboard)