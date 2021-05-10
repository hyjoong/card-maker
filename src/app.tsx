import { useState } from "react";
import Login from "./components/modules/login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Maker from "./components/pages/maker/maker";
import Main from "./components/pages/main/main";
import AuthService from "./service/auth_service";
import InputImage from "./components/modules/imageInput";
import ImageUploader from "./service/imageUploader";
import CardRepository from "./service/cardRepository";

const imageUploader = new ImageUploader();
function App() {
  const FileInput = (props: any) => (
    <InputImage {...props} imageUploader={imageUploader} />
  );
  const authService = new AuthService();
  const cardRepository = new CardRepository();
  const [user, setUser] = useState(null);
  authService.checkLogin((user: any) => {
    if (user) {
      setUser(() => user);
    } else {
      setUser(() => null);
    }
  });
  return (
    <BrowserRouter basename="/friends-store">
      <Switch>
        <Route exact path="/">
          <Main authService={authService} user={user} />
        </Route>
        <Route path="/login">
          <Login authService={authService} user={user} />
        </Route>
        <Route path="/maker">
          <Maker
            authService={authService}
            FileInput={FileInput}
            user={user}
            cardRepository={cardRepository}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
