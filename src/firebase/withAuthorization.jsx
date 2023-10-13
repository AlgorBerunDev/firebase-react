import * as React from "react";
import { withRouter } from "react-router-dom";
import * as routes from "../constants/routes";
import { firebase } from "../firebase";
import { AuthUserContext } from "./AuthUserContext";

export const withAuthorization = condition => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        if (!condition(authUser)) {
          this.props.history.push(routes.SIGN_IN);
        }
      });
    }

    render() {
      return <AuthUserContext.Consumer>{authUser => (authUser ? <Component /> : null)}</AuthUserContext.Consumer>;
    }
  }

  return withRouter(WithAuthorization);
};
