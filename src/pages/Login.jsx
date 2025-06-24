import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
    const { loginUser, setUser } = useContext(AuthContext);
    const [error, setError] = useState({});
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location);
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get("Email")
        const pass = form.get("Password")
        // console.log({ email, pass });

        loginUser(email, pass)
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate(location?.state ? location.state : "/");
            })
            .catch((err) => {
                // const errorCode = err.code;
                // const errorMessage = err.message;
                // alert(errorCode, errorMessage);
                setError({ ...error, login: err.code });
            });
    }

    return (
        <div className="hero min-h-screen flex justify-center items-center">
            <div className="hero-content flex-col">
                <div className="card bg-base-100 max-w-lg shrink-0 rounded-none p-10">
                    <h2 className="text-2xl font-semibold text-center pt-4">Login Your Account</h2>
                    <form onSubmit={handleSubmit} className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name="Email" className="input input-bordered" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name="Password" className="input input-bordered" placeholder="Password" />
                            {
                                error.login && <div><a className="text-sm text-red-600">{error.login}</a></div>
                            }
                            <div><a className="link link-hover">Forgot password?</a></div>
                            
                            <button className="btn w-full btn-primary rounded-none mt-4">Login</button>
                        </fieldset>
                    </form>
                    <p className="font-semibold text-center">Do Not Have An Account...?
                        <Link className="text-green-600 ml-2" to='/auth/register'>Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;