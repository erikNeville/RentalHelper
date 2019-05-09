import React from 'react'
import RentalSummary from './RentalSummary'

const RentalList = ({rentals}) => {
    console.log(rentals)
    return (
        <div className="section">
            { rentals && rentals.map(rental => {
                return (
                    <RentalSummary rental={rental} />
                )
            })}
        </div>
    )
}

export default RentalList