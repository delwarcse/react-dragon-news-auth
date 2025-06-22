import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="hero min-h-screen flex justify-center items-center">
            <div className="hero-content flex-col">
                <div className="card bg-base-100 max-w-lg shrink-0 rounded-none p-12">
                    <h2 className="text-2xl font-semibold text-center">Register Your Account</h2>
                    <form className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" name="Name" className="input input-bordered" placeholder="Name" />
                            <label className="label">Photo URL</label>
                            <input type="text" name="PhotoUrl" className="input input-bordered" placeholder="Photo-URL" />
                            <label className="label">Email</label>
                            <input type="email" name="Email" className="input input-bordered" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name="Password" className="input input-bordered" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn w-full btn-primary rounded-none mt-4">Register</button>
                        </fieldset>
                    </form>
                    <p className="font-semibold text-center">Have An Account...?
                        <Link className="text-green-600 ml-2" to='/auth/login'>Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;