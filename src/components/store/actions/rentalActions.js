export const createRental = (rental) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // allow for async call to DB
        const firestore = getFirestore();

        // logged in user's information
        const profile = getState().firebase.profile;

        // uid of logged in user
        const authorId = getState().firebase.auth.id;

        firestore.collection('rentals').add({
            ...rental,
            authorFirstName: 'Erik',
            authorLastName: 'Neville',
            authorId: 1234,
            createdAt: new Date()
        }).then(() => {
            dispatch({
                type: 'CREATE_RENTAL',
                rental
            });
        }).catch((err) => {
            dispatch({
                type: 'CREATE_RENTAL_ERROR', err
            });
        })
    }
}