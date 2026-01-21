// Do not change the line below
import { showMessage } from './app.js';

let incorrectAttempts = 0;

function errorMessage(message) {
  showMessage(message, "error");
}

function successMessage(message) {
  showMessage(message, "success");
}

function onLogin(username, password) {
    if (incorrectAttempts >= 4) {
    errorMessage("Login blocked: Too many incorrect attempts", "error");
    return;
  }

  // 2) check valid credentials
  const isValid =
    (username === "admin" && password === "Hack1234") ||
    (username === "user" && password === "7654321");

  if (isValid) {
    successMessage("Logged in successfully");
  } else {
    incorrectAttempts += 1;

    // after increment, if now blocked -> show blocked (requirement 3+4)
    if (incorrectAttempts >= 4) {
      errorMessage("Login blocked: Too many incorrect attempts", "error");
    } else {
      errorMessage("Incorrect credentials", "error");
    }
  }
}

// Do not change the line below
export { onLogin };
