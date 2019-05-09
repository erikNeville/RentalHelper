import React from 'react'

const RentalSummary = ({rental}) => {
    return (
        <div className="card">
            <div className="card-content">
                <span className="card-title">{rental.address}</span>
                <p>{rental.contact}</p>
                <p>Move In Date: {rental.move_in}</p>
            </div>
        </div>
    )
}

export default RentalSummary