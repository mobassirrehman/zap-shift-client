import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router";

const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = () => {
    setLoading(true);
    signInWithGoogle()
      .then(() => {
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.error("Google sign in error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <div className="divider">OR</div>
      <div className="px-8 pb-8">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline w-full"
          type="button"
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="loading loading-spinner"></span>
              Signing in...
            </>
          ) : (
            <>
              <FaGoogle className="text-lg" />
              Continue with Google
            </>
          )}
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
