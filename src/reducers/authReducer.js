import { types } from "../types/types";

/*const initializeState = {
    uid: 23456,
    displayName: 'juan',
    dir: {
        b: 12
    }
}*/
export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                uid: action.payload.uid,
                displayName: action.payload.displayName,

            }
        case types.logout:
            return {}
        default:
            return state;
    }
}