import { signInWithGoogle, signOut, signInWithFacebook2, firebaseAuth, signInWithFacebook} from '../../apis/firebase/firebase';
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
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
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