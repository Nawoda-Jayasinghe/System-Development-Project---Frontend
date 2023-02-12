import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../../app/authSlice";
import ErrorModal from "../Modals/ErrorModal";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorText,setErrorText] = useState(null)
  const [formInfo, setFormInfo] = useState({
    username: "",
    password: "",
  });
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  const handleChange = (event) => {
    setFormInfo({ ...formInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3500/auth", formInfo).then((res) => {
      if (res.data.result) {
        dispatch(authActions.login(res.data));
        navigate("/dashboard");
      }else{
        setIsErrorModalOpen(true);
        setErrorText(res.data.message)
      }
    });
  };

  return (
    <div className="mt-[73px] bg-[#F3F4FF] w-full h-[90vh] flex justify-center items-center">
      <div className="container flex justify-center">
        <div className="w-full flex overflow-hidden rounded-xl xl:w-9/12 h-[70vh] shadow-2xl">
          <div className="w-5/12 h-full sign-in-bg flex flex-col justify-center items-center">
            <p className="text-white text-center font-bold text-4xl leading-[60px]">
              WELCOME
            </p>
            <p className="w-10/12 font-normal text-center text-white text-xl leading-8">
              Lets log in to the system to continue work. Enter your registered
              email address and the password to continue
            </p>
          </div>
          <div className="w-7/12 h-full flex justify-center items-center bg-white">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center items-center w-full"
            >
              <h1 className="text-login-color font-bold text-4xl leading-[60px]">
                Login
              </h1>
              <div class="relative w-3/4 mt-16">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    ></path>
                  </svg>
                </div>
                <input
                  onChange={handleChange}
                  name="username"
                  type="text"
                  id="email-address-icon"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="username"
                  required
                />
              </div>
              <div class="relative w-3/4 mt-3">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    ></path>
                  </svg>
                </div>
                <input
                  onChange={handleChange}
                  name="password"
                  type="password"
                  id="email-address-icon"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="password"
                  required
                />
              </div>
              <a
                href="#"
                className="mt-9 text-xs leading-5 font-normal text-login-color underline underline-offset-2"
              >
                Forgot Password
              </a>
              <button
                type="submit"
                className="mt-10 text-white leading-6 font-semibold text-base bg-login-color rounded-3xl px-20 py-3"
              >
                LOG IN
              </button>
              <p className="mt-10 text-login-color font-normal text-base leading-8">
                Do not have an account?{" "}
                <a href="#" className="underline underline-offset-2">
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
      <ErrorModal
        isErrorModalOpen={isErrorModalOpen}
        onClose={() => {
          setIsErrorModalOpen(false);
          setErrorText(null);
        }}
        errorText={errorText}
      />
    </div>
  );
};

export default Login;
