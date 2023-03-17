// import * as db from "../../fireBase/config";
import {
  createUserWithEmailAndPassword,
  //   signInWithEmailAndPassword,
  //   updateProfile,
  //   onAuthStateChanged,
  //   signOut,
} from "firebase/auth";
import { auth } from "../../fireBase/config";

export const authSignUpUser =
  ({ login, email, password }) =>
  async (dispatch, getState) => {
    const state = getState();
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      //   const user = await db
      //     .auth()
      //     .createUserWithEmailAndPassword(email, password);
      console.log(user);
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  };
export const authSignInUser = () => async (dispatch, getState) => {};
export const authSignOutUser = () => async (dispatch, getState) => {};
