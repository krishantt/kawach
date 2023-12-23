import { useState } from "react";
import '../App.css'
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { Tabs } from 'flowbite-react';
import {HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';

function Forms() {
    return (
        <>
            <Tabs aria-label="Default tabs" style="default">
                <Tabs.Item active title="Login" icon={HiUserCircle}>
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in
                            </h1>
                            <form class="space-y-4 md:space-y-6" action="#">
                                <div>
                                <div class="flex items-center">
                                        <label for="email" class="block mb-2 text-left font-medium text-gray-900 dark:text-white flex items-center">
                                        <FaUserAlt class="mr-2" />
                                        Username
                                        </label>
                                    </div>

                                    <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                                </div>
                                <div>
                                <div class="flex items-center">
                                        <label for="email" class="block mb-2 text-left font-medium text-gray-900 dark:text-white flex items-center">
                                        <FaLock class="mr-2" />
                                        Password
                                        </label>
                                    </div>
                                    <input type="password" name="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-start">
                                        <div class="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                                        </div>
                                        <div class="ml-3 text-sm">
                                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me   <br/></label>
                                        </div>
                                    </div>
                                    <div>
                                    <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-400">Forgot password?</a>
                                    </div>
                                </div>
                                <button type="button" class="text-white w-full bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 focus:outline-none dark:focus:ring-cyan-800">Signin</button>
                                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <a href="#" class="font-medium text-cyan-600 hover:underline dark:text-cyan-500">Sign up</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </Tabs.Item>
                <Tabs.Item title="Signup" icon={MdDashboard}>
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign up
                            </h1>
                            <form class="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <div class="flex items-center">
                                        <label for="email" class="block mb-2 text-left font-medium text-gray-900 dark:text-white flex items-center">
                                        <FaUserAlt class="mr-2" />
                                        Full Name
                                        </label>
                                    </div>

                                    <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                                </div>
                                <div class="mt-4">
                                    <div class="flex items-center">
                                        <label for="dob" class="block mb-2 text-left font-medium text-gray-900 dark:text-white flex items-center">
                                            <FaCalendar class="mr-2" /> 
                                            Date of Birth
                                        </label>
                                    </div>
                                    <input type="date" name="dob" id="dob" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                              </div>

                                <div>
                                    <div class="flex items-center">
                                        <label for="email" class="block mb-2 text-left font-medium text-gray-900 dark:text-white flex items-center">
                                        <FaLock class="mr-2" />
                                        Password
                                        </label>
                                </div>
                                    <input type="password" name="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                                </div>
                                <div class="mt-4">
                                    <div class="flex items-center">
                                        <label for="password_confirmation" class="block mb-2 text-left font-medium text-gray-900 dark:text-white flex items-center">
                                            <FaLock class="mr-2" />
                                            Confirm Password
                                        </label>
                                    </div>
                                    <input type="password" name="password_confirmation" id="password_confirmation" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                                </div>
                                <div class="mt-4 flex items-center">
                                    <input type="checkbox" name="terms_and_conditions" id="terms_and_conditions" class="mr-2" required=""/>
                                    <label for="terms_and_conditions" class="block text-left font-medium text-gray-900 dark:text-white">
                                        I agree with the terms and conditions
                                    </label>
                                </div>

                                <div>
                                    <button type="button" class="text-white w-full bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 focus:outline-none dark:focus:ring-cyan-800">Signup</button>
                                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Already have an account? <a href="#" class="font-medium text-cyan-600 hover:underline dark:text-cyan-500">Signin</a>
                                    </p>
                                </div>

                            </form>
                        </div>
                    </div>
                </Tabs.Item>
                </Tabs>
        </>
    )
}


function Login() {
    const [buttonClicked, setButton] = useState(false);

    function LoginButtons() {
        return (
            <>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={toggleBool}>Login</button>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={toggleBool}>SignUp</button>
            </>
        )
    }
    function toggleBool() {
        setButton(!buttonClicked)
    }


    return (
        buttonClicked ? <Forms></Forms> : <LoginButtons></LoginButtons>
    )

}

export default Login;