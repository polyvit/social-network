import React from 'react'

const LoginForm = () => {
    return (
        <form>
            <div>
                <input placeholder={"Login"}/>
            </div>
            <div>
                <input placeholder={"Password"}/>
            </div>
            <div>
                <input type={"checkbox"}/>Remember me
            </div>
            <div>
                <button>
                    Login
                </button>
            </div>
        </form>
    )
}

const Login = () => {
    return <div>
        <h2>Login</h2>
        <LoginForm />
    </div>
}

export default Login

