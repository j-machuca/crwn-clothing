import { useState, FormEvent, ChangeEvent } from "react";

import { useDispatch } from "react-redux";

// Components

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

// Styles

import "./sign-in-form.styles.tsx";

// Actions

import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";

// Variables

const defaultFormFields = {
  email: "",
  password: "",
};

// Component

const SignInForm = () => {
  const dispatch = useDispatch();
  // State
  const [formFields, setFormFields] = useState(defaultFormFields);

  // Context

  // Destructuring State
  const { email, password } = formFields;

  // Handlers

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = formFields;

    try {
      dispatch(emailSignInStart(email, password));

      resetFormFields();
    } catch (error) {
      if (error && error) {
        console.log(error);
      }
    }
  };

  // Utils
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
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
          minLength={8}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
