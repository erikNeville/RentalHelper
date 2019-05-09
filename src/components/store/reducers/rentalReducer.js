const initState = {
    rentals: [
        {"id": 1, "address": "1234 main st", "contact": "123-456-7899", "move_in": "July 1st"},
        {"id": 2, "address": "49 NE 222 St", "contact": "someone@gmail.com", "move_in": "mid June"},
        {"id": 3, "address": "7012 NE 25th Ave", "contact": "person@rentals.com", "move_in": "August 1st"},
        {"id": 4, "address": "2222 South Hill St", "contact": "555-362-8773", "move_in": "June 1st"}
    ]
}

const rentalReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_RENTAL':
            //console.log('created rental', action.rental)
            return state;
        case 'CREATE_RENTAL_ERROR':
            //console.log('error creating rental', action.err)
            return state;
        default:
            return state;
    }
}

export default rentalReducer