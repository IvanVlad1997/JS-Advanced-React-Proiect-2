import { signInWithGoogle, signOut, signInWithFacebook} from '../../apis/firebase/firebase';
import * as ActionsTypes from './userTypes'

function startLoading() {
    return {
        type: ActionsTypes.START_LOADING
    }
}
function updateUserData(payload) {
    return {
        type: ActionsTypes.UPDATE_USER_DATA,
        payload
    }
}
function updateUserError(payload) {
    return {
        type: ActionsTypes.UPDATE_USER_ERROR,
        payload
    }
}

export function loginUser() {
    return (dispatch) => {
        dispatch(startLoading());

        signInWithGoogle().then(userData => {
            dispatch(updateUserData(userData.user));
        }).catch(error => {
            dispatch(updateUserError(error));
        });
    }
}

export const  loginUserWithFacebook = (facebookProvider) => {
    return (dispatch) => {
        dispatch(startLoading());
        

        signInWithFacebook()
        .then((result) => {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log(token)
            console.log(result)
            console.log(user)
            dispatch(updateUserData(result.user));
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            dispatch(updateUserError(error));
            // ...
          });
        }
}

export function logoutUser() {
    return dispatch => {
        dispatch(startLoading());

        signOut().then(() => {
            dispatch(updateUserData(null));
        }).catch((error) => {
            dispatch(updateUserError(error));
        });
    }
}