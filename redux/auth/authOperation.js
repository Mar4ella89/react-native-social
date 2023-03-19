// import * as db from "../../fireBase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../fireBase/config";
import { authSlice } from "./authReducer";

const { updateUserProfile, authStateChange, authSignOut, updateUserAvatar } =
  authSlice.actions;

export const authSignUpUser = ({ login, email, password }) => {
  return async (dispatch, getState) => {
    const state = getState();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: login,
        photoURL: state.auth.photoURL,
      });
      const { uid, displayName, photoURL } = auth.currentUser;
      dispatch(
        updateUserProfile({
          userId: uid,
          nickname: displayName,
          photoURL: photoURL,
          email,
        })
      );
    } catch (error) {
      console.log(error);
      console.log(error.message);
      dispatch(
        authSlice.actions.showError({
          error: error.message,
        })
      );
    }
  };
};

// export const authSignUpUser = ({ login, email, password }) => {
//   async (dispatch, getState) => {
//     const state = getState();
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       await updateProfile(auth.currentUser, {
//         displayName: login,
//         photoURL: state.auth.photoURL,
//       });
//       const { uid, displayName, photoURL } = auth.currentUser;
//       dispatch(
//         updateUserProfile({
//           userId: uid,
//           nickname: displayName,
//           photoURL: photoURL,
//           email,
//         })
//       );
//     } catch (error) {
//       console.log(error);
//       console.log(error.message);
//       dispatch(
//         authSlice.actions.showError({
//           error: error.message,
//         })
//       );
//     }
//   };
// };
export const authSignInUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("userCredential", userCredential);
      const user = userCredential.user;
      console.log("user", user);
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  };
export const authSignOutUser = () => async (dispatch, getState) => {};

export const authStateChangeUser = () => async (dispatch, getState) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const userUpdateProfile = {
        userId: user.uid,
        nickname: user.displayName,
        photoURL: user.photoURL,
        email: user.email,
      };
      const stateChangePayload = { stateChange: true };
      dispatch(authStateChange(stateChangePayload));
      dispatch(updateUserProfile(userUpdateProfile));
    }
  });
};
