import firebase from "firebase";
//사용자가 로그인 하거나 로그아웃 하거나 authentication에 관련된 일을 하는 class
class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebase.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;
