import { types } from "../types/types";
import {
    firebase,
    googleAuthProvider
} from '../firebase/firebase-config';
import Swal from 'sweetalert2';
import { noteLogout } from './notes';

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(
                    login(user.uid, user.displayName)
                )
            });

    }
}
export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})
export const logout = () => ({
    type: types.logout
})

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async({ user }) => {

                await user.updateProfile({ displayName: name });

                dispatch(
                    login(user.uid, user.displayName)
                );
            })
            .catch(e => {
                console.log(e);
                Swal.fire('Error', e.message, 'error');
            })

    }
}
export const startLogout = () => {
    return async(dispatch) => {
        await firebase.auth().signOut();

        dispatch(logout());
        dispatch(noteLogout());
    }
}