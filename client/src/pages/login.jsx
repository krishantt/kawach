import { useState } from "react";
import "../App.css";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { Tabs } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import * as React from "react";
import { loadBlockchainData, loadWeb3 } from "../Web3helpers";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const [accounts, setAccounts] = React.useState(null);
  const [auth, setAuth] = React.useState(null);

  const loadAccounts = async () => {
    let { auth, accounts } = await loadBlockchainData();

    setAccounts(accounts);
    setAuth(auth);
  };

  const login = async () => {
    if (!email || !password) {
      alert("please fill all details");

      return;
    }

    try {
      const res = await auth.methods.usersList(email).call();

      if (res.password === password) {
        localStorage.setItem("email", email);
        localStorage.setItem("account", accounts);
        navigate("/Home");
      } else {
        alert("wrong user credintinals or please signup");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  React.useEffect(() => {
    loadWeb3();
  }, []);

  React.useEffect(() => {
    loadAccounts();
  }, []);
  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Sign in
        </h1>
        <form className="space-y-4 md:space-y-6" action="#">
          <div>
            <div className="flex items-center">
              <label
                for="email"
                className="block mb-2 text-left font-medium text-gray-900 dark:text-white flex items-center"
              >
                <FaUserAlt className="mr-2" />
                Username
              </label>
            </div>

            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
          </div>
          <div>
            <div className="flex items-center">
              <label
                for="email"
                className="block mb-2 text-left font-medium text-gray-900 dark:text-white flex items-center"
              >
                <FaLock className="mr-2" />
                Password
              </label>
            </div>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  required=""
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  for="remember"
                  className="text-gray-500 dark:text-gray-300"
                >
                  Remember me <br />
                </label>
              </div>
            </div>
            <div>
              <a
                href="#"
                className="font-medium text-primary-600 hover:underline dark:text-primary-400"
              >
                Forgot password?
              </a>
            </div>
          </div>
          <button
            type="button"
            className="text-white w-full bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 focus:outline-none dark:focus:ring-cyan-800"
            onClick={login}
          >
            Signin
          </button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Don't have an account yet?{" "}
            <a
              href="#"
              className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
            >
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

function SignUpForm() {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();

  const [accounts, setAccounts] = React.useState(null);
  const [auth, setAuth] = React.useState(null);

  const loadAccounts = async () => {
    let { auth, accounts } = await loadBlockchainData();

    setAccounts(accounts);
    setAuth(auth);
  };
  const dummySignup = () => {
    navigate("/dashboard");
  };
  const signUp = async () => {
    if (!username || !email || !password) {
      alert("please fill all details");
      return;
    }
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(mailformat)) {
      alert("please enter valid email address");
      return;
    }
    try {
      await auth.methods
        .createUser(username, email, password)
        .send({ from: accounts });

      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
      navigate("/");
      window.location.reload();
    } catch (e) {
      console.log(e.message);
    }
  };
  React.useEffect(() => {
    loadWeb3();
  }, []);

  React.useEffect(() => {
    loadAccounts();
  }, []);
  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Sign up
        </h1>
        <form className="space-y-4 md:space-y-6" action="#">
          <div>
            <div className="flex items-center">
              <label
                for="email"
                className="block mb-2 text-left font-medium text-gray-900 dark:text-white flex items-center"
              >
                <FaUserAlt className="mr-2" />
                Username
              </label>
            </div>

            <input
              type="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
          </div>
          <div>
            <div className="flex items-center">
              <label
                for="email"
                className="block mb-2 text-left font-medium text-gray-900 dark:text-white flex items-center"
              >
                <FaUserAlt className="mr-2" />
                Email
              </label>
            </div>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
          </div>

          <div>
            <div className="flex items-center">
              <label
                for="email"
                className="block mb-2 text-left font-medium text-gray-900 dark:text-white flex items-center"
              >
                <FaLock className="mr-2" />
                Password
              </label>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
          </div>
          {/* <div className="mt-4">
                                    <div className="flex items-center">
                                        <label for="password_confirmation" className="block mb-2 text-left font-medium text-gray-900 dark:text-white flex items-center">
                                            <FaLock className="mr-2" />
                                            Confirm Password
                                        </label>
                                    </div>
                                    <input type="password" name="password_confirmation" id="password_confirmation" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                                </div> */}
          <div className="mt-4 flex items-center">
            <input
              type="checkbox"
              name="terms_and_conditions"
              id="terms_and_conditions"
              className="mr-2"
              required=""
            />
            <label
              for="terms_and_conditions"
              className="block text-left font-medium text-gray-900 dark:text-white"
            >
              I agree with the terms and conditions
            </label>
          </div>

          <div>
            <button
              type="button"
              className="text-white w-full bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 focus:outline-none dark:focus:ring-cyan-800"
              onClick={() => {
                setTimeout(dummySignup, 2000);
              }}
            >
              Signup
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <a
                href="#"
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Signin
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

function Forms() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Tabs aria-label="Default tabs" style="default">
        <Tabs.Item active title="Login" icon={HiUserCircle}>
          <LoginForm></LoginForm>
        </Tabs.Item>
        <Tabs.Item title="Signup" icon={MdDashboard}>
          <SignUpForm></SignUpForm>
        </Tabs.Item>
      </Tabs>
    </div>
  );
}

function Login() {
  const [buttonClicked, setButton] = useState(false);

  function LoginButtons() {
    return (
      <div className="flex w-full h-screen items-center justify-center">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={toggleBool}
        >
          Login
        </button>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={toggleBool}
        >
          SignUp
        </button>
      </div>
    );
  }
  function toggleBool() {
    setButton(!buttonClicked);
  }

  return buttonClicked ? <Forms></Forms> : <LoginButtons></LoginButtons>;
}

export default Login;
