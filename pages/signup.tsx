import Layout from "@/components/Layout";
import MyLink from "@/components/MyLink";
import validateEmail from "@/utilities/validateEmail";
import validatePassword from "@/utilities/validatePassword";
import Loader from "@/components/Loader";
import Snackabr from "../components/Snackbar";
import getErrorMessage from "../utils/firebase/firebaseError";
import React, { useState } from "react";
import { createAccount, signInWithGoogle } from "../utils/firebase/firebaseAuth";
import { ArrowLeftIcon, EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

function Signup() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [inputType, setInputType] = useState({
    isPasswordTypeText: false,
    isConfirmPasswordText: false,
  });
  const [errors, setErrors] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  });
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [submissionError, setSubmissionError] = useState({
    open: false,
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleInputTypeChange = (name: "password" | "confirmPassword") => {
    if (name === "password") {
      setInputType((prev) => ({
        ...prev,
        isPasswordTypeText: !prev.isPasswordTypeText,
      }));
    } else {
      setInputType((prev) => ({
        ...prev,
        isConfirmPasswordText: !prev.isConfirmPasswordText,
      }));
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    if (
      !inputs.email.length ||
      !inputs.password.length ||
      !inputs.confirmPassword.length
    ) {
      setSubmissionError({
        open: true,
        message: "Please fill all fields",
      });
      setLoading(false);
      return;
    } else if (!validateEmail(inputs.email)) {
      setErrors({
        email: true,
        password: false,
        confirmPassword: false,
      });
      setLoading(false);
      return;
    } else if (!validatePassword(inputs.password)) {
      setErrors({
        email: false,
        password: true,
        confirmPassword: false,
      });
      setLoading(false);
      return;
    } else if (inputs.password !== inputs.confirmPassword) {
      setErrors({
        email: false,
        password: false,
        confirmPassword: true,
      });
      setLoading(false);
      return;
    }
    try {
      await createAccount(inputs.email, inputs.password);
      setLoading(false);
      router.replace("/menu");
    } catch (error) {
      const ErrorMessage = getErrorMessage(error);
      setSubmissionError({
        open: true,
        message: ErrorMessage,
      });
      setLoading(false);
    }
  };

  const continueWithGoogle = async () => {
    setLoading(true);
    try {
      await signInWithGoogle();
      setLoading(false);
      router.replace('/menu');
    } catch (error) {
      const message = getErrorMessage(error);
      setSubmissionError({
        open: true,
        message: message
      })
      setLoading(false);
    }
  }

  return (
    <Layout title="Signup">
      {/* navbar */}
      <nav className="flex justify-between items-center mx-4 md:mx-12 py-4">
        <div className="text-center inline-flex justify-center items-center gap-8">
          <button onClick={() => router.back()}>
            <ArrowLeftIcon className="w-6 h-6 text-dim-gray" />
          </button>
          <MyLink href={"/"} className="font-black">
            FOODY
          </MyLink>
        </div>
        <MyLink
          href={"/login"}
          className="px-6 py-2 text-xs bg-white ring-1 ring-gray rounded-[3px] shadow-sm hover:text-white hover:bg-dark-blue hover:ring-8 hover:ring-white"
        >
          Login
        </MyLink>
      </nav>

      {/* main content */}
      <main>
        {/* form container */}
        <div className="mx-4 my-8 grid place-items-center gap-4">
          {/* heading */}
          <h1 className="text-center font-black text-3xl">Signup</h1>
          {/* use google for authentication */}
          <button 
            onClick={continueWithGoogle}
            className="bg-dark-blue px-8 py-2 w-[250px] md:w-[300px] 
            text-center text-xs rounded-[3px] hover:bg-blue text-white shadow-md "
          >
            Continue with google
          </button>

          {/* divider */}
          <p className="text-center text-dim-gray text-xs">
            Or signup with email
          </p>

          {/* email input */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-dim-gray font-semibold text-xs"
            >
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={inputs.email}
              onChange={(e) => handleInputChange(e)}
              className="ring-dark-blue rounded-[3px] outline-dark-blue text-xs px-2 py-2 w-[250px] md:w-[300px]"
              style={{ border: "1px solid #2563eb" }}
              placeholder="example@gmail.com"
            />
            <p
              className={` ${
                !errors.email && "hidden"
              } text-danger text-xs opacity-80`}
            >
              Invalid email
            </p>
          </div>

          {/* password input */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="password"
              className="text-dim-gray font-semibold text-xs"
            >
              Password
            </label>
            <div className="inline-flex justify-center items-center gap-1 w-[250px] md:w-[300px] rounded-[3px] outline outline-1 outline-dark-blue px-2 py-2">
              <input
                type={`${inputType.isPasswordTypeText ? "text" : "password"}`}
                name="password"
                id="password"
                value={inputs.password}
                onChange={(e) => handleInputChange(e)}
                className="text-xs w-full outline-none"
                placeholder="password"
              />
              <button onClick={() => handleInputTypeChange("password")}>
                {inputType.isPasswordTypeText ? (
                  <EyeOffIcon className="w-5 h-5 text-dim-gray" />
                ) : (
                  <EyeIcon className="w-5 h-5 text-dim-gray" />
                )}
              </button>
            </div>
            <ul className={`${!errors.password && "hidden"}`}>
              <li className="text-danger text-xs opacity-80">
                Must have atleast 8 characters
              </li>
              <li className="text-danger text-xs opacity-80">
                Must have a symbol
              </li>
              <li className="text-danger text-xs opacity-80">
                Must have a uppercase and lowercase
              </li>
            </ul>
          </div>

          {/* confirm password input */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="confirm-password"
              className="text-dim-gray font-semibold text-xs"
            >
              Confirm Password
            </label>
            <div className="inline-flex justify-center items-center gap-1 w-[250px] md:w-[300px] rounded-[3px] outline outline-1 outline-dark-blue px-2 py-2">
              <input
                type={`${
                  inputType.isConfirmPasswordText ? "text" : "password"
                }`}
                name="confirmPassword"
                id="confirm-password"
                value={inputs.confirmPassword}
                onChange={(e) => handleInputChange(e)}
                className="text-xs w-full outline-none"
                placeholder="password"
              />
              <button onClick={() => handleInputTypeChange("confirmPassword")}>
                {inputType.isConfirmPasswordText ? (
                  <EyeOffIcon className="w-5 h-5 text-dim-gray" />
                ) : (
                  <EyeIcon className="w-5 h-5 text-dim-gray" />
                )}
              </button>
            </div>
            <p
              className={` ${
                !errors.confirmPassword && "hidden"
              } text-danger text-xs opacity-80`}
            >
              password does not match
            </p>
          </div>

          {/* signup button */}
          <button
            disabled={loading ? true : false}
            className="inline-flex justify-center items-center disabled:bg-green bg-dark-green px-8 py-2 w-[250px] md:w-[300px] text-center text-xs rounded-[3px] hover:bg-green text-white shadow-md mt-2"
            onClick={handleSubmit}
          >
            {loading ? (
              <Loader fill="#ffffff" className="w-5 h-5 animate-spin" />
            ) : (
              "signup"
            )}
          </button>
        </div>
        {submissionError.open && (
          <Snackabr
            variant="Danger"
            title="Alert"
            text={submissionError.message}
            setOpen={setSubmissionError}
          />
        )}
      </main>
    </Layout>
  );
}

export default Signup;
