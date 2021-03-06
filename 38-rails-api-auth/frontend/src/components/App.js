import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Profile from "./Profile";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  // autologin
  useEffect(() => {
    // TODO: check if there'a token for the logged in user
    // GET /me
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:3000/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((r) => r.json())
        .then((user) => {
          // set the user in state
          setCurrentUser(user);
        });
    }
  }, []);

  console.log(currentUser);

  return (
    <>
      <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <main>
        <Switch>
          <Route path="/signup">
            <SignUp setCurrentUser={setCurrentUser} />
          </Route>
          <Route path="/login">
            <Login setCurrentUser={setCurrentUser} />
          </Route>
          <Route path="/profile">
            {currentUser ? (
              <Profile
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            ) : (
              <h1>Protected Resource</h1>
            )}
          </Route>
          <Route path="/">
            {currentUser ? (
              <h1>Welcome, {currentUser.username}!</h1>
            ) : (
              <h1>Please Login or Sign Up</h1>
            )}
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
