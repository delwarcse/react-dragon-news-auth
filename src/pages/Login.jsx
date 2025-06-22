import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="hero min-h-screen flex justify-center items-center">
            <div className="hero-content flex-col">
                <div className="card bg-base-100 max-w-lg shrink-0 rounded-none p-10">
                    <h2 className="text-2xl font-semibold text-center pt-4">Login Your Account</h2>
                    <form className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name="Email" className="input input-bordered" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name="Password" className="input input-bordered" placeholder="Password" />
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