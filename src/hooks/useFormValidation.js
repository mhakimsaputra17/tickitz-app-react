import { useState } from "react";

export const useFormValidation = () => {
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validateEmail = (email) => {
    if (email.trim() === "") {
      setErrors((prev) => ({ ...prev, email: "Email is required" }));
      return false;
    } else if (!email.includes("@")) {
      setErrors((prev) => ({
        ...prev,
        email: "Email is must contain @ symbol",
      }));
      return false;
    } else if (!email.includes(".", email.indexOf("@"))) {
      setErrors((prev) => ({
        ...prev,
        email: "Email is must contain . symbol after @ symbol",
      }));
      return false;
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
      return true;
    }
  };

  const validatePassword = (password) => {
    if (password.trim() === "") {
      setErrors((prev) => ({ ...prev, password: "Password is required" }));
      return false;
    } else if (password.length < 8) {
      setErrors((prev) => ({
        ...prev,
        password: "Password must be at least 8 characters",
      }));
      return false;
    } else {
      setErrors((prev) => ({ ...prev, password: "" }));
      return true;
    }
  };

  const validateForm = (data) => {
    const isEmailValid = validateEmail(data.email);
    const isPasswordValid = validatePassword(data.password);
    return isEmailValid && isPasswordValid;
  };

  return {
    errors,
    validateEmail,
    validatePassword,
    validateForm,
  };
};
