import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signInUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (data) => {
    setLoading(true);
    setError("");

    signInUser(data.email, data.password)
      .then(() => {
        navigate(location?.state || "/");
      })
      .catch((error) => {
        const errorMessage = getErrorMessage(error.code);
        setError(errorMessage);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case "auth/invalid-email":
        return "Invalid email address.";
      case "auth/user-disabled":
        return "This account has been disabled.";
      case "auth/user-not-found":
        return "No account found with this email.";
      case "auth/wrong-password":
        return "Incorrect password.";
      case "auth/invalid-credential":
        return "Invalid email or password.";
      case "auth/too-many-requests":
        return "Too many failed attempts. Please try again later.";
      default:
        return "An error occurred. Please try again.";
    }
  };

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="pt-8 px-8">
        <h3 className="text-3xl text-center font-bold">Welcome back</h3>
        <p className="text-center text-base-content/70 mt-2">
          Please login to continue
        </p>
      </div>

      <form className="card-body" onSubmit={handleSubmit(handleLogin)}>
        {error && (
          <div role="alert" className="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{error}</span>
          </div>
        )}

        <div className="form-control">
          <label className="label" htmlFor="email">
            <span className="label-text">Email</span>
          </label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className={`input input-bordered ${
              errors.email ? "input-error" : ""
            }`}
            placeholder="Enter your email"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <label className="label" id="email-error">
              <span className="label-text-alt text-error">
                {errors.email.message}
              </span>
            </label>
          )}
        </div>

        <div className="form-control">
          <label className="label" htmlFor="password">
            <span className="label-text">Password</span>
          </label>
          <input
            id="password"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            className={`input input-bordered ${
              errors.password ? "input-error" : ""
            }`}
            placeholder="Enter your password"
            aria-invalid={errors.password ? "true" : "false"}
            aria-describedby={errors.password ? "password-error" : undefined}
          />
          {errors.password && (
            <label className="label" id="password-error">
              <span className="label-text-alt text-error">
                {errors.password.message}
              </span>
            </label>
          )}
        </div>

        <div className="form-control mt-2">
          <label className="label justify-end p-0">
            <Link to="/forgot-password" className="label-text-alt link link-hover">
              Forgot password?
            </Link>
          </label>
        </div>

        <div className="form-control mt-6">
          <button
            type="submit"
            className="btn btn-neutral"
            disabled={loading}
            aria-busy={loading}
          >
            {loading ? (
              <>
                <span className="loading loading-spinner"></span>
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </button>
        </div>

        <p className="text-center mt-4">
          New to Zap Shift?{" "}
          <Link
            state={location.state}
            className="text-blue-500 font-semibold hover:underline"
            to="/register"
          >
            Register
          </Link>
        </p>
      </form>

      <SocialLogin />
    </div>
  );
};

export default Login;
