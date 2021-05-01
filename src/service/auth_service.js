import firebase from "firebase";
import firebaseApp from "./firebase";

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }
  logout() {
    firebase.auth().signOut();
  }

  onAuthChange(onUserChanged) {
    //사용자가 바뀔 때 마다 함수로 받은 사
    firebase.auth().onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }
}

export default AuthService;
