import { firebaseAuth, githubProvider, googleProvider } from "./firebase";

class AuthService {
  login(providerName: any) {
    const authProvider = this.getProvider(providerName);
    return firebaseAuth.signInWithPopup(authProvider);
  }
  logout() {
    firebaseAuth.signOut();
  }

  onAuthChange(onUserChanged: any) {
    firebaseAuth.onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }
  checkLogin(callback: any) {
    firebaseAuth.onAuthStateChanged(callback);
  }

  getProvider(providerName: any) {
    switch (providerName) {
      case "Google":
        return googleProvider;
      case "Github":
        return githubProvider;
      default:
        throw new Error(`not supported provider : ${providerName}`);
    }
  }
}

export default AuthService;
