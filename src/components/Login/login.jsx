import React from 'react'
import {Field, reduxForm} from "redux-form";

const LoginForm = () => {
    return (
        <form>
            <div>
                <Field placeholder={"Login"} name={"login"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={"input"}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"}/>Remember me
            </div>
            <div>
                <button>
                    Login
                </button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = () => {
    return <div>
        <h2>Login</h2>
        <LoginReduxForm />
    </div>
}

export default Login

