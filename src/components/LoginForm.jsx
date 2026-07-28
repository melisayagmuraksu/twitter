import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onChange",
  });

  const { logIn } = useContext(AuthContext);

  function submitHandler(data) {
    logIn(data);
    reset();
  }

  return (
    <div className="w-1/4 m-auto pt-6 flex gap-4 flex-col">
      <i className="fa-brands fa-twitter text-blue-400 text-4xl"></i>
      <h1 className="text-2xl">Log in to Twitter</h1>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(submitHandler)}
      >
        <input
          className="p-3 border border-gray-600 rounded-md"
          placeholder="Phone number, email address"
          data-testid="usernameInput"
          {...register("username", {
            minLength: {
              value: 5,
              message: "En az 5 karakter olmalı",
            },
          })}
        />
        {errors.username && (
          <p className="text-red-400">{errors.username.message}</p>
        )}
        <input
          className="p-3 border border-gray-600 rounded-md"
          placeholder="Password"
          data-testid="passwordInput"
          type="password"
          {...register("password", {
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message: "Güçlü bir password yazınız",
            },
          })}
        />
        {errors.password && (
          <p className="text-red-400">{errors.password.message}</p>
        )}
        <button
          disabled={!isValid}
          className="bg-blue-400 rounded-full py-3 cursor-pointer hover:bg-blue-500 disabled:bg-gray-500 disabled: cursor-default"
        >
          Log In
        </button>
      </form>
      <div className="flex justify-between text-blue-400">
        <Link to="/password-reset">Forgot Password?</Link>
        <Link to="/sign-up">Sign up to Twitter</Link>
      </div>
    </div>
  );
}

export default LoginForm;
