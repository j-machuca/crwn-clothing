import { useState } from "react";

// Components

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

// Context

// Styles

import "./sign-in-form.styles.scss";

// Utils
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

// Variables

const defaultFormFields = {
  email: "",
  password: "",
};

// Component

const SignInForm = () => {
  // State
  const [formFields, setFormFields] = useState(defaultFormFields);

  // Context

  // Destructuring State
  const { email, password } = formFields;

  // Handlers

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = formFields;

    try {
      await signInAuthUserWithEmailAndPassword(email, password);

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Wrong Credentials");
          break;
        case "auth/user-not-found":
          alert("No user with this email");
          break;
        default:
          console.log(error);
      }
    }
  };
  // Utils
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  // Return Component

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
          minLength="8"
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
