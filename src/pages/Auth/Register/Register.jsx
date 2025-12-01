import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { registerUser, updateUserProfile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegistration = (data) => {
    setLoading(true);
    setError("");
    const profileImg = data.photo[0];

    registerUser(data.email, data.password)
      .then(() => {
        // 1. store the image in form data
        const formData = new FormData();
        formData.append("image", profileImg);

        // 2. send the photo to store and get the url
        const image_API_URL = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_image_host_key
        }`;

        axios
          .post(image_API_URL, formData)
          .then((res) => {
            // update user profile to firebase
            updateUserProfile(data.name, res.data.data.url)
              .then(() => {
                navigate(location.state || "/");
              })
              .catch((error) => {
                setError(error.message);
              });
          })
          .catch(() => {
            setError("Failed to upload image. Please try again.");
          });
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
      case "auth/email-already-in-use":
        return "This email is already registered.";
      case "auth/invalid-email":
        return "Invalid email address.";
      case "auth/weak-password":
        return "Password is too weak.";
      default:
        return "Registration failed. Please try again.";
    }
  };

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="pt-8 px-8">
        <h3 className="text-3xl text-center font-bold">Welcome to Zap Shift</h3>
        <p className="text-center text-base-content/70 mt-2">
          Create your account
        </p>
      </div>

      <form className="card-body" onSubmit={handleSubmit(handleRegistration)}>
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
          {/* name field */}
          <label className="label">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="input"
            placeholder="Your Name"
          />
          {errors.name?.type === "required" && (
            <p className="text-red-500">Name is required.</p>
          )}

          {/* photo image field */}
          <label className="label">Photo</label>

          <input
            type="file"
            {...register("photo", { required: true })}
            className="file-input"
            placeholder="Your Photo"
          />

          {errors.photo?.type === "required" && (
            <p className="text-red-500">Photo is required.</p>
          )}

          {/* email field */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is required.</p>
          )}

          {/* password */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
            })}
            className="input"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500">Password is required.</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              Password must be 6 characters or longer
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-500">
              Password must have at least one uppercase, at least one lowercase,
              at least one number, and at least one special characters
            </p>
          )}

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
                  Registering...
                </>
              ) : (
                "Register"
              )}
            </button>
          </div>
        </div>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link
            state={location.state}
            className="text-blue-500 font-semibold hover:underline"
            to="/login"
          >
            Login
          </Link>
        </p>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
