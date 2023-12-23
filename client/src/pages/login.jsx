import { useState } from "react";
import '../App.css'


function Forms() {
    return (
        <>
            <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                <li class="me-2">
                    <a href="#" aria-current="page" class="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500">Login</a>
                </li>
                <li class="me-2">
                    <a href="#" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Signup</a>
                </li>
            </ul>
        </>
    )
}


function Login() {
    const [buttonClicked, setButton] = useState(false);

    function LoginButtons() {
        return (
            <>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={toggleBool}>Login</button>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={toggleBool}>SignUp</button>
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