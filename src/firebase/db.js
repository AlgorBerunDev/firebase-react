import { db } from "./firebase";

// User API
export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    email,
    username,
  });

export const onceGetUsers = () => db.ref("users").once("value");
