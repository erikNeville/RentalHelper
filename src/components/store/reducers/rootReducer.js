import rentalReducer from './rentalReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    rental: rentalReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer