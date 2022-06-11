import { types } from "../types/types"
import {
    firebase,
    googleAuthProvider
} from '../firebase/firebase-config';


export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(userCard => {
                console.log(userCard);
            })
    }
}
export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})